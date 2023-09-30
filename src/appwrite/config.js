import conf from '../conf/conf.js';
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    storage;

    constructor() {

        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, image, status, user_id }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {

                title,
                content,
                image,
                status,
                user_id,
            })

        } catch (err) {
            throw err;
        }

    }

    async updatePost(slug, { title, content, image, status }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                image,
                status,
            })

        } catch (error) {
            throw error;

        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }




    }


    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);

        }
        catch (error) {
            throw error;
        }

    }


    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries);

        }
        catch (error) {
            console.log(error);
            return false;
        }

    }


    async uploadFile(file) {

        try {

            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;


        }


    }

    getfilePreview(fileId) {
        try {
            return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
        }
        catch (error) {
            console.log(error);
            return false;
        }


    }

}
const service = new Service();

export default Service;