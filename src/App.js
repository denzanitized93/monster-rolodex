import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [keyword, setKeyword] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]); // [value, setValue]
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    console.log('useeffect1');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);
  
  useEffect(() => {
    console.log('useeffect2');
    const newFilteredMonster = monsters.filter(monster => {
      let name = monster.name.toLowerCase();
      return name.includes(keyword);
    });

    setFilteredMonsters(newFilteredMonster);
  }, [monsters, keyword]);

  const searchMonster = (event) => {
    const keywordVal = event.target.value;
    setKeyword(keywordVal);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox
        className='monster'
        placeholder='Search monster'
        onChangeHandler={ searchMonster }
      />
      <CardList
        monsters={ filteredMonsters }
      />
    </div>
  )
}

export default App;
