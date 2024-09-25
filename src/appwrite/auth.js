import { conf } from "../conf/conf";
import { Client, Account, ID } from "appwrite";
import 'react-toastify/dist/ReactToastify.css';

export class AuthService{
    //property declarations
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }

    async signup({name,email,password}){
        try {
            const user=await this.account.create(ID.unique(),email,password,name);
            if(user){
                return await this.login({email,password});
            }else{
                return user;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("currentUser",error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("logout",error)
        }
    }

    async loginWithGoogle(redirectUrl) {
        try {
            return this.account.createOAuth2Session('google', redirectUrl);
        } catch (error) {
            console.error("Google login error:", error);
        }
    }

}

const authService = new AuthService();

export default authService;