import React from 'react';
import './searchbar.css';




class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: "",
        location: "",
        sortBy: "best_match"
      };
      this.sortByOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"   
      };
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      
    };


    getSortByClass(sortByOption) {
      if (this.state.sortBy === sortByOption) {
        return 'active';
      } else {
        return '';
      }
    }

    handleSortyByChange(sortByOption) {
      this.setState({ sortBy: sortByOption });
    }

    handleTermChange(event) {
      this.setState({ term: event.target.value });
    }
    
    handleLocationChange(event) {
      this.setState({ location: event.target.value });
    }

    handleSearch(event) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);  
      event.preventDefault();
    }
    // The purpose of renderSortByOptions() is to dynamically create the list items 
    // needed to display the sort options (Best Match, Highest Rated, Most Reviewed).

    // The method iterates through the keys and values of the sortByOptions object 
    // and returns a list item. The list item elements should use the keys as an attribute, 
    // and the values as content. 
    renderSortByOptions() {
        // returns the keys of sortByOptions Object. .map iterates through the keys,
        // stores the object values to a variable sortByOptionValue
        return Object.keys(this.sortByOptions).map((sortByOption) => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortyByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
        })
    }
    render() {
        return <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>


    }

};

export default SearchBar;

