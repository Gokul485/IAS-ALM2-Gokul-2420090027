from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SecureTunnel")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "SecureTunnel Backend is running"
    }


@app.get("/health")
def health():
    return {
        "status": "OK"
    }


@app.post("/tls/handshake")
def tls_handshake():
    return {
        "protocol": "TLS 1.3",
        "status": "Handshake simulated successfully",
        "steps": [
            "Client Hello",
            "Server Hello",
            "Certificate",
            "Key Exchange",
            "Finished"
        ]
    }


@app.post("/ssh/handshake")
def ssh_handshake():
    return {
        "protocol": "SSH",
        "status": "Handshake simulated successfully",
        "steps": [
            "TCP Connection",
            "Version Exchange",
            "Key Exchange",
            "User Authentication",
            "Secure Channel"
        ]
    }