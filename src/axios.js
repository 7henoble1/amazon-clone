import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-8a857.cloudfunctions.net/api' // THE API (cloud function) URL
});

export default instance;

//https://us-central1-clone-8a857.cloudfunctions.net/api

//http://localhost:5001/clone-8a857/us-central1/api