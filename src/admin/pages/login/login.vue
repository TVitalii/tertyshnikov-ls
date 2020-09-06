<template>
  <div class="login-page-component">
    <div class="content">
      <div class="form" @submit.prevent="handleSubmit">
        <div class="form-title">Авторизация</div>
        <div class="row">
          <app-input
            title="Логин"
            v-model="user.name"
            icon="user" 
            :errorMessage="validation.firsError('user.name')"
          />
        </div>
        <div class="row">
          <app-input
          title="Пароль"
          v-model="user.password"
          icon="key"
          type="password"
          :errorMessage="validation.firsError('user.password')"
        />
        </div>
        <div class="btn">
          <app-button title="Отправить" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appInput from "../../components/input";
import appButton from "../../components/button";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
import axios from "axios";

export default {
  mixins: [ValidatorMixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите пароль");
    },
  },
  data: () => ({
    user: {
      name: "",
      password
    }
  }),
  components: { appButton, appInput },
  methods: {
    handeleSubmit() {
      this.$validate().then((isValid) => {
        if (isValid === false) return;
       
       axios.post("")
      });
    },
  },
};
</script>

<style lang="postcss" scoped src="./login.pcss"></style>