import config from "@/config/config";
import { Client, Account, ID, Databases } from "appwrite";
import { type } from "os";

type CreateUserAccount = {
  email: string;
  password: string;
};

type Updatephonenumber = {
  phone: string;
};

type Updatefullname = {
  fullname: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();
// const appwriteUser = new sdk.Users(appwriteClient);

appwriteClient.setEndpoint(config.appwriteUrl).setProject(config.appwriteKey);

export const account = new Account(appwriteClient);

export class AppwriteService {
  async createUserAccount({ email, password }: CreateUserAccount) {
    try {
      const userAccount = await account.create(ID.unique(), email, password);
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async updatephonenumber({ phone }: Updatephonenumber) {
    try {
      const promise = account.updatePhone(ID.unique(), phone);
      promise.then(
        function (response: any) {
          console.log(response);
        },
        function (error: any) {
          console.log(error);
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatefullname({ fullname }: Updatefullname) {
    try {
      const promise = account.updateName(fullname);
      promise.then(
        function (response: any) {
          console.log(response);
        },
        function (error: any) {
          console.log(error);
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async IsLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      return false;
    }
  }

  async getCurrentUser() {
    try {
      const userData = await account.get();
      console.log("current user is " + userData);
      return userData;
    } catch (error) {
      console.error("getCurrentUser error: ", error);
      return null;
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error" + error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
export const appwriteDatabase = new Databases(appwriteClient);
