class AuthService {
    async Authorize(code:string) {
       
        let data = await $fetch("/api/v1/auth", { method: 'post', body: { code } })

        return data

    }
}

export default new AuthService();