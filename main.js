let days = document.querySelectorAll(".chart > div");
let amount = document.querySelectorAll(".popup");
let col = document.querySelectorAll(".column");
let arr = [];

let myreq = new XMLHttpRequest();
myreq.open("GET", "./data.json");
myreq.send();
myreq.onreadystatechange = function () {
  if (myreq.status === 200 && myreq.readyState === 4) {
    let jsData = JSON.parse(myreq.responseText);
    for (let i = 0; i < jsData.length; i++) {
      if (jsData[i]['day'] === days[i].className) {
        amount[i].append(jsData[i]['amount']);
        col[i].style.cssText = `height:${jsData[i]['amount'] * 2}px`;
      }
      arr.push(jsData[i]['amount']);
    }
    let max = Math.max(...arr);
    for (let i = 0; i < jsData.length; i++) {
      if (jsData[i]['amount'] === max) {
        col[i].style.cssText = `height:${jsData[i]['amount'] * 2}px; background-color: var(--cyan)`;
      }

    }
  }
};


