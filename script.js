
function openPopup(event) {
    event.preventDefault(); // リンクのデフォルト動作を無効化
    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

