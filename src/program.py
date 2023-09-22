from render import app
from robot_control import Robot

import cv2

def main():
    robot = Robot()
    robot.camera_init()
    while True:
        img = robot.get_frame()
        cv2.imshow("frame", img)
        if ord("q") == cv2.waitKey(1):
            robot.camera_stop()
            robot.disconnect_robot()


if __name__ == "__main__":
    main()