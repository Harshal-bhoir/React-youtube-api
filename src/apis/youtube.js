import axios from 'axios';

const KEY = 'AIzaSyCy_J2uQhK8So3fG39ZKTTQw1E0Pgo17kk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})