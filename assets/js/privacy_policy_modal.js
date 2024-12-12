/**
 * Privacy policy modal listener
 */
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("privacy-policy-modal");
    const modalLink = document.getElementById("privacy-policy-link");
    const modalClose = document.getElementById("modal-close");

    modalLink.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    modalClose.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
