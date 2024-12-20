let logNum = 0;
function log(log) {
  logNum++;
  document.getElementById('output').innerHTML += '<br />' + logNum + ': ' + log;
}
log('LOADED LOGGER')