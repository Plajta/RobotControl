from flask import Flask, render_template

# Initializing flask app
app = Flask(__name__, static_folder="../web/out/_next", template_folder="../web/out")

# Route for seeing a data
@app.route('/')
def hello_world():
    return render_template("index.html")

app.debug=True
app.run(host='0.0.0.0', port=6969)