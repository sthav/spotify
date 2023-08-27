/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { tracks } from './audiodata/tracks';

// Create a context
const AudioContext = createContext();

// Create a provider component
export const AudioProvider = ({ children }) => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

    return (
        <AudioContext.Provider
            value={{
                trackIndex,
                setTrackIndex,
                currentTrack,
                setCurrentTrack,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
};

// Custom hook to access the context
export const useAudioContext = () => {
    return useContext(AudioContext);
};


  // const [trackIndex, setTrackIndex] = useState(0);
