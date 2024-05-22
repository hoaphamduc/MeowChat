function limitInputLength(element) {
    if (element.value.length > 6) {
        element.value = element.value.slice(0, 6);
    }
}

function openVerifyEmail() {
    var verifybox = document.getElementById("confirm-email");
    var wrapper = document.getElementById("wrapper");
    var canvas = document.getElementById("sakura");

    verifybox.style.display = "block";
    wrapper.classList.add("darken");
    canvas.classList.add("darken");

    document.addEventListener('click', handleClickOutside, true);
}

function closeVerifyEmail() {
    var verifybox = document.getElementById("confirm-email");
    var wrapper = document.getElementById("wrapper");
    var canvas = document.getElementById("sakura");

    verifybox.style.display = "none";
    wrapper.classList.remove("darken");
    canvas.classList.remove("darken");

    document.removeEventListener('click', handleClickOutside, true);
}

function handleClickOutside(event) {
    var verifybox = document.getElementById("confirm-email");
    if (!verifybox.contains(event.target)) {
        closeVerifyEmail();
    }
}