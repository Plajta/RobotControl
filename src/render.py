import cv2
from flask import Flask, Response, render_template
from flask_socketio import SocketIO
from comm import data_comm

from program import main, main_map, run
from time import sleep

app = Flask(__name__, static_folder="../web/webBuild/_next", template_folder="../web/webBuild")
socketio = SocketIO(app, cors_allowed_origins='*')

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/video")
def video():
    return Response(main(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route("/map")
def video_map():
    return Response(main_map(), mimetype='multipart/x-mixed-replace; boundary=frame')

def send_data():
    while run:
        data = data_comm.get_data()
        sleep(1)
        socketio.emit("data", data)

#event handlers
@socketio.on("start")
def start():
    run = True

@socketio.on("stop")
def stop():
    run = False

if __name__ == "__main__":
    socketio.start_background_task(send_data)
    socketio.run(app, host='0.0.0.0', port=6969, debug = True)