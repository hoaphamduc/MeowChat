function toggleSetting() {
    var setting = document.getElementById("setting");
    if (setting.classList.contains("setting-showed")) {
        setting.style.height = "0";
        setting.addEventListener('transitionend', function() {
            setting.classList.remove("setting-showed");
            setting.style.display = "none";
        }, { once: true });
    } else {
        setting.style.display = "block";
        setTimeout(function() {
            setting.classList.add("setting-showed");
            setting.style.height = "305px";
        }, 10);
    }
}
