<template>
  <div class="ChatHeaderUserCard">
    <div class="modal fade" id="userModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Информация
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-header">
            <div class="ChatHeaderUserCard__user">
              <UserAvatar :letter="user.letter"/>
              <div class="ChatHeaderUserCard__user-name">
                {{ user.name }}
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="ChatHeaderUserCard__info">

              <div v-if="user.age" class="ChatHeaderUserCard__info-item">
                <div class="ChatHeaderUserCard__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cake2"
                       viewBox="0 0 16 16">
                    <path
                        d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426"/>
                  </svg>
                </div>
                <div class="ChatHeaderUserCard__info-value">
                  {{ user.age }}
                </div>
              </div>
              <div v-if="user.gender" class="ChatHeaderUserCard__info-item">
                <div class="ChatHeaderUserCard__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       class="bi bi-gender-male" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>
                  </svg>
                </div>
                <div class="ChatHeaderUserCard__info-value">
                  {{ user.gender }}
                </div>
              </div>
              <div v-if="user.category" class="ChatHeaderUserCard__info-item">
                <div class="ChatHeaderUserCard__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell"
                       viewBox="0 0 16 16">
                    <path
                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                  </svg>
                </div>
                <div class="ChatHeaderUserCard__info-value">
                  {{ user.category }}
                </div>
              </div>
            </div>

            <div v-if="userRole=='psychologist'" class="ChatHeaderUserCard__re-change">

              <div class="ChatHeaderUserCard__npm re-change-title">
                Передать чат другому специалисту
              </div>
              <div v-if="countTransfers < 4">
                <div class="ChatHeaderUserCard__re-change-text">
                  Чат будет передан в Канал заявок и его сможет взять другой специалист.
                </div>
                <div @click="reChange">
                  <SubmitButton>Передать</SubmitButton>
                </div>
              </div>
              <div v-else>
                <div class="alert alert-danger mt-2" role="alert">
                  Достигнуто максимально количество передач чата другому специалисту.
                </div>
              </div>

            </div>

            <div v-if="userRole==='user' && user.bxUserId" class="ChatHeaderUserCard__thanks">
              <div class="ChatHeaderUserCard__thanks__title">
                Вы можете отблагодарить психолога за консультацию на любую сумму
              </div>
              <form action="/api/psychologists/donate.php" class="ChatHeaderUserCard__thanks-form">
                <div class="ChatHeaderUserCard__thanks-form-item">
                  <input type="hidden" name="bxUserId" :value="user.bxUserId">
                  <input name="sum" min="100" required type="number" placeholder="300 Рублей"
                         class="form-control ChatHeaderUserCard__thanks-form-item-input">
                </div>
                <div class="ChatHeaderUserCard__thanks-form-item">
                  <SubmitButton>К оплате</SubmitButton>
                </div>
              </form>
            </div>

            <div v-if="userRole==='user' && user.bxUserId" class="ChatHeaderUserCard__rating">

              <div v-if="newRatingSuccess">
                <div class="ChatHeaderUserCard__rating-success">
                  Спасибо за оценку!
                </div>
              </div>
              <div v-else>

                <div class="ChatHeaderUserCard__rating-title">
                  Оценить работу психолога
                </div>
                <div class="ChatHeaderUserCard__rating-stars">

                  <div @click="setRating(1)" class="ChatHeaderUserCard__rating-star-item">
                    <svg v-if="newRatingValue >= 1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor"
                         class="bi bi-star-fill ChatHeaderUserCard__rating-star-item-fill" viewBox="0 0 16 16">
                      <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" class="bi bi-star ChatHeaderUserCard__rating-star-item-blank"
                         viewBox="0 0 16 16">
                      <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                  </div>
                  <div @click="setRating(2)" class="ChatHeaderUserCard__rating-star-item">
                    <svg v-if="newRatingValue >= 2" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor"
                         class="bi bi-star-fill ChatHeaderUserCard__rating-star-item-fill" viewBox="0 0 16 16">
                      <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" class="bi bi-star ChatHeaderUserCard__rating-star-item-blank"
                         viewBox="0 0 16 16">
                      <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                  </div>
                  <div @click="setRating(3)" class="ChatHeaderUserCard__rating-star-item">
                    <svg v-if="newRatingValue >= 3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor"
                         class="bi bi-star-fill ChatHeaderUserCard__rating-star-item-fill" viewBox="0 0 16 16">
                      <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" class="bi bi-star ChatHeaderUserCard__rating-star-item-blank"
                         viewBox="0 0 16 16">
                      <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                  </div>
                  <div @click="setRating(4)" class="ChatHeaderUserCard__rating-star-item">
                    <svg v-if="newRatingValue >= 4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor"
                         class="bi bi-star-fill ChatHeaderUserCard__rating-star-item-fill" viewBox="0 0 16 16">
                      <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" class="bi bi-star ChatHeaderUserCard__rating-star-item-blank"
                         viewBox="0 0 16 16">
                      <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                  </div>
                  <div @click="setRating(5)" class="ChatHeaderUserCard__rating-star-item">
                    <svg v-if="newRatingValue >= 5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor"
                         class="bi bi-star-fill ChatHeaderUserCard__rating-star-item-fill" viewBox="0 0 16 16">
                      <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" class="bi bi-star ChatHeaderUserCard__rating-star-item-blank"
                         viewBox="0 0 16 16">
                      <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                  </div>
                </div>

                <textarea v-model="newRatingComment"
                          class="ChatHeaderUserCard__rating-comment form-control"
                          placeholder="Комментарий"></textarea>

                <div
                    :class="{'ChatHeaderUserCard__rating-button' : true, 'ChatHeaderUserCard__rating-button--disabled' : newRatingValue === 0 || newRatingDisabled,}">
                  <SubmitButton @click="sendRating">Оценить</SubmitButton>
                </div>

              </div>

            </div>

            <div v-if="userRole==='psychologist'" class="ChatHeaderUserCard__complaint">
              <div class="ChatHeaderUserCard__complaint_title">
                Оставить жалобу
              </div>

              <form v-if="!complaintSuccessText" @submit.prevent="sendComplaintText()"
                    :class="{'ChatHeaderUserCard__complaint_title-form' :true, 'ChatHeaderUserCard__complaint_title-form--load' : complaintLoader}">
                <div class="ChatHeaderUserCard__complaint_title-form-item">
                  <textarea v-model="complaintText"
                            class="form-control ChatHeaderUserCard__complaint_title-form-textarea"></textarea>
                </div>
                <div class="ChatHeaderUserCard__complaint_button">
                  <SubmitButton>Оставить жалобу</SubmitButton>
                </div>
              </form>
              <div class="v-else">
                <div v-html="complaintSuccessText"></div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue';
import '@/components/ChatHeader/components/ChatHeaderUserCard/ChatHeaderUserCard.css';
import UserAvatar from "@/components/UserAvatar/UserAvatar.vue";
import SubmitButton from "@/components/Ui/SubmitButton/SubmitButton.vue";
import {useUserStore} from "@/stores/UserStore";
import ChatApi from "@/api/ChatApi";
import {useLiveChatStore} from "@/stores/LiveChatStore";
import {useRoute} from "vue-router";

interface Chat {
  id: string;
  message: string;
}

export default defineComponent({
  name: 'ChatHeaderUserCard',
  props: ['user'],
  components: {SubmitButton, UserAvatar},
  setup() {

    const liveChatStore = useLiveChatStore();
    const route = useRoute();
    const userStore = useUserStore();
    const complaintText = ref('');
    const complaintSuccessText = ref('');
    const complaintLoader = ref(false);
    const countTransfers = ref(0);
    const newRatingValue = ref(0);
    const newRatingSuccess = ref(false);
    const newRatingDisabled = ref(false);
    const newRatingComment = ref('');

    const userRole = computed(() => userStore.getUserRole());

    watch(
        () => liveChatStore.chats,
        () => {
          if (Array.isArray(liveChatStore.chats)) {
            const foundChat = liveChatStore.chats.find((chat: Chat) => chat.id === route.params.chatId);
            countTransfers.value = foundChat.countTransfers;
          }
        }
    );

    watch(
        () => route.params.chatId,
        () => {
          if (Array.isArray(liveChatStore.chats)) {
            const foundChat = liveChatStore.chats.find((chat: Chat) => chat.id === route.params.chatId);
            countTransfers.value = foundChat.countTransfers;
          }
        }
    );

    return {
      userRole,
      complaintText,
      complaintSuccessText,
      complaintLoader,
      countTransfers,
      newRatingValue,
      newRatingSuccess,
      newRatingComment,
      newRatingDisabled
    };
  },


  methods: {

    setRating(value: number) {
      this.newRatingValue = value;
    },

    async sendComplaintText() {

      if (this.complaintText.length === 0) {
        alert('Введите текст жалобы!');
        return;
      }

      /*
        if (this.complaintText.length > 0 && this.complaintText.length < 100) {
          alert('Текст жалобы должен быть минимум 100 символов! Сейчас ' + this.complaintText.length);
          return;
        }
      */

      if (this.complaintText.length > 500) {
        alert('Текст жалобы должен быть максимум 500 символов! Сейчас ' + this.complaintText.length);
        return;
      }

      this.complaintLoader = true;

      const res = await ChatApi.sendComplaint(
          {
            chatId: this.$route.params.chatId,
            complaintText: this.complaintText
          }
      );

      if (res.status === 'ok') {
        this.complaintSuccessText = 'Жалоба успешно отправлена! В ближайшее время мы ее рассмотрим!';
      } else if (res.status === 'error') {
        alert(res.errorMessage);
        this.complaintSuccessText = res.errorMessage;
      } else {
        alert('[ChatApi.sendComplaint] : ServerError');
      }

      this.complaintLoader = false;


    },

    async sendRating() {

      this.newRatingDisabled = true;

      const res = await ChatApi.sendRating(
          {
            chatId: this.$route.params.chatId,
            rating: this.newRatingValue,
            comment: this.newRatingComment
          }
      );

      if (res.status === 'ok') {
        this.newRatingSuccess = true;
      } else if (res.status === 'error') {
        alert(res.errorMessage);
      } else {
        alert('ServerError!');
      }

      this.newRatingDisabled = false;

    },

    async reChange() {

      if (!confirm('Вы действительно хотите передать Чат другому специалисту? Действие нельзя будет отменить.')) {
        return;
      }

      const res = await ChatApi.reChange({chatId: this.$route.params.chatId});

      if (res.status === 'ok') {
        if (res.link) {
          window.location.href = res.link;
        }
      } else {
        alert('ServerError!');
      }

    }
  }
});
</script>
