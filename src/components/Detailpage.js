import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getGames } from '../redux/homepageSlice';
import NavBarDetail from './NavBarDetail';

function DetailPage() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  useEffect(() => {
    if (games.length) {
      return;
    }
    dispatch(getGames());
  }, [dispatch, games.length]);

  const { id } = useParams();
  const newArr = games.filter((item) => item.id === +id);
  const game = newArr[0];

  return (
    <div>
      <NavBarDetail />
      <div className="container">
        <div className="row-detail">
          <img src={game.image} alt={game.name} />
          <h2>{game.name}</h2>
          <h3>{game.description}</h3>
          <h3>{game.category}</h3>
          <h3>{game.platform}</h3>
          <a href={game.url}>Play</a>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
