export class Config {
  // Define Global Variable
  static apiPath = 'https://admin.apputy.com';
  // static apiPath = 'http://192.168.70.106:45455';
  static imagePath = 'https://admin.apputy.com/image';

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

  // Goto pageUp function
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

  // Check mobile validation
  static checkMobileValidate = (mobile) => {
    const mobilePattern = /^(\+989|9|09)(12|19|35|36|37|38|39|32|30|28|22|21|20)\d{7}$/;
    if (!mobile.match(mobilePattern)) {
      return false;
    } else {
      return true;
    }
  };

  // Check national code validation
  static checkNationalCodeValidate = (nationalCode) => {
    const nationalCodeRegex = /^(?!(\d)\1{9})\d{10}$/;
    if (!nationalCode.match(nationalCodeRegex)) {
      return false;
    } else {
      return true;
    }
  };

  // Check email validation
  static checkEmailValidate = (email) => {
    const emailRegex = /^$|^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email && !email.match(emailRegex)) {
      return false;
    } else {
      return true;
    }
  };

  // Check password validation
  static checkPasswordValidate = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!password.match(passwordRegex)) {
      return false;
    } else {
      return true;
    }
  };

  // static checkNumberInput = (value) => {
  //   let nb = el.value;
  //   if (isNaN(nb) || nb < 1) el.value = 1;
  // }

  // Get cookie with name from browser cookie
  static getCookie = (cookieName) => {
    let name = cookieName + '=';
    let decodedCookie = decodeURIComponent(typeof document !== 'undefined' ? document.cookie : null);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  // Get left time
  static getLeftTime = (time) => {
    let diffTime = Math.abs(new Date().valueOf() - new Date(time).valueOf());
    let days = diffTime / (24 * 60 * 60 * 1000);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let secs = (minutes % 1) * 60;
    [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)];

    return days + 'd', hours + 'h', minutes + 'm', secs + 's';
  };

  // Auth function for check valid token
  static checkAuth = async (token) => {
    let newResult;
    let newToken;
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    let reqOpt = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    await fetch(`${this.apiPath}/Account/CheckTokenValid`, reqOpt)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 401) {
          newResult = false;
          return;
        }
        newToken = result?.data?.token;
        newResult = true;
      })
      .catch((error) => console.log('error', error));

    return (newResult, newToken);
  };

  // Sleep function
  static Sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // Make unique id
  static uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return head + tail;
  };

  // Fetch data function with some parameter
  static FetchData = async (type, url, token, data, option) => {
    let HeaderData = new Headers();
    HeaderData.append('Content-Type', 'application/json');
    token && HeaderData.append('Authorization', `Bearer ${token}`);
    HeaderData.append('Accept', '*');

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

  // Convert images to base64
  static ConvertToBase64 = async (blob) => {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  // Convert english date to persian date
  static ConvertDate = (date) => {
    const option = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('fa-IR', option);
  };

  // Generate unique guid
  static generateUniqueId = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
  };

  // Check unique guid pattern
  static CheckUniqueIdPattern = (id) => {
    return id.match(/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/g);
  };
}
