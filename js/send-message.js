/* eslint-disable */
$(function(){
	

	document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://vimchat-development.firebaseapp.com/css/vimchat-button.css" type="text/css"/>';
	
	btn = '<div id="btncontainer"><div class="btn-block" id="chatbtn" style="z-index:1000; position:fixed; bottom:10px; display:none">'+
			'<a hrer="#" style="" class="btn-send show-modal" id="vimbtnchild" data-handle="text handel" data-production="true">Instant message</a>'+
		    		'</div><div>';


	document.body.innerHTML += btn;
	$.getJSON("https://sagarroy.com/vim/getfront.php", function(data, status){
        
        
        console.log(status);
		var chatbtn = document.getElementById("chatbtn");
		
		var chatbtnchild = document.getElementById("vimbtnchild");
		
		if(data.top){
			chatbtn.style.setProperty('top',data.top+'px');
		}else{
			chatbtn.style.removeProperty('top');
		}
		if(data.left){
			chatbtn.style.setProperty('left',data.left+'px');
		}else{
			chatbtn.style.removeProperty('left');
		}
		if(data.right){
			chatbtn.style.setProperty('right',data.right+'px');
		}else{
			chatbtn.style.removeProperty('right');
		}
		if(data.bottom){
			chatbtn.style.setProperty('bottom',data.bottom+'px');
		}else{
			chatbtn.style.removeProperty('bottom');
		}
		
		
		if(data.fontcolor){
			chatbtnchild.style.setProperty('color',data.fontcolor);
		}
		
		
		if(data.background){
			chatbtnchild.style.setProperty('background',data.background);
		}
		
		if(data.fontsize){
			chatbtnchild.style.setProperty('font-size',data.fontsize);
		}
		
		
		if(data.padding){
			chatbtnchild.style.setProperty('padding',data.padding);
		}
		
		if(data.texthandle){
			document.getElementById('vimbtnchild').dataset.handle = data.texthandle;	
		}
		
		
		
			
			
		$("#chatbtn").show();
        
        
        
        
        
        
                    /*chat admin */

              const ua = navigator.userAgent.toLowerCase();
              const bots = (/(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i);
              class BrowserDetect {
                constructor() {
                  this.browsers = {
                    opera: (/opera/i.test(ua) || /opr/i.test(ua)),
                    msie: ((/msie/i.test(ua) && !/opera/i.test(ua)) || /trident\//i.test(ua)) || /edge/i.test(ua),
                    msie6: (/msie 6/i.test(ua) && !/opera/i.test(ua)),
                    msie7: (/msie 7/i.test(ua) && !/opera/i.test(ua)),
                    msie8: (/msie 8/i.test(ua) && !/opera/i.test(ua)),
                    msie9: (/msie 9/i.test(ua) && !/opera/i.test(ua)),
                    msie_edge: (/edge/i.test(ua) && !/opera/i.test(ua)),
                    mozilla: /firefox/i.test(ua),
                    chrome: /chrome/i.test(ua) && !/edge/i.test(ua),
                    safari: (!(/chrome/i.test(ua)) && /webkit|safari|khtml/i.test(ua)),
                    iphone: /iphone/i.test(ua),
                    ipod: /ipod/i.test(ua),
                    iphone4: /iphone.*OS 4/i.test(ua),
                    ipod4: /ipod.*OS 4/i.test(ua),
                    ipad: /ipad/i.test(ua),
                    android: /android/i.test(ua),
                    bada: /bada/i.test(ua),
                    mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(ua),
                    msie_mobile: /iemobile/i.test(ua),
                    safari_mobile: /iphone|ipod|ipad/i.test(ua),
                    opera_mobile: /opera mini|opera mobi/i.test(ua),
                    opera_mini: /opera mini/i.test(ua),
                    mac: /mac/i.test(ua),
                    search_bot: bots.test(ua),
                  };

                  (ua.match(/.+(?:me|ox|on|rv|it|era|opr|ie)[/: ]([\d.]+)/) || [0, '0'])[1] = this.version;
                }

                isBrowser() {
                  const browserKeys = Object.keys(this.browsers);
                  let browserName;

                  for (let i = 0; i < browserKeys.length; i += 1) {
                    if (this.browsers[browserKeys[i]]) browserName = browserKeys[i];
                  }

                  return browserName;
                }

                isIos() {
                  return !!((
                    this.browsers.iphone ||
                    this.browsers.ipod ||
                    this.browsers.iphone4 ||
                    this.browsers.ipod4 ||
                    this.browsers.ipad));
                }

                isAndroid() {
                  return !!this.browsers.android;
                }

                isMobile() {
                  return !!this.browsers.mobile;
                }

                isIe(versionIe) {
                  if (!versionIe) {
                    return !!this.browsers.msie;
                  }

                  if (versionIe >= 6 && versionIe <= 9) {
                    return !!this.browsers[`msie${versionIe}`];
                  }
                  throw new Error('BrowserDetect dont support this version ie.');
                }

                isEdge() {
                  return !!this.browsers.msie_edge;
                }

                isOpera() {
                  return !!this.browsers.opera;
                }

                isChrome() {
                  return !!this.browsers.chrome;
                }

                isMozilla() {
                  return !!this.browsers.mozilla;
                }

                isSafari() {
                  return !!this.browsers.safari;
                }
              }
              const browserDetect = new BrowserDetect();
              const developSettings = {
                link: 'http://vimchat-api-dev.herokuapp.com/api/sms/getSmsToShortCodeSnippet',
                number: '+18442031976',
              };

              const productionSettings = {
                link: 'https://vimchat-api-production.herokuapp.com/api/sms/getSmsToShortCodeSnippet',
                number: '77888',
              };

              const search = window.location.search.substr(1);
              const parametersUrl = {};

              search.split('&').forEach((item) => {
                const itemLink = item.split('=');
                const key = itemLink[0];
                const value = itemLink[1];
                parametersUrl[key] = value;
              });
                   console.log('parametersUrl'); 
                console.log(parametersUrl);

              const showModal = document.querySelectorAll('.show-modal');
              let handle;
              let isProduction;
              let settings;

              for (let i = 0; i < showModal.length; i += 1) {
                const button = showModal[i];
                //handle = parametersUrl.handle || button.dataset.handle;
                 handle =  parametersUrl.handle || data.texthandle;

                if (!handle) {
                  alert('Please write in link handle business');
                  return false;
                }else{
                    handle = "Vimchat";
                }
                isProduction = button.dataset.production; 
                if (isProduction === 'false') {
                  settings = developSettings;
                } else if (isProduction === 'true') {
                  settings = productionSettings;
                } else {
                  alert('No correct settings');
                  return false;
                }
                const messageText = `@${handle} `;
                if (browserDetect.isAndroid()) {
                  showModal[i].href = `sms:${settings.number}?body=${encodeURI(messageText)}`;
                  showModal[i].textContent = 'Questions? Text Us';
                } else if (browserDetect.isIos()) {
                  showModal[i].href = `sms://${settings.number}/&body=${encodeURI(messageText)}`;
                  showModal[i].textContent = 'Questions? Text Us';
                } else {
                  showModal[i].addEventListener('click', (e) => {
                  handle = e.target.dataset.handle;

                  isProduction = e.target.dataset.production;

                  if (isProduction === 'false') {
                    settings = developSettings;
                  } else if (isProduction === 'true') {
                    settings = productionSettings;
                  } else {
                    alert('No correct settings');
                    return false;
                  }
                  openModal();
                  })
                }
              }

              const openModal = () => {
                localStorage.removeItem('vimchat-modal-status');
                const win = window.open('', 'myWindow', 'width=540,height=480');
                win.document.body.innerHTML = `
              <html>
              <head>
                <title>Text us!</title>
                <link rel='stylesheet' type='text/css' href='https://vimchat-development.firebaseapp.com/css/vimchat-button.css'>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
              </head>
                <body>
                <section class='window'>
                <div class="flex-center">
                <div style="background-color: #F1F3F4;
                  flex: 2;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  width: 100%;
                  margin-bottom: 20px;">
                  <p class="vimchat-paragraph">
                    We are connecting you securely via text.
                  </p>
                  <span style="margin-bottom: 30px; line-height: 1.6;">Enter your phone number and look <br> for a new text on your phone.</span>
                </div>
                  <form onsubmit="return submit(e)" action="#">
                    <div class="input-wrapper">  
                      <input type="hidden" id="req-to" name="To" value='${settings.number}' >
                      <input
                        type="hidden"
                        id="req-body"
                        name="Body"
                        value="@${handle} customer contacted you through website"
                      />
                      <input
                        type='text'
                        name='From'
                        class='tel'
                        placeholder='Enter mobile number'
                        required
                      />
                      <button type='submit' id='submit-btn'>send</button>
                    </div>
                    <div class='error'></div>
                    <div class='agreement'>
                      <label for="agree-tick">
                        By adding my number I agree to consent to text with business on the VimChat platform.
                      </label>
                    </div>
                    <div id='loading-vimchat' style='text-align: center; display: none;'>
                      <img src='https://firebasestorage.googleapis.com/v0/b/vimchat-development.appspot.com/o/index.ajax-spinner-preloader.gif?alt=media&token=df7f1836-4ec4-4d64-8cc8-28bebf2f96d6' />
                    </div>
                  </form>
                </div>
              </section>
                </body>
              </html>
                `;

                const successHTML = `<html>
                <head>
                  <title>Text us!</title>
                  <link rel='stylesheet' type='text/css' href='https://vimchat-development.firebaseapp.com/css/vimchat-button.css'>
                  <meta charset="UTF-8">
                  <meta name="viewport"
                        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                  <meta http-equiv="X-UA-Compatible" content="ie=edge">
                </head>
                  <body>
                    <section class='window'>
                      <div class="flex-center">
                        <p>Success! The business has been reached.</p>
                        <button id="ok-btn">OK</button>
                        <p><small>powered by</small></p>
                        <img src='https://firebasestorage.googleapis.com/v0/b/vimchat-development.appspot.com/o/logo.png?alt=media&token=2f2160a5-3a51-401b-9342-ca0e925c1dd4' alt='logo vimchat' class='logo'>
                      </div>
                    </section>
                  </body>
                </html>`;
                const submitBtn = win.document.getElementById('submit-btn');

                const error = win.document.querySelector('.error');
                const form = win.document.querySelector('form');
                const phone = win.document.querySelector('.tel');

                phone.addEventListener('input', (e) => {
                  error.innerHTML = '';
                });

                const validate = (e) => {
                  const reg = /(\d{3})(\d{3})(\d{2})(\d{2})/;
                  const x = e.target.value.replace(/\D/g, '').match(reg);

                  if (!x) {
                    return false;
                  }

                  if (e.target.value.length >= 10) {
                    e.target.value = `(${x[1]}) ${x[2]}-${x[3]}${x[4]}`;
                  }

                  return e.target.value;
                };

                phone.onkeyup = e => validate(e);

                const formating = (phoneNumber) => {
                  const numbers = [];
                  for (let i = 0; i < phoneNumber.length; i += 1) {
                    const letter = phoneNumber[i];
                    const num = parseInt(letter, 10);
                    if (!(letter === ' ') && !Number.isNaN(num)) {
                      numbers.push(num);
                    }
                  }
                  return `${numbers.join('')}`;
                };

                const post = (url, requestuestBody) => new Promise((succeed, fail) => {
                  const request = new XMLHttpRequest();
                  request.open('POST', url, true);
                  request.setRequestHeader('Content-Type', 'application/json');
                  request.addEventListener('load', () => {
                    if (request.status < 400) {
                      succeed(request.responseText);
                    } else {
                      fail(new Error(request.responseText));
                    }
                  });
                  request.addEventListener('error', () => {
                    fail(new Error('Network error'));
                  });
                  request.send(requestuestBody);
                });

                const submit = (e) => {
                  e.preventDefault();
                  const reg = /(\d{3})(\d{3})(\d{2})(\d{2})/;
                  const x = phone.value.replace(/\D/g, '').match(reg);
                  if (!x) {
                    error.innerHTML = 'Please enter format (234) 567-8901';
                    return false;
                  }

                  const elements = e.target;
                  phone.value = formating(phone.value);

                  error.innerHTML = '';

                  const body = {
                    To: win.document.getElementById('req-to').value,
                    Body: win.document.getElementById('req-body').value,
                    From: '+1' + phone.value,
                  };
                  const json = JSON.stringify(body);
                  const loading = win.document.querySelector('#loading-vimchat');
                  loading.style.display = 'block';
                  submitBtn.setAttribute('disabled', true);

                  fetch(settings.link, {
                    body: json,
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json'
                    },
                  }).then(res => {
                    if (res.status == 200) {
                      return res;
                    }
                    return res.json();
                  }).then(res => {
                    loading.style.display = 'none';
                    submitBtn.removeAttribute('disabled');
                    if (res.status === 200) {
                      win.document.body.innerHTML = successHTML;
                      win.document.getElementById('ok-btn').addEventListener('click', () => {
                        win.close();
                      });
                    } else if(res.code === 20404) {
                      error.innerHTML = 'The number is invalid';
                    } else {
                      error.innerHTML = 'Something went wrong, please try again';
                    }
                  }).catch(error => {
                    error.innerHTML = error.message;
                    loading.style.display = 'none';
                    return false;
                  });
                }

                form.onsubmit = submit;

                return null;
              };

            /*end chat admin */

			
			
		});
	
	
	
	
/*chat admin */


  return null;


});});
