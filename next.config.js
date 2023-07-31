/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    productionBrowserSourceMaps: true,
    poweredByHeader: false,
    output: 'standalone',
    experimental: {
        appDir: true,
        serverAction: true,
        typedRoutes: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    httpAgentOptions: {
        keepAlive: false,
    },
    generateEtags: false,
    compress: false,
}


module.exports = {
    nextConfig,
}