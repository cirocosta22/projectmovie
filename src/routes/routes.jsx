import {Routes,Route} from 'react-router-dom'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'
function Router(){ 
     return ( 
         
            <Routes>
                <Route element={<DefaultLayout/>}> 
                 <Route path='/' element={<Home/>}/>
                 <Route path='/series' element={<Series/>}/>
                 <Route path='/Movies' element={<Movies/>}/>
                 </Route>
            </Routes>
           
         
     )
}

export default Router