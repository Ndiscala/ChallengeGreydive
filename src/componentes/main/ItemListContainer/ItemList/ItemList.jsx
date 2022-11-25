import React from 'react';
import Item from './Item/Item.jsx';

const ItemList = ({ item }) => {
  return (
    <div>
        { item.map((it) => {
            return <Item key={it.id} it={it} />
        })
        }

    </div>
  )
}

export default ItemList