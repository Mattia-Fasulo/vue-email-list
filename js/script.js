"use strict";



const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            mailingList: [],
        }
    },
    methods: {
        callApi(){
            const myList = [];
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                    myList.push(res.data.response);
                    if(myList.length >= 9){
                    this.mailingList = [...myList];
                    }
                })
            }
        }
    },
    computed: {

    },
    mounted() {
        console.log('in mounted');
        this.callApi()
    },
    created(){
        console.log('in created');
    },
    beforeCreate(){
        console.log('in beforeCreate');
    },
    beforeUpdate(){
        console.log('in beforeUpadate');
    },
    update(){
        console.log('in update');
    }
}).mount('#app')



