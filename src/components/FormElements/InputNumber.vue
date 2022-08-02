<template>
  <div class="input-group flex column">
    <label for="value">{{ title }}</label>
    <div class="input-group__item flex">
      <input
        v-model.number="value"
        @input="$emit('change', value)"
        type="number"
      />
      <div class="input-name bold">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "name"],
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.input-group {
  label {
    color: $metalDark;
    @include font(14, 20);
    margin-bottom: 5px;
  }
  &__item {
    position: relative;
    height: 46px;
    width: 100%;
    z-index: 9;
    &::after {
      content: "";
      position: absolute;
      top: -2px;
      right: 0;
      bottom: 0;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 6px);
      z-index: -1;
      border-radius: 4px;
      @include gradient(to right, $gradLightmetal);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    input {
      height: 100%;
      width: 100%;
      border-radius: 4px;
      padding-left: 10px;
      padding-right: 55px;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type="number"] {
        -moz-appearance: textfield;
      }
    }
    .input-name {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      color: $metalDark;
      @include font(18, 30);
    }
  }
}
</style>
