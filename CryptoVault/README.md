# CryptoVault

## Project Overview

CryptoVault is a web-based cryptography toolkit that demonstrates public-key cryptography and digital signatures using RSA.

## Features

* RSA key pair generation
* RSA encryption
* RSA decryption
* RSA digital signature
* RSA signature verification
* Interactive API testing using Swagger UI

## Technologies Used

* Python
* FastAPI
* Cryptography library
* HTML
* CSS
* JavaScript

## Backend

The backend is developed using FastAPI.

Main API endpoints:

* `POST /rsa/generate-keys`
* `POST /rsa/encrypt`
* `POST /rsa/decrypt`
* `POST /rsa/sign`
* `POST /rsa/verify`

## How to Run

Activate the virtual environment:

```text
.\backend\venv\Scripts\Activate.ps1
```

Go to the backend folder:

```text
cd backend
```

Start the FastAPI server:

```text
uvicorn main:app --reload
```

Open Swagger UI:

```text
http://127.0.0.1:8000/docs
```

## RSA Workflow

1. Generate an RSA public/private key pair.
2. Use the public key to encrypt a message.
3. Use the private key to decrypt the ciphertext.
4. Use the private key to create a digital signature.5. Use the public key to verify the signature.

## Project Status

The RSA encryption, decryption, signing, and signature verification APIs have been implemented and tested successfully using Swagger UI.
