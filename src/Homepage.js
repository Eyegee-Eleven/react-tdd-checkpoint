import React from 'react'
//make our thingy here :) 

class Homepage extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: []
        }
    }

    async componentDidMount(){
        await fetch("http://localhost:3001/movies")
        .then(response => response.json())
        .then(data => this.setState({movies: data}))
    }

    render(){
        return(
            <>
                <img href=''/>
            </>
        )
    }
}

//export our component here
export default Homepage