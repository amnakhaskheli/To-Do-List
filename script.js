function addTask() 
{
    var input = document.querySelector("input");
    var task = input.value;

    if (task == "") 
        {
            alert("Enter a task!");
        } 

    else 
        {
            var li = document.createElement("div");
            li.className = "task";
            li.innerHTML = task +' <button onclick="this.parentElement.remove()">❌</button>';
            document.getElementById("tasks").appendChild(li);

            input.value = "";
        }
}


document.querySelector(".add-btn").onclick = addTask;


function clearAll() 
{
    document.getElementById("tasks").innerHTML = "";
}