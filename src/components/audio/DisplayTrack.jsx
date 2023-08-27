/* eslint-disable react/prop-types */
import { BsMusicNoteBeamed } from 'react-icons/bs';
import PropTypes from 'prop-types';
import "./DisplayTrack.scss";

const DisplayTrack = ({ currentTrack, audioRef, setDuration,
    progressBarRef, handleNext }) => {

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
        console.log(audioRef.current.duration);
    };


    return (
        <div>
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={handleNext}
            />
            <div className="audio-info">
                <div className="audio-image">
                    {currentTrack.thumbnail ? (
                        <img src={currentTrack.thumbnail} alt="audio avatar" />
                    ) : (
                        <div className="icon-wrapper">
                            <span className="audio-icon">
                                <BsMusicNoteBeamed />
                            </span>
                        </div>
                    )}
                </div>
                <div className="text">
                    <p className="title">{currentTrack.title}</p>
                    {/* <p>{currentTrack.author}</p> */}
                </div>
            </div>
        </div>
    );
};







DisplayTrack.propTypes = {
    music: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
        })
    ).isRequired,
};




export default DisplayTrack;








