const formElement = document.querySelector(".form");


const inputElement = document.querySelector(".input");

const ulElement = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}


formElement.addEventListener('submit', (event)=>{
    event.preventDefault();
    toDoList();

});

function toDoList(task){
    let newTask = inputElement.value;
    if (task) {
    newTask = task.name;
  }
    const liElement = document.createElement('li');
    if (task && task.checked) {
    liElement.classList.add("checked");
  }
    liElement.innerText = newTask;
    ulElement.appendChild(liElement)
    inputElement.value =""
    const checkButton = document.createElement('div')
    checkButton.innerHTML = `<i class="fa-regular fa-circle-check">`
    liElement.appendChild(checkButton);
    const cancelButton = document.createElement('div')
    cancelButton.innerHTML = `<i class="fa-regular fa-circle-xmark">`
    liElement.appendChild(cancelButton)

    checkButton.addEventListener('click',()=>{
        liElement.classList.toggle('checked')
        updateLocalStorage()
    })
    cancelButton.addEventListener('click', ()=>{
        liElement.remove()
        updateLocalStorage()
    })
    updateLocalStorage()
}


function updateLocalStorage() {
    const liEls =document.querySelectorAll('li')
    list = [];
    liEls.forEach((liEl) =>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains('checked'),
        });
    });
    localStorage.setItem('list', JSON.stringify(list))
}