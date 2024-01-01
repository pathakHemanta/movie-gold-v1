import axios from "axios";

export default function Test() {
  async function getMovies() {
    const response = await axios.get("https://localhost:7091/api/Movies");
    console.log(response.data);
  }

  getMovies();
  return;
}
