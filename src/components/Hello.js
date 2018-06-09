import $ from 'jquery';

class Hellower {
  constructor(name) {
    this.$name = name
    var role;
  }
  init(role) {
    if (role) {
      role = role
      console.log(`Hello ${this.$name} from ${role}`);
    } else {
      console.log(`Hello ${this.$name}`);
    }
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