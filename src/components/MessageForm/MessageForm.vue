<template>
  <div class="MessageForm">

    <div class="MessageForm__box">
      <div class="MessageForm__box-message">
        <textarea class="MessageForm__box-message-textarea" placeholder="Сообщение"></textarea>
        <div class="MessageForm__box-message-attach dropdown">
          <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                  <input class="form-control" type="file" id="formFile">
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="MessageForm__box-send-button">
        <div class="MessageForm__box-send-button-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/MessageForm/MessageForm.css';

export default defineComponent({
  name: 'MessageForm',
  components: {},
});
</script>
