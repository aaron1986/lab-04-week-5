import { useState } from 'react';
import './App.css';
import Data from '/src/assets/data.json';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [selectedImages, setSelectedImages] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredData, setFilteredData] = useState(Data);

  const handleNumberChange = (event) => {
    setSelectedImages(event.target.value);
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredImages = selectedImages
    ? Data.filter((item) => item.horns === parseInt(selectedImages))
    : Data;

  const filteredImagesWithSearch = filteredImages.filter((item) =>
    item.description.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <Header handleNumberChange={handleNumberChange} handleSearch={handleSearch} />
      <div id="grid">
        <select id="number-of-horns" name="number-of-horns" onChange={handleNumberChange}>
          <option value="">Number of Horns!</option>
          {filteredImages.map((item) => (
            <option key={item._id} value={item.horns}>
              {item.horns}
            </option>
          ))}
        </select>
      </div>

      <div id="image-grid">
        {filteredImagesWithSearch.map((item) => (
          <div key={item._id}>
            <img src={item.image_url} alt={item.title} />
            <h3>{item.description}</h3>
            <p>{item.keyword}</p>
            <p>{item.horns}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
