const getProducts = (page) => fetch(`http://localhost:3000/api/products?_page=${page}&_limit=15`)
.then(res => res.json())
.catch(err => console.log(err))

export default getProducts