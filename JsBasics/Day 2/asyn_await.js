class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  // Ask for a user name until github returns a valid user
  async function demoGithubUser() {
  
    let user;
    while(true) {
      let name = prompt("Enter a name?");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // no error, exit loop
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // loop continues after the alert
          alert("User not found " ,err.response);
        } else {
          // unknown error, rethrow
          throw err;
        }
      }
    }
  
  
    alert(`Your git hub  User Full Name: ${user.name}.`);
    return user;
  }
  
  demoGithubUser();