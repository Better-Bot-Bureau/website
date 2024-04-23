import AuthService from "../services/auth.service"
import userService from "~/services/user.service"

export const useAuth = defineStore("auth", {

    state: () => ({
       IsAuthorized: false,
    }),

    persist: true,

    actions: {
        async Authorize(code: string){
            await AuthService.Authorize(code)
            this.$state.IsAuthorized = true
         
           return "done"
        },
        IsAuthorized() {
            
            return this.$state.IsAuthorized
        },
        Getdata(){
            return this.$state
        },
        async getBots(){
            let data = await userService.GetBots()
            return data
        },
        async getBot(id: String){
            console.log("auth module")
            let data = await userService.getBot(id)
            return data
        }
    },
    
    
})