document.getElementById('exploreButton').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'flex';
});
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};