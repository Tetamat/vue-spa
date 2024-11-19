<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import jsonDB from '@/assets/demodb.json'

const route = useRoute();
const oID = route.params.operator;
const tasks = ref([]);

const toggleJobStatus = (task) => {
  // if (task.status === 'pending') {
  //   task.status = 'started'
  // } else if (task.status === 'started') {
  //   task.status = 'finished'
  // }
  console.log(task);
};

onMounted(() => {
  // Simulate job data fetch based on operator
  // console.log(jsonDB.tasks);
  tasks.value = jsonDB.tasks.filter((t) => t.current == oID);
  tasks.value.forEach((t) => {
    console.log(`${t.tId} - ${t.title} - ${t.current} - ${t.status}`);
  })
  // console.log(tasks.value)
  // debugger;
});

</script>

<template>
  <div class="job-list">
    <li v-for="(tv, index) in tasks" :key="tv">
      <button @click="toggleJobStatus(tv)">
        {{ tv.title }}
      </button>
    </li>
    <button @click="$router.push('/')">Back to Operators</button>
  </div>
</template>

<style scoped>
.started { background-color: yellow; }
.finished { background-color: green; color: white; }
</style>
