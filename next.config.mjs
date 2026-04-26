/** @type {import('next').Config} */
const nextConfig = {
  output: 'export', // This tells Next.js to generate static HTML/CSS/JS
  images: {
    unoptimized: true, // Necessary for static exports
  },
};

export default nextConfig;
