/* eslint-disable no-unused-vars */
// import Shows from "../../components/shows/Shows"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Homes.scss";
// import { showcards } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import AudioPlayer from "../../components/audio/AudioPlayer";
import { tracks } from "../../audiodata/tracks";
import { useAudioContext } from "../../AudioContext";




const Home = () => {


  const { trackIndex, setTrackIndex, currentTrack, setCurrentTrack } = useAudioContext();


  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-container">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="lists">
          <span>Good morning</span>
          <div className="list">
            <div className="cont">
              <img src="https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Liked Songs</span>
            </div>
            <div className="cont">
              <img src="https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Netflix Playlist</span>
            </div>
            <div className="cont">
              <img src="https://images.pexels.com/photos/69378/pexels-photo-69378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>K/ DA</span>
            </div>
            <div className="cont">
              <img src="https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <span>Liked Songs</span>
            </div>
            <div className="cont">
              <img src="https://images.pexels.com/photos/5772861/pexels-photo-5772861.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <span>Dance / Electronic Mix</span>
            </div>
          </div>
        </div>

        {/* <div className="shows">
          {showcards.map((card) =>
            <Shows key={card.id} card={card} />
          )}
        </div> */}

        <div className="songs-display">
          <div className="music">
            Music you might like
          </div>

          <div className="music-tracks">
            {tracks.map((track, index) => (
              <button
                key={index}
                className={`track-card ${index === trackIndex ? 'active' : ''}`}
                onClick={() => {
                  setTrackIndex(index);
                  setCurrentTrack(track);
                  console.log("button clicked")
                }}
              >
                <img src={track.thumbnail} alt={track.title} />
                <span className="truncated-text">{track.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="music-player">
          <AudioPlayer />
        </div>
      </div>

    </div>
  )
}

export default Home
