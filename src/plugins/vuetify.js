import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        background: '#ffebc1',
        primary: '#fdb42a',
        ptext: '#ff6e05',
        accent: '#fed37c',
        appBlue: '#00a2ff',
        appDeepBlue: '#f1f1f1',
        deepestBlue: '#ebebeb',
        appGreen: '#25d4bf',
        appYellow: '#e3b329',
        appPink: '#ff4e5f',
        appWhite: '#212121',
        appTextGrey: '#a0a7bb',
        appDeepGrey: '#424242',
        anchor: 'black',
      },
      dark: {
        background: '#150e3a',
        primary: '#fdb42a',
        accent: '#fed37c',
        secondary: '#161244',
        appBlue: '#00a2ff',
        appDeepBlue: '#120b30',
        deepestBlue: '#0b061f',
        appGreen: '#25d4bf',
        appYellow: '#e3b329',
        appPink: '#ff4e5f',
        appWhite: '#ffffff',
        appTextGrey: '#a0a7bb',
        appDeepGrey: '#424242',
      },
    },
  },
})
