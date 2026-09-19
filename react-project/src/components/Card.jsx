import React from "react";

const Card = ({ productItem }) => {
    return (
        <div className="w-64 bg-white p-4 rounded-xl shadow-md">

            <img
                src={productItem.image}
                alt={productItem.title}
                className="w-full h-48 object-contain"
            />

            <h2 className="font-bold mt-3 line-clamp-2">
                {productItem.title}
            </h2>

            <p className="text-gray-500 mt-2">
                {productItem.category}
            </p>

            <p className="text-xl font-bold mt-2">
                ${productItem.price}
            </p>

        </div>
    );
};

export default Card;