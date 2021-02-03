export class UserString {
    constructor() {

    }

    newElem () {
        const section = document.querySelector('.section__result');
        const findBtn = document.querySelector('.section__findBtn');

        const elem = document.createElement('li');
        const userName = document.createElement('p');
        const infoBtn = document.createElement('input');
        infoBtn.type = 'button';

        elem.className = 'section__result-string'
        userName.className = 'section__result-user'
        infoBtn.className = 'section__result-info'

        section.appendChild(elem);
        elem.appendChild(userName);
        elem.appendChild(infoBtn);
    }
}