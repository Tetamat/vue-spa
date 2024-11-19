<script setup>
import { ref, onMounted, defineEmits } from "vue";
import jsonDb from "@/assets/demodb.json";
// import { db } from "@/firebase";
// import {
//   collection,
//   query,
//   orderBy,
//   onSnapshot,
//   addDoc,
//   serverTimestamp,
// } from "firebase/app";

// const tasks = ref([]);
// const newTask = ref("");
// const tasksCollectionRef = collection(db, "tasks");

//  Realtime subscription to record
// onMounted(() => {
//   const q = query(tasksCollectionRef, orderBy("createdAt"));
//   onSnapshot(q, (snapshot) => {
//     tasks.value = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//   });
// });

// const recordTask = async () => {
//   await addDoc(tasksCollectionRef, {
//     title: newTask.value,
//     createdAt: serverTimestamp(),
//   });
//   newTask.value = "";
// };
//

const operations = ref(jsonDb.operations);
const tasks = ref(jsonDb.tasks);

const cPage = ref(0);
const changeView = (oId) => {
  cPage.value = oId
}

</script>

<template>
  <div class="page1">
    <div class="header">
      <div class="circle"></div>
      <h1 v-if="cPage === 0">Select An Operator</h1>
      <h1 v-else>Tasks for {{ operations[cPage].title }}</h1>
      <div class="circle"></div>
    </div>

    <div class="content">
      <div class="content-box">
        <p>Select operation for record</p>
      </div>

      <div v-if="cPage === 0" class="buttons-container">
        <button
        v-for="(key, oId) in operations" :key="key"
        class="button"
        @click="changeView(oId)">{{ operations[oId].title }}</button>
      </div>

      <div v-else class="buttons-container">
        <button
        v-for="(key, tId) in tasks" :key="key"
        class="button"
        >{{ tasks[tId].title }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Page Styles */
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.header .circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #333;
}

/* Content Styles */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.content-box {
  text-align: center;
  margin-bottom: 20px;
}

/* Button Container Styles */
.buttons-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.buttons-container .button {
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
