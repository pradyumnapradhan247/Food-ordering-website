document.querySelectorAll('.menu-item').forEach(function(div) {
    div.addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    });
});