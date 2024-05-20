import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";

function Card({ characterId, name, image, status, species, location }) {
  /**
   * * We'll try to detect an id in the URL, using useParams hook.
   */
  const { id } = useParams();

  /**
   * * Id detected ? We render a specific card.
   */
  if (id)
    return (
      <figure className="detailed-card">
        <img src={image} alt={"Character whose name is : " + name} />
        <hgroup>
          <h2>{name}</h2>
          <h3>{`Status : ${status === "Alive" ? "🟢" : "🔴"} - ${species}`}</h3>
          <section>
            <h4>Last know location</h4>
            <p>{location}</p>
          </section>
        </hgroup>
      </figure>
    );

  /**
   * * No id detected ? We render the common cards.
   */ 

  return (
    <figure className="card">
      <NavLink to={`/${characterId}`}>
        <img src={image} alt={"Character whose name is : " + name} />
        <figcaption>{name}</figcaption>
      </NavLink>
    </figure>
  );
}

export default Card;

Card.propTypes = {
  characterId: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string,
  species: PropTypes.string,
  location: PropTypes.string,
};
