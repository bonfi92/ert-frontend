import {
    addLeadingZero,
    convertTZ,
    setActiveCollection,
    setActiveDescription,
    setActiveProducts,
    setActiveSpecific,
    setActiveYear,
    setCollectionImage,
    setGalleryLink,
    setProductImage,
    setProductSimpleImage,
} from './helper'
import {Slider} from './slideshow'
import {
    collections,
    footerDate,
    footerHour,
    footerMinute,
    galleryNextBtn,
    galleryPrevBtn,
    gallerySlideDescription, gallerySlideNameDesktop, gallerySlideNameMobile,
    products,
    slider,
    TZ_STRING
} from "./constants"

// Collection methods
const onCollectionClickHandler = (e) => {
    const {collection} = e.target.dataset

    setActiveCollection(collection)
    setActiveProducts(collection)
    setActiveYear(collection)
    setGalleryLink(collection)
}

const onCollectionHoverHandler = (e) => {
    const {collection} = e.target.dataset

    setCollectionImage(collection)
}

const onCollectionLeaveHandler = (e) => {
    setCollectionImage()
}

// Product methods
const onProductClickHandler = (e) => {
    const {product} = e.target.dataset

    setProductSimpleImage(product)
}

const onProductHoverHandler = (e) => {
    const {product} = e.target.dataset

    setActiveDescription(product)
    setActiveSpecific(product)
    setProductImage(product)
}

const onProductLeaveHandler = () => {
    setActiveDescription()
    setActiveSpecific()
    setProductImage()
    setProductSimpleImage()
}

// Other methods
const setCurrentDate = () => {
    const d = new Date()
    const nd = convertTZ(d, TZ_STRING)
    footerDate.innerHTML = addLeadingZero(nd.getDate()) + '.' + addLeadingZero(nd.getMonth() + 1) + '.' + nd.getFullYear()
}

const setCurrentTime = () => {
    const d = new Date()
    const nd = convertTZ(d, TZ_STRING)
    footerHour.innerHTML = addLeadingZero(nd.getHours())
    footerMinute.innerHTML = addLeadingZero(nd.getMinutes())
}

/* *** INIT APP *** */

for (const collection of collections) {
    collection.addEventListener('click', onCollectionClickHandler)
    collection.addEventListener('mouseover', onCollectionHoverHandler)
    collection.addEventListener('mouseleave', onCollectionLeaveHandler)
}

for (let product of products) {
    product.addEventListener('click', onProductClickHandler)
    product.addEventListener('mouseover', onProductHoverHandler)
    product.addEventListener('mouseleave', onProductLeaveHandler)
}

setCurrentDate()
setCurrentTime()
setInterval(setCurrentTime, 2500)

if (slider) {
    const onSlideChange = (element) => {
        const {name, description} = element.dataset
        gallerySlideNameDesktop.innerHTML = name
        gallerySlideNameMobile.innerHTML = name
        gallerySlideDescription.innerHTML = description
    }

    const onNextPrevClickHandler = () => {
        sliderInstance.move('back')
    }

    const onNextSlideClickHandler = () => {
        sliderInstance.move()
    }

    const onGalleryNameClickHandler = () => {
        const isDescriptionVisible = !!gallerySlideDescription.style.display
        const currentSlideImage = document.querySelector('.slideshow__slide.current img')

        if (isDescriptionVisible) {
            gallerySlideDescription.style.display = ''
            currentSlideImage.style.opacity = ''
        } else {
            gallerySlideDescription.style.display = 'initial'
            currentSlideImage.style.opacity = '.5'
        }
    }

    const sliderInstance = new Slider(slider, onSlideChange, onSlideChange)

    galleryPrevBtn.addEventListener('click', onNextPrevClickHandler)
    galleryNextBtn.addEventListener('click', onNextSlideClickHandler)
    gallerySlideNameMobile.addEventListener('click', onGalleryNameClickHandler)
}
