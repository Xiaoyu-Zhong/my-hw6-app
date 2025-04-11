import os
from flask import Flask, request, jsonify

app = Flask(__name__, static_folder="./frontend/build", static_url_path="/")

# 1) checkIn_hardware(projectId, qty)
@app.route('/checkin/<int:projectId>/<int:qty>', methods=['GET'])
def checkIn_hardware(projectId, qty):
    response_msg = f"{qty} hardware checked in to project {projectId}"
    return jsonify({"message": response_msg})

# 2) checkOut_hardware(projectId, qty)
@app.route('/checkout/<int:projectId>/<int:qty>', methods=['GET'])
def checkOut_hardware(projectId, qty):
    response_msg = f"{qty} hardware checked out from project {projectId}"
    return jsonify({"message": response_msg})

# 3) joinProject(projectId)
@app.route('/join/<int:projectId>', methods=['GET'])
def joinProject(projectId):
    response_msg = f"Joined project {projectId}"
    return jsonify({"message": response_msg})

# 4) leaveProject(projectId)
@app.route('/leave/<int:projectId>', methods=['GET'])
def leaveProject(projectId):
    response_msg = f"Left project {projectId}"
    return jsonify({"message": response_msg})

# Serve the React build files if they exist
@app.route('/')
def index():
    return app.send_static_file('index.html')

# If a route is not found, default to serving index.html (for React Router)
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == "__main__":
    # Run on the port specified by Heroku (or default to 5000 locally)
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 5000))