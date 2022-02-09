import React, { useEffect } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import SearchIcon from "../assets/images/search.svg";
import "../scss/InputSearchList.scss";

function InputSearchList({ placeHolder, onInput, results }) {
    function showResults() {
        const resultsList = [];
        for (const result of results) {
            const li = <li key={result}>{result}</li>;
            resultsList.push(li);
        }
        ReactDom.render(
            resultsList,
            document.getElementById("search-results-list")
        );
    }

    useEffect(() => {
        showResults();
    });

    return (
        <div className="input-search-list">
            <div className="search-form">
                <input
                    className="search-form__input"
                    type="text"
                    onInput={onInput}
                    placeholder={placeHolder ?? "Insert input value"}
                />
                <img
                    className="search-form__icon"
                    src={SearchIcon}
                    alt="Search Icon"
                />
            </div>
            <div className="search-results">
                <ul
                    id="search-results-list"
                    className="search-results__list"
                ></ul>
            </div>
        </div>
    );
}

InputSearchList.propTypes = {
    placeHolder: PropTypes.string,
    onInput: PropTypes.func,
    results: PropTypes.array,
};

export default InputSearchList;
