import cv2
from flask import Flask, Response, render_template
from flask_socketio import SocketIO

from program import main
from time import sleep

app = Flask(__name__, static_folder="../web/webBuild/_next", template_folder="../web/webBuild")
socketio = SocketIO(app, cors_allowed_origins='*')

@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/video")
def video():
    return Response(main(), mimetype='multipart/x-mixed-replace; boundary=frame')

def ping_in_intervals():
    while True:
        sleep(1)
        socketio.emit("data", "request?")
        print("sent request")

if __name__ == "__main__":
    socketio.start_background_task(ping_in_intervals)
    socketio.run(app, host='0.0.0.0', port=6969, debug = True)
