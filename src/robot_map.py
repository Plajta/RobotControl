import cv2
import numpy as np

class RobotMap:
    def __init__(self):
        self.map = np.zeros((640, 480, 3))
        self.instruction_data = []

    def draw_interest_point(self, X, Y):
        cv2.circle(self.map, (X, Y), radius=0, color=(0, 0, 255), thickness=-3)

    def draw_point(self, X, Y):
        cv2.circle(self.map, (X, Y), radius=0, color=(255, 0, 0), thickness=-1)
