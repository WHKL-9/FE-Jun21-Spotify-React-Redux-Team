/* import React from "react";

const Artist = () => {
  return (
    <div>
      <h2>Artist</h2>
    </div>
  )
}

export default Artist */

import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./Artist.css";
import SingleAlbum from "../components/SingleAlbum"
import SingleSong from "../components/SingleSong"

const Artist = ({ match }) => {
    const artistId = match.params.id
    console.log(artistId)
  
    const [topTrackArray, setTopTrackArray] = useState([])
    const [topAlbumArray, setTopAlbumArray] = useState([])
    const [artistJumbo, setArtistJumbo] = useState("")
  
    const getArtistObject = async () => {
      try {
        let response1 = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
        );
        let artistObj = await response1.json()
        setArtistJumbo(artistObj.picture_big)
  
        let response2 = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=5`
        );
        let topFive = await response2.json()
        setTopTrackArray(topFive.data.slice(0, 5))
  
        let response3 = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistObj.name}`
        );
        let topAlbums = await response3.json();
        setTopAlbumArray(topAlbums.data.slice(0, 6))
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getArtistObject(artistId)
    }, [])
  

  return (
    
    <div className="artist-page__wrap">
      <img className="artist__header" src={artistId.picture_xl} />
      <div className="header__wrap--art">
          <div className='listeners'>{artistId?.nb_fan} MONTHLY LISTENERS</div>
          <h1>{artistId?.name}</h1>
      </div>
      <h2>Albums</h2>
      <div className='artist__line'>
        {artistId?.albums?.map((album) => (
          <SingleAlbum src={album.cover_medium} key={album.id} />
        ))}
      </div>
      <h2>Top tracks</h2>
      <div className='artist__tracks'>
        {artistId?.tracklist?.map((song) => (
          <SingleSong title={song.title} artistId={song.artistId.name} duration={song.duration / 60} />
        ))}
      </div>
    </div>
  )
}
export default Artist;