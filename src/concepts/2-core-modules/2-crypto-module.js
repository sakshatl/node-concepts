const crypto = require('node:crypto');

// === Generates a cryptographically strong pseudorandom data ====
const randomBytes = crypto.randomBytes(16).toString('hex');
console.log(randomBytes);

// === Generate a HMAC hash string ======

const SECRET_STRING = "THIS-IS-A-VERY-HARD-SECRET-TO-FIND";
const payload = { name: 'sakshat', age: '25' };

const hash = crypto.createHmac('sha256', SECRET_STRING).update(JSON.stringify(payload)).digest('hex');
console.log(hash);

// === PBKDF2 ====

// crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)

/*
  - Password-Based Key Derivation Function 2
  - A selected HMAC alogirthm specified by "digest"
  - It is used to derive a key of requested byte length "keylen"
  - From the "passwor" "salt" and "iterations"
*/

const PASSWORD = "my very hard password";;
const SALT = "SOME-RANDOM-SALT";
const SALT_ITERATIONS = 100000;

crypto.pbkdf2(PASSWORD, SALT, SALT_ITERATIONS, 64, 'sha512', (err, key) => {
  if(err) return err;

  console.log(key.toString('hex'));
})

