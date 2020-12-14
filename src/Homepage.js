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

    displayPosters(){
      // console.log(this.state.movies)
      var movieMaker=this.state.movies.map(movie =>{
        return(
        <li className="movieList">
            <a>
              <img src={movie.poster} alt='im a movie' className='movieItem'/>
            </a>
        </li>
    )
    });

      
        return(movieMaker)
    }
    render(){
      console.log(this.displayPosters())
        return(
            <div>
              <ul>
              {this.displayPosters()}
              </ul>
                
            </div>
        )
    }
}

//export our component here
export default Homepage