import appwriteService from "@/appwrite/appwriteconfig";
import { NextRequest, NextResponse } from "next/server";
import { StreamChat } from "stream-chat";
import { env } from "@/env";
// import { useRouter } from "next/router";
export async function GET(request: NextRequest) {
  const userid = request.nextUrl.searchParams.get('userid')
  try {
    const user = await appwriteService.getCurrentUser();
    console.log("calling user token: ", user?.$id);
    // const router = useRouter()
    console.log(userid);

    if (!userid) {
      return NextResponse.json(
        { error: "user not authenticated" + userid},
        { status: 401 }

      );
    }

    const streamClient = StreamChat.getInstance(
      env.NEXT_PUBLIC_STREAM_KEY,
      env.STREAM_SECRET
    );

    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60;
    const issuedAt = Math.floor(Date.now() / 1000) - 60;

    const token = streamClient.createToken(userid, expirationTime, issuedAt);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
