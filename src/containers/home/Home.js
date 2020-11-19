import { useState, useEffect } from 'react';
import ItemList from '../../components/itemList/ItemList'
import getProductFromDatabase from '../../lib/Database'
import './Home.css'
const Home = () =>{
    const[products,setProducts]=useState([])
    useEffect(async()=>{
        const products=await getProductFromDatabase(0)
        setProducts(products)
    },[])

    return (   
        <div className="Home">  
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"></link> 
        {products.length===0 ? (
        <div><br/><br/><br/><br/>Cargando....</div>
        ):(
        <div className="Home">    
        {<ItemList products={products}/> }
        </div>
    ) }
    </div>
    )        
    }
export default Home 