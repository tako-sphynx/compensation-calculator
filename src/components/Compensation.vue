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
  @include mq(tablet) {
    flex-direction: column;
    padding-bottom: 100px;
  }
  @include mq(mobile) {
    padding: 50px 0;
  }
  &__left {
    width: calc(100% - 320px);
    padding-right: 100px;
    @include mq(laptop) {
      padding-right: 50px;
    }
    @include mq(tablet) {
      width: 100%;
      padding-right: 0;
    }
  }
  &__right {
    width: 320px;
    flex: 0 0 auto;
    @include mq(tablet) {
      width: 100%;
      margin-top: 50px;
    }
  }
}
</style>
