<template>
  <h1 @click="tClick">{{ msg }}</h1>
</template>

<script lang="ts">
export default {
  data() {
    return {
      msg: "Hello,Webpack"
    };
  },
  methods: {
    tClick: function() {
        let name:string = 'hahaha';
        window.alert(name)
    } 
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style> 