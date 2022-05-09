import React from 'react'
import axios from 'axios';

export default function Items() {

    const getAllItems = async () => {
        const res = await axios.get('http://localhost:8080/api/items');
        const data = res.data;
        console.log(data)
    }

    return (
        <>
            <img src="./images/Brownies.jpeg" />
            <img src="./images/CarrotCake.webp" />
            <img src="./images/ApplePie.jpeg" />
            <img src="./images/ChocolateChipCookies.jpeg" />
            <img src="./images/StrawberryShortCake.jpeg" />
        </>
    )
}