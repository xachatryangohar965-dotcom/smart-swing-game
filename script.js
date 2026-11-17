
let leftWeight = 40;
let rightWeight = 55;
let score = 0;

function updateSwing() {
    const swing = document.getElementById("swing");

    let difference = leftWeight - rightWeight;

    let angle = difference * 0.15;

    angle = Math.max(-15, Math.min(15, angle));

    swing.style.transform = `rotate(${angle}deg)`;
}

function addWeight(side) {
    if (side === "left") {
        leftWeight += 5;
    } else {
        rightWeight += 5;
    }

    checkBalance();
    updateSwing();
}

function checkBalance() {
    const message = document.getElementById("message");

    if (leftWeight === rightWeight) {
        message.textContent = "🎉 Հրաշալի է։ Ճոճանակը հավասարակշռված է։";
        message.style.color = "#24966c";

        score += 10;
        document.getElementById("score").textContent = score;
    } else if (leftWeight > rightWeight) {
        message.textContent = "Ձախ կողմն ավելի ծանր է։ Փորձիր կրկին։";
        message.style.color = "#e07869";
    } else {
        message.textContent = "Աջ կողմն ավելի ծանր է։ Փորձիր կրկին։";
        message.style.color = "#e07869";
    }
}

function resetGame() {
    leftWeight = 40;
    rightWeight = 55;

    document.getElementById("message").textContent =
        "Փորձիր հավասարակշռել ճոճանակը։";

    updateSwing();
}

updateSwing();
