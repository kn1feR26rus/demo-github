import { Api } from '../js/Api.js';
import { userString } from '../js/UserString.js'

const findBtn = document.querySelector('.section__findBtn');
const url = 'https://api.github.com/users';

const newApi = new Api(url);

findBtn.addEventListener('click', () => {
    newApi.sendReq();
})

console.log(newApi.sendReq);