function showPage(pageNumber, event) {
    if (event) {
        event.preventDefault();
    }

    
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("page-3").style.display = "none";
    document.getElementById("page-" + pageNumber).style.display = "flex";

    
}
function showOutdoorPage(pageNumber, event) {
    if (event) {
        event.preventDefault();
    }

    
    document.getElementById("outdoor-page-1").style.display = "none";
    document.getElementById("outdoor-page-2").style.display = "none";
    document.getElementById("outdoor-page-3").style.display = "none";

    document.getElementById("outdoor-page-" + pageNumber).style.display = "flex";

}

