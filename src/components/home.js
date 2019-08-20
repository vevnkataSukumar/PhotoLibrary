import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

export default class Home extends Component {

    render() {
        const { actions, albums } = this.props;
        return(
            <div className='home'>
                <h1 >Albums</h1>
                <div className='homegrid'>
                {
                    (albums && albums.isLoading) ?
                        <div>Loading data......</div>
                    :
                    albums && albums.data.map((album,index) => {
                        return (
                            <Link key={index}  className="albumBox" to={`/photos?albumId=${album.id}`} params={{ id: album.id }} >{album.title}</Link>
                        );
                    })
                }
                </div>
            </div>
        )
    }
}