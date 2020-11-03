import axios from 'axios';

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = 'get') {
        paramsOrData._token = localStorage.getItem('_token');

        console.debug('API Call:', endpoint, paramsOrData, verb);

        try {
            return (
                await axios({
                    method: verb,
                    url: `http://localhost:3001/${endpoint}`,
                    [verb === 'get' ? 'params' : 'data']: paramsOrData,
                })
            ).data;
            // axios sends query string data via the "params" key,
            // and request body data via the "data" key,
            // so the key we need depends on the HTTP verb
        } catch (err) {
            console.error('API Error:', err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    static async login(data) {
        try {
            let res = await this.request('login', data, 'post');
            if (res.token) {
                //store in local storage
                localStorage.setItem('_token', res.token);
            }
        } catch (e) {
            console.error('API Error:', e);
            throw e;
        }
    }

    static async logout() {
        localStorage.removeItem('_token');
    }

    static async register(data) {
        try {
            let res = await this.request('signup', data, 'post');
            if (res.token) {
                localStorage.setItem('_token', res.token);
            }
        } catch (e) {
            console.error('API Error:', e);
            throw e;
        }
    }

    static async getCurrentUser(username) {
        const user = this.request(`users/${username}`);
        return user;
    }

    static async updateUser(username, data) {
        const updatedUser = await this.request(`users/${username}`, data, 'patch');
        return updatedUser;
    }

    static async apply(jobID, username) {
        const msg = await this.request(`jobs/${jobID}/apply`, username, 'post');
        return msg;
    }
}

export default JoblyApi;
