import React, { useContext } from 'react'
import { productContext } from '../context/ProductContext'
import Card from '../components/Card'

const Home = () => {
  const product = useContext(productContext)
  // console.log(product);
  return (
    <>
      <div className='flex gap-2 flex-wrap'>
        {
          product.map((item) => {
            return (
                <div key={item.id} className='bg-gray-200 border-1 ml-10 mt-10 p-4 rounded-2xl '>
                  <Card productItem={item} />
                </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home