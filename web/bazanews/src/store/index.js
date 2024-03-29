import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_BASE_URL } from '@/helpers/API_BASE_URL';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authorized: false,
    role: 0,
    token: null,
    validate: '',
    signup: '',

    updateNews: false,
    updateActions: false,
    updateEnterprises: false,

    moderationMode: false
  },
  mutations: {
    updateAuth: function(state, value) {
      state.authorized = value;
    },
    updateRole: function(state, value) {
      state.role = value;
    },
    updateToken: function(state, value) {
      state.token = value;
    },
    updateValidate: function(state, value) {
      state.validate = value;
    },
    updateSignup: function(state, value) {
      state.signup = value;
    },

    updateModerationMode: function(state, value) {
      state.moderationMode = value;
    },

    updateNews: function(state, value) {
      state.updateNews = value;
    },
    updateActions: function(state, value) {
      state.updateActions = value;
    },
    updateEnterprises: function(state, value) {
      state.updateEnterprises = value;
    },
  },
  actions: {
    validateToken(context) {
      axios.get(`${API_BASE_URL}/api/auth/validate`, {
        params: {
          token: localStorage.getItem('bzaccesstoken'),
        }
      })
      .then(response => {
        context.commit('updateAuth', true);
        context.commit('updateRole', response.data.roles);
        context.commit('updateToken', localStorage.getItem('bzaccesstoken'));
        context.commit('updateModerationMode', false);
      })
      .catch(error => {
        context.commit('updateAuth', false);
        context.commit('updateRole', 0);
        context.commit('updateToken', false);
        context.commit('updateModerationMode', false);
        localStorage.setItem('bzaccesstoken', false);
      })
    },
    login: function(context, user) {
      axios.post(`${API_BASE_URL}/api/auth/login`, {
        email: user.email,
        password: user.password,
      })
      .then(response => {
        context.commit('updateAuth', true);
        context.commit('updateToken', response.data.accessToken);
        context.commit('updateValidate', false);
        context.commit('updateModerationMode', false);
        localStorage.setItem('bzaccesstoken', response.data.accessToken);
        context.dispatch('validateToken');
      })
      .catch(error => {
        context.commit('updateAuth', false);
        context.commit('updateRole', 0);
        context.commit('updateToken', false);
        context.commit('updateValidate', true);
        context.commit('updateModerationMode', false);
        localStorage.setItem('bzaccesstoken', false);
      })
    },
    signup: function(context, user) {
      axios.post(`${API_BASE_URL}/api/auth/signup`, {
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
      })
      .then(response => {
        context.commit('updateAuth', false);
        context.commit('updateRole', 0);
        context.commit('updateValidate', false);
        context.commit('updateSignup', true);
        context.commit('updateModerationMode', false);
      })
      .catch(error => {
        context.commit('updateAuth', false);
        context.commit('updateRole', 0);
        context.commit('updateToken', false);
        context.commit('updateValidate', true);
        context.commit('updateSignup', false);
        context.commit('updateModerationMode', false);
        localStorage.setItem('bzaccesstoken', false);
      })
    },
    logout: function(context) {
      context.commit('updateAuth', false);
      context.commit('updateRole', 0);
      context.commit('updateToken', false);
      context.commit('updateModerationMode', false);
      localStorage.setItem('bzaccesstoken', false);
    }
  },
});
