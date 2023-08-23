//import { peek } from "./utils/peek"
import './App.css'
// import axios from 'axios'
import { Card } from './components/card'
import {  useState , useEffect} from 'react'





function App() {
  const [products,setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
  }, [])
  // console.log(products)
    return (
    <>
      {products.map((product) => (
      <Card  price={product.price}
       id={product.id}
        title={product.title}
         description={product.description}
        />
      )
      )}
      
    </>
  )
}


export default App
