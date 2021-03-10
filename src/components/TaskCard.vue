<template>
   <ul class="list-group list-group-flush">
     <router-link :to="{name: 'TaskDetails', params: {id: task.id}}">
    <li class="list-group-item"> <b>{{task.title}} </b> on the {{task.date}} @ {{task.time}}</li>
    </router-link>
    </ul>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  border: 1px solid red;
  width:80%;
  margin:auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
