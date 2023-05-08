import api from "../../services/api"
import { Info } from "./styles"
import { Background } from "./styles"
import { useState,useEffect } from "react"
import { Poster } from "./styles"
import { Container } from "./styles"
import { ContainerButtons } from "./styles"

import Button from "../../components/Button"
import Header from "../../components/Header"
import Movies from "../Movies"

function Home(){ 

    const [movie,setMovie] = useState('')
    
    useEffect(() => {
        async function getMovies(){ 
            const {data:{results}} = await api.get('movie/popular')
            setMovie(results[4])
            console.log(data)
       }
       getMovies()
    },[])
     
   
   // https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg
   

    return( 
        <> 
        
        {movie && (
          <div> 
           
           
        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} >
        
            <Container> 
           <Info>
             <h1>{movie.title}</h1>
             <p>{movie.overview}</p>
             <ContainerButtons> 
                  <Button red={true}>Assista agora</Button>
                  <Button red={false}>Assista o Trailer</Button>
             </ContainerButtons>
             </Info>
             <Poster>
                 <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="capa do filme" />
             </Poster>
             </Container>
             
        </Background>
        <Movies/>
        </div>
        )}
        </>
    )
}

export default Home