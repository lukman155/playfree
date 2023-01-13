/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getGames } from '../redux/homepageSlice';
import Card from './Card';
import NavBar from './NavBar';
import './homepage.css';

const Homepage = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  useEffect(() => {
    if (games.length) {
      return;
    }
    dispatch(getGames());
  }, [dispatch, games.length]);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = games.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(games.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % games.length;
    setItemOffset(newOffset);
  };

  const gameList = currentItems.map((game) => <Card game={game} key={game.id} />);

  return (
    <>
      <NavBar />
      <section>
        <div>
          <p className="game-title">
            <b>371</b>
            {' '}
            free-to-play games found in our games list!

          </p>
          <div className="row">

            {gameList}
            <div className="main-pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel="&raquo;"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="&laquo;"
                renderOnZeroPageCount={null}
                className="pagination"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
