import axios from 'axios';
export const baseUrl = 'https://dh-dev-apim.azure-api.net/restaurants';
export const fetchHotelsUrl = `${baseUrl}/info/v1/QA-SUGARMASH/menu`;


export const getAllHotels = async () => {
  const result = await (await axios.get(fetchHotelsUrl, {
      headers:{
        "Ocp-Apim-Subscription-Key":"c5f67862202f4577ab36a72ad04b38ca"
      }
  })
  .then(res=>{
    return {
      data:res.data,
      success: true,
      loading:false
  }})
  .catch(err=>{
    return {
      data:[],
      success: false,
      loading:false
    }
  }));
  return result;
};

