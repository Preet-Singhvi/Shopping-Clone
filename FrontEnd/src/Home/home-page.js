import React,{ useState } from 'react';
import './home-page.css';
import items from '../Data/data';
import List from './list';
import Categories from './category';


const allCategories = ['All', ...new Set(items.map((item) => item.category))];
const Home = ( { handleAddProduct, setLoginUser }) => {
  const [listitems,setListitems] = useState(items);
  const [categories,setCategory] = useState(allCategories)
  
  const filterItems = (category) => {
    if (category === 'All') {
      setListitems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setListitems(newItems);
  };
  return ( 
    <main>
          <section>
            <div className="home-title">
                <img src="Amazon_Logo.png" alt="" />  
            </div>
            <Categories 
              categories={ categories }
              filterItems={ filterItems } 
              setLoginUser ={ setLoginUser }/>
            <List 
              items={ listitems } 
              handleAddProduct= { handleAddProduct }/>
          </section>
        </main>
               
               );
              }
              
  export default Home;
              