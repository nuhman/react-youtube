import React , {Component} from 'react';

/* Fucntional Component - Doesn't know anything about it's state */
/* Commenting away.... */
/*
const SearchBar = () => {
  return <input />
}
*/

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // initialize state object
    this.state = {
      query: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <div className="search-bar col-md-10">
        <input type="text" className="search form-control" placeholder="Start Typing..."
          value={this.state.query}
          onChange = {event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  // watch for change in input and handle it
  onInputChange(query) {
    this.setState({
      query: query
    });
    this.props.onSearchQueryChange(query);
  }
}

export default SearchBar;
