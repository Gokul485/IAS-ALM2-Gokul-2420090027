async function runTLS() {
    const response = await fetch("http://127.0.0.1:8000/tls/handshake", {
        method: "POST"
    });

    const data = await response.json();

    showResult(data);
}


async function runSSH() {
    const response = await fetch("http://127.0.0.1:8000/ssh/handshake", {
        method: "POST"
    });

    const data = await response.json();

    showResult(data);
}


function showResult(data) {
    let steps = "";

    for (let i = 0; i < data.steps.length; i++) {
        steps += "<p>✓ " + data.steps[i] + "</p>";
    }

    document.getElementById("result").innerHTML =
        "<h2>" + data.protocol + "</h2>" +
        "<p>" + data.status + "</p>" +
        steps;
}