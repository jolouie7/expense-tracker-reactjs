// This file sets backendHost to either dev, test, or production environment
let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "my-personal-expense-tracker.herokuapp.com") {
  backendHost = "https://my-personal-expense-tracker.herokuapp.com";
} else if (/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;
} else {
  backendHost =
    "https://my-personal-expense-tracker.herokuapp.com" ||
    "http://localhost:5000";
}

export default backendHost;
