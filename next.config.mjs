/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'marketplace.canva.com',
            },
            {
                protocol: 'https',
                hostname: 'd1csarkz8obe9u.cloudfront.net',
            },
            {
                protocol: 'https',
                hostname: 'edit.org',
            },
            {
                protocol: 'https',
                hostname: 'designforwriters.com',
            },

            {
                protocol: 'https',
                hostname: 'creativereview.imgix.net',
            },
            {
                protocol: 'https',
                hostname: 'media-amazon.com',
            },
            {
                protocol: 'https',
                hostname: 'img0-placeit-net.s3-accelerate.amazonaws.com',
            },
            
            

        ],
    }
};

export default nextConfig;
