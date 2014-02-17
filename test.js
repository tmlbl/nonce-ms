var nonce = require ('./lib/nonce.js');

for (var i=0; i<20; i++) {
  console.log(nonce());
}
