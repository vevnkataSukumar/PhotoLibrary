import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Photos from '../components/photos';
import { fetchAlbums, albumPhotos } from '../Actions/index';

class PhotosPage extends Component {

    componentDidMount(){
        console.log(this.props);
        let  albumData = this.props.location && this.props.location.search;
        // const split = albumData.split("");
        // console.log(split);
        // const val = split[split.length - 1];
        // console.log(val);
        this.props.actions.albumPhotos({
            data:albumData,
        })
    }

    render() {
        const {albumPhotos} = this.props;
        return(
            <Photos
                albumPhotos={albumPhotos}
            />
        )
    }
}

// Sending State as props to component
function mapStateToProps(state) { 
    return {
        albumPhotos: state.albumPhotos,
    };
}

// Sending actions as props to component 
function MapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ fetchAlbums, albumPhotos }, dispatch)
    };
}

export default connect(mapStateToProps, MapDispatchToProps)(PhotosPage);