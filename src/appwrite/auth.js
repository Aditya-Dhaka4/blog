import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class Authservice {
    client = new Client();
    account;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }
}

const authService = new Authservice();

export default authService;