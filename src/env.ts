// import { createEnv } from "@t3-oss/env-nextjs"
// import { z } from "zod"

// export const env = createEnv({
//   server: {
//     STREAM_SECRET: z.string().min(1),
//     APPWRITE_MESSAGING_API_KEY: z.string().min(1),
//   },
//   client: {
//     NEXT_PUBLIC_STREAM_KEY: z.string().min(1),
//     NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string().min(1),
//   },
//   experimental__runtimeEnv: {
//     NEXT_PUBLIC_STREAM_KEY: process.env.NEXT_PUBLIC_STREAM_KEY,
//     NEXT_PUBLIC_APPWRITE_PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
//   },
// });