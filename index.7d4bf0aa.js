!function(){var e="https://api.thecatapi.com/v1/breeds",n="live_6IXeD3H0M3y8XHiFwmnVGQVVo3858OviQpENPwYIRdOJZFcVAShXPYpZAKlsMdiL",t=document.querySelector(".breed-select"),r=document.querySelector(".error"),c=document.querySelector(".loader"),o=document.querySelector(".cat-info");function a(){return fetch(e).then((function(e){if(!e.ok)throw new Error(e.message);return e.json()}))}function i(e,n){var r=e.map((function(e){return'\n          <option value="'.concat(e.id,'" \n          ').concat(e.id===n?"selected":"",">\n          ").concat(e.name,"\n          </option>\n        ")}));t.innerHTML=r.join("")}function s(){return r.style.display="block"}r.style.display="none",t.addEventListener("change",(function(){var e=t.value;a().then((function(n){return i(n,e)})).catch((function(e){return console.error(e.message)}))})),a().then((function(e){return i(e)})).catch((function(e){return console.error(e.message)})),t.addEventListener("change",(function(e){e=t.value;var r="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e);return c.style.display="block",fetch(r,{headers:{"x-api-key":n}}).then((function(e){if(!e.ok)throw new Error(e.message);return e.json()})).then((function(e){console.log(e);var n,t=e.map((function(e){return function(e){return'\n  \n  <img class="breed-image" src="'.concat(e.url,'" alt="').concat(e.name,'"  >\n        <div class=\'breed-card\'>\n          <h2 class="breed-name">').concat(e.breeds[0].name,'</h2>\n          <p class="breed-description">').concat(e.breeds[0].description,'</p>\n          <p class="breed-temperament">').concat(e.breeds[0].temperament,"</p>\n          </div>\n      ")}(e)})).join("");c.style.display="none",n=t,o.innerHTML=n})).catch(s)}))}();
//# sourceMappingURL=index.7d4bf0aa.js.map