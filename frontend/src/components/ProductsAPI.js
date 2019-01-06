export const API_URL = 'http://localhost:3000/'

export const getProducts = (page) => fetch(`${API_URL}api/products?_page=${page}&_limit=15`)
    .then(res => res.json())
    .catch(err => console.log(err))