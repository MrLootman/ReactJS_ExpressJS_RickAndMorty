import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import Card from "../Card";
import useTheme from "../hooks/useTheme";

import Rick from "../../assets/rick_sanchez.png/";

function HomePage() {
  // * Hooks :
  const data = useLoaderData();
  const { theme } = useTheme();

  // * State :
  const [text, setText] = useState("");

  // * Functions :
  const handleChange = (e) => {
    setText(e.target.value.toLowerCase());
  };

  const filteredArr = data.results.filter((el) =>
    el.name.toLowerCase().includes(text)
  );

  return (
    <main className={`home-page ${theme && "light-theme"}`}>
      <h1>Rick and Morty</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Trouvez votre personnage"
      />
      <section>
        {filteredArr.length ? (
          filteredArr.map((el) => (
            <Card
              key={el.id}
              characterId={el.id}
              name={el.name}
              image={el.image}
              text={text}
            />
          ))
        ) : (
          <>
            <img src={Rick} alt="No results" />
            <p>No results</p>
          </>
        )}
      </section>
    </main>
  );
}

export default HomePage;
