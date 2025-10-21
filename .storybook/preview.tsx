import type { Preview } from '@storybook/react';
import '../src/styles/global.css'; // Import global styles if needed
import 'tailwindcss/tailwind.css'; // If hosting Storybook with Tailwind

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
