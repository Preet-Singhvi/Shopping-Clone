import React from 'react';

const Categories = ({ categories, filterItems, setLoginUser }) => {
  return (
    <>
    <div className="btn-container">
      <div>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      </div>
      <div className="icon-logoutbtn">
      <a href="/cart">
      <i className="fa fa-shopping-cart"></i>
      </a>
      <button onClick={() => setLoginUser({})}>Logout</button>
      </div>
    </div>
  </>
  );
};

export default Categories;