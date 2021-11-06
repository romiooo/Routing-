import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

  useEffect(()=>{
    fetchItems();
  },[]);

  const [items, setItems]= useState([]);

  const fetchItems=async()=>{
    const data=await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');

    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  }

  return (
    <div className="Shop-Page">
      <h1>Shop Page</h1>
        {items.map(item => {
          {console.log(item)}
          return <h1 key={item.itemId}>{item.item.name}</h1>
})}
    </div>
  );
}

export default Shop;
