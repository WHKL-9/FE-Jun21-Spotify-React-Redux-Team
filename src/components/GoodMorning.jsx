import { Row, Container, Col } from "react-bootstrap";
import SmallCard from "./SmallCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/GoodMorning.css";



const GoodMorning = ({ artistName, addToCurrentSong }) => {
  const [albumsArray, setAlbumsArray] = useState([]);
  const [artistId, setArtistId] = useState([]);
  const [searchInfo, setSearchInfo] = useState([]);
  console.log(albumsArray);

  const searchAlbumsFetch = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "ee2d36b39fmsh97cf1f56660e250p12cdf8jsn85080d3b2768",
          },
        }
      );

      let albumsList = await response.json();
      if (response.ok) {
        setAlbumsArray(albumsList.data.slice(0, 5));
        setArtistId(albumsList.data);
        setSearchInfo(albumsList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(albumsArray);
    searchAlbumsFetch();
    console.log(albumsArray);
  }, []);

  console.log(albumsArray);

  return (
    <Container>
      {/* <Link id="artistLink" to={`/artist/${searchInfo.data[0].artist.id}`}> */}
      <h2 className="mt-5 text-white">{artistName}</h2>
      {/* </Link> */}
      <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {albumsArray.map((songObj) => (
          <Col className="px-0" key={songObj.id} >
            <SmallCard songObj={songObj} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GoodMorning;
