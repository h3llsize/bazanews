<template>
  <div class="profile-create">
    <div class="container profile-create__container">
      <h2 class="profile-create__heading">
        Создать пост
      </h2>
      <form action="#" class="profile-create__form" @submit.prevent="uploadPost()">
        <input v-model="heading" type="text" name="title" placeholder="Заголовок" class="profile-create__input">
        <textarea v-model="desc" class="profile-create__input profile-create__input-ta" name="desc"
          placeholder="Описание"></textarea>
        <label for="profileCreateFile" class="profile-create__filelabel">
          <h3 class="profile-create__heading-form">Выберите фотографию</h3>
          <span ref="fileInput">
            Фотография
          </span>
          <input ref="file" type="file" @change="onChangeFile" id="profileCreateFile" accept=".png, .jpg, .webp, .jpeg"
            class="profile-create__file">
        </label>
        <button class="profile-create__btn" type="submit">Создать пост</button>
        <span v-if="validate" class="profile-create__validate">
          {{ validate }}
        </span>
      </form>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.profile-create {
  padding-top: 30px;
}

.profile-create__heading {
  font-size: 28px;
  margin-bottom: 20px;
}

.profile-create__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  width: 450px;
}

.profile-create__input {
  width: 100%;
  padding: 10px 20px;
  background: white;
  border-radius: 10px;
  font-size: 15px;
}

.profile-create__input-ta {
  min-height: 150px;
  max-height: 400px;
  border: none;
  outline: none;
  resize: vertical;
}

.profile-create__filelabel {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-create__filelabel span {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 14px;
  vertical-align: middle;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 4px;
  background-color: #419152;
  line-height: 22px;
  height: 30px;
  padding: 5px 20px;
  box-sizing: border-box;
  border: none;
  margin: 0;
  transition: background-color 0.2s;
}

.profile-create__filelabel input[type=file] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

/* Focus */
.profile-create__filelabel input[type=file]:focus+span {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
}

/* Hover/active */
.profile-create__filelabel:hover span {
  background-color: #59be6e;
}

.profile-create__filelabel:active span {
  background-color: #2E703A;
}

/* Disabled */
.profile-create__filelabel input[type=file]:disabled+span {
  background-color: #eee;
}

.profile-create__filelabel span.active {
  opacity: .5;
}

.profile-create__btn {
  align-self: center;

  background: white;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 10px;

  margin-top: 10px;
}

.profile-create__validate {
  align-self: center;
}
</style>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      heading: '',
      desc: '',
      file: '',
      validate: ''
    }
  },
  methods: {
    onChangeFile: function () {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      this.$refs.fileInput.classList.add('active');
    },
    uploadPost: function () {
      let formData = new FormData();
      formData.append('file', this.file,);
      formData.append('pageDTO', JSON.stringify({
        title: this.heading,
        description: this.desc,
        slug: 'name',
        imageName: 'name',
        accessToken: localStorage.getItem('bzaccesstoken'),
      }));
      axios.post('http://localhost:8082/api/post/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
      .then(response => {
        this.validate = response.data;
        this.$refs.file.files = [];
      })
      .catch(error => {
        console.log(error);
        this.validate = error.message;
      })
    }
  },
}
</script>
