showResult();
function showResult() {
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
e.preventDefault(); // Prevent HTML refresh
const formData = new FormData(form); // Converts to array of arrays
const obj = Object.fromEntries(formData); // Array of arrays to object
console.log(obj);
});
}