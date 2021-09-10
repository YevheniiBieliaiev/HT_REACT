function id() {
  let id = 0;
  return function () {
    return ++id;
  }
}
let songID = id();

export default songID;