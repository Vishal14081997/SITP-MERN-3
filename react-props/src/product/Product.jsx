import React, { useEffect, useState } from 'react'
import Card from './Card';

const Product = () => {
  const [data, setData] = useState([])
  
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const productData = await response.json()
      console.log(productData);
      setData(productData)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <div className='flex flex-wrap gap-5 justify-between px-5'>
        {
          data.map((item, index) => {
            return (
              <>
                <Card  product_data = {item}/>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default Product;