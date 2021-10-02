import React from "react";
import './list.css'

const List = ( { items, handleAddProduct }) => {
    return (
    <div className='section-center'>
      {items.map((listItem) => {
        const { id, name, image, price } = listItem;
        return (
          <div key={id} className='list-item'>
            <img src={image} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>Rs.{price}</h4>
                <button onClick={() =>  handleAddProduct(listItem) }>Add To Cart</button>
              </header>
            </div>
          </div>
        );
      })}
    </div> 

     );
}
 
export default List;