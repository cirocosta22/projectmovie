import { styled } from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  position: relative;
  background-color: transparent;
  width: 250px;
  height: 340px;
 
  border-radius: 23px;
  
  cursor: pointer;
  gap: 3rem;
  margin-top: 1rem;
  
  &:hover { 
      position: relative;
      z-index: 99;
      transition:all 400ms ease-in-out;
      backdrop-filter: opacity(0.5);
      transform: scale(1.2);
      background-size: 100% 100%;
      background-color: #000000;

    >img{
          opacity: 0.6;
          
    }
    
  }
 
  >h2{ 
     font-size: 5px;
     display: block;
     z-index: 2;
  }

  >img { 
    border-radius: 10px;
    position: absolute;
    top: 0;
    transition:all 400ms ease-in-out;
    width: 100%;
    height: 100%;
    
  }
`;
export const PaiContainer = styled.div`
     
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
        justify-content: center;
        background-color: #000000;
          
`
export const ContainerTextFilm = styled.div`
   background-color: #000000;
   display: flex;
   justify-content: center;
   >h1{ 
     color: white;
     padding-top: 10px;
     font-weight: 700;
   }

`