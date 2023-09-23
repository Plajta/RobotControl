import cv2
import numpy as np

class RobotMap:
    def __init__(self):
        self.map = np.full((640, 480), 255, dtype=np.uint8)
        self.instruction_data = []

    def draw_interest_point(self, X, Y):
        cv2.circle(self.map, (X, Y), radius=0, color=(0, 0, 255), thickness=-3)

    def draw_point(self, X, Y):
        cv2.circle(self.map, (X, Y), radius=0, color=(255, 0, 0), thickness=-2)

    def draw_trajectory(self, X, Y):
        cv2.circle(self.map, (X, Y), radius=0, color=(0, 255, 0), thickness=-5)

    def get_map(self):
        return self.map

    def upload_commands(self, commands):
        #print(commands)
        self.draw_trajectory(320, 240)
        pass
