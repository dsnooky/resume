// Future interactive features
// Example: Smooth scroll for anchor links or popups
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth'});
    });
});
