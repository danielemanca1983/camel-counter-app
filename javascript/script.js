let count = 0;
let countEl = document.getElementById('count-el');
let incrementBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn');
let saveEl = document.getElementById('save-el');

function increment() {
    count += 1;
    countEl.textContent = count;
}

incrementBtn.addEventListener('click', increment);

function save() {
    let countStr = `${count} - `;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

saveBtn.addEventListener('click', save);
