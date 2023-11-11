const superHero1 = require('./utils/super-hero');

console.log(superHero1.getName()); // Batman
superHero1.setName("Superman");
console.log(superHero1.getName()); // Superman

const superHero2 = require('./utils/super-hero');
console.log(superHero2.getName()); // Superman (module gets cached)


// === DELETING THE MODULE CACHE ====

// delete require.cache[require.resolve('./utils/super-hero')];

// const superHero3 = require('./utils/super-hero');
// console.log(superHero3.getName()); // Superman (module gets cached)