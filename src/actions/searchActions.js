import {
  GET_RESULTS,
  CLEAR_RESULTS,
  SET_LOADING,
  SEARCH_ERROR,
} from "../actions/types";
import youtube from "../youtube";
import Axios from "axios";

//Fetch data
export const getResults = (title, artistName) => async (dispatch) => {
  try {
    setLoading();
    let lyricsData = "";
    //Youtube API call
    const response = await Axios(
      "https://www.googleapis.com/youtube/v3/search",
      {
        headers: { "Content-Type": "application/json" },
        params: {
          maxResults: 10,
          key: "AIzaSyBjt63QrdVlUqGEEIST49_GtAnEwiqAW6U",
          q: `${artistName} - ${title}`,
          part: "snippet",
        },
      }
    );
    console.log(response.data.item);
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
