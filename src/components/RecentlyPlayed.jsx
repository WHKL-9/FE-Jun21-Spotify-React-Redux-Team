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
              `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.props.artistName}`,
              {
                method: "GET",
                headers: {
                  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                  "x-rapidapi-key": "ee2d36b39fmsh97cf1f56660e250p12cdf8jsn85080d3b2768",
              }
              }
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
                        return <LargeCard songObj={item}/>
                    })}
                </Row>
            </div>
        )
    }
}

