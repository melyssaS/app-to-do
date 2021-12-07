<style>
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

.input-category {
  width: 300px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px 10px;
}
</style>
<template>
  <div class="modal">
    <section class="modal-content">
      <form action="form-description">
        <textarea placeholder="Category" type="text" class="input-category" v-model="category.title"/>
        <button
          class="btn-category save"
          @click.prevent="create"
        >
          Save
        </button>
        <button
          class="btn-category cancel"
          @click.prevent="$emit('toggle-modal')"
        >
          Cancel
        </button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Category } from "@/utils/interfaces";
import { createCategory } from "@/service/categorieService";
export default defineComponent({
  props: {},
  data() {
    return {
      category: {} as Category,
    };
  },
  methods: {
    async create() {
      try {
        const res = await createCategory(this.category);
      } catch (error) {
        console.error(error);
      }
      location.reload();
      (this as any).$emit("toggle-modal");
    },
  },
});
</script>



