//used by autoupdate feature 
function refresh(){
    interval = setInterval(function(){
        checkTasks();
    }, delay);  
}
