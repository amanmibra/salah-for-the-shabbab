import axios from 'axios';

function getSalah () {
  const url = "http://api.aladhan.com/v1/timings?latitude=25&method=2&longitude=77.5011"

  return axios.get(url)
}

export default getSalah;
