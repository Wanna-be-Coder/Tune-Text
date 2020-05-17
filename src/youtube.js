import axios from "axios";
// const KEY = "AIzaSyBGeD6dCCkPZSBc9i9jL4tMEo_9m3Wxnwg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});
