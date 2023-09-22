from robomaster import robot

def callback(data):
    print("tyea")
    print(data)

ep_robot = robot.Robot()
ep_robot.initialize(conn_type="ap")
ep_robot.sensor.sub_distance(freq=5, callback=callback)
ep_robot.close()

