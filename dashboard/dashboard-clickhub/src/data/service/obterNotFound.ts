export default async function obterNotFound(){
      const response = await fetch(`https://http.dog/404.json`);
      const data = await response.json();
      return data;
  }
  