import { useLoaderData } from "react-router-dom";
import Card from "../Card";
import useTheme from "../hooks/useTheme";

function DetailPage() {
  const data = useLoaderData();
  const { theme } = useTheme();

  return (
    <main className={`detail-page ${theme && "light-theme"}`}>
      <Card
        characterId={data.id}
        status={data.status}
        name={data.name}
        image={data.image}
        species={data.species}
        location={data.location.name}
      />
    </main>
  );
}

export default DetailPage;
