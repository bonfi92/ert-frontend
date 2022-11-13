import {
    collections,
    products,
    setActiveCollection,
    setActiveDescription,
    setActiveProducts,
    setActiveSpecific,
    setActiveYear,
    setCollectionImage,
    setProductImage
} from "./helper";

// const preloadImages = () => {
//     for (const collection of collections) {
//         const image = new Image();
//         image.src = collection.dataset.image;
//     }
//
//     for (const product of products) {
//         const image = new Image();
//         image.src = product.dataset.image;
//     }
// }

const onCollectionClickHandler = (e) => {
    const {collection, image} = e.target.dataset

    setActiveCollection(collection)
    setActiveProducts(collection)
    setActiveYear(collection)
    setCollectionImage(image)
    setProductImage('')
}

const onProductHoverHandler = (e) => {
    const {product, image} = e.target.dataset

    setActiveDescription(product)
    setActiveSpecific(product)
    setProductImage(image)
}

const onProductLeaveHandler = () => {
    setActiveDescription()
    setActiveSpecific()
    setProductImage('')
}

/* *** INIT APP *** */

for (const collection of collections) {
    collection.addEventListener('click', onCollectionClickHandler)
}

for (let product of products) {
    product.addEventListener('mouseover', onProductHoverHandler)
    product.addEventListener('mouseleave', onProductLeaveHandler)
}

// preloadImages()
