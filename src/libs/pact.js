const request = require("request-promise")

class Pact {

    constructor(token) {

        this.token = token

        this.headers = {
            'X-Private-Api-Token': this.token
        }

        this.url = 'https://api.pact.im/p1/companies'
    }

    async makeRequest(options) {

        try {

            let res = await request(options)
            res = JSON.parse(res)
            console.log(res)

            if(res.status === "errored") throw res

            return res
        } catch (e) {
            console.error(e)
            return null
        }

    }

    //COMPANIES

    async getCompanies() {

        const options = {
            url: this.url,
            headers: this.headers
        }

        const res = await this.makeRequest(options)

        if(res && res.data && res.data.companies) return res.data.companies
        else return null

    }

    async updateCompany(id, qs) {
        const options = {
            method: "PUT",
            url: this.url + `/${id}`,
            headers: this.headers,
            qs: qs
        }

        const res = await this.makeRequest(options)

        if(res && res.status === 'updated' && res.data && res.data.external_id) {
            return res.data.external_id
        }
        else return null
    }

    async createCompany(qs) {

        const options = {
            method: "POST",
            url: this.url,
            headers: this.headers,
            qs: qs
        }

        const res = await this.makeRequest(options)

        if(res && res.status === 'created' && res.data && res.data.external_id) {
            return res.data.external_id
        }
        else return null
    }

    //CHANNELS


    async getChannels(companyId) {
        const options = {
            url: this.url + `/${companyId}/channels`,
            headers: this.headers
        }

        const res = await this.makeRequest(options)

        if(res && res.data && res.data.channels) return res.data.channels
        else return null
    }

    async createChannel(companyId, qs) {

        const options = {
            method: "POST",
            url: this.url + `/${companyId}/channels`,
            headers: this.headers,
            qs: qs
        }

        const res = await this.makeRequest(options)

        if(res && res.status === 'created' && res.data && res.data.external_id) {
            return res.data.external_id
        }
        else return null
    }

    async updateChannel(companyId, channelId, qs) {

        const options = {
            method: "PUT",
            url: this.url + `/${companyId}/channels/${channelId}`,
            headers: this.headers,
            qs: qs
        }

        const res = await this.makeRequest(options)

        if(res && res.status === 'updated' && res.data && res.data.external_id) {
            return res.data.external_id
        }
        else return null
    }

    async deleteChannel(companyId, channelId) {

        const options = {
            method: "DELETE",
            url: this.url + `/${companyId}/channels/${channelId}`,
            headers: this.headers
        }

        const res = await this.makeRequest(options)

        if(res && res.status === 'deleted') {
            return true
        }
        else return null
    }


    //CONVERSATIONS


    async getConversations(companyId) {

        const options = {
            url: this.url + `/${companyId}/conversations`,
            headers: this.headers
        }

        const res = await this.makeRequest(options)

        if(res && res.data && res.data.conversations) return res.data.conversations
        else return null
    }

    //need test
    async createConversations(companyId, qs) {

        const options = {
            method: "POST",
            url: this.url + `/${companyId}/conversations`,
            headers: this.headers,
            qs: qs
        }

        const res = await this.makeRequest(options)

        if(res && res.data && res.data.conversation) {
            return res.data.conversation
        }
        else return null
    }

    //need test
    async getConversationDetails(companyId, conversationId){

        const options = {
            url: this.url + `/${companyId}/conversations/${conversationId}`,
            headers: this.headers
        }

        const res = await this.makeRequest(options)

        if(res && res.data && res.data.conversation) return res.data.conversation
        else return null
    }


    //MESSAGES

    async getConversationMessages(companyId, conversationId) {

        const options = {
            url: this.url + `/${companyId}/conversations/${conversationId}/messages`,
            headers: this.headers
        }

        const res = await this.makeRequest(options)

        if(res && res.data && res.data.messages) return res.data.messages
        else return null

    }

    async sendMessage(companyId, conversationId, qs) {
        const options = {
            method: "POST",
            url: this.url + `/${companyId}/conversations/${conversationId}/messages`,
            headers: this.headers,
            qs: qs
        }

        const res = await this.makeRequest(options)

        if(res && res.data ) return res.data
        else return null
    }

    //need test and maybe rework
    async uploadAttachments(companyId, conversationId, qs) {
        const options = {
            method: "POST",
            url: this.url + `/${companyId}/conversations/${conversationId}/messages/attachments`,
            headers: this.headers,
            qs: qs
        }

        const res = await this.makeRequest(options)

        if(res && res.data && res.data.external_id) return res.data.external_id
        else return null
    }


}

module.exports = Pact