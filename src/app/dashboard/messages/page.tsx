// import Profile from "./feedsData/page";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Login from "@/app/login/page";
import Messages from "./components/Messages";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
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

  return (
    <div className="w-full h-screen flex flex-col items-center px-8 pt-8 custom">
      {user && <Messages user={user} />}
    </div>
  );
}