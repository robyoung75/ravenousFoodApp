import React from 'react';
import './business.css';



/*

Business React component:
The purpose of the <Business /> component is to represent how a business (a restaurant) in 
app will be formatted and styled. First I hard code a single business listing. 
Later, I update it dynamically using the Yelp API.

*/

// Hard code object for formatting. Will be replaced with Yelp API:

class Business extends React.Component {
    render() {
        return <div className ="Business">
        <div className ="image-container">
          <img className="foodImg" src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className ="Business-information">
          <div className ="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
          </div>
          <div className ="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className ="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    }
}

export default Business;