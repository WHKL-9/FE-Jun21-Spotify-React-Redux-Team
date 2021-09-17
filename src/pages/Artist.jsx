import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./Artist.css";
import SingleAlbum from "../components/SingleAlbum";
import SingleSong from "../components/SingleSong";
import { Link } from "react-router-dom";
import { FaHeart, FaPlay } from 'react-icons/fa';

const Artist = ({ match }) => {
  const artistId = match.params.id;
  console.log(artistId);

  const [topTrackArray, setTopTrackArray] = useState([]);
  const [topAlbumArray, setTopAlbumArray] = useState([]);
  const [artistJumbo, setArtistJumbo] = useState("");
  const [artistName, setArtistName] = useState("");

  const getArtistObject = async () => {
    try {
      let response1 = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
      );
      let artistObj = await response1.json();
      setArtistName(artistObj.name);
      setArtistJumbo(artistObj.picture_big);

      let response2 = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=10`
      );
      let topFive = await response2.json();
      setTopTrackArray(topFive.data.slice(0, 5));

      let response3 = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistObj.name}`
      );
      let topAlbums = await response3.json();
      setTopAlbumArray(topAlbums.data.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArtistObject();
  }, []);

  

    return (
      
      <div className="artistDiv col-12 col-md-12">
        <img className="artist__header" src={artistJumbo} alt="artist" />
        <div className="header__wrap--art">
        <h1 className="titleMain text-white mr-auto mt-auto">{artistName}</h1>
            <div id="listeners">1,345,268 monthly listeners</div>
 <h1>{artistId?.name}</h1>
</div>
        <Row>
   
            <div
              className="d-flex mr-auto mt-4"
              id="button-container"
            >
              <button
                className="btn btn-success ml-4 mainButton"
                id="playButton"
              >
                <FaPlay/>
              </button>
              <button
                className="btn btn-outline-light ml-5 mainButton"
                id="followButton"
              >
                FOLLOW
              </button>
            </div>
          
        </Row>
        <Row className="mb-3">
          <Col xs={12}>
            <div className="mt-4 justify-content-start">
              <h2 className="text-white font-weight-bold">Popular</h2>
              
              {topTrackArray.map((track) => (
                
          <p key={track.id} className="d-flex flex-row text-white">
            <img id="smallCardImg" src={track.album.cover_small} alt="" />
            {track.title}{track.duration}
            <button
                className="btn btn-outline-light ml-auto"
                id="favbtn"
              >
                <FaHeart />
              </button>
          </p>
        ))}
            </div>
            <div className="pt-5 mb-5">
              
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12}>
          <div className="mt-4 justify-content-start">
              <h2 className="text-white font-weight-bold">Popular releases</h2>
              
              {topTrackArray.map((track) => (
                
          <p key={track.id} className="d-flex flex-row text-white">
            <img id="smallCardImg" src={track.album.cover_small} alt="" />
            {track.title}{track.duration}
            <button
                className="btn btn-outline-light ml-auto"
                id="favbtn"
              >
                <FaHeart/>
              </button>
          </p>
        ))}
            </div>
            <div className="pt-5 mb-5">
              
            </div>
          </Col>
          </Row>
          </div>
          
      
    );
  }


export default Artist;
