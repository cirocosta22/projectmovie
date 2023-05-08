import { useState, useEffect } from "react";
import api from "../../services/api";
import './styles.js'
import { ContainerCart } from "./styles.js";
import { PaiContainer } from "./styles.js";
import {ContainerTextFilm} from './styles.js'
function Movies() {
  const [movie, setMovie] = useState("");
  

  useEffect(() => {
    async function HandleMovie() {
      const res = await api.get('movie/popular');
      console.log(res.data)
      setMovie(res.data.results)
      
      
    }
    HandleMovie();
  }, []);

  return (
    <> 
     <ContainerTextFilm> 
      <h1>Filmes</h1>
      </ContainerTextFilm>
    <PaiContainer>
        
      {movie &&  movie.map(filme =>  (
        <ContainerCart>
              <h2>{filme.title}</h2>
              <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}  alt="capa de filme 1" />
        </ContainerCart>
      ))}
    </PaiContainer>
    </>
  );
}

export default Movies;
