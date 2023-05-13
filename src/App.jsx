import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import text from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [teksti, asetaTeksti] = useState(text);

  useEffect(() => {
    asetaTeksti(text.slice(0, count));
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    asetaTeksti(text.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h4>Hepreakeneraattori</h4>
      <hr className="title-underline" />
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="numberInput">Paragraphs:</label>
        <input
          type="number"
          name="numberInput"
          id="numberInput"
          min="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generoi
        </button>
      </form>
      <div className="lorem-text">
        {teksti.map((tekstipatka) => {
          const id = nanoid();
          return (
            <p key={id}>
              {id}: {tekstipatka}
            </p>
          );
        })}
      </div>
    </section>
  );
};
export default App;
