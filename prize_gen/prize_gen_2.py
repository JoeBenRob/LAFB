import os
import random
from flask import Flask
app = Flask(__name__)

@app.route('/prize_gen')
def high_prize():
    prize_roll = random.randint(1, 100)
    if (prize_roll >= 75):
        return str(500)
    else: 
        return str(0)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8087)
