<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import jsonDB from "@/assets/demodb.json";

const router = useRouter();
const operations = ref(jsonDB.operations);

const selectOperation = (opID) => {
  router.push({ path: `/operations/${opID}` });
};

</script>

<template>
  <div id="app">
    <h1>Select an Operation</h1>
    <div class="operation-select">
      <button
        v-for="op in operations"
        :key="op.oId"
        @click="selectOperation(op.oId)"
      >
        {{ op.title }}
      </button>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #0d0d0d;
  color: #00ff00;
}

.operation-select {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.operation-select button {
  background-color: #333;
  border: none;
  color: #00ff00;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
}

.operation-select button:hover {
  background-color: #00ff00;
  color: #333;
}
</style>
