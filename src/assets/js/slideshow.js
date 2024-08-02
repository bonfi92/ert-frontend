import SwipeListener from 'swipe-listener'

export class Slider {
    constructor (slider, onInit, onMove) {
        this.slider = slider
        this.onInit = onInit
        this.onMove = onMove
        this.slides = this.slider.querySelector('.slideshow__slides')
        this.imagePositionElement = document.querySelector('.footer__image-position')
        this.imagesCountElement = document.querySelector('.footer__images-count')
        this.imagesCountElement.innerHTML = this.slides.childElementCount
        this.largeImageContainer = document.querySelector('.slideshow__large-image-container')
        this.largeImage = document.querySelector('.slideshow__large-image')
        this.largeImageCloseButton = document.querySelector('.slideshow__close-button')

        // Add click listener to each image
        Array.from(this.slides.children).forEach((slide) => {
            slide.querySelector('img').addEventListener('click', () => {
                this.showLargeImage()
            })
        })

        // Add click listener to close button
        this.largeImageCloseButton.addEventListener('click', () => {
            this.closeLargeImage()
        })

        // Add swipe listener
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

    renderImagePosition(currentImage) {
        this.imagePosition = [...this.slides.children].indexOf(currentImage) + 1
        this.imagePositionElement.innerHTML = this.imagePosition
    }

    showLargeImage() {
        this.largeImage.src = this.current.dataset.originalUrl
        this.largeImageContainer.classList.add('show')
    }

    closeLargeImage() {
        this.largeImageContainer.classList.remove('show')
    }
}
