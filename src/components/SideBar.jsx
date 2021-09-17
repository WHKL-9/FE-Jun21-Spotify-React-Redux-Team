import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlusSquare, faSearch, faStream, faHeart } from '@fortawesome/free-solid-svg-icons'
import "../components/SideBar.css"


const Side = props => {
   

    return (
        <>
            <Nav className="pl-3 col-md-2 d-none d-md-block sidebar"
            activeKey="/home"
            >
                <img
                alt=""
                src="https://logosmarken.com/wp-content/uploads/2020/09/Spotify-Logo.png"
                width="120"
                height="auto"
                className="d-inline-block align-top mt-3 mb-3"
            />
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link id="navText" href="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="link-2"><FontAwesomeIcon icon={faSearch} /> Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><FontAwesomeIcon icon={faStream} /> Your Library</Nav.Link>
            </Nav.Item>
            <br/>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><FontAwesomeIcon icon={faPlusSquare} /> Create Playlist</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><FontAwesomeIcon icon={faHeart} /> Liked Songs</Nav.Link>
            </Nav.Item>
            <br/>
            <div id="sideMenu">
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Funky Heavy Bluesy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Your Top Songs 2020</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">In Love With You-</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This Is Rod Stewart</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">FRANCHISE ft.Young Thug...</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Your Top Songs 2019</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Palleggio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This is Joe Bonamassa</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Jun19</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Jack 30th Party 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Jack 30th Party</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">This is Opeth</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Metal Ballads</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">New Playlist</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Your Top Songs 2018</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled">Jazz Classics Blune Note Editi...</Nav.Link>
            </Nav.Item>
            </div>
            </Nav>
        </>
        )
  }

  const SideBar = withRouter(Side)

  export default SideBar