import {
    addLeadingZero,
    convertTZ,
    getActiveProduct,
    getXMLFeed,
    setActiveCollection,
    setActiveDescription,
    setActiveProduct,
    setActiveProductList,
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
    descriptions,
    footer,
    FOOTER_DETAIL_NEWS_CLASS,
    FOOTER_DETAIL_WEATHER_CLASS,
    FOOTER_RANDOM_IMAGE_CLASS,
    footerDate,
    footerDetailNews,
    footerDetailWeather,
    footerHour,
    footerMinute,
    footerNews,
    footerTemperature,
    galleryNextBtn,
    galleryPrevBtn,
    gallerySlideDescription,
    gallerySlideNameDesktop,
    gallerySlideNameMobile,
    newsIcon,
    products,
    randomImage,
    randomImageCaption,
    sheepIcon,
    slider,
    TZ_STRING,
    weatherApiUrl
} from "./constants"
import {gameHasStarted, start} from "./sheep-game";

const randomNews = footerNews.innerHTML.split('#_#')
let randomImages

// Collection methods
const onCollectionClickHandler = (e) => {
    const {collection} = e.target.dataset

    setActiveCollection(collection)
    setActiveProductList(collection)
    setActiveYear(collection)
    setGalleryLink(collection)
    setActiveProduct()
    setProductImage()
}

const onCollectionHoverHandler = (e) => {
    const {collection} = e.target.dataset

    setCollectionImage(collection)
    setProductImage()
}

const onCollectionLeaveHandler = () => {
    setCollectionImage()

    const activeProduct = getActiveProduct()

    if (activeProduct) {
        setProductImage(activeProduct)
    } else {
        setProductImage()
    }
}

// Product methods
const onProductClickHandler = (e) => {
    const {product} = e.target.dataset

    setActiveProduct(product)
    setActiveDescription(product)
    setActiveSpecific(product)
}

const onProductHoverHandler = (e) => {
    const {product} = e.target.dataset

    setProductImage(product)
}

const onProductLeaveHandler = () => {
    const activeProduct = getActiveProduct()

    if (activeProduct) {
        setProductImage(activeProduct)
    } else {
        setProductImage()
    }
}

const onDescriptionHoverHandler = (e) => {
    const {product} = e.target.dataset

    setProductSimpleImage(product)
}

const onDescriptionLeaveHandler = () => {
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

const onSheepHoverHandler = () => {
    if (randomImages) {
        const {url, alt, caption} = randomImages[Math.floor(Math.random() * randomImages.length)]
        randomImage.src = url
        randomImage.alt = alt
        randomImageCaption.innerHTML = caption
        randomImageCaption.style.display = caption ? '' : 'none'
        footer.classList.add(FOOTER_RANDOM_IMAGE_CLASS)
    }
}

const onSheepLeaveHandler = () => {
    footer.classList.remove(FOOTER_RANDOM_IMAGE_CLASS)
    randomImage.src = ''
    randomImage.alt = ''
}

const setWeatherDetails = (weather, temperature) => {
    footerTemperature.innerHTML = temperature
    footerDetailWeather.innerHTML = weather
}

const onNewsIconHoverHandler = () => {
    if (randomNews) {
        footerDetailNews.innerHTML = randomNews[Math.floor(Math.random() * randomNews.length)]
        footer.classList.add(FOOTER_DETAIL_NEWS_CLASS)
    }
}

const onNewsIconLeaveHandler = () => {
    footer.classList.remove(FOOTER_DETAIL_NEWS_CLASS)
}


/* *** INIT APP *** */

for (const collection of collections) {
    collection.addEventListener('click', onCollectionClickHandler)
    collection.addEventListener('mouseover', onCollectionHoverHandler)
    collection.addEventListener('mouseleave', onCollectionLeaveHandler)
}

for (const product of products) {
    product.addEventListener('click', onProductClickHandler)
    product.addEventListener('mouseover', onProductHoverHandler)
    product.addEventListener('mouseleave', onProductLeaveHandler)
}

for (const description of descriptions) {
    description.addEventListener('mouseover', onDescriptionHoverHandler)
    description.addEventListener('mouseleave', onDescriptionLeaveHandler)
}

setCurrentDate()
setCurrentTime()
setInterval(setCurrentTime, 2500)

sheepIcon.addEventListener('mouseover', onSheepHoverHandler)
sheepIcon.addEventListener('mouseleave', onSheepLeaveHandler)
newsIcon.addEventListener('mouseover', onNewsIconHoverHandler)
newsIcon.addEventListener('mouseleave', onNewsIconLeaveHandler)

footerTemperature.addEventListener('mouseover', () => {
    footer.classList.add(FOOTER_DETAIL_WEATHER_CLASS)
})

footerTemperature.addEventListener('mouseleave', () => {
    footer.classList.remove(FOOTER_DETAIL_WEATHER_CLASS)
})

getXMLFeed(weatherApiUrl, (data) => {
    const item = data.getElementsByTagName('item')[0]
    if (item) {
        const weather = item.getElementsByTagName('description')[0].innerHTML
        const temperature = weather.split(' ')[1]
        setWeatherDetails(weather, temperature)
    }
})

fetch('/2023/wp-json/acf/v3/pages/28/random_images')
    .then(res => res.json())
    .then(data => randomImages = data.random_images)
    .catch(() => {
        throw Error('Error on fetching random images')
    })

if (slider) {
    const onSlideChange = (element) => {
        const {name, description} = element.dataset
        gallerySlideNameDesktop.innerHTML = name
        gallerySlideNameMobile.innerHTML = name
        gallerySlideDescription.innerHTML = description
    }

    const onPrevSlideClickHandler = () => {
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
            slider.style.pointerEvents = ''
        } else {
            gallerySlideDescription.style.display = 'initial'
            currentSlideImage.style.opacity = '.5'
            slider.style.pointerEvents = 'none'
        }
    }

    const sliderInstance = new Slider(slider, onSlideChange, onSlideChange)

    galleryPrevBtn.addEventListener('click', onPrevSlideClickHandler)
    galleryNextBtn.addEventListener('click', onNextSlideClickHandler)
    gallerySlideNameMobile.addEventListener('click', onGalleryNameClickHandler)
}

// *** SHEEP GAME ***
let timeoutId

timeoutId = setTimeout(start, 3000)

document.addEventListener('mousemove', () => {
    clearTimeout(timeoutId)
    if (gameHasStarted()) {
        return
    }
    console.log('----clearTimeout----')
    timeoutId = setTimeout(start, 3000)
})
