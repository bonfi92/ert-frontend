// Home page - lists
export const COLLECTIONS_CLASS = 'home__list--collections'
export const PRODUCTS_CLASS = 'home__list--products'
export const YEARS_CLASS = 'home__list--years'
export const DESCRIPTIONS_CLASS = 'home__list--descriptions'
export const SPECIFICS_CLASS = 'home__list--specifics'

// Home page - Preview images
export const COLLECTION_IMAGE = 'home__collection-image'
export const PRODUCT_IMAGE = 'home__product-image'
export const PRODUCT_SIMPLE_IMAGE = 'home__product-simple-image'

// Home page - Classes
export const VISIBLE_CLASS = 'visible'
export const ACTIVE_CLASS = 'active'

export const TZ_STRING = 'Europe/Rome' // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
export const collections = document.querySelectorAll(`.${COLLECTIONS_CLASS} li`)
export const products = document.querySelectorAll(`.${PRODUCTS_CLASS} li`)
export const footerHour = document.querySelector('.footer__hour')
export const footerMinute = document.querySelector('.footer__minute')
export const footerDate = document.querySelector('.footer__option--date')
export const slider = document.querySelector('.slideshow')

// Gallery page
export const gallerySlideName = document.querySelector('.gallery-header__name')
export const gallerySlideDescription = document.querySelector('.gallery__description')
export const galleryPrevBtn = document.querySelector('.gallery-header__prev-btn')
export const galleryNextBtn = document.querySelector('.gallery-header__next-btn')
