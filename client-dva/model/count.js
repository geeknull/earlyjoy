export default {
  namespace: 'count',
  state: 0,
  reducers: {
    add  (count) {
      debugger
      return count + 1
    },
    minus(count) { return count - 1 },
  },
}
