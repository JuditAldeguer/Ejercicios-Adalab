const callToApiTwo = (searchName) => {
  // Recibimos por parámetros searchName
  return fetch(`https://swapi.dev/api/people/?search=${searchName}`)
    .then((response) => response.json())
    .then((response) => {
      const result = response.results.map((character) => {
        return {
          name: character.name,
        };
      });
      return result; // Retornamos los resultados del API al componente App
    });
};

export default callToApiTwo;
