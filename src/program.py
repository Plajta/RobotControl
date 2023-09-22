from render import app
from robot_control import Robot
import socketserver
import asyncio

import cv2

def main():
    robot = Robot()
    sock_server = socketserver.server(9090)
    robot.camera_init()
    asyncio.run(sock_server.loop())
    while True:
        img = robot.get_frame()
        cv2.imshow("frame", img)
        if ord("q") == cv2.waitKey(1):
            robot.camera_stop()
            robot.disconnect_robot()


if __name__ == "__main__":
    main()