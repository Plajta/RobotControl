from robot_control import Robot
from vision import aruco_init, detect

#import socketserver
#import asyncio

import cv2

def main():
    print("testing")
    robot = Robot()
    #sock_server = socketserver.server(9090)
    robot.camera_init()
    detector = aruco_init()

    #asyncio.run(sock_server.loop())
    while True:
        img = robot.get_frame()
        corners, ids, img_detect = detect(img, detector)

        #cv2.imshow("frame", img_detect)

        ret, buffer = cv2.imencode('.jpg', img_detect)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

        if ord("q") == cv2.waitKey(1):
            robot.camera_stop()
            robot.disconnect_robot()


if __name__ == "__main__":
    main()