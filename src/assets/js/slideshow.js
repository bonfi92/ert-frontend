export class Slider {
    constructor (slider, onInit, onMove) {
        this.slider = slider
        this.onInit = onInit
        this.onMove = onMove
        this.slides = this.slider.querySelector('.slideshow__slides')
        this.prevButton = this.slider.querySelector('.slideshow__prev')
        this.nextButton = this.slider.querySelector('.slideshow__next')
        this.imagePositionElement = this.slider.querySelector('.slideshow__image-position')
        this.imagesCountElement = this.slider.querySelector('.slideshow__images-count')
        this.imagesCountElement.innerHTML = this.slides.childElementCount

        this.startSlider()
        this.prevButton.addEventListener('click', () => this.move('back'))
        this.nextButton.addEventListener('click', () => this.move())
    }

    startSlider() {
        this.current = this.slider.querySelector('.current') || this.slides.firstElementChild
        this.prev = this.current.previousElementSibling || this.slides.lastElementChild
        this.next = this.current.nextElementSibling || this.slides.firstElementChild

        this.renderImagePosition()

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

        this.renderImagePosition()

        this.applyClasses()

        this.onMove(this.current)
    }

    renderImagePosition() {
        this.imagePosition = [...this.slides.children].indexOf(this.current) + 1
        this.imagePositionElement.innerHTML = this.imagePosition
    }
}
