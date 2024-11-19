<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import jsonDB from "@/assets/demodb.json";

const router = useRouter();
const operations = ref(jsonDB.operations);

const selectOperation = (operationID) => {
  router.push({ path: `/jobs/${operationID}` });
};
</script>

<template>
  <div class="operator-selection">
    <div class="header">
      <div class="circle"></div>
      <h1>Select an Operator</h1>
      <div class="circle"></div>
    </div>

    <div class="operators">
      <button v-for="op in operations" :key="op" @click="selectOperation(op.oId)">
        {{ op.title }}
      </button>
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
.operator-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #141414;
  font-size: 1em;
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
.operators {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.operators button {
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
}
</style>
