export const playSong = (songToPlay) => ({
  type: "PLAY_SONG",
  payload: songToPlay,
});

export const addSongToPlaylist = (songToPlaylist) => ({
  type: "ADD_SONG_TO_PLAYLIST",
  payload: songToPlaylist,
});

export const removeSongFromPlaylist = (songFromPlaylist) => ({
  type: "REMOVE_SONG_FROM_PLAYLIST",
  payload: songFromPlaylist,
});

// might need to use fetch - async - await 