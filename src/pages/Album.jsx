import { useState, useEffect } from "react";
import "./Album.css";


const Album = ({ match }) => {
  const albumId = match.params.id
  console.log(albumId)

  const [trackArray, setTrackArray] = useState([])
  const [albumName, setAlbumName] = useState("")

  const searchTrackList = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "ee2d36b39fmsh97cf1f56660e250p12cdf8jsn85080d3b2768",
          }
        }
      )

      let trackList = await response.json()
      setAlbumName(trackList.title)
      setTrackArray(trackList.tracks.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchTrackList()
  }, [])

  return (
    <div className ="albumContainer">
      {console.log(albumName)}
      {console.log(trackArray)}
      <div className=" main-container main-container-album container-fluid album-songs-container">
        <div className="top-of-artist-songs mb-3 pt-3">
        </div>
        <div className="row ml-1">
          <table className="table table-borderless ml-3">
            <thead>
              <tr className="border_bottom">
                <td>#</td>
                <td>TITLE</td>
                <td>
                  <i className="bi bi-clock keep-on-page-clock"></i>
                </td>
              </tr>
            </thead>
            <tbody>
              {trackArray.map((track) => (
                <tr>
                  <td className="align-middle">{track.number}</td>
                  <td>
                    <div className="albumSong">
                      <strong>{track.title}</strong>
                    </div>
                    <div className="artist-name">{track.artist.name}</div>
                  </td>

                  <td className="align-middle keep-on-page">
                    {track.duration}
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
            </div>
            </div>
            </div>
          
  )
}

export default Album;