from flask import Flask, jsonify, request
import tensorflow as tf
from flask_cors import CORS
import math

app = Flask(__name__)

CORS(app)

model = tf.keras.models.load_model("my_model.h5")

@app.route('/predict', methods = ["POST"])
def predict():
    data = request.json
    
    print(data)
    
    input_data = data["input_data"]

    input_array = tf.convert_to_tensor(input_data)
    
    predictions = model.predict(input_array)
    
    predictions = math.ceil(predictions * 10) * 1000
    
    return jsonify({"predictions": predictions})

if __name__ == "__main__":
    app.run(debug = True)