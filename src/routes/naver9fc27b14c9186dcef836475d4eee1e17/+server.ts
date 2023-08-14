
export const prerender = true;

export async function GET() {
  const headers = {
    'Content-Type': 'text/plain'
  }
  const text = 'naver-site-verification: naver9fc27b14c9186dcef836475d4eee1e17.html'
  return new Response(text, {headers})
}
