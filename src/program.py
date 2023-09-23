from robot_control import Robot
from vision import aruco_init, detect

import socket_server
import asyncio

from comm import data_comm

import cv2
import time

def main():
    #variables
    n_objects_glob = 0
    start_objects_glob = 0
    start_time = int(time.time())
    buf = []
    i = 0

    print("testing")
    robot = Robot()
    sock_server = socket_server.Server(9090)
    robot.camera_init()
    detector = aruco_init()

    #asyncio.run(sock_server.loop()) #run socket server asynfhafasly
    while True:
        img = robot.get_frame()
        n_objects, ids, img_detect = detect(img, detector)

        if i == 0: #run only once
            start_objects_glob = n_objects

        # if n_objects:
        #     print("sus")
        #     print(asyncio.run(robot.send_cmd("led control comp all r 255 g 0 b 0 effect blink")))

        if n_objects < n_objects_glob:
            #validate buffer
            if -1 in buf and 1 not in buf:    
                print("redbull gambit!")
                #buf = []
            
            buf.append(-1)
            #sock_server.set_data("object_lost")
        elif n_objects > n_objects_glob:
            #validate buffer

            buf.append(1)
        else:
            #sock_server.set_data(str(n_objects))
            if len(buf) >= 10:
                buf = []
            buf.append(0)

        if 1 in buf and -1 not in buf:
            print("někdo přidal redbulla?")
            buf.pop(buf.index(1))
            #buf = []

        if -1 in buf and 1 not in buf:    

            print("redbull gambit!")
            buf.pop(buf.index(-1))
            #buf = []

        n_objects_glob = n_objects
        battery_status = robot.get_battery()

        #put data into queue
        data_comm.put_data(n_objects, start_time, start_objects_glob, battery_status)

        ret, buffer = cv2.imencode('.jpg', img_detect)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

        if ord("q") == cv2.waitKey(1):
            robot.camera_stop()
            robot.disconnect_robot()

if __name__ == "__main__":
    main()