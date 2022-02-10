import React, { useEffect, useState } from "react";
import "../scss/App.scss";
import InputSearchList from "./InputSearchList";
import { uniqueNamesGenerator, names } from "unique-names-generator";

function App() {
    const [list, setList] = useState([]);
    const [results, setResults] = useState([]);
    const config = {
        dictionaries: [names],
    };

    useEffect(() => {
        const names = JSON.parse(localStorage.getItem("nameList"));
        if (names && names.length > 0) setList(names);
        else getListNames();
    }, []);

    const getListNames = () => {
        const listName = [];
        for (let i = 0; i < 500; i++) {
            listName.push(uniqueNamesGenerator(config));
        }
        setList(listName);
        localStorage.setItem("nameList", JSON.stringify(listName));
    };

    const onInput = (e) => {
        const query = e.target.value;
        if (!query) {
            setResults([]);
            return;
        }
        const queryResults = list.filter((el) => {
            if (el.includes(query)) return el;
            return null
        });
        console.log(queryResults.slice(0, 9))
        setResults(queryResults.slice(0, 9));
    };

    return (
        <div className="App">
            <InputSearchList onInput={onInput} results={results} />
        </div>
    );
}

export default App;
