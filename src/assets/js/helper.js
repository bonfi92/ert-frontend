const COLLECTIONS_CLASS = 'home__list--collections'
const PRODUCTS_CLASS = 'home__list--products'
const YEARS_CLASS = 'home__list--years'
const DESCRIPTIONS_CLASS = 'home__list--descriptions'
const SPECIFICS_CLASS = 'home__list--specifics'

const COLLECTION_IMAGE = 'home__collection-image'
const PRODUCT_IMAGE = 'home__product-image'

const VISIBLE_CLASS = 'visible'
const ACTIVE_CLASS = 'active'

export const collections = document.querySelectorAll(`.${COLLECTIONS_CLASS} li`)
export const products = document.querySelectorAll(`.${PRODUCTS_CLASS} li`)

const setActiveImage = (imageElement, imageUrl) => {
    if (imageUrl) {
        imageElement.src = imageUrl
        imageElement.classList.add(VISIBLE_CLASS)
    } else {
        imageElement.classList.remove(VISIBLE_CLASS)
    }
}

const setActiveList = (currentActiveList, listToActivate, className) => {
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

export const setCollectionImage = (imageUrl) => {
    setActiveImage(
        document.querySelector(`.${COLLECTION_IMAGE}`),
        imageUrl
    )
}

export const setProductImage = (imageUrl) => {
    setActiveImage(
        document.querySelector(`.${PRODUCT_IMAGE}`),
        imageUrl
    )
}

export const setActiveCollection = (collection) => {
    setActiveList(
        document.querySelector(`.${COLLECTIONS_CLASS} li.${ACTIVE_CLASS}`),
        document.querySelector(`.${COLLECTIONS_CLASS} li[data-collection="${collection}"]`),
        ACTIVE_CLASS
    )
}

export const setActiveProducts = (collection) => {
    setActiveList(
        document.querySelectorAll(`.${PRODUCTS_CLASS} li.${VISIBLE_CLASS}`),
        document.querySelectorAll(`.${PRODUCTS_CLASS} li[data-collection="${collection}"]`),
        VISIBLE_CLASS
    )
}

export const setActiveYear = (collection) => {
    setActiveList(
        document.querySelector(`.${YEARS_CLASS} li.${VISIBLE_CLASS}`),
        document.querySelector(`.${YEARS_CLASS} li[data-collection="${collection}"]`),
        VISIBLE_CLASS
    )
}

export const setActiveDescription = (product) => {
    setActiveList(
        document.querySelector(`.${DESCRIPTIONS_CLASS} li.${VISIBLE_CLASS}`),
        product ? document.querySelector(`.${DESCRIPTIONS_CLASS} li[data-product="${product}"]`) : null,
        VISIBLE_CLASS
    )
}

export const setActiveSpecific = (product) => {
    setActiveList(
        document.querySelector(`.${SPECIFICS_CLASS} li.${VISIBLE_CLASS}`),
        product ? document.querySelector(`.${SPECIFICS_CLASS} li[data-product="${product}"]`) : null,
        VISIBLE_CLASS
    )
}
