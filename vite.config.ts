import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  console.log(command);
  const config = {
    plugins: [react()],
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/react-boilerplate/';
  }

  return config;
});
