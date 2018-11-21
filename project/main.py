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
    landing = """
    something a little different
    About Me

website source code

projects
    pokemon

linkedIn
gitHub
google scholar
kaggle

travel blog
    """
    return landing
