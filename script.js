const divList = [];
const mainDivs = document.querySelectorAll('.main_div');
for (const div of mainDivs) {
    divList.push(div.id);
}

const aList = [];
const aElements = document.querySelectorAll('a[href]');
for (const a of aElements) {
    aList.push(a.id);
}
console.log(aList);
console.log(aList.length);

let current = 0;
addStyleText(document.getElementById(aList[current]));

function addStyleText(element) {
    element.style.fontWeight = "bold";
    element.style.color = "orange";
}

function clearStyleText(element) {
    element.style.fontWeight = "normal";
    element.style.color = "white";
}

document.addEventListener('keydown', e => {
    if (e.key == 'ArrowDown') {
        if (current < divList.length-1) {
            current += 1;
            clearStyleText(document.getElementById(aList[current-1]));
            addStyleText(document.getElementById(aList[current]));
            document.getElementById(divList[current]).scrollIntoView();
        }
    } else if (e.key == 'ArrowUp') {
        if (current > 0) {
            current -= 1;
            clearStyleText(document.getElementById(aList[current+1]));            
            addStyleText(document.getElementById(aList[current]));
            document.getElementById(divList[current]).scrollIntoView();
        }
    }})