import React,{useState} from 'react';
import Menu from './Menu'
import Categories from './Categories'
import items from './data';
const allCategories =['all' , ...new Set(items.map(el=>el.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  function filterData(category){
  if(category=== 'all'){
    setMenuItems(items)
    return;
  }  
  
  const newData =  items.filter( el => el.category === category );
    setMenuItems(newData)
  }

  return (
    <div className="App">
      <menu>
        <section className="menu section">
          <div className="title">
          <h2>Our menu</h2>
           <div className="underline"></div>
          </div>
        </section>
        <Categories filterData={filterData} categories={categories} />
        <Menu menuItems={menuItems} />
      </menu>
    </div>
  );
}

export default App;
