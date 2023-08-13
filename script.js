let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let number = document.querySelector(".number")

btn.onclick = () => {
    let value = input.value;
    if(value.trim() != "") {
        let num = number.value++;
        list.innerHTML += `<li class="li"><div class = "div_left"><span class = "num">${num}</span><span>${value}</span></div>
    <div>
    <button class="complete"><i class="uil uil-check"></i></button>
    <div class="delete" id = "delete">
    <svg class = "closed" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M22.1312 9.63125L20.3687 7.86875L15 13.2375L9.63124 7.86875L7.86874 9.63125L13.2375 15L7.86874 20.3688L9.63124 22.1313L15 16.7625L20.3687 22.1313L22.1312 20.3688L16.7625 15L22.1312 9.63125Z" fill="#FFD700"/>
    </svg></div>
    </div>
    </li>`
         
        input.value = "";
    } else {
        alert("Заполните поле")
    }
setClick();
}

function setClick() {
    let complete = document.querySelectorAll(".complete");
    let deletes = document.querySelectorAll(".delete");
    complete.forEach((elem) => {
        elem.onclick = (event) => {
            let li = event.target.closest(".li");
            li.classList.toggle("active")
        }
    })
    deletes.forEach((elem) => {
        elem.onclick = (event) => {
            let li = event.target.closest(".li");
            console.log(li)
            console.log(event.target)
            if(confirm("вы уверены?")) {
                li.remove();
            }
        }
    })
}