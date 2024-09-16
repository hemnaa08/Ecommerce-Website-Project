function showPage(pageNumber) {
    // Hide all pages
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("page-3").style.display = "none";

    // Show the selected page
    document.getElementById("page-" + pageNumber).style.display = "flex";
}

