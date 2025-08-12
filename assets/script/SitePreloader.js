document.addEventListener('DOMContentLoaded', () => {
    // здесь ваш код
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementById('closeModal');

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});