import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import constants from '../constants';
import pick from 'lodash/pick';
import addStylesheet from '../share/addStylesheet';
import req from '../share/req';

export default createStore({
  state: () => ({
    isLight:
      window.matchMedia !== undefined
        ? !window.matchMedia('(prefers-color-scheme: dark)').matches
        : true,
    fontSize: constants.DEFAILT_FONT_SIZE,
    textContent: '',
    searchContent: '',
    snackbarMsgs: [],
    fonts: [],
    env: {},
    fontInd: -1,
  }),
  mutations: {
    toggleTheme(state) {
      state.isLight = !state.isLight;
    },
    setFontSize(state, fontSize) {
      if (
        !(
          constants.MIN_FONT_SIZE <= fontSize &&
          fontSize <= constants.MAX_FONT_SIZE
        )
      ) {
        return;
      }

      state.fontSize = fontSize;
    },
    setTextContent(state, textContent) {
      state.textContent = textContent;
    },
    setSearchContent(state, searchContent) {
      state.searchContent = searchContent;
    },
    createSnackbar(state, msg) {
      state.snackbarMsgs.push({ msg, key: Math.random().toString() });
    },
    removeSnackbar(state, targetKey) {
      state.snackbarMsgs.splice(
        state.snackbarMsgs.findIndex(({ key }) => key === targetKey),
        1,
      );
    },
    addFonts(state, fonts) {
      state.fonts.push(...fonts);
    },
    setEnv(state, env) {
      state.env = env;
    },
  },
  actions: {
    resetFontSize(ctx) {
      ctx.commit('setFontSize', constants.DEFAILT_FONT_SIZE);
    },
    async addNextFonts(ctx) {
      if (ctx.state.fontInd + 1 >= ctx.state.env.faces) {
        return;
      }

      ctx.state.fontInd++;
      const ind = ctx.state.fontInd;

      addStylesheet(`/faces/faces-${ind}.css`);

      ctx.commit(
        'addFonts',
        await (await req(`/fonts/fonts-${ind}.json`)).json(),
      );
    },
  },
  plugins: [
    createPersistedState({
      reducer: state =>
        pick(state, ['isLight', 'fontSize', 'textContent', 'searchContent']),
    }),
  ],
});
