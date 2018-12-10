<template>
  <div class="container">
    <!-- <header>
      <slot name="header"></slot>
    </header> -->
    <main>
      <slot :data="name"></slot>
    </main>
    <!-- <footer>
      <slot name="footer"></slot>
    </footer> -->
  </div>
</template>
<script>
export default {
  name: 'tableTemplate',
  data() {
    return {
      name: 'tableTemplate',
      text: 'text'
    };
  }
};
</script>