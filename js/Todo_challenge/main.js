let closeList = document.getElementsByTagName("LI");
let i;
for (i=0; i < closeList.length; i++){
    let span = document.createElement("SPAN");
    let x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    closeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let a;
for (a = 0; a < close.length; a++){
    close[a].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let itemList = document.querySelector('ul');
itemList.addEventListener('click', function(item){
    if (item.target.tagName === 'LI') {
        item.target.classList.toggle('checked');
    }
}, false);

function newItem() {
    let li = document.createElement("li");
    let task = document.getElementById("taskInput").value;
    let txt = document.createTextNode(task);
    li.appendChild(txt);
    if (task === ''){
        alert("Please enter a task to do");
    } else {
        document.getElementById("myToDoList").appendChild(li);
    }
    document.getElementById("taskInput").value="";

    let span = document.createElement("SPAN");
    let x = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(x);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
    }
}

