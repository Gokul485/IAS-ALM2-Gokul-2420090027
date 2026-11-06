const API = "http://127.0.0.1:8000";

async function generateKeys() {
    const response = await fetch(`${API}/rsa/generate-keys`, {
        method: "POST"
    });

    const data = await response.json();

    document.getElementById("publicKey").value = data.public_key;
    document.getElementById("privateKey").value = data.private_key;
}

async function encryptMessage() {

    const message = document.getElementById("message").value;
    const publicKey = document.getElementById("publicKey").value;

    const response = await fetch(`${API}/rsa/encrypt`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message,
            public_key: publicKey
        })
    });

    const data = await response.json();

    document.getElementById("ciphertext").value = data.ciphertext;
}

async function decryptMessage() {

    const ciphertext = document.getElementById("ciphertext").value;
    const privateKey = document.getElementById("privateKey").value;

    const response = await fetch(`${API}/rsa/decrypt`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ciphertext: ciphertext,
            private_key: privateKey
        })
    });

    const data = await response.json();

    document.getElementById("decrypted").value = data.plaintext;
}

async function signMessage() {

    const message = document.getElementById("message").value;
    const privateKey = document.getElementById("privateKey").value;

    const response = await fetch(`${API}/rsa/sign`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message,
            private_key: privateKey
        })
    });

    const data = await response.json();

    document.getElementById("signature").value = data.signature;
}

async function verifySignature() {

    const message = document.getElementById("message").value;
    const signature = document.getElementById("signature").value;
    const publicKey = document.getElementById("publicKey").value;

    const response = await fetch(`${API}/rsa/verify`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message,
            signature: signature,
            public_key: publicKey
        })
    });

    const data = await response.json();

    document.getElementById("notification").value=
        data.valid ? "  Signature is VALID" : "‏ Signature is INVALID";
}