<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import jsonDB from "@/assets/demodb.json";
// import { taskStatus } from "@/assets/helpers.js";

const route = useRoute();
const oID = route.params.opID;
const tasks = ref([]);
const operation = ref({});
const now = Date.now();
const currentOps = ref({});

onMounted(async() => {
  operation.value = jsonDB.operations.filter((o) => o.oId == oID)[0];
  tasks.value = jsonDB.tasks.filter((t) => t.currentOp == operation.value.oId);
  console.log(tasks.value);
});

const toggleTaskStatus = (task) => {
  console.log(task.records);
  currentOps.value = task.records.filter((r) => r.opId == oID);
  console.log(currentOps.value);

  // if (task.records.filter === 'pending') {
  //   task.status = 'started'
  // } else if (task.status === 'started') {
  //   task.status = 'finished'
  // }
};

// const taskStatus = (task) => {

// }
</script>

<template>
  <!-- <h1>Tasks for {{ operation.value.title }}</h1> -->
  <h1>Tasks for {{ operation.title }}</h1>
  <div class="tasks">

      <div v-for="task in tasks" :key="task" class="task">
        <h3>{{ task.title }}</h3>
        <div class="task-actions">
          <button @click="toggleTaskStatus(task)">Start</button>
          <button @click="toggleTaskStatus(task)">Pause</button>
          <button @click="toggleTaskStatus(task)">Finish</button>
        </div>
      </div>

  </div>
</template>

<style scoped>
.tasks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.task {
  background-color: #333;
  padding: 1rem;
  border-radius: 0.5rem;
}

.task-actions button {
  background-color: #0d0d0d;
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 0.25rem;
  margin: 0 0.25rem;
}

.task-actions button.active {
  background-color: #00ff00;
  color: #0d0d0d;
}
</style>
