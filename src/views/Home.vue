<template>
<div class="tasks">
  <div class="card" style="width: 18rem;">
    <div class="card-header">
      Tasks
    </div>
    <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import TaskCard from '@/components/TaskCard.vue'
import TasksService from '@/services/TasksService'

export default {
  name: 'Home',

  data () {
    return {
      tasks: null
    }
  },

  created () {
    // axios.get('https://my-json-server.typicode.com/lydonschembriMSD/mockDatabase%27)
    TasksService.getTasks()
      .then(response => {
        this.tasks = response.data
      })
      .catch(error => {
        console.log('ERRORS' + error)
      })
  },

  components: {
    TaskCard
  }
}
</script>

<style>
.home {
  border: 3px solid blue;
  width: 90%;
  margin: auto;
}

.card {
  margin-left: 38%;
}
</style>
