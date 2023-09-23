from robomaster import robot, camera
import cv2

import socket
import sys
import time
import asyncio

# In direct connection mode, the default IP address of the robot is 192.168.2.1 and the control command port is port 40923.
host = "192.168.2.1"
port = 40923

class Robot:
    def __init__(self):
        ep_robot = robot.Robot()
        ep_robot.initialize(conn_type="ap")

        ep_version = ep_robot.get_version()
        print("Robot Version: {0}".format(ep_version))

        self.clientSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.clientSocket.connect((host, port))

        self.ep_robot = ep_robot
        self.ep_chassis = self.ep_robot.chassis
        self.ep_led = self.ep_robot.led
        self.ep_camera = None

    async def send_cmd(self,cmd):
        self.clientSocket.send(cmd.encode('utf-8'))
        try:
            buf = self.clientSocket.recv(1024)
            return buf.decode('utf-8')
        except socket.error as e:
            print("Error receiving: ", e)
            sys.exit(1)
    
    #robot methods
    def disconnect_robot(self):
        self.clientSocket.shutdown(socket.SHUT_WR)
        self.clientSocket.close()
        self.ep_robot.close()
        exit(0)

    def forward(self, dist, speed):
        self.ep_chassis.move(x=dist, y=0, z=0, xy_speed=speed).wait_for_completed()
    
    def forward2(self):
        self.ep_chassis.drive_wheels(100,100,100,100,1)

    def strafe_right(self):
        self.ep_chassis.drive_wheels(100,100,-100,-100,2)
        time.sleep(2)
    def strafe_left(self):
        self.ep_chassis.drive_wheels(-100,-100,100,100,2)
        time.sleep(2)

    def turn_right(self):
        self.ep_chassis.drive_wheels(100,-100,-100,100,2)
        time.sleep(2)
    def turn_left(self):
        self.ep_chassis.drive_wheels(-100,100,100,-100,2)
        time.sleep(2)

    def backward():
        pass

    def get_battery(self):
        return self.ep_robot.battery.get_battery_percentage()

    def process_callback(self,data):
        print(data)
        self.koeficient = ((data[0]-self.distance)//20)*10

    def follow_wall(self,distance=1000):
        self.distance = distance
        self.koeficient = 0
        self.ep_robot.sensor.sub_distance(freq=5, callback=self.process_callback)
        while True:
            print(self.koeficient)
            self.ep_chassis.drive_wheels(100,100,100-self.koeficient,100-self.koeficient,0)

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
    
    #sensors
    def get_sensor(self):
        infrared_data = self.ep_robot.gyro.read()
        return infrared_data

if __name__ == "__main__":
    
    print("testing")
    robot = Robot()
    robot.camera_init()
    robot.follow_wall()
    # robot.forward2()
    # robot.turn_left()
    # robot.turn_right()
    while True:
        img = robot.get_frame()
        cv2.imshow("frame", img)
        if ord("q") == cv2.waitKey(1):
            robot.camera_stop()
            robot.disconnect_robot()