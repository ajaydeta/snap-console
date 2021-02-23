function modalTriger(id) {
    var modal = document.getElementById(id);
    var overlay = document.getElementById('overlay');
    modal.style.visibility = 'visible';
    overlay.style.display = 'block';
}

function modalClose(id) {
    var modal = document.getElementById(id);
    var overlay = document.getElementById('overlay');
    modal.style.visibility = '';
    overlay.style.display = 'none';
}