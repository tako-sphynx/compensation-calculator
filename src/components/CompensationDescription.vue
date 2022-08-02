<template>
  <article>
    <h1 class="bold">{{ title }}</h1>
    <p class="section-content mt-20" v-html="content1"></p>
    <div class="flex">
      <div class="section-content flex mt-40">
        <div class="section-content__left">
          <h2 class="bold">{{ subtitle }}</h2>
          <p class="mt-20">
            {{ content2 }}
          </p>
          <ul class="content-list mt-20">
            <li
              v-for="(item, index) in list"
              :key="index"
              class="list-main__item"
            >
              {{ item.title }}
              <ul v-if="item.innerList">
                <li
                  v-for="(name, index) in item.innerList"
                  :key="index"
                  class="list-sec__item"
                >
                  {{ name.title }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="section-content__right">
          <div class="content-img">
            <picture>
              <source media="(max-width: 767px)" :srcset="imgSrc" />
              <source media="(max-width: 1023px)" :srcset="imgSrc" />
              <img loading="lazy" :src="imgSrc" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      title: "Quam Tristique Condimentum",
      content1:
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <a href="/#"/>Curabitur blandit</a> tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.',
      subtitle: "Fringilla Euismod Adipiscing Ipsum",
      content2:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.",
      list: [
        { title: "Tellus Ullamcorper Inceptos" },
        {
          title: "Magna Condimentum",
          innerList: [
            {
              title: "Mattis Tristique",
            },
            { title: "Pharetra Pellentesque Dapibus" },
          ],
        },
        { title: "Aenean Inceptos" },
        { title: "Parturient Bibendum" },
      ],
      imgSrc: require("@/assets/images/Image.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @include font(40, 50);
}
.section-content {
  @include font(18, 30);
  /deep/ a {
    color: $red;
  }
  &__left {
    padding-right: 40px;
    h2 {
      @include font(32, 35);
    }
    .content-list {
      li {
        position: relative;
        padding-left: 25px;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        ul {
          margin: 10px 0;
        }
        &.list-main__item {
          &::after {
            width: 16px;
            @include gradient(90deg, $gradRed);
          }
        }
        &.list-sec__item {
          &::after {
            width: 12px;
            @include gradient(90deg, $gradLightmetal);
          }
        }
        &::after {
          content: "";
          height: 4px;
          position: absolute;
          top: 12px;
          left: 0;
        }
      }
    }
  }

  &__right {
    .content-img {
      img {
        width: 240px;
        height: 180px;
        object-fit: cover;
        border-radius: 4px;
      }
    }
  }
}
</style>
