async function getData() {
    return {
        source_ip: document.getElementById("source").value,
        destination_ip: document.getElementById("destination").value,
        port: parseInt(document.getElementById("port").value),
        protocol: document.getElementById("protocol").value
    };
}


async function checkFirewall() {
    const data = await getData();

    const response = await fetch(
        "http://127.0.0.1:8000/firewall/check",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    const result = await response.json();

    showResult(result);
}


async function detectThreat() {
    const data = await getData();

    const response = await fetch(
        "http://127.0.0.1:8000/ids/detect",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    const result = await response.json();

    showResult(result);
}


function showResult(data) {
    let output = "";

    for (let key in data) {
        output += "<p><b>" + key + ":</b> " + data[key] + "</p>";
    }

    document.getElementById("result").innerHTML = output;
}