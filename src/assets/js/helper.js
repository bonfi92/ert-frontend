const COLLECTIONS_CLASS = 'list-container--collections'
const PRODUCTS_CLASS = 'list-container--products'
const YEARS_CLASS = 'list-container--years'
const DESCRIPTIONS_CLASS = 'list-container--descriptions'
const SPECIFICS_CLASS = 'list-container--specifics'
const VISIBLE_CLASS = 'visible'
const ACTIVE_CLASS = 'active'

export const collections = document.querySelectorAll(`.${COLLECTIONS_CLASS} li`)
export const products = document.querySelectorAll(`.${PRODUCTS_CLASS} li`)

export const setPreviewImage = (imageUrl) => {
    const previewImage = document.querySelector('.preview-image')
    previewImage.src = imageUrl
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

export const setActiveSpecifics = (product) => {
    setActiveList(
        document.querySelector(`.${SPECIFICS_CLASS} li.${VISIBLE_CLASS}`),
        product ? document.querySelector(`.${SPECIFICS_CLASS} li[data-product="${product}"]`) : null,
        VISIBLE_CLASS
    )
}
