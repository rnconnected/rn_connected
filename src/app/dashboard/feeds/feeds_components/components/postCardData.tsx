// import { ID } from "appwrite";
// import { appwriteDatabase, AppwriteService } from "@/appwrite/appwriteconfig";

// export const getFeeds = async (): Promise<Feed[]> => {
//     try {
//       const { documents } = await appwriteDatabase.listDocuments(
//         process.env.NEXT_PUBLIC_APPWRITE_DATABASE || '',
//         process.env.NEXT_PUBLIC_APPWRITE_COLLECTION || ''
//       );
//       const feeds = documents as unknown as Feed[];
  
//       // Reverse the feeds array to get the highest to lowest order
//       const reversedFeeds = feeds.reverse();
  
//       return reversedFeeds;
//     } catch (error) {
//       console.error('Error fetching feeds:', error);
//       throw error;
//     }
//   };
  

// export const createFeeds = async (feed: Feed): Promise<Feed> => {
//     const createdFeed = (await appwriteDatabase.createDocument(
//         process.env.NEXT_PUBLIC_APPWRITE_DATABASE || '',
//         process.env.NEXT_PUBLIC_APPWRITE_COLLECTION || '',
//         ID.unique(),
//         {
//             text: feed.text,
//             Username: feed.Username,
//             // Useremail: feed.Useremail
//         },
//     )) as unknown as Feed;
//     return createdFeed;
// };

// export const getFeed = async (id: string): Promise<Feed> => {
//     const feed = (await appwriteDatabase.getDocument(
//         process.env.NEXT_PUBLIC_APPWRITE_DATABASE || '',
//         process.env.NEXT_PUBLIC_APPWRITE_COLLECTION || '',
//         id

//     )) as unknown as Feed;
//     if (!feed) {
//         throw new Error('Feed not found');
//     }
//     return feed;
// };

// export interface Feed {
//     $id?: string;
//     text: string;
//     Username: string;
//     Useremail: string;
//     //   description: string;
//     //   date: Date;
// }