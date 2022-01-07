<template>
  <el-card>
    <div class="me-author-name">
    <font-awesome-icon :icon="['fas', 'blog']" class="user-secret"/><span>Hazenoeasy</span>
    </div>
    <div class="me-author-description">
      <div align="center">Developer in Software</div>
      <div align="center">Now in NYC </div>
    </div>
    <div class="me-author-tool">
      <font-awesome-icon :icon="['fas', 'envelope-square']" class="user-secret"/>
      <font-awesome-icon :icon="['fab', 'linkedin']" class="user-secret"/>
      <font-awesome-icon :icon="['fab', 'github-square']" class="user-secret"/>
      <font-awesome-icon :icon="['fab', 'instagram-square']" class="user-secret"/>
    </div>
  </el-card>

</template>

<script>
export default {
  name: 'CardMe',
  data () {
    return {
      qq: { title: 'QQ', message: '723663826' },
      bilibili: {
        title: '哔哩哔哩',
        message: '<a target="_blank" href="https://space.bilibili.com/473844125">https://space.bilibili.com/473844125</a>'
      }
    }
  },
  methods: {
    showTool (tool) {
      this.$message({
        duration: 0,
        showClose: true,
        dangerouslyUseHTMLString: true,
        message: '<strong>' + tool.message + '</strong>'
      });
    }
  }
}
</script>

<style scoped>
.me-author-name {
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid #909399;
  /* margin: 20px 0px 20px 0px; */
  padding-bottom:10px ;
}
.me-author-name span{
  padding-left: 20px;
}

.me-author-description {
  padding: 8px 0;
}

.me-icon-job {
  padding-left: 16px;
}

.me-author-tool {
  text-align: center;
  padding-top: 10px;
}

.me-author-tool i {
  cursor: pointer;
  padding: 4px 10px;
  font-size: 30px;
}
.me-author-tool .user-secret{
cursor: pointer;
  padding: 4px 10px;
  font-size: 30px;
}

</style>
