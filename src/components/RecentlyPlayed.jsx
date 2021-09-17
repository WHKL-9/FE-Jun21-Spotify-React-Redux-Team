import { Component } from "react"
import LargeCard from "./LargeCard"
import { Row } from "react-bootstrap"
  

export default class RecentlyPlayed extends Component {
    constructor(props) {
        super(props)

        this.state = {data: undefined}
    }
    
    componentDidMount = async () => {
        try {
            let response = await fetch(
              "https://striveschool-api.herokuapp.com/api/deezer/search?q=Folamour",
              {}
            )
            if (response.ok) {
              let jsonResponse = await response.json();
              let slicedResponse = jsonResponse.data.slice(-12)
              this.setState({data: slicedResponse})
            } else {
              console.log("error");
            }
          } catch (error) {
            console.log(error);
          }
    }
    
    render() {
        return (
            <div className="mb-5 mr-5 ml-5">
                <h2 className="text-white mt-5">Recently Played</h2>
                <Row>
                    {this.state.data && this.state.data.map(item => {
                        return <LargeCard title={item.title} image={item.album.cover} artist={item.artist.name} />
                    })}
                </Row>
            </div>
        )
    }
}

