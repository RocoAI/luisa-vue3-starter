import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Luisa from 'luisa-vue'
// import Notion from './Notion.vue'
import Notion from './components/Notion'

// import "vue3-notion/dist/style.css"

createApp(App)
    .use(router)
    .use(Luisa)
    // .use(Notion)
    .mount('#app')
    .component('Notion', Notion)

    