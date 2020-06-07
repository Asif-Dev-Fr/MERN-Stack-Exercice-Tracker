import React, {Component} from 'react';

class CreateUser extends Component {
    render() {
        const changeColor = (e) => {
            console.log('Hello');
            e.target.classList.add('changeColor');

        }
        return( 
            <div>
                <p className="" onClick={changeColor}>You are on the Create User Component</p>
            </div>
        )
    }
}

export default CreateUser;