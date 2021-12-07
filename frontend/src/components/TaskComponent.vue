<style>
.task {
  border-bottom: 1px solid #c4c4c4;
  border-top: 1px solid #c4c4c4;
  font-family: Arial, Helvetica, sans-serif;
  margin: auto 10px;
  padding: 15px 10px 5px;
  min-width: 600px;
}
.task-title {
  color: #4f4f4f;
  margin-left: 10px;
  font-size: 15px;
}
.task-description {
  color: #4f4f4f;
  font-size: 12px;
  margin: 10px 25px;
  margin-bottom: 20px;
}
.task-category {
  display: flex;
  color: #7d7c7c;
  left: 20px;
  font-size: 12px;
  margin: auto 0 0 80%;
}
.task-status {
  height: 15px;
  width: 15px;
}
.part-1 {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.part-2 {
  display: flex;
  align-items: center;
}
.btn-task-edit {
  margin-left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.edit-icon {
  background-image: url("../assets/edit.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  width: 20px;
  height: 20px;
}

.btn-task-delete {
  margin-left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.delete-icon {
  background-image: url("../assets/delete.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  width: 20px;
  height: 20px;
}

.modal {
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: hsla(0, 0%, 40%, 0.6);
}

.modal-content {
  background-color: #fefefe;
  margin: 25% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 350px;
}
</style>

<template>
  <section v-if="!taskForm" class="task" >
    <div class="part-1">
      <input class="task-status" type="checkbox" />
      <h1 class="task-title">{{ task?.title ?? "" }}</h1>
    </div>
    <p class="task-description">
      {{ task?.description ?? "" }}
    </p>
    <div class="part-2">
      <button @click="taskForm = true" class="btn-task-edit">
        <span class="edit-icon"></span>
      </button>
      <button @click="deleteTask" class="btn-task-delete">
        <span class="delete-icon"></span>
      </button>
      <p class="task-category">{{ task?.category?.title ?? "None" }}</p>
    </div>
  </section>
  <TaskForm
    v-if="taskForm"
    @toggle-btn="taskForm = false"
    :task="task"
  ></TaskForm>
</template>

<script lang="ts">
import TaskForm from "@/components/TaskForm.vue";
import { Task } from "@/utils/interfaces";
import { defineComponent } from "vue";
import { deleteTask } from "@/service/taskService";
export default defineComponent({
  components: {
    TaskForm,
  },
  props: ["task"],
  data() {
    return {
      taskForm: false,
    };
  },
  
  methods: {
    async deleteTask() {
      try {
        const res = await deleteTask(this.task);
          location.reload();
      } catch (error) {
        console.error(error);
      }
    },
    
  },
 
});
</script>
