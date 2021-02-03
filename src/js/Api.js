export class Api {
    constructor(url) {
        this.url = url;
    }

    sendReq = () => {
        return fetch(this.url, response => {
            return response.json()
        })
    }   
}
