from robot_control import Robot, commands
from robot_map import RobotMap
from vision import aruco_init, detect
from ledik import *
from comm import data_comm

import cv2
import time
import asyncio

class main_program:
    def __init__(self):
        self.run = False

    def main(self, sock_instance):
        #variables
        n_objects_glob = 0
        start_objects_glob = 0
        start_time = int(time.time())
        buf = []
        i = 0

        print("testing")
        robot = Robot()
        ep_led = robot.led
        robot.camera_init()
        robot.wall_init(1,600)
        detector = aruco_init()

        while True:
            img = robot.get_frame()
            self.n_objects, ids, img_detect = detect(img, detector)

            if i == 0: #run only once
                start_objects_glob = self.n_objects
                i += 1

            # if n_objects:
            #     print("sus")
            #     print(asyncio.run(robot.send_cmd("led control comp all r 255 g 0 b 0 effect blink")))
            if self.n_objects != n_objects_glob:
                async def test(n_objects, rozdil):
                    await asyncio.sleep(1)
                    if self.n_objects == n_objects:
                        if rozdil<0:
                            print("redbull gambit!")
                            sock_instance.emit("message", "Ztratil se 1 Redbull, lokace byla zaznamenána na mapě")
                        elif rozdil>0:
                            print("někdo přidal redbulla?")
                            sock_instance.emit("message", "Někdo k vaší objednávce přidal 1 redbulla zadarmo :)")
                asyncio.run(test(self.n_objects,self.n_objects-n_objects_glob))

                #validate buffer
            #     buf.append(-1)
            #     #sock_server.set_data("object_lost")

            # if 1 in buf and -1 not in buf:
            #     print("někdo přidal redbulla?")
            #     sock_instance.emit("message", "Někdo k vaší objednávce přidal 1 redbulla zadarmo :)")
            #     buf.pop(buf.index(1))
            #     #buf = []

            # if -1 in buf and 1 not in buf:    
            #     print("redbull gambit!")
            #     sock_instance.emit("message", "Ztratil se 1 Redbull, lokace byla zaznamenána na mapě")
            #     buf.pop(buf.index(-1))
            #     #buf = []

            n_objects_glob = self.n_objects
            battery_status = robot.battery_level

            #put data into queue
            data_comm.put_data(self.n_objects, start_time, start_objects_glob, battery_status)
            if self.run:
                robot.follow_wall(-100) #wall following
                #transform commands into map
                

            ret, buffer = cv2.imencode('.jpg', img_detect)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    def main_map(self):
        robotmap = RobotMap()
        while True:
            robotmap.draw_interest_point(320, 320)
            robotmap.upload_commands(commands)
            frame = robotmap.get_map()
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


#if __name__ == "__main__":
#    main()