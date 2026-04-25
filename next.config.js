/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Replace 'your-username' with your actual GitHub username
  // If deploying to username.github.io (root domain), leave basePath empty
  // If deploying to username.github.io/repo-name, set basePath: '/repo-name'
  basePath: '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
