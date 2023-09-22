from robot_control import Robot
from vision import aruco_init, detect

import socket_server
import asyncio

import cv2

#variables
n_objects_glob = 0

def main():
    print("testing")
    robot = Robot()
    sock_server = socket_server.Server(9090)
    robot.camera_init()
    detector = aruco_init()

    asyncio.run(sock_server.loop()) #run socket server asynfhafasly
    while True:
        img = robot.get_frame()
        n_objects, ids, img_detect = detect(img, detector)
        
        if n_objects == n_objects_glob:
            print("redbull gambit!")
            sock_server.set_data("object_lost")
        else:
            sock_server.set_data(str(n_objects))

        n_objects_glob = n_objects

        ret, buffer = cv2.imencode('.jpg', img_detect)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

        if ord("q") == cv2.waitKey(1):
            robot.camera_stop()
            robot.disconnect_robot()


if __name__ == "__main__":
    main()