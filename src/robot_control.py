from robomaster import robot

import socket
import sys
import time

# In direct connection mode, the default IP address of the robot is 192.168.2.1 and the control command port is port 40923.
host = "192.168.2.1"
port = 40923

def robot_init():
    ep_robot = robot.Robot()
    ep_robot.initialize(conn_type="ap")

    ep_version = ep_robot.get_version()
    print("Robot Version: {0}".format(ep_version))

    time.sleep(5)
    ep_robot.close()
    exit(0)

def connect():
    address = (host, int(port))

    # Establish a TCP connection with the control command port of the robot.
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    print("Connecting...")

    s.connect(address)

    print("Connected!")

    return s

def send_cmd(s, cmd):

    # When the user enters Q or q, exit the current program.
    if msg.upper() == 'Q':
            disconnect(s)

    # Add the ending character.
    msg += ';'
    
    # Send control commands to the robot.
    s.send(msg.encode('utf-8'))

    try:
            # Wait for the robot to return the execution result.
            buf = s.recv(1024)
            print(buf.decode('utf-8'))
    except socket.error as e:
            print("Error receiving :", e)
            sys.exit(1)
    if not len(buf):
            disconnect(s)

def disconnect(s):
    # Disconnect the port connection.
    s.shutdown(socket.SHUT_WR)
    s.close()

if __name__ == "__main__":
    print("testing")
    robot_init()