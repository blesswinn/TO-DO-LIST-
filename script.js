document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){   //if input not entered
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `  
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;  //if input entered

        var current_tasks = document.querySelectorAll(".delete");   //task removal code
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");   //task completion code
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}