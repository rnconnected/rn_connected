import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const firstName = String(formData.get('firstName'));
  const lastName = String(formData.get('lastName'));
  const phoneNumber = String(formData.get('phoneNumber'));
  const supabase = createRouteHandlerClient({ cookies });

  // Assuming you have a user ID, replace 'userId' with the actual user ID.
  const userId = 'userId';

  // Update user details (first name, last name, and phone number)
  const { error } = await supabase
    .from('users')
    .update({
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
    })
    .eq('id', userId);

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/signup?error=Could not update user details`,
      {
        status: 301, // Redirect from POST to GET
      }
    );
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/dashboard/feeds`,
    {
      status: 301, // Redirect from POST to GET
    }
  );
}
