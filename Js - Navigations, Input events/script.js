
const child = document.getElementById("item");
console.log(child.parentNode);


const list = document.getElementById("menu");
console.log(list.children); 


const box = document.querySelector(".container");
console.log(box.firstElementChild);
console.log(box.lastElementChild);


const el = document.querySelector(".active");
console.log(el.nextElementSibling);
console.log(el.previousElementSibling);


const inp = document.getElementById("name");
inp.addEventListener("input", () => {
    console.log("Yazılır:", inp.value);
});


const age = document.getElementById("age");
age.addEventListener("change", () => {
    console.log("Dəyişdi:", age.value);
});


inp.addEventListener("focus", () => {
    console.log("Input aktiv oldu");
});


inp.addEventListener("blur", () => {
    console.log("Inputdan çıxıldı");
});


document.addEventListener("keydown", (e) => {
    console.log("Açar basıldı:", e.key);
});
