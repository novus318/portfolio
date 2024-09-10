import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Create a response object
  const res = NextResponse.next();
  
  // Mask the real IP with the given IP
  res.headers.set('X-Real-IP', '178.128.102.83');  // Mask with 178.128.102.83
  
  // Optionally remove forwarded IPs or modify them
  res.headers.set('X-Forwarded-For', '178.128.102.83');  // Mask forwarded IP with 178.128.102.83

  return res;
}

export const config = {
  // Apply middleware to all routes
  matcher: '/:path*',
};
