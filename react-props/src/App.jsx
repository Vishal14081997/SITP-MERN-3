import React from 'react'
import Child from './components/Child'
import ProductChild from './product/ProductChild'
import ProductCard from './product/Product'


const App = () => {
  let data = [
    {
      id: 1,
      title: "iphone",
      des: "this is iphone series of apple",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqioZaF8ShdcKs1hmTi4Qtp80R065OP3CA2eE2aI6NIw&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "	https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/j/o/-original-imahft5nm9eewyzh.jpeg?q=70"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    }
  ]

  return (
    <>
      <div className='flex bg-amber-400 gap-10 p-5 justify-between'>
        <Child heading="my name vishal singh" title="Child-1 components" />
        <Child heading="my name vishal singh" title="Child-1 components" />
        <Child heading="my name vishal singh" title="Child-1 components" />
        <Child heading="my name vishal singh" title="Child-1 components" />
      </div>

      <div className='mt-10 flex gap-10 flex-wrap'>
        {
          data.map((item, index) => {
            return (
              <>
                <ProductChild productData={item} />
              </>
            )
          })
        }
      </div>

      <div>
        <ProductCard/>
      </div>
    </>
  )
}
export default App