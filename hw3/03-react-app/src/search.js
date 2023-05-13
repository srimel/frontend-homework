import { useState } from 'react';

export default function Search(props) {
  const [name, setName] = useState('');
  const [foundName, setFoundName] = useState('');
  const [foundImgage, setFoundImage] = useState('');

  function searchName(name) {
    const foundCharacter = props.characters.find(
      (character) => character.fullName.toLowerCase() === name.toLowerCase(),
    );
    if (foundCharacter) {
      console.log('Character found', foundCharacter);
      setFoundName(foundCharacter.fullName);
      setFoundImage(foundCharacter.imageUrl);
    } else {
      console.log('Character not found', name);
      alert(`${name} not found`);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('target value:', name);
    searchName(name);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="container">
      <form className="m-3" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="search-input">
          Search the full name of a Game of Thrones character:
        </label>
        <input
          id="search-input"
          className="form-control w-25 mx-auto"
          type="text"
          value={name}
          onChange={handleChange}
        />
      </form>
      {foundName && (
        <div className="result">
          <h3>{foundName}</h3>
          <img src={foundImgage} alt={foundName} />
        </div>
      )}
    </div>
  );
}
