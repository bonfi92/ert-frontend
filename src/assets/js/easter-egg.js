export const initEasterEgg = (targetString, callback) => {
    let buffer = ''

    document.addEventListener('keydown', (event) => {
        buffer += event.key

        if (buffer.length > targetString.length) {
            buffer = buffer.slice(-targetString.length)
        }

        if (buffer === targetString) {
            callback()
            buffer = ''
        }
    })
}

export const showToast = (message, callback) => {
    const toast = document.createElement('div')

    toast.innerText = message
    toast.style.position = 'fixed'
    toast.style.bottom = '20px'
    toast.style.left = '50%'
    toast.style.transform = 'translateX(-50%)'
    toast.style.backgroundColor = 'black'
    toast.style.color = 'white'
    toast.style.padding = '10px 20px'
    toast.style.borderRadius = '8px'
    toast.style.zIndex = '1000'
    toast.style.fontSize = '14px'
    toast.style.opacity = '0'
    toast.style.transition = 'opacity 0.5s'

    document.body.appendChild(toast)

    setTimeout(() => {
        toast.style.opacity = '1'
    }, 100)

    setTimeout(() => {
        toast.style.opacity = '0'
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast)
                callback()
            }
        }, 500)
    }, 3000)
}

