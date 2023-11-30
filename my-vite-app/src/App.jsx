import {useState} from 'react';
import './App.css';
import Header from './Header';
import Friends from './Friends';
import mockData from './_mocks_/friends';

export default function App() {
  const [data, setData] = useState(mockData);

  const addItem = function(name) {
    const uid = Math.random().toString(36).substring(2, 10);

    setData([...data, {name, uid}]);
  };

  const removeItem = function(uid) {
    setData(data.filter(item => item.uid !== uid));
  };

  const test = function(data) {
    console.log("test: ", data);
  };

  return (
    <div className="App">

      <Header text="My Friends" />

      <Friends items={data}
        deleteItem={removeItem} />

    </div>
  );
}
