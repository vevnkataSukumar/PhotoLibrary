import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../components/home';
import { fetchAlbums, albumPhotos } from '../Actions/index';

class HomePage extends Component {

    componentDidMount() {
        this.props.actions.fetchAlbums();
        this.props.actions.albumPhotos({
            id: 1,
        });
    }

    render() {
        const { actions, albums } = this.props;
        console.log(this.props);
        
        return(
            <Home 
                actions={actions}
                albums={albums}
            />
        )
    }
}

// Sending State as props to component
function mapStateToProps(state) { 
    return {
        albums: state.albums,
        albumPhotos:state.albumPhotos,
    };
}

// Sending actions as props to component 
function MapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ fetchAlbums, albumPhotos }, dispatch)
    };
}

export default connect(mapStateToProps, MapDispatchToProps)(HomePage);