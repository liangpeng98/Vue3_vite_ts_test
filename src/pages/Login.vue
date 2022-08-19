<template>
  <div class="login">
    <h3>登录</h3>
    <el-form ref="ruleFormRef" :model="rulesForm" label-width="80px" label-position="left" :rules="rules">
      <el-form-item label="username" prop="name">
        <el-input v-model.trim="rulesForm.name" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model.trim="rulesForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)">登录</el-button>
        <el-button @click="onResetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'
//ComponentInternalInstance
import type { FormRules, FormInstance } from 'element-plus'
const { ctx, proxy }: ComponentInternalInstance | null = getCurrentInstance()

const rulesForm = reactive({
  name: '',
  password: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const { name, password } = rulesForm
      if (name === 'admin' && password === 'admin') {
        proxy.$ElMessage({
          message: '登录成功',
          type: 'success',
        })
      } else {
        proxy.$ElMessage({
          message: '请输入正确的用户名或密码！',
          type: 'warning',
        })
      }
    }
  })
}

const onResetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style scoped lang="scss">
.login {
  width: 320px;
  height: 520px;
  margin: 200px auto;
  align-items: center;
  text-align: center;
}
</style>