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
  const [search, setSearch] = useState('');

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = games.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(games.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % games.length;
    setItemOffset(newOffset);
  };

  const [category, setcategory] = useState('');
  const categoryList = ['mmorpg', 'shooter', 'strategy', 'racing', 'sports', 'social', 'fantasy'];

  let gameList;
  const filterArr = games.filter((game) => game.name.toLowerCase().includes(search));
  if (filterArr && search !== '') {
    gameList = filterArr.map((game) => <Card game={game} key={game.id} />);
  } else {
    gameList = currentItems.map((game) => <Card game={game} key={game.id} />);
  }

  const filterArr1 = games.filter((game) => game.category.toLowerCase() === category);
  if (filterArr1 && category !== '') {
    if (filterArr < 1) {
      gameList = currentItems.map((game) => <Card game={game} key={game.id} />);
    }
    gameList = filterArr1.map((game) => <Card game={game} key={game.id} />);
  } else {
    gameList = currentItems.map((game) => <Card game={game} key={game.id} />);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCat = (e) => {
    setcategory(e.target.value);
  };

  return (
    <>
      <NavBar />

      <section>
        <div>
          <p className="game-name">
            <b>371</b>
            {' '}
            free-to-play games found in our games list!

          </p>
          <div>
            <form>
              <label htmlFor="category">
                Category
                <select
                  id="category"
                  name="category"
                  disabled={!categoryList.length}
                  onClick={handleCat}
                >
                  {categoryList.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </label>
            </form>
            <div className="search">
              <input type="text" placeholder="Search for Free Games" onChange={handleChange} value={search} className="search-input" />
            </div>

          </div>

          <div className="row">

            {gameList}

          </div>
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
      </section>
    </>
  );
};

export default Homepage;
