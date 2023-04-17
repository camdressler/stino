import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

// import { parse } from "@lib/middleware/utils";

// import UserMiddleware from "@lib/middleware/UserMiddleware";

// export const config = {
//     matcher: [
//         /*
//          * Match all paths except for:
//          * 1. /api/ routes
//          * 2. /_next/ (Next.js internals)
//          * 3. /_proxy/, /_auth/, /_root/ (special pages for OG tags proxying, password protection, and placeholder _root pages)
//          * 4. /_static (inside /public)
//          * 5. /_vercel (Vercel internals)
//          * 6. all root files inside /public (e.g. /favicon.ico)
//          */
//         "/((?!api/|_next/|_proxy/|_auth/|_root/|_static|_vercel|[\\w-]+\\.\\w+).*)"
//     ]
// };

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
    // const { path } = parse(req);
    // if (path.startsWith("/app")) {
    //     return UserMiddleware(req);
    // }
    // if (path.startsWith("/_static")) {
    //     return NextResponse.rewrite(new URL("/static" + path.split("/static")[1], req.url));
    // }
}
