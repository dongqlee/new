const app = document.querySelector('.app');
const loading = document.querySelector('.main .loading');
const mainSheet = document.querySelector('.main');

app.addEventListener('click', () => {
  app.style.display ='none'
  mainSheet.style.display = 'block'
  loading.animate({
    left: '100%'
  }, {
    duration: 10,
    delay: 3000,
    fill: 'forwards'
  })
})

const btnSearch = document.querySelector('.search_box .icon');
const searchScreen = document.querySelector('.search_screen');
const btnCloseSearch = document.querySelector('.btn_close_search .icon');
const bestSearch = document.querySelector('.best_search');
const input = document.querySelector('.search_blank .lab01');
btnSearch.addEventListener('click', ()=>{
  searchScreen.animate({
    left: '0%'
  }, {
    duration: 300,
    fill: 'forwards'
  });
  bestSearch.style.display = 'block'
});

btnCloseSearch.addEventListener('click', () => {
  searchScreen.animate({
    left: '100%'
  }, {
    duration: 200,
    fill: 'forwards'
  });
  bestSearch.style.display = 'none'
});

const btnCart = document.querySelector('.cart');
const cartSheet = document.querySelector('.cart_sheet');
const btnCloseCart = document.querySelector('.btn_close_cart .icon');
btnCart.onclick = () => {
  cartSheet.style.cssText = 'transition: all 0.1s; left: 0%'
}
btnCloseCart.onclick = () => {
  cartSheet.style.cssText = 'transition: all 0.1s; left: 100%'
}

const btnChat = document.querySelector('.chat');
const chatSheet = document.querySelector('.chat_sheet');
const btnCloseChat = document.querySelector('.btn_close_chat .icon');
btnChat.onclick = () => {
  chatSheet.style.cssText = 'transition: all 0.1s; left: 0%'
}
btnCloseChat.onclick = () => {
  chatSheet.style.cssText = 'transition: all 0.1s; left: 100%'
}

const btnLnb = document.querySelector('.lnb');
const lnbSheet = document.querySelector('.lnb_sheet');
const btnCloseLnb = document.querySelector('.btn_close_lnb .icon');

btnLnb.addEventListener('click', () => {
  lnbSheet.animate({
    right: '0%'
  }, {
    duration: 100,
    fill: 'forwards'
  })
})
btnCloseLnb.addEventListener('click', () => {
  lnbSheet.animate({
    right: '100%'
  }, {
    duration: 100,
    fill: 'forwards'
  })
})

const btnLogin = document.querySelector('.login');
const loginSheet = document.querySelector('.login_sheet');
const btnCloseLogin = document.querySelector('.btn_close_login .icon')
btnLogin.addEventListener('click', () => {
  loginSheet.animate({
    left: '0%'
  },{
    duration: 100,
    fill: 'forwards'
  })
})
btnCloseLogin.addEventListener('click', () => {
  loginSheet.animate({
    left: '100%'
  },{
    duration: 100,
    fill: 'forwards'
  })
})