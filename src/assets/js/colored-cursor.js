export const createColoredCursor = ({
    imgSrc
})=> {
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

    const cursor = document.getElementById('custom-cursor');

    // Don't initialize custom cursor on mobile devices
    if (isMobile) {
        if (cursor) {
            cursor.style.display = 'none';
        }
        return;
    }
    const cursorPath = document.getElementById('cursor-path');
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // Set canvas size to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load the image
    img.crossOrigin = 'anonymous';
    img.src = imgSrc;

    img.onload = function() {
        // Draw image to canvas to sample colors
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        // Move cursor
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Get pixel color at cursor position
        try {
            const pixel = ctx.getImageData(e.clientX, e.clientY, 1, 1).data;
            const r = pixel[0];
            const g = pixel[1];
            const b = pixel[2];

            // Apply color to cursor arrow and line
            const color = `rgb(${r}, ${g}, ${b})`;
            cursorPath.setAttribute('fill', color);
        } catch (e) {
            // Fallback if image isn't loaded yet
            cursorPath.setAttribute('fill', 'rgba(255, 255, 255, 0.8)');
        }
    });

    // Hide cursor when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Show cursor when mouse enters the window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (img.complete) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    });
}
