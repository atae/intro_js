function Cat(name, owner) {
  this.name = name
  this.owner = owner
}

Cat.prototype.cuteStatement = function () {
  console.log(`${this.owner} loves ${this.name}`);
}

cat = new Cat('bill', 'fred')
cat.cuteStatement()

Cat.prototype.cuteStatement = function () {
  console.log(`Everyone loves ${this.name}!`);
}

cat.cuteStatement()

Cat.prototype.meow = function () {
  console.log('Meow');
}

cat.meow()

cat1 = new Cat('george', 'cucklife')

cat1.meow = function () {
  console.log('Woof');
}

cat1.meow()
cat.meow()
