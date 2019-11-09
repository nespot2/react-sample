import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {title: 'No Scrubs', durations: '4.05'},
        {title: 'Macarena', durations: '2.30'},
        {title: 'All star', durations: '3.15'},
        {title: 'I want it that way', durations: '1.45'}
    ];
};

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs : songsReducer,
    selectedSong: selectSongReducer
})