import { ID } from "appwrite";
import { appwriteDatabase, AppwriteService } from "@/appwrite/appwriteconfig";

export const getFeeds = async (): Promise<Feed[]> => {
    const { documents } = await appwriteDatabase.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE || '',
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION || ''
    );
    const feeds = documents as unknown as Feed[];
    return feeds;
};

export const createFeeds = async (feed: Feed): Promise<Feed> => {
    const createdFeed = (await appwriteDatabase.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE || '',
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION || '',
        ID.unique(),
        feed
    )) as unknown as Feed;
    return createdFeed;
};

export const getFeed = async (id: string): Promise<Feed> => {
    const feed = (await appwriteDatabase.getDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE || '',
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION || '',
        id

    )) as unknown as Feed;
    if (!feed) {
        throw new Error('Feed not found');
    }
    return feed;
};

export interface Feed {
    $id?: string;
    text: string;
    Username: string;
    Useremail: string;
    //   description: string;
    //   date: Date;
}