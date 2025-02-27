import './lib/particles'
import particlesConfig from "./particles-config"
import {MAX_SHEEP, SHEEP_DRAW_INTERVAL, SHEEP_GAME_BODY_CLASS, SPACE_ID} from "./constants"

let pJS
let intervalId
const endEvent = new Event('sheepGameFinished')
const startEvent = new Event('sheepGameStarted')

const end = () => {
    document.body.classList.remove(SHEEP_GAME_BODY_CLASS)
    clearInterval(intervalId)
    pJS.fn.vendors.destroypJS()
}

const drawSheep = () => {
    pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value))
}

window.addEventListener('outOfCanvas', () => {
    if (!pJS.particles.array.length) {
        end()
        document.dispatchEvent(endEvent)
    }
})

export const initGame = () => {
    document.dispatchEvent(startEvent)
    window.particlesJS.load(SPACE_ID, particlesConfig, () => {
        pJS = window.pJSDom[0].pJS
        intervalId = setInterval(() => {
            if (pJS.particles.array.length < MAX_SHEEP) {
                drawSheep()
            } else {
                clearInterval(intervalId)
            }
        }, SHEEP_DRAW_INTERVAL * 1000)
        document.body.classList.add(SHEEP_GAME_BODY_CLASS)
    })
}

