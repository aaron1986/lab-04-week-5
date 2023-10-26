import { useState } from 'react'
import './App.css'
import Data from '/src/assets/data.json'

function App() {

  return (
    <div>
      <section>
        <div id="image-grid">
          {Data.map((items) => (
            <div key = {items._id}>
              <img src={items.image_url} alt={items.title} />
              <h3>{items.description}</h3>
              <p>{items.keyword}</p>
              <p>{items.horns}</p>
              </div>
          ))};
        </div> {/* end of image-grid div */}
      </section> {/* end of section */}
    </div> 
  );
}

export default App
