import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;


// https://api.themoviedb.org/3/trending/all/week?api_key=bc2f9a5a312555ea300e2edc245d583b&language=en-US

//axios("")