import { restAPIS } from '../restSettings.js'

/**
 * Send a post or put http request
 *
 * @param {string} route
 * @param {object} fromInput
 * @param {function} callback
 * @param {object} requestHeaders
 * add this header for json post request "Content-Type", "application/json;"
 */
export function postAjax(method, route, fromInput, requestHeaders) {
    return new Promise((resolve, reject) => {

        if (route === "" || !method) {
            console.log('error! Name is empty.');
            return;
        }

        console.log("-------------------------payload-------------------------")
        console.log(fromInput);
        console.log("---------------------------------------------------------")
        let xhttp       = new XMLHttpRequest(),
            addr        = restAPIS.base + route,
            formData    = new FormData(),
            payload = fromInput; //if content type is json we stringify else it is form data

        xhttp.open(method.toUpperCase(), addr, true);

        if(requestHeaders !== null)
            for (let key in requestHeaders) {
                if(key === 'content-type') {
                    if(requestHeaders[key] !== 'json') {
                        for (let key in fromInput)
                            if(fromInput[key] !== ""){
                                formData.append(key, fromInput[key]);
                            }
                        payload = formData;
                    }else {// if content is json we should set header
                        payload = JSON.stringify(fromInput);
                        xhttp.setRequestHeader("Content-Type", "application/json");
                    }

                }
                else xhttp.setRequestHeader(key, requestHeaders[key]); //we don want attach content-type
            }

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 ) {
                if(this.status >= 200 && this.status < 300) {
                    console.log('----------ajax post-------------')
                    console.table(JSON.parse(this.responseText));
                    console.log('--------------------------------')
                    resolve(JSON.parse(this.responseText));
                }else {
                    reject(JSON.parse(this.responseText))
                }
            }
        };
        xhttp.send(payload);
        //xhttp.send(formData);
        // xhttp.send(JSON.stringify(fromInput));
    })
}


/**
 * Send a Get http request to get items
 *
 * @param {string} route
 * @param {function} callback
 */
export function getAjax(method, route, callback = function(){} , queryString = '') {
    return new Promise((resolve, reject) => {
        let xhttp,
            addr = restAPIS.base + route + queryString;
        if (route === "") {
            console.log('error! Name is empty.');
            reject('ERROR enter route name please')
            return;
        }
        xhttp = new XMLHttpRequest();
        xhttp.open(method.toUpperCase(), addr, true);
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if(this.status === 200) {
                    callback(JSON.parse(this.responseText));
                    console.log('----------ajax get-------------')
                    console.log(JSON.parse(this.responseText));
                    console.log('--------------------------------')
                    resolve(JSON.parse(this.responseText))
                }else {
                    console.log('----------ajax get ERROR-------------')
                    console.log(JSON.parse(this.responseText));
                    console.log('-------------------------------------')
                    reject(JSON.parse(this.responseText))
                }
            }
        };
        xhttp.send(null);
    })
}
export class ajax {
    static get(...args) {
        return getAjax("get", ...args);
    }

    static delete(...args) {
        return getAjax("delete", ...args);
    }

    static post(...args) {
        return postAjax("post", ...args);
    }

    static put(...args) {
        return postAjax("put", ...args);
    }
}
