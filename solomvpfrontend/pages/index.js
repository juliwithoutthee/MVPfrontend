import Head from 'next/head'
import { useState, useEffect } from "react";
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"
import Items from '../components/Items'
import Customer from '../components/Customer'




export default function Home() {

  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    const res = await axios.get('http://localhost:8080/items').catch(err => console.log(err.res))
    const data = res.data;
    console.log(data)
    setItems(data);
  }
  useEffect(() => { getAllItems() }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Just Desserts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav></Nav>
      </main>
      <div>
        <Items items = {items} ></Items>
        <Customer></Customer>
      </div>
    </div>

  )
}
