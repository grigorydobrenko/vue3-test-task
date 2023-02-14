<template>
  <div class="layout container">
    <header class="template-bg template-border radius-all">
      <div>
        <header-list class="header"/>
      </div>
    </header>
    <main class="main">
      <main-content/>
    </main>
  </div>
</template>

<script>
import HeaderList from "@/components/Header/HeaderList";
import MainContent from "@/components/Main/MainList";

export default {
  name: 'Layout',
  components: {MainContent, HeaderList},
}
</script>

<style>
.header {
  display: flex;
  background-clip: content-box;
  box-shadow: 0 0 0 10px #E5E4E2;
}

.main {
  margin-top: 50px;
}

.radius-all {
  border-radius: 10px;
}

.template-bg {
  background: #FFF;
}

.template-border {
  border: 5px solid rgba(229, 228, 226, 1);
}

</style>

