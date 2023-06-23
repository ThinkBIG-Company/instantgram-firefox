export const cssGeneral = `@keyframes horizontal-shaking{0%,100%{transform:translateX(0)}25%,75%{transform:translateX(5px)}50%{transform:translateX(-5px)}}`

export const htmlSpinnerMarkup = `<div style="padding:40px"><svg width="45" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient id="gradient" gradientTransform="rotate(-20)"> <stop offset="0%" stop-color="#405de6"></stop> <stop offset="12%" stop-color="#5851db"></stop> <stop offset="25%" stop-color="#833ab4"></stop> <stop offset="50%" stop-color="#c13584"></stop> <stop offset="66.67%" stop-color="#e1306c"></stop> <stop offset="100%" stop-color="#fd1d1d"></stop> </linearGradient> </defs> <style> .spinner_LWk7 { animation: spinner_GWy6 1.2s linear infinite, spinner_BNNO 1.2s linear infinite } .spinner_yOMU { animation: spinner_GWy6 1.2s linear infinite, spinner_pVqn 1.2s linear infinite; animation-delay: .15s } .spinner_KS4S { animation: spinner_GWy6 1.2s linear infinite, spinner_6uKB 1.2s linear infinite; animation-delay: .3s } .spinner_zVee { animation: spinner_GWy6 1.2s linear infinite, spinner_Qw4x 1.2s linear infinite; animation-delay: .45s } @keyframes spinner_GWy6 { 0%, 50% { width: 9px; height: 9px } 10% { width: 11px; height: 11px } } @keyframes spinner_BNNO { 0%, 50% { x: 1.5px; y: 1.5px } 10% { x: .5px; y: .5px } } @keyframes spinner_pVqn { 0%, 50% { x: 13.5px; y: 1.5px } 10% { x: 12.5px; y: .5px } } @keyframes spinner_6uKB { 0%, 50% { x: 13.5px; y: 13.5px } 10% { x: 12.5px; y: 12.5px } } @keyframes spinner_Qw4x { 0%, 50% { x: 1.5px; y: 13.5px } 10% { x: .5px; y: 12.5px } } </style> <rect class="spinner_LWk7" x="1.5" y="1.5" rx="1" width="9" height="9" fill="url(#gradient)"></rect> <rect class="spinner_yOMU" x="13.5" y="1.5" rx="1" width="9" height="9" fill="url(#gradient)"></rect> <rect class="spinner_KS4S" x="13.5" y="13.5" rx="1" width="9" height="9" fill="url(#gradient)"></rect> <rect class="spinner_zVee" x="1.5" y="13.5" rx="1" width="9" height="9" fill="url(#gradient)"></rect></svg></div>`

export const cssSlideon = `.slideon{position:relative;display:inline-block;width:42px;height:24px;vertical-align:middle}.slideon>input,input.slideon{display:none}.slideon-slider{position:absolute;cursor:pointer;border-radius:34px;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slideon-slider:before{position:absolute;content:"";height:22px;width:22px;left:1px;bottom:1px;border-radius:50%;background-color:#fff;-webkit-transition:.4s;transition:.4s;-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.45);-moz-box-shadow:0 0 3px 0 rgba(0,0,0,.45);box-shadow:0 0 3px 0 rgb(0,0,0,.45)}.slideon input:checked~.slideon-slider{background-color:#007bff}.slideon input:checked~.slideon-slider:before{-webkit-transform:translateX(18px);-ms-transform:translateX(18px);transform:translateX(18px)}.slideon input:disabled~.slideon-slider{opacity:.5}`