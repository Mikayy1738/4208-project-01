(function () {
    let hasAxe = false;
    try { hasAxe = localStorage.getItem('hasAxe') === 'true'; } catch (e) { hasAxe = false; }

    const container = document.getElementById('choices');
    if (!container) return;

    const makeLink = (href, text) => {
        const a = document.createElement('a');
        a.href = href;
        a.textContent = text;
        return a;
    };

    if (hasAxe) {
        container.appendChild(makeLink('bridge.html', 'Fight through with the axe'));
    } else {
        container.appendChild(makeLink('death.html', 'Face them without a weapon'));
        container.appendChild(makeLink('moria.html', 'Retreat to the fork'));
    }
})();


