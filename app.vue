<template>
  <div class="layout">
    <nav class="sidebar">
      <ul>
        <li v-for="(button, index) in buttons" :key="index">
          <button @click="setActiveComponent(index)">
            {{ button.label }}
          </button>
        </li>
      </ul>
    </nav>
    <main class="main-content">
      <component
        v-for="(componentName, index) in components"
        :key="index"
        :is="componentName"
        v-show="activeComponent === index"
      />
    </main>
  </div>
</template>

<script>
import Component1 from "@/components/Component1.vue";
import Component2 from "@/components/Component2.vue";
import Component3 from "@/components/Component3.vue";
import Component4 from "@/components/Component4.vue";
import Component5 from "@/components/Component5.vue";
import Component6 from "@/components/Component6.vue";
import Component7 from "@/components/Component7.vue";
import Component8 from "@/components/Component8.vue";
import Component9 from "@/components/Component9.vue";
import Component10 from "@/components/Component10.vue";

export default {
  data() {
    return {
      activeComponent: 0,
      buttons: [
        { label: "Header     " },
        { label: "Slideshow  " },
        { label: "Footer     " },
        { label: "Categories " },
        { label: "Sidebar Menu" },
        { label: "Shopping Cart" },
        { label: "Popular Categories" },
        { label: "Register" },
        { label: "Showroom" },
        { label: "Component 10"},
      ],
      components: [
        "Component1", 
        "Component2", 
        "Component3", 
        "Component4", 
        "Component5", 
        "Component6", 
        "Component7", 
        "Component8", 
        "Component9", 
        "Component10"
      ],
    };
  },
  components: {
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
    Component7,
    Component8,
    Component9,
    Component10,
  },
  methods: {
    setActiveComponent(index) {
      this.activeComponent = index;
    },
  },
};

</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 20%;
  background: #f4f4f4;
  padding: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1rem;
}

.sidebar button {
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
}

.main-content {
  width: 80%;
  padding: 1rem;
}
</style>
