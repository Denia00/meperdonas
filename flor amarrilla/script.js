const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const modal = document.getElementById('modal');
const response = document.getElementById('response');

// Mover el botón "No" cuando se acerque el mouse
noButton.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

// Mostrar mensaje en grande al hacer clic en "Sí"
yesButton.addEventListener('click', function() {
    response.innerHTML = 'Lo sabía, elegirías la correcta. Así que prometo cambiar por ti 💞<br><br>Posdata: aunque dije que uno no debe cambiar por nadie, yo sí quiero cambiar, solo esta vez.';
    modal.classList.remove('hidden'); // Mostrar el cuadro grande
});



