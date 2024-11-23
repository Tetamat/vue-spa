<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import db from "@/firebase";
// import { axios } from 'axios';
import jsonData from "@/assets/demodb.json"; // Adjust the path as needed


const operations = ref({});
const taskData = ref({});
// const addTask = ref({});

operations.value = db.operations


const addTask = () => {
  console.log(taskData.value);
  db.tasks.add(taskData.value);
  taskData.value = {
    title: "",
    number: "",
    availableOps: [],
    currentOp: 0,
  };
};

onBeforeMount(() => {
  operations.value = jsonData.operations;
  console.log(operations);
  taskData.value = {
    title: "",
    number: "",
    availableOps: [],
    currentOp: 0,
  };
});
</script>

<template>
  <div>
    <h2>Add New Task</h2>
    <form @submit.prevent="addTask">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" required />
      </div>
      <div>
        <label for="number">Number:</label>
        <input type="text" id="number" required />
      </div>
      <div>
        <label>Available Operations:</label>
        <div v-for="item in operations" :key="item.oId">
          <label>
            <input
              type="checkbox"
              :value="item.oId"
              checked="checked"
              v-model="taskData.availableOps"
            />
            {{ item.title }}
          </label>
        </div>
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>
