/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Card = ({ game }) => (
  <div className="card" key={game.id}>
    <Link to={`/${game.id}`}>
      <img src={game.image} alt={game.name} />
      <h2>{game.name.length > 17 ? `${game.name.slice(0, 17)}...` : game.name }</h2>
      <p>
        {' '}
        { game.description.length > 45 ? `${game.description.slice(0, 45)}...` : game.description }
      </p>
    </Link>
  </div>
);

export default Card;
