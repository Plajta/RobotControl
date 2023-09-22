from flask import Flask

# Initializing flask app
app = Flask(__name__)

# Route for seeing a data
@app.route('/')
def hello_world():
   return "Hello World"