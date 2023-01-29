import axios from "axios";

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '31233349-657dbeb08b09bae80b555b3c4';
const OTHER_PARAMS = '&image_type=photo&orientation=horizontal&per_page=12'

export async function fetchResponce(searchName, page) {
    try {
       
        const URL = `${BASE_URL}?q=${searchName}&page=${page}&key=${API_KEY}${OTHER_PARAMS}`;
        const response = await axios.get(URL);
        return response.data;              
        
    } catch (error) {
        console.log(error);
    }
}

export const api = { fetchResponce };


























// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = '31233349-657dbeb08b09bae80b555b3c4';
// const OTHER_PARAMS = '&image_type=photo&orientation=horizontal&per_page=12';

// export async function fetchResponce (searchName, page) {
//     try {
//         const URL = `${BASE_URL}?q=${searchName}&page=${page}&key=${API_KEY}${OTHER_PARAMS}`;
    
        
//         const responce = await axios.get(URL)
    
//     return responce.data.hits;
   

// } catch (error) {
//     console.log(error);
// }
// }    
//   export const api = { fetchResponce };
