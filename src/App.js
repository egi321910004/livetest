import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const refreshPage = () => {
    window.location.reload();
  };
  const getAPI = async () => {
    const { data } = await axios.get("https://opentdb.com/api.php?amount=2");
    console.log(data);
    setData(data.results);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="App">
      <input type="input" onChange={refreshPage}></input>
      {data.map((data) => (
        <p>{data.question}</p>
      ))}
    </div>
  );
}

export default App;
