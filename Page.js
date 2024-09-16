function showPage(pageNumber, event) {
    // Prevent the default behavior of the anchor tag (scrolling to the top)
    if (event) {
        event.preventDefault();
    }

    // Hide all pages
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("page-3").style.display = "none";

    // Show the selected page
    document.getElementById("page-" + pageNumber).style.display = "flex";

    // Scroll back to the "Indoor" section smoothly
    document.getElementById("indoor").scrollIntoView({ behavior: "smooth" });
}

