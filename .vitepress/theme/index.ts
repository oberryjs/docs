import DefaultTheme from 'vitepress/theme';
import './style.css';
import CodeEmbed from '../components/CodeEmbed.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('CodeEmbed', CodeEmbed)
  }
}