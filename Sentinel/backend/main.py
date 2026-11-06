from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Sentinel")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TrafficRequest(BaseModel):
    source_ip: str
    destination_ip: str
    port: int
    protocol: str


@app.get("/")
def home():
    return {
        "message": "Sentinel Backend is running"
    }


@app.get("/health")
def health():
    return {
        "status": "OK"
    }


@app.post("/firewall/check")
def firewall_check(request: TrafficRequest):

    blocked_ports = [21, 23, 25, 445]

    if request.port in blocked_ports:
        return {
            "status": "BLOCKED",
            "reason": "Port is blocked by firewall rules",
            "source_ip": request.source_ip,
            "destination_ip": request.destination_ip,
            "port": request.port
        }

    return {
        "status": "ALLOWED",
        "reason": "Traffic passed firewall rules",
        "source_ip": request.source_ip,
        "destination_ip": request.destination_ip,
        "port": request.port
    }


@app.post("/ids/detect")
def ids_detect(request: TrafficRequest):

    suspicious_ports = [21, 23, 445]

    if request.port in suspicious_ports:
        return {
            "threat_detected": True,
            "alert": "Suspicious network activity detected",
            "source_ip": request.source_ip,
            "port": request.port
        }

    return {
        "threat_detected": False,
        "alert": "No suspicious activity detected",
        "source_ip": request.source_ip,
        "port": request.port
    }