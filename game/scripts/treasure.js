const takeAxeLink = document.getElementById('take-axe');
if (takeAxeLink) {
    takeAxeLink.addEventListener('click', function () {
        try { localStorage.setItem('hasAxe', 'true'); } catch (e) {}
    });
}


(() => {
  const queryString = new URLSearchParams(window.location.search);
  const axe = Boolean(queryString.get('axe')) || false;
  if (axe) {
    // change image
    document.querySelector("img").src="../assets/skeletons.png"
    // change text
    document.querySelector("#desc").innerHTML = "You find nothing of interest"
    document.querySelector("#action").innerHTML = "Return to the Tomb"
  }
})()