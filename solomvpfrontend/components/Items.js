import React from 'react'


export default function Items({ items }) {


    return (
        <>
        
            <div>
                <img src="./images/ChocolateChipCookies.jpeg" />
            <h3>{items[0]?.itemName}</h3>
            <p>{items[0]?.description}</p>
            <p>Price: ${items[0]?.price}</p>
            </div>
            <div>
                <img src="./images/CarrotCake.webp" />
                <h3>{items[1]?.itemName}</h3>
            <p>{items[1]?.description}</p>
            <p>Price: ${items[1]?.price}</p>
            </div>
            <div>
                <img src="./images/Brownies.jpeg" />
                <h3>{items[2]?.itemName}</h3>
            <p>{items[2]?.description}</p>
            <p>Price: ${items[2]?.price}</p>
            </div>
            <div>
                <img src="./images/ApplePie.jpeg" />
                <h3>{items[3]?.itemName}</h3>
            <p>{items[3]?.description}</p>
            <p>Price: ${items[3]?.price}</p>
            </div>
            <div>
                <img src="./images/StrawberryShortCake.jpeg" />
                <h3>{items[4]?.itemName}</h3>
            <p>{items[4]?.description}</p>
            <p>Price: ${items[4]?.price}</p>
            </div>
        </>
    )
}