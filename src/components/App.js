import { useEffect, useState } from 'react';
import Select from 'react-select';
import { GlobalStyle } from './GlobalStyle';
import { getBreeds, getCats } from '../cat-api';
// import { StickerList } from './StickerList';
// import stickers from '../stickers.json';

export const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [cat, setCat] = useState(null);

  useEffect(() => {
    async function fetchBreeds() {
      const data = await getBreeds();
      setBreeds(data);
    }
    fetchBreeds();
  }, []);

  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name,
  }));

  useEffect(() => {
    if (selectedBreed === null) return;

    async function fetchCats() {
      const data = await getCats(selectedBreed);
      setCat(data[0]);
    }
    fetchCats();
  }, [selectedBreed]);

  return (
    <>
      {options.length > 0 && (
        <Select
          options={options}
          onChange={option => setSelectedBreed(option.value)}
        />
      )}
      {cat && (
        <div>
          <img src={cat.url} alt="" width="320" />
        </div>
      )}
      {/* <StickerList stickers={stickers} /> */}
      <GlobalStyle />
    </>
  );
};
