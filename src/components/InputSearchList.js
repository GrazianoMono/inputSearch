import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "../assets/images/search.svg";
import "../scss/InputSearchList.scss";

function InputSearchList({ placeHolder, onInput, results }) {
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
                <ul id="search-results-list" className="search-results__list">
                    {results.map((el) => {
                        return <li key={el}>{el}</li>;
                    })}
                </ul>
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
