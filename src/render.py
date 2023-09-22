import cv2
from flask import Flask, Response, render_template
from robot_control import Robot

app = Flask(__name__, static_folder="../web/out/_next", template_folder="../web/out")


def gen_frames():
    robot = Robot()
    robot.camera_init()

    while True:
        success, frame = robot.get_frame()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/video")
def video():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


app.debug = True
app.run(host="0.0.0.0", port=6969)
