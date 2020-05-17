import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const Card = ({ result, lyrics }) => {
  const [play, setPlay] = useState(false);
  return (
    <Fragment>
      <div class='row'>
        <div class='col'>
          <div class='card'>
            {play ? (
              <iframe
                src={`https://www.youtube.com/embed/${result.id.videoId}`}
                title={result.id.videoId}
                style={{ width: "100%", height: "550px" }}
              ></iframe>
            ) : (
              <div class='card-image'>
                <img
                  src={result.snippet.thumbnails.high.url}
                  alt={result.title}
                />

                <span class='card-title red'>{result.snippet.title}</span>
              </div>
            )}
            {result.snippet.description !== "" && (
              <div class='card-content'>
                <p>{result.snippet.description}</p>
              </div>
            )}
            <h4>Lyrics</h4>
            <div class='card-content'>
              <p>{lyrics}</p>
            </div>
            <div class='card-action'>
              <button
                class='btn waves-effect waves-light black'
                type='submit'
                name='action'
                onClick={(e) => setPlay(!play)}
              >
                {play ? "Stop" : "Play"}
                <i class='material-icons right'>
                  {play ? "stop" : "play_circle_filled"}
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Card.propTypes = {
  result: PropTypes.object.isRequired,
  lyrics: PropTypes.string.isRequired,
};

export default Card;
