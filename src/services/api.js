import axios from 'axios'


const api = axios.create ({ 
     baseURL:"https://api.themoviedb.org/3/",
     params: { 
          api_key: "21e9fde381c5aacc9707ab5dfa74236f",
          language:'pt-BR',
          page:1
     }
})

export default api