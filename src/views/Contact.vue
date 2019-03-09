<template>
    <div>
        <v-container class="grey lighten-4 mt-3 pt-3" style="max-width: 960px;">
            <h1 class="headline">Contact The Berlin Döner Database</h1>
            <v-form class='pt-4' ref="form">
                <v-text-field
                    v-model="name"
                    :counter="40"
                    label="Your name"
                    required
                    :rules='nameRules'
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    label="Optional e-mail"
                    :rules="emailRules"
                    clearable
                ></v-text-field>
                <v-textarea
                    v-model="message"
                    label="Your message"
                    required
                    :rules="textareaRules"
                ></v-textarea>
                <v-btn class='primary' flat @click="submit">submit</v-btn>
                <v-btn class='accent' flat @click="clear">clear</v-btn>
            </v-form>
        </v-container>
        <v-snackbar
            v-model="snackbar"
            :bottom="y === 'bottom'"
            :left="x === 'left'"
            :multi-line="mode === 'multi-line'"
            :right="x === 'right'"
            :timeout="timeout"
            :top="y === 'top'"
            :vertical="mode === 'vertical'"
            >
            {{ snackbartext }}
            <v-btn
                color="primary"
                flat
                @click="snackbar = false"
                >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data: () => ({
        name: '',
        message: '',
        email: '',
        nameRules: [
            t => t.length > 0 || 'Don\'t forget your name'
        ],
        emailRules: [
            e => {
                if (e.length != '')
                    {return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) || "not an email"}
                else 
                    {return true} 
            }
        ],
        textareaRules: [
            t => t.length > 0 || 'Don\'t forget your message'
        ],
        info: '',
        errors:[],
        snackbar: false,
        y: 'top',
        x: null,
        timeout: 6000,
        snackbartext: '',
        mode:''
    }),
    methods: {
        submit(){
            console.log(process.env.VUE_APP_SENDMAIL_API_URL)
            let headers = {
                "Content-Type": "application/json"
            }
            if(this.$refs.form.validate()){
                axios
                    .post('https://doner-server.herokuapp.com/sendmail', {
                        "name":this.name,
                        "email":this.email,
                        "message":this.message
                    },{"headers": headers})
                    .then(response => {
                        this.info = response
                        this.snackbartext = 'Message sent'
                        this.snackbar = true
                        })
                    .catch(e => {
                        this.errors.push(e)
                        this.snackbartext = ''+e
                        this.snackbar = true
                    })
            }
        },
        clear() {
            this.name=''
            this.message=''
            this.email=''
        }
    }
}
</script>
<style>
</style>
