import React from 'react'

const Card = ({productItem}) => {
    return (
        <>
            <div className='flex flex-col gap-1 text-center'>
                <p className='text-red-500'>{productItem.id}</p>
                <img className='w-40 rounded-2xl' src={productItem.image} alt="" />
                <h1 className='font-bold'>{productItem.name}</h1>
                <p>{productItem.price}</p>
            </div>
        </>
    )
}

export default Card