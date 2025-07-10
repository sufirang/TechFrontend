const boxes = document.querySelectorAll('.box');
const radios = document.querySelectorAll('input[type="radio"]');
const total = document.getElementById('total');

function selectBox(box) {
boxes.forEach(b => {
    b.classList.remove('selected');
    b.querySelector('input').checked = false;
    const detail = b.querySelector('.details');
    if (detail) detail.classList.remove('show');
});
box.classList.add('selected');
box.querySelector('input').checked = true;
const newPrice = box.getAttribute('data-price');
total.textContent = parseFloat(newPrice).toFixed(2);
const details = box.querySelector('.details');
if (details) details.classList.add('show');
}
