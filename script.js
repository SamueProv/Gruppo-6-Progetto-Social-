document.addEventListener("DOMContentLoaded", function() {
    console.log("YouTube Clone Caricato!");

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Questa è una demo, nessun contenuto reale!");
        });
    });
});
