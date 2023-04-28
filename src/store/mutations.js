export default {
  changeIndex (state, index) {
    state.index = index
    // 刷新后不改变选中的地区
    try {
      localStorage.index = index
    } catch (e) {
      console.log(e);
    }
  }
}
