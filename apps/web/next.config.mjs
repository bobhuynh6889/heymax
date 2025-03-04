/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui'],
  webpack: (config) => {
    // Add the alias for react-native
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    // Add file extensions handled by Next.js
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...(config.resolve.extensions || ['.js', '.jsx', '.ts', '.tsx']),
    ];

    return config;
  },
};

export default nextConfig; 