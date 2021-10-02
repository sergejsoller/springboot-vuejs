<template>
  <div>
    <h1>{{ serverMessage }}</h1>
    <input type="text" v-model="name" />
    <button @click="onSubmit">Say hello</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  data() {
    return {
      name: '',
      serverMessage: null
    }
  },

  computed: {
    message: function() {
      return this.serverMessage ? this.serverMessage : this.msg
    }
  },

  methods: {
    onSubmit () {
      axios.get('/api/say/hello/' + this.name)
        .then(response => this.serverMessage = response.data)
    }
  }
}
</script>

<style scoped>
</style>
