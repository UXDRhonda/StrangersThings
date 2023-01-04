const baseURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT';

 export const getPosts = async() => {
  try {
    const response = await fetch(`${baseURL}/posts`);
    const results = response.json();
    return(results);

  }catch (ex) {
    console.log('Error getting posts');

  }
}