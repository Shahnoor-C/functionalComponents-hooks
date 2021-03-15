import React from 'react'

const Results = props =>{
    const {firstName,lastName,email,password,confirmPassword} = props.data; 
    return(
        <div>
            <h2>Results</h2>
            <p>First Name:{}</p>
            <p>Last Name:{}</p>
            <p>Email:{}</p>
            <p>Password:{}</p>
            <p>Confirm Password:{}</p>

        </div>
    );
};
export default Results;