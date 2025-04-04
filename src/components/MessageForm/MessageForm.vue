<template>
  <form class="MessageForm">

    <div class="MessageForm__top">
      <div v-if="userRole==='psychologist'" class="MessageForm__set-contacts" @click="setContact">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-person-lines-fill" viewBox="0 0 16 16">
          <path
              d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
        </svg>
        <span>
        Передать контакты
      </span>
      </div>
    </div>

    <div v-if="!isBlocked" class="MessageForm__box">

      <div class="MessageForm__box-message">

        <MessageFormImagePreview :image="image" @remove-image="removeImage"/>

        <textarea @change="setChatTyping" @click="setChatTyping" v-model="message"
                  @input="validate(); resizeTextArea();"
                  class="MessageForm__box-message-textarea"
                  placeholder="Сообщение"></textarea>

        <div
            :class="{'MessageForm__box-message-attach' : true,'dropdown' : true, 'MessageForm__box-message-attach--active' : image.length >1 }">
          <div title="Прикрепить изображение" class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
               aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip"
                 viewBox="0 0 16 16">
              <path
                  d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
            </svg>
          </div>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Прикрепить изображение</label>
                  <input @change="setImage" class="form-control" type="file" id="formFile" accept="image/*">
                </div>
              </a>
            </li>
          </ul>
        </div>
        <MessageFormVoiceMessage/>
      </div>
      <div @click="sendMessage" :class="'MessageForm__box-send-button '+buttonDisabledClass">
        <div class="MessageForm__box-send-button-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill"
               viewBox="0 0 16 16">
            <path
                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
          </svg>
        </div>
      </div>

    </div>
    <div v-else>
      <div class="chatBlocked alert alert-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ban"
             viewBox="0 0 16 16">
          <path
              d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
        </svg>
        <span>
          Чат заблокирован!
          <div v-if="userRole==='psychologist'" @click="removeChat" class="chatBlocked__remove">Удалить чат</div>
        </span>
      </div>
    </div>

  </form>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue';
import {useRoute} from 'vue-router';
import '@/components/MessageForm/MessageForm.css';
import MessagesApi from "@/api/MessagesApi";
import MessageFormImagePreview
  from "@/components/MessageForm/components/MessageFormImagePreview/MessageFormImagePreview.vue";
import ChatApi from "@/api/ChatApi";
import MessageFormVoiceMessage
  from "@/components/MessageForm/components/MessageFormVoiceMessage/MessageFormVoiceMessage.vue";
import {useLiveChatStore} from "@/stores/LiveChatStore";
import {useUserStore} from "@/stores/UserStore";

interface Message {
  messageId: string;
  message: string
}

interface Chat {
  id: string;
  message: string;
}

export default defineComponent({
  name: 'MessageForm',
  components: {MessageFormVoiceMessage, MessageFormImagePreview},
  data() {
    return {
      image: '',
      buttonDisabledClass: 'disabled'
    }
  },
  setup: function () {
    const liveChatStore = useLiveChatStore();
    const route = useRoute();
    const editMessage = ref<Message | null>(null);
    const message = ref('');
    const editMessageId = ref('');
    const isBlocked = ref(false);
    const userStore = useUserStore();

    const userRole = computed(() => userStore.getUserRole());

    const updateEditMessage = () => {
      editMessage.value = liveChatStore.getEditMessage() as Message;
    };

    updateEditMessage();


    watch(
        () => liveChatStore.getEditMessage(),
        (newValue) => {
          editMessage.value = newValue as Message;
          if (editMessage.value && editMessage.value.messageId) {
            message.value = editMessage.value.message;
            editMessageId.value = editMessage.value.messageId;
          }
        }
    );

    watch(
        () => liveChatStore.chats,
        () => {
          if (Array.isArray(liveChatStore.chats)) {
            const foundChat = liveChatStore.chats.find((chat: Chat) => chat.id === route.params.chatId);
            isBlocked.value = foundChat.isBlocked;
          }
        }
    );

    watch(
        () => route.params.chatId,
        () => {
          if (Array.isArray(liveChatStore.chats)) {
            const foundChat = liveChatStore.chats.find((chat: Chat) => chat.id === route.params.chatId);
            isBlocked.value = foundChat.isBlocked;
          }
        }
    );


    return {
      liveChatStore,
      editMessage,
      message,
      editMessageId,
      isBlocked,
      userRole
    };
  },
  methods: {

    async setContact() {
      if (!confirm('Передать контакт?')) {
        return;
      }

      await ChatApi.setContact({chatId: this.$route.params.chatId});
    },

    async removeChat() {
      if (!confirm('Удалить чат?')) {
        return;
      }

      await ChatApi.removeChat({chatId: this.$route.params.chatId});

      window.location.href = '';

    },

    setImage(event: any) {
      const file = event.target.files[0];

      if (file.size > 2097152) {
        alert('Изображение не должно быть более 2мб!');
        return false;
      }

      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.image = e.target.result;
          this.validate();
        };
        reader.readAsDataURL(file);
      }
    },
    sendMessage() {
      MessagesApi.sendMessage(
          {
            chatId: this.$route.params.chatId,
            editMessageId: this.editMessageId,
            message: this.message,
            image: this.image
          }
      );
      this.message = '';
      this.image = '';
      this.editMessageId = '';
      const element = document.querySelector<HTMLElement>('.MessageForm__box-message-textarea');
      const chatItems = document.querySelector<HTMLElement>('.MessagesList__items');

      if (element && chatItems) {
        element.style.cssText = 'height: 66px';
        chatItems.style.cssText = 'height: calc(100dvh - 132px) !important; padding-bottom: 50px;';
      }
    },
    validate() {
      if (this.message.length > 0 || this.image.length > 0) {
        this.buttonDisabledClass = ''
      } else {
        this.buttonDisabledClass = 'disabled'
      }
    },

    isMobile(): boolean {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUserAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isMobileViewport = window.innerWidth <= 768;
      return isMobileUserAgent || isMobileViewport;
    },

    resizeTextArea() {
      const element = document.querySelector<HTMLElement>('.MessageForm__box-message-textarea');
      const chatItems = document.querySelector<HTMLElement>('.MessagesList__items');

      if (element && chatItems) {

        let height = 0;

        if (this.isMobile()) {
          height = element.offsetHeight;
        } else {
          height = element.offsetHeight + 50;
        }

        if (element.scrollHeight < 300) {
          element.style.cssText = 'height:' + element.scrollHeight + 'px';
          chatItems.style.cssText = 'height: calc(100dvh - ' + height + 'px) !important; padding-bottom: 130px;';
        }

        chatItems.scrollTo({
          top: chatItems.scrollHeight,
          behavior: 'smooth'
        });
      }
    },

    removeImage() {
      this.image = '';
    },
    setChatTyping() {
      ChatApi.setChatTyping({chatId: this.$route.params.chatId});
    }
  }
})
</script>
