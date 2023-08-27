import Sidebar from "../../components/sidebar/Sidebar"
import { catcards } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import AudioPlayer from "../../components/audio/AudioPlayer";
import Category from "../../components/category/Category";
import "./Search.scss";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catcard/Catcard";

const Search = () => {
  return (
    <div className="search">
      <Sidebar />
      <div className="main-container">
        <div className="Navbar">
          <Navbar />
        </div>

        {/* slider */}
        <Slide slidesToShow={5} arrowsScroll={5}>
          {catcards.map((card) => (
            <CatCard key={card.id} card={card} />
          ))}
        </Slide>


        <div className="cate">
          {catcards.map((card) =>
            <Category key={card.id} card={card} />
          )}
        </div>
        <div className="music-player">
          <AudioPlayer />
        </div>
      </div>

    </div>
  )
}

export default Search
