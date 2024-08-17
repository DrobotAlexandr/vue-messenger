<template>
  <div class="NewChat">

    <div @click="getNewChatVerifyData" data-bs-toggle="modal" data-bs-target="#NewChatModal">
      <submit-button>Создать новый чат</submit-button>
    </div>

    <div class="modal fade" id="NewChatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Создание нового чата</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="verifyData.status==='error'" class="NewChat__warning alert alert-primary" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="NewChat__warning-icon bi bi-clock-history" viewBox="0 0 16 16">
                <path
                    d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                <path
                    d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
              </svg>
              <div class="NewChat__warning-message">
                <span v-html="verifyData.errorMessage"></span>
              </div>
            </div>
            <form @submit.prevent="createChat" v-else class="NewChat__warning-form">
              <div v-if="verifyData.categories" class="NewChat__warning-form-item">
                <div class="LoginForm__item-title">
                  Выберите категорию проблемы, которая вас беспокоит
                </div>
                <div class="NewChat__warning-form-item-content">
                  <select @change="validate" v-model="problemCategoryId"
                          class="form-control">
                    <option value="0">Что Вас беспокоит?</option>
                    <option :value="category.id" v-for="category in verifyData.categories"
                            v-bind:key="category.id">{{ category.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="NewChat__warning-form-item">
                <div :class="disabledClass">
                  <SubmitButton>Создать чат</SubmitButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/NewChat/NewChat.css';
import SubmitButton from "@/components/Ui/SubmitButton/SubmitButton.vue";
import ChatApi from "@/api/ChatApi";


export default defineComponent({
  name: 'NewChat',
  components: {SubmitButton},
  data() {
    return {
      verifyData: {},
      problemCategoryId: 0,
      disabledClass: 'disabled',
    }
  },
  methods: {
    async getNewChatVerifyData() {
      this.verifyData = await ChatApi.getNewChatVerifyData();
    },
    validate() {
      if (this.problemCategoryId > 0) {
        this.disabledClass = '';
      } else {
        this.disabledClass = 'disabled';
      }
    },
    async createChat() {

      if (this.problemCategoryId < 1) {
        alert('ValidationError!');
        return '';
      }

      this.disabledClass = 'disabled';

      const res = await ChatApi.createChat(
          {
            name: '',
            age: '',
            gender: '',
            category: this.problemCategoryId
          }
      );

      if (res.chatId) {
        window.location.href = '';
      } else {
        alert('serverError');
      }

      setTimeout(() => {
        this.disabledClass = '';
      }, 400);

    }

  }
});
</script>
