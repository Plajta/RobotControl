from robomaster import robot, camera
from ledik import *
import cv2

import socket
import sys
import time
import asyncio

# In direct connection mode, the default IP address of the robot is 192.168.2.1 and the control command port is port 40923.
host = "192.168.2.1"
port = 40923
commands = []

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
        Setledus(self.ep_led,led, "W")
        self.ep_camera = None
        self.battery_level = 0.0

        self.get_battery_start()

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
        self.get_battery_stop()
        self.ep_robot.close()
        exit(0)

    def forward(self, dist, speed):
        self.ep_chassis.move(x=dist, y=0, z=0, xy_speed=speed).wait_for_completed()
    
    def forward2(self):
        self.ep_chassis.drive_wheels(100,100,100,100,1)

    def strafe_right(self,period=2):
        self.ep_chassis.drive_wheels(100,100,-100,-100,period)
        time.sleep(2)

    def strafe_left(self,period=2):
        self.ep_chassis.drive_wheels(-100,-100,100,100,period)
        time.sleep(2)

    def turn_right(self,period=2):
        self.ep_chassis.drive_wheels(100,-100,-100,100,period)
        time.sleep(period)

    def turn_left(self,period=2):
        self.ep_chassis.drive_wheels(-100,100,100,-100,period)
        time.sleep(period)

    def backward():
        pass #TODO

    def __battery_updater(self, bat_level): #another callback function
        self.battery_level = bat_level

    def get_battery_start(self):
        self.ep_robot.battery.sub_battery_info(freq=5, callback=self.__battery_updater)

    def get_battery_stop(self):
        self.ep_robot.battery.unsub_battery_info()

    def process_callback(self,data):
        print(data)
        e = (data[0]-self.distance)
        e = 0 if e > 600 else e
        P = e * 0.5
        self.koeficient = P

    def process_callback_PD(self,data):
        e = (data[0]-self.distance)
        if e > 300 and self.last_e != 0 and not self.lock:
            self.dverecounter+=1
            print(self.dverecounter)
            if self.dverecounter >= self.desired_doors:
                self.lock = True
        e = 0 if e > 600 else e
        P = e * 0.2
        dedt = (e-self.last_e)/0.2
        D = 0.1 * dedt
        self.koeficient = P + D
        self.last_e = e

    async def follow_wall(self,distance=1000,desired_doors=1,speed=100):
        self.distance = distance
        self.desired_doors = desired_doors
        self.dverecounter = 0
        self.koeficient = 0
        self.last_e = 0
        self.lock = False
        self.ep_robot.sensor.sub_distance(freq=5, callback=self.process_callback_PD)
        while True:
            # print(self.koeficient)
            if not self.lock:
                self.ep_chassis.drive_wheels(speed,speed,speed-self.koeficient,speed-self.koeficient,0)
                commands.append([speed,speed,speed-self.koeficient,speed-self.koeficient])
            else:
                time.sleep(0.5)
                robot.strafe_right(4)
                print("zajel")
                self.ep_robot.sensor.unsub_distance()
                coolDoneLoop(self.ep_led,led)
                Setledus(self.ep_led,led, "W")
                break

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
    #asyncio.run(robot.follow_wall(800,1,100)) # Vpravo
    asyncio.run(robot.follow_wall(600,1,-100)) # Vlevo
    # while True:
    #     img = robot.get_frame()
    #     cv2.imshow("frame", img)
    #     if ord("q") == cv2.waitKey(1):
    #         robot.camera_stop()
    #         robot.disconnect_robot()