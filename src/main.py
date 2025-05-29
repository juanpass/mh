from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para cualquier origen

@app.route("/api/user/signin", methods=["POST"])
def signin():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # Aquí iría tu lógica real de validación
    if email == "test@example.com" and password == "1234":
        return jsonify({"message": "Login exitoso", "token": "fake-jwt-token"}), 200
    else:
        return jsonify({"error": "Credenciales inválidas"}), 401

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
