<template>
  <div class="MessageFormVoiceMessage">
    <div class="MessageForm__box-message-attach dropdown">
      <div title="Записать голосовое или прикрепить аудио" class="dropdown-toggle" type="button"
           data-bs-toggle="dropdown" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic"
             viewBox="0 0 16 16">
          <path
              d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
          <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
        </svg>
      </div>
      <ul class="dropdown-menu MessageFormVoiceMessage__menu">
        <li class="MessageFormVoiceMessage__menu-item">
          <a @click="setActionType('recordVoice')" data-bs-toggle="modal" data-bs-target="#exampleModal"
             class="dropdown-item MessageFormVoiceMessage__menu-item-link"
             href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic"
                 viewBox="0 0 16 16">
              <path
                  d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
              <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
            </svg>
            <span>Записать голосовое</span>
          </a>
        </li>
        <li class="MessageFormVoiceMessage__menu-item">
          <a @click="setActionType('uploadAudio')" data-bs-toggle="modal" data-bs-target="#exampleModal"
             class="dropdown-item MessageFormVoiceMessage__menu-item-link"
             href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-file-earmark-music" viewBox="0 0 16 16">
              <path
                  d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.6 2.6 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377s.974-.134 1.338-.377c.36-.24.662-.628.662-1.123V8.89l2-.5z"/>
              <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
            <span>Загрузить аудио-запись</span>
          </a>
        </li>
      </ul>
    </div>
    <div :class="'modal fade'+recordingClass" id="exampleModal" data-bs-backdrop="static" tabindex="-1"
         aria-labelledby="MessageFormVoiceMessageModal"
         aria-hidden="true">
      <div class="modal-dialog">
        <div v-if="loader" class="MessageFormVoiceMessageModal__loader">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div v-if="actionType === 'recordVoice'" class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="MessageFormVoiceMessageModal">Запись голосового сообщения</h1>
            <button ref="Close" type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="MessageFormVoiceMessage__record-audio">
              <div class="MessageFormVoiceMessage__record-audio-icon-box">
                <img v-if="recording" class="MessageFormVoiceMessage__record-audio-recording"
                     src="@/components/MessageForm/components/MessageFormVoiceMessage/img/recording.gif" alt="">
                <div v-else class="MessageFormVoiceMessage__record-audio-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       class="bi bi-mic-fill" viewBox="0 0 16 16">
                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"/>
                    <path
                        d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </div>
              </div>
              <div class="MessageFormVoiceMessage__record-audio-button">
                <div v-if="!recording" @click="startRecord" class="MessageFormVoiceMessage__record-audio-button-start">
                  <SubmitButton>
                    Начать запись
                  </SubmitButton>
                </div>
                <div v-if="recordingDoneStopping && recording"
                     class="MessageFormVoiceMessage__record-audio-button-start">
                  <a href="">Завершить запись</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="actionType === 'uploadAudio'" class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="MessageFormVoiceMessageModal">Загрузка аудио-записи</h1>
            <button ref="Close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="MessageFormVoiceMessage__upload-audio">
              <div class="MessageFormVoiceMessage__upload-audio-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-music-note-list" viewBox="0 0 16 16">
                  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
                  <path fill-rule="evenodd" d="M12 3v10h-1V3z"/>
                  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
                  <path fill-rule="evenodd"
                        d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
                </svg>
              </div>
              <div class="MessageFormVoiceMessage__upload-audio-select-file">
                <input v-if="!loader" @change="uploadAudioRecord"
                       class="form-control MessageFormVoiceMessage__upload-audio-select-file-input"
                       type="file"
                       id="formFile"
                       accept=".mp3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/MessageForm/components/MessageFormVoiceMessage/MessageFormVoiceMessage.css';
import SubmitButton from "@/components/Ui/SubmitButton/SubmitButton.vue";
import AudioFilesApi from "@/api/AudioFilesApi";

interface ComponentRefs {
  Close: HTMLButtonElement;
}

export default defineComponent({
  name: 'MessageFormVoiceMessage',
  components: {SubmitButton},
  props: [],
  data: function () {
    return {
      actionType: '',
      recording: false,
      recordingDoneStopping: false,
      recordingClass: '',
      loader: false
    }
  },
  methods: {
    setActionType(actionType: string) {
      this.actionType = actionType;
      this.setRecording(false);
      this.setRecordingDoneStopping(false);
      this.setRecordingClass('');

      const modal = document.getElementById('exampleModal');

      if (modal) {
        document.body.prepend(modal);
      }
    },
    setRecording(recording: boolean) {
      this.recording = recording;
    },
    setRecordingClass(recordingClass: string) {
      this.recordingClass = recordingClass;
    },
    setRecordingDoneStopping(stopping: boolean) {
      this.recordingDoneStopping = stopping;
    },
    startRecord() {

      this.setRecording(true);
      this.setRecordingClass('recording');

      setTimeout(() => {
        this.setRecordingDoneStopping(true);
      }, 5000);

    },
    uploadAudioRecord: async function (event: any) {

      this.loader = true;

      const file = event.target.files[0];

      if (file.size > 10485760) { // 10 MB
        alert('Аудио-файл не должен быть более 10мб!');
        return false;
      }

      let formData = new FormData();

      const userId = localStorage.getItem('userId');

      let chatId: any;
      chatId = this.$route.params.chatId;

      if (userId) {
        formData.append('userId', userId);
      }

      if (chatId) {
        formData.append('chatId', chatId);
      }

      formData.append('file', file);

      const res = await AudioFilesApi.upload(formData);

      if (res.status == 'error') {
        alert(res.errorMessage);
      } else {

        const refs = this.$refs as unknown as ComponentRefs;

        if (refs.Close) {
          refs.Close.click();
        }

      }

      this.loader = false;


    }
  }
});
</script>