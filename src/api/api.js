import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a49c5d6e-334f-4fbe-8a0e-51ed074c0551",
    },
})

export const securityAPI = {}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const userAPI = {
    getUsers(currenPage, pageSize) {
        return instance.get(`users?page=${currenPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }

}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status) {
        
        return instance.put(`profile/status`, {
            status: status
        }).then(response => {
            return response.data
        })
    }
}

export const followAPI = {
    deleteUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    postFollow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
}