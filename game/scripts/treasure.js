const takeAxeLink = document.getElementById('take-axe');
if (takeAxeLink) {
    takeAxeLink.addEventListener('click', function () {
        try { localStorage.setItem('hasAxe', 'true'); } catch (e) {}
    });
}


