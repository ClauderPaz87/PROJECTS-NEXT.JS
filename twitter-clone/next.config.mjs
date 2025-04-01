/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.clerk.com",
      "images.clerk.dev",
      "*.clerk.com",
      "*.clerk.dev",
      "fakeimageupload.com,",
      "picsum.photos",
      'api.dicebear.com',
      'avatars.dicebear.com',
    ],
  },
};

export default nextConfig;
