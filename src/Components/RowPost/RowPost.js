import React, {useState,useEffect} from 'react'
//import Youtube from 'react-youtube'
import {imageUrl} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  //const [urlId, setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url)
    .then(Response=>{
      console.log(Response.data)
      setMovies(Response.data.results)
    }).catch(error=>{
     // alert('Network error')
    });
  },[])
 /* const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }; 
  const handleMovie=(id)=>{
    console.log(id)

  }*/
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          
          <img /* onClick={()=>handleMovie(obj.id)}*/ className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
      {/* <Youtube videoId="2g811Eo7K8U"  opts={opts}/>  */}

    </div>
        




  )
}

export default RowPost
