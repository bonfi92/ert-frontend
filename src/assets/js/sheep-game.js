import 'particles.js'

const SPACE_ID = 'sheep-game-space'
const PARTICLES_CONFIG_PATH = 'assets/particles.json'

let space = document.querySelector(`#${SPACE_ID}`)
let canvas
let pJS
let intervalId

const end = () => {
    console.log('end')
    console.log(pJS.particles.array.length)
    document.body.classList.remove('sheep-game')
    clearInterval(intervalId)
    pJS.fn.vendors.destroypJS()
    // pJS.fn.particlesRefresh()
    // pJS.fn.canvasClear()
    // pJS.fn.particlesRefresh()
    // cancelAnimationFrame(pJS.fn.drawAnimFrame)
    // canvas.remove()
    window.pJSDom = []
}

const drawSheep = () => {
    console.log('drawSheep', pJS.particles.array.length)
    pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value))
}

const isCanvasBlank = canvas => {
    const context = canvas.getContext('2d', {willReadFrequently: true})

    const pixelBuffer = new Uint32Array(
        context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
    )

    return !pixelBuffer.some(color => color !== 0)
}

const listenUpdates = () => {
    const update = () => {
        if (pJS?.particles?.array && isCanvasBlank(canvas)) {
            end()
            return
        }
        requestAnimationFrame(update)
    }
    return requestAnimationFrame(update)
}

export const gameHasStarted = () => !!window.pJSDom.length

export const start = () => {
    console.log('start')
    window.particlesJS.load(SPACE_ID, PARTICLES_CONFIG_PATH, () => {
        console.log('ready')
        pJS = window.pJSDom[0].pJS
        // pJS.tmp.count_svg = 0
        canvas = space.querySelector('canvas')
        listenUpdates()
        intervalId = setInterval(drawSheep, 2000)
        document.body.classList.add('sheep-game')
    })
}

