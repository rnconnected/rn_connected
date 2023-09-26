import appwriteService from "@/appwrite/appwriteconfig";
import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";
import { env } from "@/env";
export async function GET() {
  try {
    const user = await appwriteService.getCurrentUser();
    console.log("calling user token: ", user?.$id);

    if (!user) {
      return NextResponse.json(
        { error: "user not authenticated" },
        { status: 401 }
      );
    }

    const streamClient = StreamChat.getInstance(
      env.NEXT_PUBLIC_STREAM_KEY,
      env.STREAM_SECRET
    );

    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60;
    const issuedAt = Math.floor(Date.now() / 1000) - 60;

    const token = streamClient.createToken(user.$id, expirationTime, issuedAt);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
