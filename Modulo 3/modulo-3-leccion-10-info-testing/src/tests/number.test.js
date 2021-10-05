import numbers from '../services/numbers';

describe('Testando módulo numbers', () => {
  test('chequear si getRandomNumber return aun numero entre 0 y 100', () => {
    // preparación: pido un número aleatorio entre 0 y 100
    const maxNumber = 100;
    // actuación: ejecuto la función a testear
    const randomNumber = numbers.getRandomNumber(maxNumber);
    // aserción: compruebo si el valor devuelto es mayor o igual que 0
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    // aserción: compruebo si el valor devuelto es menor o igual que 100
    expect(randomNumber).toBeLessThanOrEqual(100);
  });

  test('chequear favoritos', () => {
    const serie = [
      {
        name: 'uno',
        isFav: true,
      },
      {
        name: 'uno',
        isFav: true,
      },
      {
        name: 'uno',
      },
    ];
    const favSerie = numbers.filterFavoriteSeries(serie);
    expect(favSerie.length).toBe(2);
  });
});
