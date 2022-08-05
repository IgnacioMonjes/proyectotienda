const products =[
    {
        id: '1',
        name: 'Carita Feliz',
        price: 1000,
        category: 'celular',
        img: 'images/carita_feliz.jpg',
        stock: 25,
        description: 'Product description'
    },
    {id:'2', name: 'Platos Negros', price: 800, category: 'celular', img: 'images/platos_negros.jpg', stock: 10, description: 'platos negros'},
    {id:'3', name: 'Yan Yang', price: 900, category: 'celular', img: 'images/ying_yang.jpg', stock: 10, description: 'yin yang'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        },3000)
    })
}