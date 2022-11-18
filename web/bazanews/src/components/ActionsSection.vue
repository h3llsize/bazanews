<template>
  <section class="actions">
    <div class="container actions__container">
      <SectionSearch :value.sync="searchValue" placeholder="найти событие"/>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .actions {
    padding-top: 75px;
  }

  .actions__container {
    position: relative;
    max-width: 640px;
    padding: 30px 20px;
  }
</style>

<script>
  import SectionSearch from '@/components/SectionSearch';

  export default {
    components: { SectionSearch },
    data: function() {
      return {
        searchValue: ''
      }
    },
  }
</script>
