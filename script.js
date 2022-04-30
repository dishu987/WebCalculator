"use strict";
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function clearScreen() {
    document.getElementById("data").value = "";
}

function display(value) {
    document.getElementById("data").value += value;
}

function calculate() {
    var p = document.getElementById("data").value;
    try {
        document.getElementById("data").value = eval(p);
    } catch {
        clearScreen();
        alert("Syntax Error!");
    }

}

function backSpace() {
    var x = document.getElementById("data").value;
    document.getElementById("data").value = x.substr(0, x.length - 1);
}

function power() {
    calculate();
    var x = document.getElementById("data").value;
    var y = Math.pow(x, 2);
    document.getElementById("data").value = y;
}