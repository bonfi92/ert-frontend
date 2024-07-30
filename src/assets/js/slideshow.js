import SwipeListener from 'swipe-listener'

export class Slider {
    constructor (slider, onInit, onMove) {
        this.slider = slider
        this.onInit = onInit
        this.onMove = onMove
        this.slides = this.slider.querySelector('.slideshow__slides')
        this.prevButton = this.slider.querySelector('.slideshow__prev')
        this.nextButton = this.slider.querySelector('.slideshow__next')
        this.imagePositionElement = document.querySelector('.footer__image-position')
        this.imagesCountElement = document.querySelector('.footer__images-count')
        this.imagesCountElement.innerHTML = this.slides.childElementCount

        this.addSwipeAndClickListeners()
        this.startSlider()
    }

    startSlider() {
        this.current = this.slider.querySelector('.current') || this.slides.firstElementChild
        this.prev = this.current.previousElementSibling || this.slides.lastElementChild
        this.next = this.current.nextElementSibling || this.slides.firstElementChild

        this.renderImagePosition(this.current)

        this.applyClasses()

        this.onInit(this.current)
    }

    applyClasses() {
        this.current.classList.add('current')
        this.prev.classList.add('prev')
        this.next.classList.add('next')
    }

    move(direction) {
        const classesToRemove = ['prev', 'current', 'next']
        this.prev.classList.remove(...classesToRemove)
        this.current.classList.remove(...classesToRemove)
        this.next.classList.remove(...classesToRemove)

        if (direction === 'back') {
            [this.prev, this.current, this.next] = [
                this.prev.previousElementSibling || this.slides.lastElementChild,
                this.prev,
                this.current
            ]
        } else {
            [this.prev, this.current, this.next] = [
                this.current,
                this.next,
                this.next.nextElementSibling || this.slides.firstElementChild,
            ]
        }

        this.renderImagePosition(this.current)

        this.applyClasses()

        this.onMove(this.current)
    }

    addSwipeAndClickListeners() {
        this.prevButton.addEventListener('click', () => this.move('back'))
        this.nextButton.addEventListener('click', () => this.move())

        SwipeListener(this.slider);

        this.slider.addEventListener('swipe', (e) => {
            const directions = e.detail.directions

            if (directions.left) {
                this.move()
            }

            if (directions.right) {
                this.move('back')
            }
        })
    }

    renderImagePosition(currentImage) {
        this.imagePosition = [...this.slides.children].indexOf(currentImage) + 1
        this.imagePositionElement.innerHTML = this.imagePosition
    }
}
