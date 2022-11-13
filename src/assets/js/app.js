import {
    addLeadingZero,
    collections,
    convertTZ,
    footerDate, footerHour, footerMinute,
    products,
    setActiveCollection,
    setActiveDescription,
    setActiveProducts,
    setActiveSpecific,
    setActiveYear,
    setCollectionImage,
    setProductImage,
    TZ_STRING
} from "./helper"
import {Slider} from "./slideshow";

const onCollectionClickHandler = (e) => {
    const {collection} = e.target.dataset

    setActiveCollection(collection)
    setActiveProducts(collection)
    setActiveYear(collection)
    setCollectionImage(collection)
    setProductImage(collection)
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
}

const currentDate = () => {
    const d = new Date();
    const nd = convertTZ(d, TZ_STRING);
    footerDate.innerHTML = addLeadingZero(nd.getDate()) + '.' + addLeadingZero(nd.getMonth() + 1) + '.' + nd.getFullYear()
};

const currentTime = () => {
    const d = new Date()
    const nd = convertTZ(d, TZ_STRING)
    footerHour.innerHTML = addLeadingZero(nd.getHours())
    footerMinute.innerHTML = addLeadingZero(nd.getMinutes())
}

/* *** INIT APP *** */

for (const collection of collections) {
    collection.addEventListener('click', onCollectionClickHandler)
}

for (let product of products) {
    product.addEventListener('mouseover', onProductHoverHandler)
    product.addEventListener('mouseleave', onProductLeaveHandler)
}

currentDate();
currentTime()
setInterval(currentTime, 2500);

Slider(document.querySelector('.slideshow'))
