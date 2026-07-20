import React from 'react'


const Child = ({ heading, title }) => {
    return (
        <>
            <div className='bg-blue-400 p-2 rounded-2xl'>
                <h1>{heading}</h1>
                <h2>{title}</h2>
            </div>

        </>
    )
}

export default Child