import React from 'react';
import  Items  from '../../db.json';
import "bootstrap/dist/css/bootstrap.min.css";
import './Itemcontainer.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from './ItemListContainer/ItemList/ItemList';




const Itemcontainer = () => {

  const [item, setItem] = useState([])

  const {clienteName} = useParams();

  useEffect(() => {
    const obtenerProducto = () => 
        new Promise((res,rej) =>{
          const filtrarItem = Items.filter(
              (item) => item.cliente === clienteName
          );
          setTimeout(() => {
            res(clienteName ? filtrarItem : Items)
          }, 500 );
        });

       obtenerProducto()
        .then((data) =>{
          setItem(data);
        }) 
        .catch((error) =>{
          console.log(error);
        })
    
  }, [clienteName]);
  
  

  return (
    <div className=''>
          <ItemList item={item} key={item.id} />
    </div>
  )}
// 

export default Itemcontainer;