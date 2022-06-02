document.getElementById("value").addEventListener("keyup", filterSearch);
function filterSearch(){
    var value,nom,circuitshover,i;
    value = document.getElementById('value').value.toUpperCase();
    circuitshover = document.getElementsByClassName('circuits-hover');
    for(i=0;circuitshover.length;i++){
        nom = circuitshover[i].getElementsByClassName('nom');
        if(nom[0].innerHTML.toUpperCase().indexOf(value) > -1){
            circuitshover[i].style.display ="flex";
        } else{
        circuitshover[i].style.display = "none";
        }
    }  
}