import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

class AddBook extends Component {
    getAuthors(){
        var data = this.props.data;
        if(data.loading){
            return <option disabled>Loading Authors...</option>;
        }else{
            return data.authors.map((author) => {
                return <option key={author.id} value={author.id}>{author.name}</option>;
            })
        }
    }
    render() { 
        return (  
            <form id="add-book">
                <div className="field">
                    <label>Book Name:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select Author</option>
                        {this.getAuthors()}
                    </select>
                </div>
            </form>
        );
    }
}
 
export default graphql(getAuthorsQuery)(AddBook);