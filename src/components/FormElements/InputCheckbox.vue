<template>
  <div>
    <label class="checkbox-group">
      {{ name }}
      <input
        type="checkbox"
        v-model="checked"
        @change="$emit('input', checked)"
      />
      <div class="checkmark flex al-center j-center">
        <span class="checkmark-bg"></span>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.checkbox-group {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  color: $metalDark;
  @include font(14, 20);
  margin-bottom: 5px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkmark {
      &:after {
        display: block;
      }
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    @include gradient(to right, $gradLightmetal);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 2px;
      width: 4px;
      height: 10px;
      border: solid $metalDark;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    &-bg {
      display: block;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      background: $white;
      border-radius: 4px;
    }
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
}
</style>
