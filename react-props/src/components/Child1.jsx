import React from 'react'

const Child1 = ({productData}) => {
    console.log(productData);
    
    return (
        <>
            <div className='bg-gray-200 flex flex-col items-center rounded-2xl p-4 '>
                <img  className='rounded-2xl' src={productData.image} width={180} alt="" />
                <h1 className='font-bold'>{productData.title}</h1>
                <p>{productData.des}</p>
                <p>{productData.price}</p>
                <button className='bg-blue-600 px-10 py-1 rounded-2xl font-semibold text-white'>click me</button>
            </div>
        </>
    )
}

export default Child1