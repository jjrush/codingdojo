import React, { Component } from 'react';
import './PersonCard.css';


const PersonCard = props => {
    return (
        <div className="PersonCard">
            <ul className="PersonCardStyleUL">
                <li><h2>{props.name}</h2></li>
                <li>Age: {props.age}</li>
                <li>Hair Color: {props.color}</li>
            </ul>
        </div>
    )
}

// OLD CODE FOR COMPARISON ONLY - INTENTIONALLY LEFT HERE

// class PersonCard extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             age: this.props.age
//         };
//     }

//     increaseAge = () => {
//         this.setState( { 'age': this.state.age + 1 } );
//     }

//     render() {
//         return (
//             <div className="PersonCard">
//                 <ul className="PersonCardStyleUL">
//                     <li><h2>{this.props.name}</h2></li>
//                     <li>Age: {this.state.age}</li>
//                     <li>Hair Color: {this.props.color}</li>
//                 </ul>
//                 <button className="PersonCardButton" onClick={ this.increaseAge }>Birthday button for {this.props.name}</button>
//             </div>
//         )
//     }
// }

export default PersonCard;