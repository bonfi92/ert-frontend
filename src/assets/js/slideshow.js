export const Slider = (slider) => {
    let prev
    let current
    let next

    const slides = slider.querySelector('.slideshow__slides')
    const prevButton = slider.querySelector('.slideshow__prev')
    const nextButton = slider.querySelector('.slideshow__next')

    const startSlider = () => {
        current = slider.querySelector('.current') || slides.firstElementChild
        prev = current.previousElementSibling || slides.lastElementChild
        next = current.nextElementSibling || slides.firstElementChild

        applyClasses()
    }

    const applyClasses = () => {
        current.classList.add('current')
        prev.classList.add('prev')
        next.classList.add('next')
    }

    const move = (direction) => {
        const classesToRemove = ['prev', 'current', 'next']
        prev.classList.remove(...classesToRemove)
        current.classList.remove(...classesToRemove)
        next.classList.remove(...classesToRemove)

        if (direction === 'back') {
            [prev, current, next] = [
                prev.previousElementSibling || slides.lastElementChild,
                prev,
                current
            ]
        } else {
            [prev, current, next] = [
                current,
                next,
                next.nextElementSibling || slides.firstElementChild,
            ]
        }

        applyClasses()
    }

    startSlider()

    prevButton.addEventListener('click', () => move('back'))
    nextButton.addEventListener('click', move)
}
