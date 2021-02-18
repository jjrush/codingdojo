import React, { Component } from 'react';
import './PersonCard.css';

class PersonCard extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: this.props.name,
    //         age: this.props.age,
    //         color: this.props.color
    //     };
    // }
    render() {
        return (
            <div>
                <ul className="PersonCardStyleUL">
                    <li><h2>{this.props.name}</h2></li>
                    <li>Age: {this.props.age}</li>
                    <li>Hair Color: {this.props.color}</li>
                </ul>
            </div>
        )
    }
}

export default PersonCard;