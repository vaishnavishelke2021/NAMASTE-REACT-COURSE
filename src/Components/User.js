import React from "react";

class User extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        console.log('constructor is rendered');

        this.state = {
            userInfo: {
                name: "username",
            blog: "blog link",
            avatar_url: "dummy-avatar"
            }  //another state
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/vaishnavishelke2021");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
        console.log(json);
      }
      

    

    render(){
        const {name, blog, avatar_url} = this.state.userInfo;
        console.log("render method is called");

        return (
            <>
            <img src={avatar_url} alt="" />
              <h1>Name : {name}</h1>
              <h2>Blog: {blog} </h2>
              <a href="https://vaishnavi-shelke.netlify.app/">Portfolio</a>
            </>
        )
    }
}

export default User;