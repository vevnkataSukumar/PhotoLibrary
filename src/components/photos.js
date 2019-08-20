import React, {Component} from 'react';
// import ProgressiveImage from 'react-progressive-image';

export default class Photos extends Component {

    render() {
        const {albumPhotos} = this.props;

        return(
            <div>
                <h1>Photos</h1>
                <div className="imageBox">
                {
                    (albumPhotos && albumPhotos.isLoading) ?
                        <div>Loading data......</div>
                    :
                    (albumPhotos && albumPhotos.data) &&
                    albumPhotos.data.map((album,index) => {
                        return (
                            <div key={index} className="imageContainer">
                                <img className="imageBanner" src={album.thumbnailUrl} alt={album.title} ></img>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        )
    }
}