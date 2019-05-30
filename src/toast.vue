<template>
  <transition name="v-toast-pop">
    <div v-show="visible" class="v-toast" :class="`v-toast-${type}`">
      <i class="v-toast-font"></i>
      <span class="v-toast-text" v-text="message" />
    </div>
  </transition>
</template>

<script>
function preventDefault(e) {
  e.preventDefault()
}

export default {
  data() {
    return {
      id: '',
      type: '',
      message: '',
      visible: false
    }
  },
  methods: {
    show(options) {
      this.message = options.message
      this.type = options.type
      const id = Math.random()
        .toString(36)
        .substring(3, 6)
      this.id = id
      this.visible = true

      if (options.type !== 'loading') {
        setTimeout(() => {
          this.hide(id)
        }, options.duration)
      }

      document.body.addEventListener('touchmove', preventDefault)
    },
    hide(id) {
      if (id && id !== this.id) {
        return
      }
      this.visible = false

      document.body.removeEventListener('touchmove', preventDefault)
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'v-toast-font';
  src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAABuQAAAK/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBSIFMATYCJAMMCwgABCAFhG0HORsVBsgekiSEeAwKUFAFJARRPHzt9zt3d78pJkk0MlSfTmJIRBKNRIhisVEyieYV8ptc04zZZhYBv8n3S+nlMyYFzBJQbq6gtrm5CUcR7/NcTm8CHcjqW5bTmjb28qNegHFAge6BbdCACiQgb5FdxJ24iNME2pZ5MThJySoC5go0KRBXAl8PzAtxRTFKTaHesLKIFyaa6Ta9Ap6j78evgDAnqWVo5ullsgTEfQR/lRn1VD2qOEE3nxfGOjJ2AIW4aMyfMxIGZ6RtNe6urStCmiv1XxFpfXt9p3+8RNSh5i7YkAuJj2CqJPgoWyOBDOrF4h7gTGEnHxdidrlydtHNc27PpXhmz42f23Fxnelxlk5vu7YXabXFGk1UsV5fmlTN6V3udCWmKaD6zkU6Xa1i2LV1rZXtfLZubwz/rA7Xj4DWWeGvsSV/GFhdW8eFlMStjaVkKMnmzVsb75488lCrqFWOPsLkFrnw5bH+QpvjEiZ6syOuy7x227OSM9OO+kAdNDa/J6q/fJ+tf+9vrN2Q0lq7qP9mp4A3FzwcRau/AhakefJA8DN1wI7iG5AjF1dLtWEwWwZ4E7LaDKmg8NjHePsUuJ3QNDUi2LCUIWtaIQu7g5qOXdQ17aNtW+r6jgmUkSgtbBmUEIbOkPS9Iht6Iwv7jppp36gbhhHazsJpx461ECwTKapnSAIbWqHAERUmLmYZtxYgvlFRT/OGiC9BVBRS0N/Hr1xKRSpE55gjNvEBjGGIKVHCFOk8pFAQqKZEhjjmI2VMHeHri5te5MMRJbB0jELqMYgE1KAVJOAQKpj3Ziwrny+A8Bop1KMdsp5qCYQSCYND/nz4AchUqwoku5dLRE14ARgGgzCKUIJSpGGIggIBqZuHySAcxod0RFYtgi/uhqFWn/Xtyu/bB23o4BwpchSN60aOQ6JogiglFAAA')
    format('woff2');
}

.v-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 1000;
  transition: opacity 0.3s linear;

  &-font {
    font-family: 'v-toast-font' !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    text-align: center;
    font-size: 56px;
  }

  &-info {
    width: 240px;
    padding: 9px 22px;
  }

  &-success {
    .v-toast-font:before {
      content: '\e635';
    }
  }

  &-error {
    .v-toast-font:before {
      content: '\e658';
    }
  }

  &-loading {
    .v-toast-font {
      color: #ffffff;
      font-size: 30px;
      text-indent: -9999em;
      overflow: hidden;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      margin: 16px auto;
      position: relative;
      transform: translateZ(0);
      animation: v-toast-loading 1.7s infinite ease;
    }
    @-webkit-keyframes v-toast-loading {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
          0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
      5%,
      95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
          0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
      10%,
      59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
          -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
          -0.297em -0.775em 0 -0.477em;
      }
      20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
          -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
          -0.749em -0.34em 0 -0.477em;
      }
      38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
          -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
          -0.82em -0.09em 0 -0.477em;
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
          0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
    }
    @keyframes v-toast-loading {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
          0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
      5%,
      95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
          0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
      10%,
      59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
          -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
          -0.297em -0.775em 0 -0.477em;
      }
      20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
          -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
          -0.749em -0.34em 0 -0.477em;
      }
      38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
          -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
          -0.82em -0.09em 0 -0.477em;
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
          0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
    }
  }

  &-success,
  &-error,
  &-loading {
    padding: 20px;
    width: 132px;

    .v-toast-text {
      padding-top: 10px;
    }
  }

  &-text {
    font-size: 14px;
    display: block;
    text-align: center;
    word-break: break-word !important;
    word-break: break-all;
  }

  &-pop-enter,
  &-pop-leave-active {
    opacity: 0;
  }
}
</style>
