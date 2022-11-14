// Home page - lists
const COLLECTIONS_CLASS = 'home__list--collections'
const PRODUCTS_CLASS = 'home__list--products'
const YEARS_CLASS = 'home__list--years'
const DESCRIPTIONS_CLASS = 'home__list--descriptions'
const SPECIFICS_CLASS = 'home__list--specifics'

// Home page - Preview images
const COLLECTION_IMAGE = 'home__collection-image'
const PRODUCT_IMAGE = 'home__product-image'

// Home page - Classes
const VISIBLE_CLASS = 'visible'
const ACTIVE_CLASS = 'active'

export const TZ_STRING = 'Europe/Rome' // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
export const collections = document.querySelectorAll(`.${COLLECTIONS_CLASS} li`)
export const products = document.querySelectorAll(`.${PRODUCTS_CLASS} li`)
export const footerHour = document.querySelector('.footer__hour')
export const footerMinute = document.querySelector('.footer__minute')
export const footerDate = document.querySelector('.footer__option--date')

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


export const convertTZ = (date, tzString) => new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {timeZone: tzString}))

export const addLeadingZero = num => ('0' + num).slice(-2)
