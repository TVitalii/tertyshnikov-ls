export default {
  namespaced: true,
  actions: {
    async add({ commit }, skill) {
      try {
        const { data } = await this.$axios.post('/skills', skill);
      } catch (error) {
        throw new Error("Ошибка")
      }
    },
    remove() {
      console.log('remove');
    },
    edit() {
      console.log('edit');
    }
  }
}