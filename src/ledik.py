from robomaster import robot, led
from time import sleep
def Setledus(ep_led,led, color="R",r=0,g=0,b=0):
        if color == "R":
            ep_led.set_led(comp=led.COMP_ALL, r=255, g=0, b=0, effect=led.EFFECT_ON)
        elif color == "G":
            ep_led.set_led(comp=led.COMP_ALL, r=0, g=255, b=0, effect=led.EFFECT_ON)
        elif color == "B":
            ep_led.set_led(comp=led.COMP_ALL, r=0, g=0, b=255, effect=led.EFFECT_ON)
        elif color == "W":
            ep_led.set_led(comp=led.COMP_ALL, r=255, g=255, b=255, effect=led.EFFECT_ON)
        else:
            ep_led.set_led(comp=led.COMP_ALL, r=r, g=g, b=b, effect=led.EFFECT_ON)

def coolDoneLoop(ep_led,led):
    for e in range(4):
        for i in range(0, 127, 2):
            ep_led.set_led(comp=led.COMP_ALL, r=0, g=i, b=0, effect=led.EFFECT_ON)
            sleep(0.001)
        sleep(1)
        for i in range(127, 0, -2):
            ep_led.set_led(comp=led.COMP_ALL, r=0, g=i, b=0, effect=led.EFFECT_ON)
            sleep(0.001)
        sleep(1)
    
if __name__ == "__main__":
    ep_robot = robot.Robot()
    ep_robot.initialize(conn_type="ap")
    ep_led = ep_robot.led
    Setledus(ep_led,led, "R")
    sleep(1)
    coolDoneLoop(ep_led,led)
    Setledus(ep_led,led, "B")
    sleep(5)
    Setledus(ep_led,led, "W")
