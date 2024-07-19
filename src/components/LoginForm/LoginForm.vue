<template>
  <form class="LoginForm">
    <div class="LoginForm__title">
      Добро пожаловать
    </div>
    <div class="LoginForm__sub-title">
      в анонимный чат
    </div>
    <label class="LoginForm__item">
      <span class="LoginForm__item-title">
        Имя/Никнейм
      </span>
      <span class="LoginForm__item-content">
        <input class="form-control LoginForm__item-confirm-controls-input-text" type="text"
               placeholder="Введите имя/никнейм">
      </span>
    </label>
    <label class="LoginForm__item">
      <span class="LoginForm__item-title">
        Укажите ваш возраст
      </span>
      <span class="LoginForm__item-content">
        <input style="max-width: 70px; text-align: center;"
               class="form-control LoginForm__item-confirm-controls-input-text" type="number" placeholder="19">
      </span>
    </label>
    <label class="LoginForm__item LoginForm__item_big-margin">
      <span class="LoginForm__item-content">
        <span class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="man" checked>
          <label class="form-check-label" for="man">
            Я мужчина
          </label>
        </span>
        <span class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="woman">
          <label class="form-check-label" for="woman">
           Я женщина
          </label>
        </span>
      </span>
    </label>
    <label class="LoginForm__item LoginForm__item_big-margin">
      <span class="LoginForm__item-title">
        Выберите категорию проблемы, которая вас беспокоит
      </span>
      <span class="LoginForm__item-content">
        <select class="form-control LoginForm__item-confirm-controls-input-text">
          <option>Депрессия</option>
          <option>Тревога и стресс</option>
          <option>Самооценка и уверенность</option>
        </select>
      </span>
    </label>
    <label class="LoginForm__item-confirm">
      <span class="LoginForm__item-confirm-title">
        Психолог присоединится к чату в течение четырёх минут
      </span>
      <span class="LoginForm__item-confirm-controls">
        <input type="checkbox" class="LoginForm__item-confirm-controls-input" name="" checked>
        <span>
          Согласен с тем, как “Психолограм” <a href="" target="_blank">обрабатывает мои данные</a> Мы обрабатываем ваши данные анонимно
        </span>
      </span>
    </label>
    <div class="LoginForm__item-buttons">
      <div class="LoginForm__item-buttons-left">
        <SubmitButton template="lite">Отмена</SubmitButton>
      </div>
      <div class="LoginForm__item-buttons-right">
        <SubmitButton>НАЧАТЬ ЧАТ</SubmitButton>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/components/LoginForm/LoginForm.css';
import SubmitButton from "@/components/Ui/SubmitButton/SubmitButton.vue";

export default defineComponent({
  name: 'LoginForm',
  components: {SubmitButton},
});
</script>
