import jwt
import datetime

# Define your secret key
secret_key = "my_secret_key"

# Define your payload with an expiration time
payload = {
    "user_id": 12345,
    "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)  # token expires in 1 hour
}

# Encode the token
token = jwt.encode(payload, secret_key, algorithm="HS256")
print("Encoded JWT:", token)
