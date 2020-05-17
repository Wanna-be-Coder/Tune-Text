import {
  GET_RESULTS,
  CLEAR_RESULTS,
  SET_LOADING,
  SEARCH_ERROR,
} from "../actions/types";
import youtube from "../youtube";

//Fetch data
export const getResults = (title, artistName) => async (dispatch) => {
  try {
    setLoading();
    let lyricsData = "";
    //Youtube API call
    const response = await youtube.get("/search", {
      headers: { "Content-Type": "application/json" },
      params: {
        maxResults: 10,
        key: "AIzaSyBGeD6dCCkPZSBc9i9jL4tMEo_9m3Wxnwg",
        q: `${artistName} - ${title}`,
        part: "snippet",
      },
    });
    console.log(response.data.items);
    const res = await fetch(`https://api.lyrics.ovh/v1/${artistName}/${title}`);
    const lyrics = await res.json();
    console.log(lyrics);
    if (lyrics.error) {
      lyricsData =
        "Sorry couldn't get the lyrics please be exact with the inputs if you want them";
    } else {
      lyricsData = lyrics.lyrics;
    }
    dispatch({
      type: GET_RESULTS,
      payload: { data: response.data.items, lyrics: lyricsData },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SEARCH_ERROR,
      payload: error,
    });
  }
};

//Clear data
export const clearResults = () => {
  setLoading();
  return { type: CLEAR_RESULTS };
};
//Loading initiate
export const setLoading = () => {
  return { type: SET_LOADING };
};
