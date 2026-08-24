function nextPage(pageNumber) {
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
    });

    document
        .getElementById(`screen${pageNumber}`)
        .classList.add("active");
}