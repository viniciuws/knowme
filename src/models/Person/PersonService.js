// Requisição assincrona
const request = new XMLHttpRequest();
request.open('GET', '../../static/person.json', true);
function onReadyStateChange() {
  if (request.readyState === 4 && request.status === 200) {
    console.log(JSON.parse(request.responseText));
  }
}
request.addEventListener('readystatechange', onReadyStateChange);
request.send();
