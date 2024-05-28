// export const authConfig = {
//   providers: [],
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized({ auth, request }) {
//       const isLoggedIn = auth?.user;
//       const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false;
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL("/dashboard", request.nextUrl));
//       }
//       return true;
//     },
//   },
// };


import { NextResponse } from 'next/server';

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) {
          return true;
        } else {
          return false;
        }
      } else if (isLoggedIn) {
        
        const url = new URL("/dashboard", request.nextUrl.origin);
        return NextResponse.redirect(url);
      }
      
      return true;
    },
  },
};

