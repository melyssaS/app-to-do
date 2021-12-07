<style>
:root {
  --sidebar-bg-color: #f5f5f5;
  --sidebar-item-hover: #ffcf99;
  --sidebar-item-active: #ffb870;
  --sidebar-word-color: #4f4f4f;
  --sidebar-word-hover: #4f4f4f;
}

.sidebar {
  background: var(--sidebar-bg-color);
  position: fixed;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  top: 0;
  left: 0;
  width: 225px;
  height: 100%;
  padding: 20px 0;
  transition: all 0.5s ease;
}
.section-category {
  top: 50px;
}

.category {
  padding: 13px 40px;
}

.category:hover,
.section-all a:hover {
  background: #dedede;
  font-weight: bold;
}

.category-link {
  text-decoration: none;
  color: var(--sidebar-word-color);
  font-family: Arial, Helvetica, sans-serif;
}

.category-title {
  color: #c4c4c4;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 40px;
  border-bottom: 1px solid #c4c4c4;
}

.section-all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-all a {
  width: 100%;
  padding: 13px 40px;
  color: var(--sidebar-word-color);
  text-decoration: none;
  text-align: center;
}

.house {
  background-image: url("../assets/home.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  width: 60px;
  height: 70px;
}

.new-list {
  margin-left: 3px;
  font-size: small;
}
.btn-new-list {
  border: none;
  background: transparent;
}
</style>
<template>
  <nav class="sidebar">
    <div class="section-all">
      <span class="house"></span>
      <a href="/all">All</a>
    </div>
    <div class="section-category">
      <h1 class="category-title">List</h1>
      <ul class="category-list">
        <li
          class="category"
          v-for="(category, index) in categories"
          :key="index"
        >
          <a class="category-link" :href="`/${category.id}`">{{ category.title }}</a>
        </li>

        <li class="category new-list">
          <button
            class="category-link btn-new-list"
            @click="showModal = true"
          
          >
            + New List
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <CategoryForm
    v-if="showModal"
    @toggle-modal="showModal = false"
  ></CategoryForm>
</template>

<script lang="ts">
import Vue from "vue";
import CategoryForm from "@/components/CategoryForm.vue";
import { Category } from "@/utils/interfaces";
import { allCategories } from "@/service/categorieService";
import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  components: {
    CategoryForm,
  },
  data() {
    return {
      showModal: false,
      categories: [] as Category[],
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
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
    this.loadCategories();
  },
});
</script>



