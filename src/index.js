//imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import Header from './components/header';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Key for Youtube API
const API_KEY = '';

// create component(s)
/*
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}*/
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Messi');
  }

  videoSearch(query) {
    YTSearch( {key: API_KEY, term: query},
      (response) => {
        this.setState({
          videos: response,
          selectedVideo: response[0]
        })
      });
  }

   render() {
     const videoSearch = _.debounce( (query) => {this.videoSearch(query)}, 300);
    return (
      <div className="row">
        <Header />
        <SearchBar onSearchQueryChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) }
          videos={this.state.videos} />
      </div>
    );
  }
}


// start rendering
ReactDOM.render(<App />, document.querySelector('.app'));
