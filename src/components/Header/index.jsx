import logo from '../../assets/logo.png'
import { ContainerHead } from './styles';
function Header(){ 
     return (
         <ContainerHead>
             <img src={logo} style={{width:500}}/>
             <div> 
             <ul>
                 <li>Home</li>
                 <li>Series</li>
                 <li>Filmes</li>
             </ul>
             </div>
         </ContainerHead>
     )
}
export default Header;