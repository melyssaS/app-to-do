<style>
.description-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin: auto 10px;
  padding: 15px 10px 5px;
  width: 600px;
  min-height: 100px;
}

textarea {
  border-style: hidden;
}

textarea:focus {
  outline: none;
}

.input-title {
  border-bottom: 1px solid #c4c4c4;
  color: #4f4f4f;
  font-size: 15px;
  font-weight: 600;
}

.input-description {
  color: #4f4f4f;
  font-size: 12px;
  min-height: 50px;
  padding: 10px 10px;
  box-sizing: border-box;
  height: fit-content;
}

button {
  margin: 10px 12px;
}

.btn-category {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}
.save {
  background: #4f4f4f;
  color: white;
}

.cancel {
  background: transparent;
  color: #4f4f4f;
  border: 1px solid #c4c4c4;
}

.task-category {
  background: transparent;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 3px 8px;
  width: fit-content;
  margin: 10px 12px;
}
task-category:focus {
  outline: none;
}
</style>

<template>
  <form action="form-description">
    <div class="description-form">
      <textarea
        placeholder="Title"
        type="text"
        class="input-title"
        v-model="newTask.title"
      ></textarea>
      <textarea
        placeholder="Description"
        type="text"
        class="input-description"
        v-model="newTask.description"
      ></textarea>
      <select class="task-category" v-model="newTask.categoryId">
        <option
          :value="category.id"
          v-for="(category, index) in categories"
          :key="index"
        >
          {{ category.title }}
        </option>
      </select>
    </div>
    <button class="btn-category save" @click.prevent="type">Save</button>
    <button class="btn-category cancel" @click.prevent="$emit('toggle-btn')">
      Cancel
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createTask, updateTask } from "@/service/taskService";
import { allCategories } from "@/service/categorieService";
import { Task, Category } from "@/utils/interfaces";

export default defineComponent({
  props: ["task"],
  data() {
    return {
      newTask: {} as Task,
      categories: [] as Category[],
    };
  },

  methods: {
    async type() {
      try {
       
        if (JSON.stringify(this.task) !== "{}") {
          
          const res = await updateTask(this.newTask);
        } else {
          const res = await createTask(this.newTask);
        }
      } catch (error) {
        console.error(error);
      }
      location.reload();
      (this as any).$emit("toggle-btn");
    },
    async loadCategories() {
      try {
        const res = await allCategories();
        this.categories = res;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.newTask = { ...this.task, ...this.newTask };
    this.loadCategories();
  },
});
</script>



