import react, { useState } from "react";
import PropTypes from "prop-types";
import '../scss/App.scss'
import InputSearchList from "./InputSearchList";
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

function App() {
    const [list, setList] = useState((localStorage.getItem('nameList').split(',') || []))
    const [results, setResults] = useState([])
    const config = {
      dictionaries: [names]
  }

    function getListName () {
      if (!list.length) return

      const listName = []
      for (let i=0; i<500; i++) {
        listName.push(uniqueNamesGenerator(config))
      }
      setList(listName)
      localStorage.setItem('nameList', listName)
    }

    function onInput (e) {
      const query = e.target.value
      if (!query) {
        setResults([])
        return
      }
      const queryResults = list.filter(el => {
        if (el.includes(query)) return el
      })
      setResults(queryResults.slice(0, 9))
    }

    return (
        <div className="App" onLoad={getListName}>
            <InputSearchList onInput={onInput} results={results} />
        </div>
    );
}

export default App;
