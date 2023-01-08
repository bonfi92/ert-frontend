import {
    ACTIVE_CLASS,
    COLLECTION_IMAGE,
    COLLECTIONS_CLASS,
    DESCRIPTIONS_CLASS, galleryLink,
    PRODUCT_IMAGE,
    PRODUCT_SIMPLE_IMAGE,
    PRODUCTS_CLASS,
    SPECIFICS_CLASS,
    VISIBLE_CLASS,
    YEARS_CLASS
} from "./constants";

const setActive = (currentActiveList, listToActivate, className) => {
    if (currentActiveList) {
        if (currentActiveList.length !== undefined) {
            for (const list of currentActiveList) {
                list.classList.remove(className)
            }
        } else {
            currentActiveList.classList.remove(className)
        }
    }

    if (listToActivate) {
        if (listToActivate.length !== undefined) {
            for (const list of listToActivate) {
                list.classList.add(className)
            }
        } else {
            listToActivate.classList.add(className)
        }
    }
}

export const setCollectionImage = (collection) => {
    setActive(
        document.querySelector(`.${COLLECTION_IMAGE}.${VISIBLE_CLASS}`),
        document.querySelector(`.${COLLECTION_IMAGE}[data-collection="${collection}"]`),
        VISIBLE_CLASS
    )
}

export const setProductImage = (product) => {
    setActive(
        document.querySelector(`.${PRODUCT_IMAGE}.${VISIBLE_CLASS}`),
        document.querySelector(`.${PRODUCT_IMAGE}[data-product="${product}"]`),
        VISIBLE_CLASS
    )
}

export const setProductSimpleImage = (product) => {
    setActive(
        document.querySelector(`.${PRODUCT_SIMPLE_IMAGE}.${VISIBLE_CLASS}`),
        document.querySelector(`.${PRODUCT_SIMPLE_IMAGE}[data-product="${product}"]`),
        VISIBLE_CLASS
    )
}

export const setActiveCollection = (collection) => {
    setActive(
        document.querySelector(`.${COLLECTIONS_CLASS} li.${ACTIVE_CLASS}`),
        document.querySelector(`.${COLLECTIONS_CLASS} li[data-collection="${collection}"]`),
        ACTIVE_CLASS
    )
}

export const setActiveProducts = (collection) => {
    setActive(
        document.querySelectorAll(`.${PRODUCTS_CLASS} li.${VISIBLE_CLASS}`),
        document.querySelectorAll(`.${PRODUCTS_CLASS} li[data-collection="${collection}"]`),
        VISIBLE_CLASS
    )
}

export const setActiveYear = (collection) => {
    setActive(
        document.querySelector(`.${YEARS_CLASS} li.${VISIBLE_CLASS}`),
        document.querySelector(`.${YEARS_CLASS} li[data-collection="${collection}"]`),
        VISIBLE_CLASS
    )
}

export const setActiveDescription = (product) => {
    setActive(
        document.querySelector(`.${DESCRIPTIONS_CLASS} li.${VISIBLE_CLASS}`),
        product ? document.querySelector(`.${DESCRIPTIONS_CLASS} li[data-product="${product}"]`) : null,
        VISIBLE_CLASS
    )
}

export const setActiveSpecific = (product) => {
    setActive(
        document.querySelector(`.${SPECIFICS_CLASS} li.${VISIBLE_CLASS}`),
        product ? document.querySelector(`.${SPECIFICS_CLASS} li[data-product="${product}"]`) : null,
        VISIBLE_CLASS
    )
}

export const setGalleryLink = (collection) => {
    galleryLink.href = `gallery/${collection}`
}


export const convertTZ = (date, tzString) => new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {timeZone: tzString}))

export const addLeadingZero = num => ('0' + num).slice(-2)

export const getXMLFeed = (url, callback) => {
    fetch(url)
        .then(response => response.text())
        .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
        .then((data) => callback(data))
        .catch((err) => {
            console.error(err)
        })
}
