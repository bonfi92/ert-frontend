const collections = document.querySelectorAll('.list-container--collections li')
const products = document.querySelectorAll('.list-container--products li')
const descriptions = document.querySelectorAll('.list-container--descriptions li')
const specifics = document.querySelectorAll('.list-container--specifics li')
const years = document.querySelectorAll('.list-container--years li')
const previewImage = document.querySelector('.preview-image')

const onCollectionClickHandler = (e) => {
    for (const collection of collections) {
        if (collection === e.target) {
            e.target.classList.add('active')
            previewImage.src = collection.dataset.image
        } else {
            collection.classList.remove('active')
        }
    }

    const collection = e.target.dataset.collection

    for (const product of products) {
        if (product.dataset.collection === collection) {
            product.classList.remove('hidden')
        } else {
            product.classList.add('hidden')
        }
    }

    for (const year of years) {
        if (year.dataset.collection === collection) {
            year.classList.remove('hidden')
        } else {
            year.classList.add('hidden')
        }
    }
}

const onProductHoverHandler = (e) => {
    const product = e.target.dataset.product

    const currentActiveDescription = document.querySelector('.list-container--descriptions li:not(.hidden)')
    const descriptionToActivate = document.querySelector(`.list-container--descriptions li[data-product="${product}"]`)
    const currentActiveSpecific = document.querySelector('.list-container--specifics li:not(.hidden)')
    const specificToActivate = document.querySelector(`.list-container--specifics li[data-product="${product}"]`)

    if (currentActiveDescription) {
        currentActiveDescription.classList.add('hidden')
    }

    if (currentActiveSpecific) {
        currentActiveSpecific.classList.add('hidden')
    }

    descriptionToActivate.classList.remove('hidden')
    specificToActivate.classList.remove('hidden')
}

const onProductLeaveHandler = (e) => {
    const product = e.target.dataset.product

    const currentActiveDescription = document.querySelector('.list-container--descriptions li:not(.hidden)')
    const currentActiveSpecific = document.querySelector('.list-container--specifics li:not(.hidden)')

    currentActiveDescription.classList.add('hidden')
    currentActiveSpecific.classList.add('hidden')
}

for (const collection of collections) {
    collection.addEventListener('click', onCollectionClickHandler)
}

for (let product of products) {
    product.addEventListener('mouseover', onProductHoverHandler)
    product.addEventListener('mouseleave', onProductLeaveHandler)
}
