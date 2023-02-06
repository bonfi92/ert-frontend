import './lib/particles'

const SPACE_ID = 'sheep-game-space'
const PARTICLES_CONFIG_PATH = 'assets/particles.json'

let space = document.querySelector(`#${SPACE_ID}`)
let canvas
let pJS
let intervalId
const endEvent = new Event('sheepGameFinished')
const startEvent = new Event('sheepGameStarted')

const end = () => {
    console.log('end')
    document.body.classList.remove('sheep-game')
    clearInterval(intervalId)
    pJS.fn.vendors.destroypJS()
    window.pJSDom = []
}

const drawSheep = () => {
    console.log('drawSheep', pJS.particles.array.length)
    pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value))
}

const listenUpdates = () => {
    const update = () => {
        if (!pJS?.particles?.array.length) {
            end()
            document.dispatchEvent(endEvent)
            return
        }
        requestAnimationFrame(update)
    }
    return requestAnimationFrame(update)
}

export const gameHasStarted = () => !!window.pJSDom.length

export const start = () => {
    document.dispatchEvent(startEvent)
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

