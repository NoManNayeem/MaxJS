import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  viteFinal: async (config) => {
    // Set base path for GitHub Pages
    config.base = '/MaxJS/';
    
    // Configure build for GitHub Pages
    if (config.build) {
      config.build.assetsDir = 'assets';
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        output: {
          ...config.build?.rollupOptions?.output,
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        }
      };
    }
    
    // Ensure proper module resolution
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
      }
    };
    
    return config;
  }
};

export default config;
