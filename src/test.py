from vision import aruco_init, detect

import cv2

from robomaster import robot, camera
import cv2

# In direct connection mode, the default IP address of the robot is 192.168.2.1 and the control command port is port 40923.
host = "192.168.2.1"
port = 40923

class Robot:
    def __init__(self):
        ep_robot = robot.Robot()
        ep_robot.initialize(conn_type="ap")

        ep_version = ep_robot.get_version()
        print("Robot Version: {0}".format(ep_version))

        self.ep_robot = ep_robot
        self.ep_camera = None

    #robot methods
    def disconnect_robot(self):
        self.ep_robot.close()
        exit(0)

    #camera methods
    def camera_init(self):
        self.ep_camera = self.ep_robot.camera
        self.ep_camera.start_video_stream(display=False)

    def camera_stop(self):
        cv2.destroyAllWindows()
        self.ep_camera.stop_video_stream()

    def get_frame(self):
        frame = self.ep_camera.read_cv2_image()
        return frame

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