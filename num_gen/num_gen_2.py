import os
import random
from flask import Flask
app = Flask(__name__)

@app.route('/num_gen')
def eight_digit():
    rumber = random.randint(10000000, 99999999)
    return str(rumber)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8086)
