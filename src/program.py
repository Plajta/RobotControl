from render import app
from robot_control import Robot
from vision import aruco_init, detect

import cv2

def main():
    print("testing")
    robot = Robot()
    robot.camera_init()
    detector = aruco_init()

    while True:
        img = robot.get_frame()
        corners, ids, img_detect = detect(img, detector)

        cv2.imshow("frame", img_detect)
        if ord("q") == cv2.waitKey(1):
            robot.camera_stop()
            robot.disconnect_robot()


if __name__ == "__main__":
    main()