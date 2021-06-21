import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from "../queries/queries";

class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <div id="book-details">
                <p>Book Details will be displayed here</p>
            </div>
        );
    }
}
 
export default graphql(getBookQuery)(BookDetail);