import { useEffect, useRef, useState } from "react"
import Controls from "./Controls"
import DisplayTrack from "./DisplayTrack"
import ProgressBar from "./ProgressBar";
import { tracks } from "../../audiodata/tracks";
import "./AudioPlayer.scss";
import {
    IoMdVolumeHigh,
    IoMdVolumeOff,
    IoMdVolumeLow,
} from 'react-icons/io';
import { useAudioContext } from "../../AudioContext";


const AudioPlayer = () => {


    const { trackIndex, setTrackIndex, currentTrack, setCurrentTrack } = useAudioContext();


    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    // const [trackIndex, setTrackIndex] = useState(0);
    // const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);



    const audioRef = useRef();
    console.log(audioRef);

    const progressBarRef = useRef();

    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
            audioRef.current.muted = muteVolume;
        }
    }, [volume, audioRef, muteVolume]);


    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    return (
        <div className="audio-player">
            <div className="inner">
                <div className="display">
                    <DisplayTrack
                        currentTrack={currentTrack}
                        audioRef={audioRef}
                        setDuration={setDuration}
                        progressBarRef={progressBarRef}
                        handleNext={handleNext}
                    />
                </div>
                <div className="twin">
                    <div className="control">
                        <Controls
                            audioRef={audioRef}
                            progressBarRef={progressBarRef}
                            duration={duration}
                            setTimeProgress={setTimeProgress}
                            tracks={tracks}
                            trackIndex={trackIndex}
                            setTrackIndex={setTrackIndex}
                            setCurrentTrack={setCurrentTrack}
                            handleNext={handleNext}
                        />
                    </div>
                    <div className="progress">
                        <ProgressBar progressBarRef={progressBarRef} audioRef={audioRef}
                            timeProgress={timeProgress}
                            duration={duration} />
                    </div>
                </div>

                <div className="volume">
                    <button onClick={() => setMuteVolume((prev) => !prev)}>
                        {muteVolume || volume < 5 ? (
                            <IoMdVolumeOff />
                        ) : volume < 40 ? (
                            <IoMdVolumeLow />
                        ) : (
                            <IoMdVolumeHigh />
                        )}
                    </button>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        style={{
                            background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}




export default AudioPlayer
