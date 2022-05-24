<template>
  <Luisa :design="design" :config="config" v-model="viewModel"/>
</template>
<script>

/**
 * Here is the downloaded figma file. To download yours, type in the command line
 * node download.js.
 */
import app from './app.json'

/**
 * Import mdi fonts if you are using quant-ux designs
 */
//import '@mdi/font/css/materialdesignicons.css'

// https://www.notion.so/does-anyone/Signup-6898a639340d41e9a891447b1fc0ce38
export default {
  name: 'Home',
  data: function() {
    return {
      design: app,
      viewModel: {
        result: '',
        email: ''
      },
      config: {
      }
    }
  },
  components: {
  },
  methods: {
    async signUpWaitingList (event) {
            if (this.viewModel.email === '') {
                alert('Please enter your email')
            } else {
                // we send the request to the server
                await fetch('https://yourserver.com', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.viewModel.email,
                    })
                })
                // we show a success message, but this time
                // we use the Luisa event to access the viewModel
                event.viewModel.status = 'The form was send'

            }
    }
  }
}
</script>


