let httpRequestURL = "https://api.github.com/users/bhatt-jaymin";
const Xhr = new XMLHttpRequest();
Xhr.open('GET', httpRequestURL);
Xhr.onreadystatechange = function ()  {
  console.log(Xhr.readyState);
  if (Xhr.readyState === 4) {
    const data=JSON.parse(this.responseText)
    console.log(data.following);
  }
}
Xhr.send();
