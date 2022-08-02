<template>
  <div class="calculator">
    <div class="calculator-tools">
      <h3 class="calculator-ttl bold">Compensation Calculator</h3>
      <InputNumber
        @change="(val) => (income = val)"
        :title="'Average income'"
        :name="'€'"
        class="mt-20"
      />
      <InputNumber
        @change="(val) => (days = val)"
        :title="'Days on sick-leave'"
        :name="'days'"
        class="mt-20"
      />
      <InputCheckbox
        @input="(val) => (checked = val)"
        :title="'I have tubercolosis'"
        class="mt-20"
      />
      <button class="button bold mt-20" @click="calculateResult">
        Calculate
      </button>
    </div>

    <div class="calculator-results mt-20">
      <div class="result-item">
        <p class="font-14">The employer compensates</p>
        <div class="font-14 bold">4 days</div>
      </div>
      <div class="result-item">
        <p class="font-14">Health Insurance compensates</p>
        <div class="font-14 bold">0 days</div>
      </div>
      <div class="result-item">
        <div class="font-18 bold">112,00€</div>
        <div class="font-12">Daily allowance 28,00 €</div>
      </div>
      <div class="result-item">
        <div class="font-18 bold">0,00€</div>
        <div class="font-12">Daily allowance 28,00 €</div>
      </div>
    </div>
    <div class="calculator-total__result mt-20">
      <div class="font-14">Compensation total for 7 days (net)</div>
      <div class="font-24 bold">112,00€</div>
    </div>
  </div>
</template>

<script>
import InputNumber from "./FormElements/InputNumber.vue";
import InputCheckbox from "./FormElements/InputCheckbox.vue";

export default {
  components: {
    InputNumber,
    InputCheckbox,
  },
  data() {
    return {
      income: null,
      days: null,
      checked: false,
    };
  },
  methods: {
    calculateResult() {
      console.log(this.income, "income");
      console.log(this.days, "days");
      console.log(this.checked, "checked");
    },
  },
};
</script>

<style lang="scss" scoped>
.calculator {
  position: relative;
  padding: 80px 0px;
  background-image: url("../assets/images/background.png");
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  &-tools {
    padding: 0 20px;
  }
  &-ttl {
    @include font(24, 25);
    color: $metalDark;
  }
  .calculator-results {
    display: grid;
    row-gap: 10px;
    column-gap: 20px;
    grid-template-columns: auto auto;
    padding: 20px;
    border-top: 1px solid $metalLight;
    border-bottom: 1px solid $metalLight;

    .result-item {
      text-align: center;
      .font-12 {
        @include font(12, 15);
        color: $metalMiddle;
      }
      .font-18 {
        @include font(18, 20);
        color: $metalDark;
      }
    }
  }
  .calculator-total__result {
    text-align: center;
    .font-24 {
      @include font(24, 30);
      color: $metalDark;
      margin-top: 5px;
    }
  }
  .font-14 {
    @include font(14, 15);
    color: $metalDark;
  }
}
</style>
