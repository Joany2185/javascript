const Student = function(name, major, laziness){
    this.name = name;
    this.major = major;
    this.laziness = laziness;
}
Student.prototype.greet = function(){
    console.log('Wasaaaap broda??');
}

const Freshman = function(name, major, laziness, nickname){
    Student.call(this, name, major, laziness);
    this.nickname = nickname;
}
Freshman.prototype = Object.create(Student.prototype);
Freshman.prototype.party = function() {

};

const Sophomore = function(name, major, laziness, nickname){
    Freshman.call(this, name, major, laziness, nickname);
    
}
Sophomore.prototype = Object.create(Freshman.prototype);
Sophomore.prototype.impress = function() {
    
};


const Junior = function(name, major, laziness, dream){
    Student.call(this, name, major, laziness);
    this.dream = dream;
}
Junior.prototype = Object.create(Student.prototype);
Junior.prototype.greet = function() {
    console.log('Hello, here is' + this.name + 'and is a pleasure meeting you!');
};
Junior.prototype.determination = function() {
    console.log(10 - this.laziness);
};

const Senior = function(name, major, laziness, dream) {
    Junior.call(this, name, major, laziness, dream);
}
Senior.prototype = Object.create(Junior.prototype);
Senior.prototype.sendCV = function(){
    console.log();
};
Senior.prototype.workHard= function(){};



const name = names[randomNumber] + this.major + names[randomNumber];

const names = ['Paul', 'Ringo', 'Dicky', 'Darkholer', 'Daddy', 'Hardon', 'Ronn', 'Deep', 'Barbie', 'Muffin', 'Hermione', 'Snickers', 'Jedi'];