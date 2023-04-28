let defaulIndex = 0
try {
  if (localStorage.index) {
    defaulIndex = localStorage.index
  }
} catch (e) {
  console.log(e);
}

export default {
  index: defaulIndex

}
