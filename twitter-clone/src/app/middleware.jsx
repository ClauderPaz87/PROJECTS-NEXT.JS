import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up",],
  ignoredRoutes: ["/api/webhook"],
});

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
