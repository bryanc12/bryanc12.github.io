function menuClick() {
    height = document.getElementById("btnBar").style.height; 
    sheight = parseInt(height);
    if(sheight < 1 || isNaN(sheight)) {
        document.getElementById("btnBar").style.height = "450px";     
    } else {
        document.getElementById("btnBar").style.height = "0px";
    }  
}
