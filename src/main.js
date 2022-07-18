import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faFacebookF,
    faGithub,
    faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons'
import { 
    faEnvelope,
    faCaretRight
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFacebookF, faGithub, faLinkedinIn, faEnvelope, faCaretRight)

/* add font awesome icon component */
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
