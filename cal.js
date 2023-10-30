let d3 = document.getElementById('date');
let m3 = document.getElementById('month');
let y3 = document.getElementById('year');


let dateErrMsgEl = document.getElementById("dateErrMsg");
let monthErrMsgEl = document.getElementById("monthErrMsg");
let yearErrMsgEl = document.getElementById("yearErrMsg");
let textErrMsgEl = document.getElementById("textErrMsg");

function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    if (d3.value === "" || m3.value === "" || y3.value === "") {
        textErrMsgEl.textContent = "Fill all the details";
    } else {
        document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
        textErrMsgEl.textContent = "";
    }


}



d3.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        dateErrMsgEl.textContent = "Required*";
    } else {
        dateErrMsgEl.textContent = "";
    }
});

m3.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        monthErrMsgEl.textContent = "Required*";

    } else {
        monthErrMsgEl.textContent = "";
    }
});

y3.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        yearErrMsgEl.textContent = "Required*";
    } else {
        yearErrMsgEl.textContent = "";
    }
});