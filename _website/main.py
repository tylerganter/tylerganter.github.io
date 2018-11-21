"""
main point of website design
"""
from flask import Flask, render_template
from flask_frozen import Freezer

__all__ = ['app', 'freezer']

app = Flask(__name__)
app.config.from_pyfile('settings.py')
freezer = Freezer(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/projects/')
def projects():
    return render_template('projects.html')
