import "./styles.css";
import { useState } from "react";
const popularDictionary = {
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": "Happy Face",
  "😂": "Laughing",
  "✔️": "Check",
  "🥺": "Pleading Face",
  "🥰": "In Love Face",
  "❤️‍🔥": "Heart on Fire",
  "👍": "Thumbs Up"
};
export default function App() {
  var [dictionary, setdictionary] = useState("");
  function changeHandler() {
    var input = event.target.value;
    var meaning = popularDictionary[input];
    if (meaning === undefined) {
      meaning = "Sorry, we do not have this in our database.";
    }

    setdictionary(meaning);
  }
  function clickHandler(emoji) {
    var meaning = popularDictionary[emoji];
    setdictionary(meaning);
  }
  var dictionaryList = Object.keys(popularDictionary);
  return (
    <div className="App">
      <h1> Emoji| Interpreter </h1>
      <input onChange={changeHandler} />
      <h2> {dictionary} </h2>
      {dictionaryList.map((item) => (
        <span onClick={() => clickHandler(item)} style={{ cursor: "pointer" }}>
          {" "}
          {item}{" "}
        </span>
      ))}
    </div>
  );
}
