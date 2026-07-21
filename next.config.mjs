/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // ✅ SEO Fix: Ensure consistent trailing slash behavior.
  // Google was seeing both /path and /path/ as separate URLs — this unifies them.
  trailingSlash: false,
}

export default nextConfig