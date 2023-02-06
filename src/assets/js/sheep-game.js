import './lib/particles'

const SPACE_ID = 'sheep-game-space'
const PARTICLES_CONFIG_PATH = '/assets/particles.json'

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
}

const drawSheep = () => {
    pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value))
    console.log('draw sheep', pJS.particles.array.length)
}

window.addEventListener('outOfCanvas', () => {
    if (!pJS.particles.array.length) {
        end()
        document.dispatchEvent(endEvent)
    }
})

export const start = () => {
    document.dispatchEvent(startEvent)
    console.log('start')
    window.particlesJS.load(SPACE_ID, PARTICLES_CONFIG_PATH, () => {
        console.log('ready')
        pJS = window.pJSDom[0].pJS
        canvas = space.querySelector('canvas')
        intervalId = setInterval(drawSheep, 2000)
        document.body.classList.add('sheep-game')
    })
}

