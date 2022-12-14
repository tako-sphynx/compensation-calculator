<template>
  <div class="calculator">
    <div class="calculator-tools">
      <h3 class="calculator-ttl bold">Compensation Calculator</h3>
      <InputNumber
        @change="(val) => (income = val)"
        :name="'Average income'"
        :type="'€'"
        class="mt-20"
      />
      <InputNumber
        @change="(val) => (days = val)"
        :name="'Days on sick-leave'"
        :type="'days'"
        class="mt-20"
      />
      <InputCheckbox
        @input="(val) => (checked = val)"
        :name="'I have tubercolosis'"
        class="mt-20"
      />
      <div class="error-msg mt-20" v-if="errorMsg">
        Please, fill out the fields
      </div>
      <button class="button bold mt-20" @click="calculateResult">
        Calculate
      </button>
    </div>

    <div class="calculator-results mt-20">
      <div class="result-item">
        <p class="font-14">The employer compensates</p>
        <div class="font-14 bold">{{ empCompDays }} days</div>
      </div>
      <div class="result-item">
        <p class="font-14">Health Insurance compensates</p>
        <div class="font-14 bold">{{ insCompDays }} days</div>
      </div>
      <div class="result-item">
        <div class="font-18 bold">{{ empCompAmount.toFixed(2) }}€</div>
        <div class="font-12">
          Daily allowance <br />{{ dayComp.toFixed(2) }}€
        </div>
      </div>
      <div class="result-item">
        <div class="font-18 bold">{{ insCompAmount.toFixed(2) }}€</div>
        <div class="font-12">
          Daily allowance <br />{{ dayComp.toFixed(2) }}€
        </div>
      </div>
    </div>
    <div class="calculator-total__result mt-20">
      <div class="font-14">
        Compensation total for {{ totalCompDays }} days (net)
      </div>
      <div class="font-24 bold">{{ totalCompAmount.toFixed(2) }}€</div>
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
      income: 0,
      days: 0,
      checked: false,
      errorMsg: false,
      monthDays: 30,

      dayComp: 0, //Daily allowance

      empCompDays: 0, //The employer compensates days
      empCompAmount: 0, //The employer compensates days

      insCompDays: 0, //The employer compensatation amount
      insCompAmount: 0, //The insurance compensatation amount

      totalCompAmount: 0, //Total Compensation Amount
      totalCompDays: 0, //Total Compensation Days
    };
  },
  watch: {
    income: {
      immediate: true,
      handler(val) {
        if (val && this.days) {
          this.errorMsg = false;
        }
      },
    },
    days: {
      immediate: true,
      handler(val) {
        if (val && this.income) {
          this.errorMsg = false;
        }
      },
    },
  },
  methods: {
    calculateResult() {
      if (this.income && this.days) {
        let notPaidDays = 3; //Because the first 3 days are not paid
        this.dayComp = (this.income * 0.7) / this.monthDays;

        if (this.days >= 4 && this.days <= 8) {
          if (this.insCompDays && this.insCompAmount) {
            this.insCompDays = 0;
            this.insCompAmount = 0;
          }
          this.empCompDays = this.days - notPaidDays;
          this.empCompAmount = this.empCompDays * this.dayComp;
        } else if (this.days > 8 && this.days <= 190) {
          // 182days + 8 dayss

          this.countCompensation(this.days - notPaidDays);
        } else if (this.days > 190 && this.days <= 248) {
          if (this.checked) {
            this.countCompensation(this.days - notPaidDays);
          } else {
            this.countCompensation(190 - notPaidDays);
          }
        } else if (this.days > 248) {
          if (this.checked) {
            this.countCompensation(248 - notPaidDays);
          } else {
            this.countCompensation(190 - notPaidDays);
          }
        } else {
          this.dayComp = 0;
          this.empCompDays = 0;
          this.empCompAmount = 0;

          this.insCompDays = 0;
          this.insCompAmount = 0;
        }
        this.totalCompAmount = this.empCompAmount + this.insCompAmount;
        this.totalCompDays = this.empCompDays + this.insCompDays;
      } else {
        this.errorMsg = true;
      }
    },

    countCompensation(days) {
      this.empCompDays = 5;
      this.insCompDays = days - this.empCompDays;

      this.empCompAmount = this.dayComp * this.empCompDays;
      this.insCompAmount = this.dayComp * this.insCompDays;
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
  @include mq(tablet) {
    padding: 50px 0;
    background-size: 100% 100%;
  }
  &-tools {
    padding: 0 20px;
  }
  &-ttl {
    @include font(24, 25);
    color: $metalDark;
  }
  .error-msg {
    color: $red;
    @include font(12, 15);
  }
  .calculator-results {
    display: grid;
    row-gap: 10px;
    column-gap: 20px;
    grid-template-columns: auto auto;
    padding: 20px;
    border-top: 1px solid $metalLight;
    border-bottom: 1px solid $metalLight;
    @include mq(mobile) {
      grid-template-columns: auto;
    }
    .result-item {
      text-align: center;
      @include mq(mobile) {
        &:not(:first-child) {
          margin-top: 10px;
        }
      }
      @include mq(mobile) {
        &:nth-child(1) {
          order: 1;
        }
        &:nth-child(2) {
          order: 3;
        }
        &:nth-child(3) {
          order: 2;
        }
        &:nth-child(4) {
          order: 4;
        }
      }
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
