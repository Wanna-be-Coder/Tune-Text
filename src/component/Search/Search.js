import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResults, clearResults } from "../../actions/searchActions";
import PreLoader from "../layout/Preloader";
import M from "materialize-css/dist/js/materialize.min.js";
import Card from "./Card";

const Search = ({
  search: { loading, results, lyrics },
  getResults,
  clearResults,
}) => {
  const [title, setTitle] = useState("");
  const [artistName, setArtist] = useState("");
  const handleSubmit = () => {
    if (title === "" || artistName === "") {
      M.toast({ html: `Please enter a title & an artist` });
    } else {
      getResults(title, artistName);
    }
  };
  const handleClear = () => {
    clearResults();
    setTitle("");
    setArtist("");
  };

  return (
    <div>
      <h4>Search Your Song</h4>
      <div className='row'>
        <div className='input-field'>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <lable htmlFor='title' className='active'>
            Song Title
          </lable>
        </div>
      </div>
      <div className='row'>
        <div className='input-field'>
          <input
            type='text'
            name='artistName'
            value={artistName}
            onChange={(e) => setArtist(e.target.value)}
          />
          <lable htmlFor='artistName' className='active'>
            Artist Name
          </lable>
        </div>
      </div>
      <div className='row'>
        <div class='waves-effect waves-light btn blue ' onClick={handleSubmit}>
          SEARCH
        </div>
        <div
          class='waves-effect waves-light btn red right'
          onClick={handleClear}
        >
          CLEAR
        </div>
      </div>
      {results === null ? (
        <Fragment></Fragment>
      ) : (
        <ul className='collection'>
          {loading ? (
            <PreLoader />
          ) : (
            results.map((result) => <Card result={result} lyrics={lyrics} />)
          )}
        </ul>
      )}
    </div>
  );
};
Search.propTypes = {
  getResults: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { getResults, clearResults })(Search);