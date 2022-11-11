"use strict";

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        image: '../img/logo.png'
        
      }
    }
  }).mount('#app')

