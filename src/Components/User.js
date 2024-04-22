import React from "react";

class User extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    

    render(){
        const {name, location} = this.props;
        
        return (
            <>
              <h1>Name : {name}</h1>
              <h2>Location: {location}</h2>
              <a href="https://vaishnavi-shelke.netlify.app/">Portfolio</a>
            </>
        )
    }
}

export default User;