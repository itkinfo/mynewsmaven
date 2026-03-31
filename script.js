document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.content');

    // Subtle parallax effect on mouse move
    hero.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        // Move background slightly in opposite direction
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;

        hero.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
        
        // Move content slightly in same direction
        const contentMoveX = (mouseX - 0.5) * 10;
        const contentMoveY = (mouseY - 0.5) * 10;
        content.style.transform = `translate(${contentMoveX}px, ${contentMoveY}px)`;
    });
});
