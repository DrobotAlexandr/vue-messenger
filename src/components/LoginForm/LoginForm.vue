<template>
  <form class="LoginForm" @submit.prevent="sendLoginForm" v-bind:class="{'loading' : buttonLoading}">
    <div class="LoginForm__title">
      Добро пожаловать
    </div>
    <div class="LoginForm__sub-title">
      в анонимный чат
    </div>
    <label class="LoginForm__item">
      <span class="LoginForm__item-title">
        Имя/Никнейм <LoginFormSuccessCheck :is-check="validate.userNameCheck"/>
      </span>
      <span class="LoginForm__item-content">
        <input v-model="form.userName"
               @input="validateForm"
               maxlength="30"
               class="form-control LoginForm__item-confirm-controls-input-text"
               type="text"
               placeholder="Введите имя/никнейм"/>
      </span>
    </label>
    <label v-if="ages" class="LoginForm__item">
      <span class="LoginForm__item-title">
        Укажите ваш возраст <LoginFormSuccessCheck :is-check="validate.userAgeCheck"/>
      </span>
      <span class="LoginForm__item-content">
        <select v-model="form.userAge" @change="validateForm" style="max-width: 110px;"
                class="form-control LoginForm__item-confirm-controls-input-text">
          <option selected value="0">Ваш возраст</option>
          <option v-for="age in ages" v-bind:key="age" :value="age">{{ age }}</option>
        </select>
      </span>
    </label>
    <div class="LoginForm__item LoginForm__item_big-margin">
      <span class="LoginForm__item-content">
        <span class="form-check">
          <input @click="form.userGender='man'" class="form-check-input" type="radio" name="gender" id="man" checked>
          <label class="form-check-label" for="man">
            Я мужчина
          </label>
        </span>
        <span class="form-check">
          <input @click="form.userGender='woman'" class="form-check-input" type="radio" name="gender" id="woman">
          <label class="form-check-label" for="woman">
           Я женщина
          </label>
        </span>
      </span>
    </div>
    <label v-if="problemsCategories" class="LoginForm__item LoginForm__item_big-margin">
      <span class="LoginForm__item-title">
        Выберите категорию проблемы, которая вас беспокоит <LoginFormSuccessCheck
          :is-check="validate.problemCategoryCheck"/>
      </span>
      <span class="LoginForm__item-content">
        <select @change="validateForm" v-model="form.problemCategoryId"
                class="form-control LoginForm__item-confirm-controls-input-text">
          <option :value="category.id" v-for="category in problemsCategories" v-bind:key="category.id">{{
              category.title
            }}</option>
        </select>
      </span>
    </label>
    <label class="LoginForm__item-confirm">
      <span class="LoginForm__item-confirm-title">
        Психолог присоединится к чату в течение четырёх минут <LoginFormSuccessCheck
          :is-check="validate.privatePolicyCheck"/>
      </span>
      <span class="LoginForm__item-confirm-controls">
        <input @change="validateForm" value="1" v-model="form.privatePolicyConfirm" type="checkbox"
               class="LoginForm__item-confirm-controls-input" name="">
        <span>
          Согласен с тем, как сервис <a :href="privatePolicyLink" target="_blank">обрабатывает мои данные</a>. Мы обрабатываем ваши данные анонимно.
        </span>
      </span>
    </label>
    <div class="LoginForm__item-buttons">
      <div class="LoginForm__item-buttons-left">
        <a v-if="!buttonLoading" href="/">
          <SubmitButton template="lite">Отмена</SubmitButton>
        </a>
        <span v-else class="LoginForm__item-loading-message">
         Создаем чат для вас. Ожидайте...
        </span>
      </div>
      <div class="LoginForm__item-buttons-right">
        <SubmitButton :loading="buttonLoading" :disable="disableSendButton">НАЧАТЬ ЧАТ</SubmitButton>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/LoginForm/LoginForm.css';
import SubmitButton from "@/components/Ui/SubmitButton/SubmitButton.vue";
import LoginFormSuccessCheck from "@/components/LoginForm/components/LoginFormSuccessCheck.vue";
import ChatApi from "@/api/ChatApi";
import {useUserStore} from "@/stores/UserStore"

interface ProblemCategory {
  id: number;
  title: string;
}

declare interface ComponentData {
  privatePolicyLink: string,
  buttonLoading: boolean,
  form: {
    userName: string,
    userAge: number,
    userGender: string,
    problemCategoryId: number,
    privatePolicyConfirm: boolean
  },
  validate: {
    userNameCheck: boolean,
    userAgeCheck: boolean,
    problemCategoryCheck: boolean
    privatePolicyCheck: boolean
  },
  ages: object,
  disableSendButton: boolean,
  problemsCategories: ProblemCategory[],
}

export default defineComponent({
  name: 'LoginForm',
  components: {LoginFormSuccessCheck, SubmitButton},
  data(): ComponentData {
    return {
      privatePolicyLink: '/pravovye-dokumenty',
      buttonLoading: false,
      form: {
        userName: '',
        userAge: 0,
        userGender: 'man',
        problemCategoryId: 0,
        privatePolicyConfirm: false
      },
      validate: {
        userNameCheck: false,
        userAgeCheck: false,
        problemCategoryCheck: false,
        privatePolicyCheck: false
      },
      disableSendButton: true,
      ages: [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112
      ],
      problemsCategories: []
    }
  },
  created() {
    this.getProblemsCategories();
  },
  methods: {
    async getProblemsCategories() {

      const res = await ChatApi.getProblemsCategories();

      this.problemsCategories = res.items;

    },
    validateForm(): void {

      this.validate.userNameCheck = this.form.userName.length >= 3;

      this.validate.userAgeCheck = this.form.userAge > 1;

      this.validate.problemCategoryCheck = this.form.problemCategoryId > 0;

      this.validate.privatePolicyCheck = this.form.privatePolicyConfirm;

      this.disableSendButton = !(this.validate.userNameCheck
          &&
          this.validate.userAgeCheck
          &&
          this.validate.problemCategoryCheck
          &&
          this.validate.privatePolicyCheck);
    },

    async sendLoginForm() {

      this.buttonLoading = true;

      const res = await ChatApi.createChat(
          {
            name: this.form.userName,
            age: this.form.userAge,
            gender: this.form.userGender,
            category: this.form.problemCategoryId
          }
      );

      if (res.status === 'ok') {

        const userStore = useUserStore();

        userStore.setUserId(res.userId);

        setTimeout(() => {
          this.$router.push('/m/' + res.chatId);
        }, 1000);

      } else if (res.status === 'error') {

        alert(res.errorMessage);
        this.buttonLoading = false;

      } else {

        alert('ServerError!');
        this.buttonLoading = false;

      }


    },

  }
});
</script>
