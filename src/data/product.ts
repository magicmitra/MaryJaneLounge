import ProductModel from '../models/product'

const products: Array<ProductModel> = [
    {
        "id": "4",
        "name": "Martini",
        "price": 15.75,
        "img": "/images/martini.jpg",
        "type": "cocktail"
    },
    {
        "id": "5",
        "name": "Margarita",
        "price": 15.75,
        "img": "/images/margarita.webp",
        "type": "cocktail"
    },
    {
        "id": "6",
        "name": "Moscow Mule",
        "price": 15.75,
        "img": "/images/moscow_mule.jpg",
        "type": "cocktail"
    },
    {
        "id": "7",
        "name": "Old Fashioned",
        "price": 15.75,
        "img": "/images/old_fashioned.jpg",
        "type": "cocktail"
    },
    {
        "id": "1",
        "name": "A5 Wagyu Kobe Steak",
        "price": 900.00,
        "img": "/images/wagyu.jpg",
        "type": "food"
    },
    {
        "id": "0",
        "name": "Beluga Caviar",
        "price": 7000.00,
        "img": "/images/caviar.jpg",
        "type": "food"
    },
    {
        "id": "2",
        "name": "Tiger Fugu",
        "price": 25000.00,
        "img": "/images/fugu.jpg",
        "type": "food"
    }
]

export default products