<template>
  <section class="chat" :class="{ is_active: active }">
    <div class="chat__messages">
      <ul class="chat__list-msg">
        <li class="chat__item-msg" :class="{ 'me-msg': msg.login === userLogin }" v-for="msg in messages" :key="messages.indexOf(msg)">
          <h3 class="chat__name-msg">
            {{ msg.name }}
          </h3>
          <p class="chat__message-msg">
            {{ msg.text }}
          </p>
        </li>
      </ul>
    </div>
    <form class="chat__inputarea" autocomplete="off" @submit.prevent="newMessage(userLogin, userName, messageValue)">
      <input v-model="messageValue" type="text" placeholder="Введите сообщение" name="message" class="chat__input-area">
      <button type="submit" class="chat__send-area">
        <svg class="chat__icon-area">
          <use xlink:href="../assets/sprite.svg#arrow-undo-outline"></use>
        </svg>
      </button>
    </form>
  </section>
</template>

<style scoped lang="scss">
  .chat {
    position: fixed;
    right: 80px;
    top: 135px;
    z-index: 10000;

    width: 500px;
    height: 700px;

    background: #fff;
    border-radius: 15px;

    overflow: hidden;

    opacity: 0;
    visibility: hidden;

    transition: .25s ease;

    &.is_active {
      opacity: 1;
      visibility: visible;
    }
  }

  .chat__inputarea {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    gap: 20px;

    padding: 10px;

    height: 50px;
    border-top: 2px solid rgba(black, .1);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .chat__input-area {
    width: 100%;
    height: 100%;

    text-align: right;

    font-size: 18px;
    line-height: 25px;

    color: black;

    &::placeholder {
      color: rgba(black, .2);
    }
  }
  .chat__send-area {
    width: 30px;
    height: 30px;
  }

  .chat__icon-area {
    width: 30px;
    height: 30px;

    transform: rotate(90deg);

    color: rgba(black, .2);
  }

  .chat__messages {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 50px;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 50px;
      background: linear-gradient(to top, rgba(#fff,0) 0%, rgba(#fff,1) 100%);

    }
  }

  .chat__list-msg {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;

    height: 100%;
    padding: 10px;
  }

  .chat__item-msg {
    max-width: 60%;
    padding: 8px 20px;

    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(black, .05);

    align-self: flex-start;

    &.me-msg {
      align-self: flex-end;
    }
  }

  .chat__name-msg {
    font-weight: 600;
    font-size: 12px;
  }

  .chat__message-msg {
    font-size: 14px;
    line-height: 19px;

    color: #000000;
  }
</style>

<script>
  export default {
    props: [ 'active' ],
    data: function() {
      return {
        messageValue: '',
        userLogin: 'admin',
        userName: 'Андрей Ривалл',

        messages: [
          {
            login: 'admin',
            name: 'Андрей Ривалл',
            text: 'Очень красивый парк ❤️',
          },
          {
            login: 'user1',
            name: 'Иван Михайлов',
            text: 'Согласен, часто там гуляю!',
          },
          {
            login: 'user2',
            name: 'Михаил Ефремов',
            text: 'А как рулить то?',
          },
          {
            login: 'admin',
            name: 'Андрей Ривалл',
            text: 'F...',
          },
        ]
      }
    },
    methods: {
      newMessage: function(login, name, text) {
        if (text) {
          this.messages.push({
            login: login,
            name: name,
            text: text,
          });
          this.messageValue = '';
        }
      },
      websocket: function() {
        console.log('start method');
        const ws = new WebSocket("ws://localhost:8082");
        ws.onmessage = message => {
          const messages = JSON.parse(message.data);
        }
        ws.onopen = event => {
          console.log('connection');
        }
        function send(event) {
          event.preventDefault();
          ws.send(JSON.stringify({

          }))
          return false;
        }
      },
    },
    created: function() {
      // this.websocket();
    }
  }
</script>
