import os
import random
import string
from flask import Flask
app = Flask(__name__)

@app.route('/num_gen')
def three_char():
    text = "".join(random.sample(string.ascii_lowercase, 3))
    return text

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8085)
