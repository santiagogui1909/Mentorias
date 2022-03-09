const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const list = document.querySelector(".taskList");

let task = new String("");
let array = [];

function getTask(e){ task = e.target.value };


const showTask = (e) => {
    let htmlTask = "";

    e.preventDefault();
    array.push(task);
    inputTask.value = "";
    console.log(array);
    array.forEach((value , index) => {
        htmlTask += `<section key=${index}>
                        <li>${value}</li>
                    </section>`;
    })
    list.innerHTML = htmlTask;
}

inputTask.addEventListener("keyup", getTask);
btnAdd.addEventListener("click", showTask);


