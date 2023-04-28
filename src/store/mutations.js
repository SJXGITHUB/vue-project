export default {
  changeCity (state, city) {
    state.city = city
    // 刷新后不改变选中的地区
    try {
      localStorage.city = city
    } catch (e) {
      console.log(e);
    }
  }
}
