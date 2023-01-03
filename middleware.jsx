import { NextResponse } from 'next/server';

export function middleware(request) {
  // const session = request.cookies.get('sessionID');
  const session = request.cookies.get('sessionID');
  if (request.nextUrl.pathname.startsWith('/admin') && session == undefined) {
    return NextResponse.rewrite(new URL('/', request.url));
  }
}