import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import ProductContext from '../context/ProductContext'
import Card from '../components/Card'

const Home = () => {
  const user = useContext(UserContext)
  const product = useContext(ProductContext)
  console.log(product);

  return (
    <>
      <h1>name : {user.name}</h1>

      <div className='flex gap-5  flex-wrap'>
        {
          product.map((item, index) => {
            return (
              <>
                <div className='bg-gray-200 border-1 ml-10 mt-10 p-5 rounded-2xl '>
                  <Card productItem={item} />
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Home