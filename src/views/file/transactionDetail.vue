
<style scoped>
.wrap {
  background: #fff;
  font-family: PingFangSC-Regular, PingFang SC;
}
>>> .van-tab__text--ellipsis {
  font-weight: 600;
}
>>> .van-tabs__line {
  width: 0.24rem;
  background: linear-gradient(135deg, #ff9c0d 0%, #ff5618 100%);
  border-radius: 0.02rem;
  bottom: 0.2rem;
}
>>> .van-tabs__wrap {
  border-bottom: 0.01rem solid #f6f7f8;
}
.box {
  width: 100%;
  padding: 0 0.15rem;
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
  border-bottom: 0.01rem solid #f6f7f8;
}
.list_info {
  font-size: 0.16rem;
  font-weight: 600;
  color: #3d3d3d;
  line-height: 0.16rem;
  width: 2.6rem;
}
.list_time {
  font-size: 0.14rem;
  color: #999999;
  line-height: 0.14rem;
  margin-top: 0.1rem;
}
.list_right {
  display: flex;
  align-items: center;
}
.add_img {
  width: 0.08rem;
  height: 0.08rem;
}
.add_num {
  font-size: 0.2rem;
  font-weight: 600;
  color: #ff6119;
  line-height: 0.2rem;
  margin-left: 0.02rem;
}
.delete_num {
  font-size: 0.2rem;
  font-weight: 600;
  color: #3d3d3d;
  line-height: 0.2rem;
  margin-left: 0.02rem;
}
.no_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.4rem 0;
}
.no_data img {
  width: 36%;
}
.no_data p {
  font-size: 0.16rem;
  color: #999999;
  margin-top: 0.2rem;
}
</style>

<template>
  <div class="wrap">
    <van-tabs v-model="active"
              title-active-color="#2F2F2F"
              title-inactive-color="#B3B3B3">
      <van-tab title="加分明细">
        <van-list v-model="addLoading"
                  :finished="addFinished"
                  @load="addLoad">
          <div class="box">
            <div v-if="addArr.length>0">
              <div class="list"
                   v-for="item in addArr"
                   :key="item.id">
                <div>
                  <p class="list_info">{{item.remark}}</p>
                  <p class="list_time"
                     v-if="item.gmtCreate">{{getTime(item.gmtCreate)}}</p>
                </div>
                <div class="list_right">
                  <img class="add_img"
                       src="@/assets/img/add_num.png"
                       alt="">
                  <span class="add_num">{{item.money}}</span>
                </div>
              </div>
            </div>
            <div v-else
                 class="no_data">
              <img src="@/assets/img/img_no_date.png"
                   alt="" />
              <p>暂无明细</p>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="减分明细">
        <van-list v-model="reduceLoading"
                  :finished="reduceFinished"
                  @load="reduceLoad">
          <div class="box">
            <div v-if="reduceArr.length>0">
              <div class="list"
                   v-for="item in reduceArr"
                   :key="item.id">
                <div>
                  <p class="list_info">{{item.remark}}</p>
                  <p class="list_time"
                     v-if="item.gmtModified">{{getTime(item.gmtModified)}}</p>
                </div>
                <div class="list_right">
                  <!-- <img class="add_img"
                       src="@/assets/img/delete_num.png"
                       alt=""> -->
                  <span class="delete_num">{{item.money}}</span>
                </div>
              </div>
            </div>
            <div v-else
                 class="no_data">
              <img src="@/assets/img/img_no_date.png"
                   alt="" />
              <p>暂无明细</p>
            </div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      addLoading: false,
      addFinished: false,
      addArr: [],
      addPage: 0,
      reduceLoading: false,
      reduceFinished: false,
      reduceArr: [],
      reducePage: 0,
    }
  },
  created () {
    this.util.title("交易明细");
  },
  methods: {
    getAddList () {
      let param = {
        type: 1,
        pageNum: this.addPage,
        pageSize: 10
      }
      this.$get("/app/v1/credit/detail", param)
        .then((res) => {
          console.log(res)
          if (res.code == 200) {
            this.addArr = this.addArr.concat(res.data.info);
            this.addLoading = false;
            if (this.addArr.length >= res.data.total) {
              this.addFinished = true;
            }
          } else {
            this.util.toast({ msg: res.msg });
          }
        })
        .catch((error) => { });
    },
    addLoad () {
      this.addPage++;
      this.getAddList();
    },
    getReduceList () {
      let param = {
        type: 2,
        pageNum: this.reducePage,
        pageSize: 10
      }
      this.$get("/app/v1/credit/detail", param)
        .then((res) => {
          console.log(res)
          if (res.code == 200) {
            this.reduceArr = this.reduceArr.concat(res.data.info);
            this.reduceLoading = false;
            if (this.reduceArr.length >= res.data.total) {
              this.reduceFinished = true;
            }
          } else {
            this.util.toast({ msg: res.msg });
          }
        })
        .catch((error) => { });
    },
    reduceLoad () {
      this.reducePage++;
      this.getReduceList();
    },
    getTime (time) {
      if (time.split("T").length) {
        return time.split("T")[0] + ' ' + time.split("T")[1]
      }
    }
  },
}
</script>
