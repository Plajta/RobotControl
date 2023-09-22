import cv2
from flask import Flask, Response, render_template

from program import main

app = Flask(__name__, static_folder="../web/webBuild/_next", template_folder="../webBuild/out")


@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/video")
def video():
    return Response(main(), mimetype='multipart/x-mixed-replace; boundary=frame')


app.debug = True
app.run(host="0.0.0.0", port=6969)
