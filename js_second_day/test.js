// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function() {
//       alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     },
//     greeting: function() {
//       alert('Hi! I\'m ' + this.name[0] + '.');
//       let myDataName = 'height';
//       let myDataValue = '1.75m';
//       person[myDataName] = myDataValue;
//     }
// };

// //console.log(person.height);
// console.log(person['eyes'] = 'hazel');
// console.log(person.age = 45);
// // console.log(person['name']['last'] = 'Cratchit');
// const person1 = {
//     name: 'Chris',
//     greeting: function() {
//       alert('Hi! I\'m ' + this.name + '.');
//     }
//   }
  
//   const person2 = {
//     name: 'Brian',
//     greeting: function() {
//       alert('Hi! I\'m ' + this.name + '.');
//     }
//   }

// function Player() {
//     this.tracks = [];
//     this.current = 0;
// }
// Player.prototype.add = function(track) {//create the add method on the player class
//     this.tracks.push(track);
// }
// Player.prototype.play = function() {
//     console.log(this.tracks[this.current]);
// } 

// var player = new Player();
// console.log(player.add('drive'));
// console.log(player.play());

// function Player() {
//     this.tracks = [];
//     this.current = 0;
// }
// Player.prototype.add = function(track) {//create the add method on the player class
//     this.tracks.push(track);
// }
// Player.prototype.play = function() {
//     console.log(this.tracks[this.current]);
// } 

// Player.prototype.next = function(){
//     console.log(this.current++);
// }

// Player.prototype.previous = function(){
//     console.log(this.current--);
// }

// function Track(artist, title, album) {
//     this.artist = artist;
//     this.title = title;
//     this.album = album;
// }

// Track.prototype.play = function(){
//     console.log('Playing: '+ this.title + 'by' + this.artist);
// }


// var player = new Player();
// var driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
// var laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');
// console.log(player.add(driveTrack));
// console.log(player.add(laBambaTrack));
// console.log(player.play());
// function createNewPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.greeting = function() {
//       alert('Hi! I\'m ' + obj.name + '.');
//     };
//     return obj;
//   }
//   const salva = createNewPerson('Salva');
//   console.log(salva.name);
//   console.log (salva.greeting());
function Person(name) {
    this.name = name;
    this.greeting = function() {
      return('Hi! I\'m ' + this.name + '.'); //diff. between return and alert.
    };
}


const person1 = new Person('Bob');
const person2 = new Person('Sarah');
console.log(person1.name);
console.log(person1);
console.log(person1.greeting());
console.log(person2.name);
person2.greeting();
