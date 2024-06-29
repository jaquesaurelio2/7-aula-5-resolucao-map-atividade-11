import "./styles.css";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = numbers.map((number, index) => number * number);

  console.log("numbers", numbers);
  console.log("squaredNumbers", squaredNumbers);

  const words = ["brito", "rayann", "fast", "fast"];
  const casedWords = words.map((word, index) => (
    <p key={index}>{`${word[0].toUpperCase()}${word.slice(1)}`}</p>
  ));
  console.log("casedWords", casedWords);

  return <div className="App">{casedWords}</div>;
}
