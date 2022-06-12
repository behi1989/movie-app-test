export class Config {
  // Define Global Variable
  static apiPath = 'https://api.themoviedb.org/3';
  static imagePath = 'https://image.tmdb.org/t/p';
  static apiKey = 'f62f750b70a8ef11dad44670cfb6aa57';

  // Make separate for numbers with "," after 3 digit
  static separate = (Number) => {
    Number += '';
    Number = Number.replaceAll(',', '');
    let x = Number.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
  };

  // PageUp
  static pageUp = () => {
    if (typeof window !== 'undefined' && window.pageYOffset > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 100);
    }
    return false;
  };

  // Fetch data function with some parameter
  static FetchData = async (type, url, token, data) => {
    let HeaderData = new Headers();
    HeaderData.append('Content-Type', 'application/json');
    token && HeaderData.append('Authorization', `Bearer ${token}`);
    HeaderData.append('Access-Control-Allow-Origin', '*');

    let requestOptions;
    let fetchResult;
    switch (type) {
      case 'GET':
        requestOptions = {
          method: 'GET',
          headers: HeaderData,
          redirect: 'follow',
        };
        break;
      case 'POST':
        requestOptions = {
          method: 'POST',
          headers: HeaderData,
          body: data,
          redirect: 'follow',
        };
        break;
    }

    await fetch(`${this.apiPath}/${url} `, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        fetchResult = result;
      })
      .catch((error) => {
        console.log(`error in: ${url} =>`, error);
      });
    return fetchResult;
  };
}
