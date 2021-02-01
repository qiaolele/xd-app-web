<template>
  <div>
    <div class="title_box_common"
         v-if="titleToast">
      <span class="title_tips_common">{{titleTips}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleToast: {
      type: Boolean,
      default: false
    },
    titleTips: {
      type: String
    }
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>
.title_box_common {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title_tips_common {
  display: inline-block;
  background: rgba(47, 47, 47, 0.6);
  color: #fff;
  font-size: 0.14rem;
  padding: 0.18rem 0.14rem;
  border-radius: 0.08rem;
}
</style>