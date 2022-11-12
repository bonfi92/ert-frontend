import {
    collections,
    products,
    setActiveCollection,
    setActiveDescription,
    setActiveProducts, setActiveSpecifics,
    setActiveYear,
    setPreviewImage
} from "./helper";

const onCollectionClickHandler = (e) => {
    const {collection, image} = e.target.dataset

    setActiveCollection(collection)
    setActiveProducts(collection)
    setActiveYear(collection)
    setPreviewImage(image)
}

const onProductHoverHandler = (e) => {
    const {product} = e.target.dataset

    setActiveDescription(product)
    setActiveSpecifics(product)
}

const onProductLeaveHandler = () => {
    setActiveDescription()
    setActiveSpecifics()
}

for (const collection of collections) {
    collection.addEventListener('click', onCollectionClickHandler)
}

for (let product of products) {
    product.addEventListener('mouseover', onProductHoverHandler)
    product.addEventListener('mouseleave', onProductLeaveHandler)
}
