<template>
  <Sidebar />

  <main>
  
      <TaskComponent
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
      ></TaskComponent>
 
    <TaskForm
      v-if="taskForm"
      @toggle-btn="taskForm = false"
      :task="model"
    ></TaskForm>
    <button class="new-task" v-if="!taskForm" @click="taskForm = true">
      + New Task
    </button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/Sidebar.vue";

import { allTasks } from "@/service/taskService";
import TaskComponent from "@/components/TaskComponent.vue";
import TaskForm from "@/components/TaskForm.vue";
import { Task } from "@/utils/interfaces";

export default defineComponent({
  name: "App",
  data() {
    return {
      tasks: [] as Task[],
      taskForm: false,
      model: {},
    };
  },
  components: {
    TaskComponent,
    Sidebar,
    TaskForm,
  },
  methods: {
    async loadTasks() {
      try {
        const res = await allTasks();
        this.tasks = res;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.loadTasks();
  },
  computed: {
    getHashCategory: function (id: any) {
      const [category] = location.hash.split("/");
      let data;
      if (category[0] !== "" || category[1] !== "all") {
        data = null;
      } else {
        data = parseInt(category[1]);
      }
      console.log(id);
      return data === id;
    },
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

main {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);
  margin-left: 100px;
}

.new-task {
  background: #4f4f4f;
  color: white;
  text-align: center;
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  margin-left: 80%;
}

.new-task:hover {
  font-weight: 400;
}
</style>
