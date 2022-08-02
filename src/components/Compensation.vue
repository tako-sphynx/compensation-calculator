<template>
  <section class="calculator-section container flex">
    <div class="calculator-section__left">
      <CompensationDescription />
    </div>
    <div class="calculator-section__right">
      <CompensationCalculator />
    </div>
  </section>
</template>

<script>
import CompensationDescription from "./CompensationDescription.vue";
import CompensationCalculator from "./CompensationCalculator.vue";

export default {
  components: {
    CompensationDescription,
    CompensationCalculator,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.calculator-section {
  padding-top: 100px;
  padding-bottom: 195px;
  &__left {
    width: calc(100% - 320px);
    padding-right: 100px;
  }
  &__right {
    width: 320px;
    flex: 0 0 auto;
  }
}
</style>
