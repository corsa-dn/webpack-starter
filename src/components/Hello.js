import $ from 'jquery';

class Hellower {
  constructor(name) {
    this.$name = name
    console.log(`Hello ${this.$name}`);
  }
  get name() {
    return this.$name;
  }

  set name(val) {
    this.$name = val;
  }
  log() {
    console.log(this)
  }
}

export default Hellower;