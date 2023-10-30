import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Login from "@/app/login/page";
import Messages from "./components/Messages";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export default async function Index() {
  let currentUser;

  // const supabase = createServerComponentClient({ cookies });
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  let {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // Render the login page when the user is not logged in
    return (
      <div className="w-full h-screen flex flex-col items-center px-8 pt-8 custom">
        <Login />
      </div>
    );
  }
  currentUser = user;

  return (
    <div className="w-full h-screen flex flex-col items-center px-8 pt-8 custom">
      {currentUser && <Messages user={currentUser} />}
    </div>
  );
}
