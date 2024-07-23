<template>
  <div class="ChatView">
    <ChatHeader/>
    <MessagesList :messages="messages"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MessagesList from "@/components/MessagesList/MessagesList.vue";
import ChatHeader from "@/components/ChatHeader/ChatHeader.vue";


export default defineComponent({
  name: 'ChatView',
  components: {ChatHeader, MessagesList},
  data() {
    return {
      messages: [
        {
          id: 1,
          message: 'С учётом сложившейся международной обстановки, современная методология разработки требует от нас анализа существующих финансовых и административных условий. Однозначно, диаграммы связей будут объективно рассмотрены соответствующими инстанциями. Учитывая ключевые сценарии поведения, разбавленное изрядной долей эмпатии, рациональное мышление способствует подготовке и реализации соответствующих условий активизации.',
          time: '12:24',
          status: {
            code: 'send'
          },
          position: 'left'
        },
        {
          id: 2,
          message: 'Реализации соответствующих условий активизации.',
          time: '12:24',
          status: {
            code: 'read'
          },
          position: 'right'
        },
        {
          id: 3,
          message: 'С учётом сложившейся международной обстановки, современная методология разработки. Реализации соответствующих условий активизации.',
          time: '12:24',
          status: {
            code: 'read'
          },
          position: 'right'
        },
        {
          id: 4,
          message: 'Противоположная точка зрения подразумевает, что действия представителей оппозиции неоднозначны и будут разоблачены. В частности, синтетическое тестирование играет определяющее значение для распределения внутренних резервов и ресурсов.',
          time: '12:24',
          status: {
            code: 'send'
          },
          position: 'left'
        },
        {
          id: 5,
          message: 'Безусловно, постоянное информационно-пропагандистское обеспечение нашей деятельности способствует повышению качества распределения внутренних резервов и ресурсов.',
          time: '12:24',
          status: {
            code: 'send'
          },
          position: 'right'
        },
        {
          id: 6,
          message: '<img src="https://drobot.dev/upload/disk/files/publications-stories/media_gallery/2023/11/29/48b9dece507e837844b860c86e7590fe-origin.webp">',
          time: '12:24',
          status: {
            code: 'send'
          },
          position: 'right'
        },
      ]
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === 'chat') {
      setTimeout(() => {
        this.init();
      });
      next();
    } else {
      next();
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        const messagesList = document.querySelector('.MessagesList__items');
        if (messagesList) {
          messagesList.scrollTop = messagesList.scrollHeight;
        }
      }, 100);
    }
  }
});
</script>
