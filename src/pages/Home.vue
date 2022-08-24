<template>
  <div class="home">
    <el-container>
      <el-aside class="aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          :width="asideComputed"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="el-header">
          <div @click="onHandleToggle" class="toggle">
            <el-icon>
              <Expand v-if="isCollapse" />
              <Fold v-else />
            </el-icon>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, unref, onMounted, computed } from "vue";
import { Menu as IconMenu } from "@element-plus/icons-vue";

const isCollapse = ref(true);
const asideWidth = ref(64);
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};

onMounted(() => {
  console.log("onMounted");
});

const asideComputed = computed(() => asideWidth.value + "px", {
  onTrack(e) {
    console.log("onTrack", e);
  },
  onTrigger(e) {
    console.log("onTrigger", e);
  },
});

const onHandleToggle = () => {
  isCollapse.value = !isCollapse.value;
  if (unref(isCollapse)) {
    setTimeout(() => {
      asideWidth.value = 64;
    }, 100);
  } else {
    setTimeout(() => {
      asideWidth.value = 200;
    }, 100);
  }
};
</script>

<style scoped lang="scss">
.aside {
  width: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
.el-header {
  padding: 0;
}
.header {
  height: 100%;
  background-color: rgb(189, 231, 247);
}

.toggle {
  height: 30px;
  color: #79bbff;
  font-size: 24px;
  text-indent: 24px;
}
</style>
