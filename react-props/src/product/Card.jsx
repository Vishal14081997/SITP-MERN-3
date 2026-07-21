import React from 'react'

const Card = ({ product_data }) => {
    return (
        <>
            <div className='bg-gray-200 flex text-gray-500 shadow-2xl border-1 flex-col gap-2 p-1  mt-10 rounded-2xl p-2 w-70 items-center'>
                <img className='rounded-2xl h-30 w-30' src={product_data.image} width="200px" alt="" />
                <h1 className='text-wrap w-40'>{product_data.title}</h1>
                <p className='w-40'>{product_data.category}</p>
                <p className='w-40'>{product_data.price}</p>
                <p className=' line-clamp-4 w-40'>{product_data.description}</p>
            </div>
        </>
    )
}

export default Card