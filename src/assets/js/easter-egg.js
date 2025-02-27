export const initEasterEgg = (targetString, callback) => {
    let buffer = ''

    document.addEventListener('keydown', (event) => {
        buffer += event.key;

        if (buffer.length > targetString.length) {
            buffer = buffer.slice(-targetString.length);
        }

        if (buffer === targetString) {
            callback()
            buffer = '';
        }
    });
}

