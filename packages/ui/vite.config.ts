import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  NodeGlobalsPolyfillPlugin as ESBuildGlobalsPolyfillsPlugin
} from '@esbuild-plugins/node-globals-polyfill'
import TSConfigPathsPlugin  from 'rollup-plugin-tsconfig-paths'
import ResolvePlugin from '@rollup/plugin-node-resolve'
import NodePolyfillsPlugin from 'rollup-plugin-polyfill-node'
import CommonJSPlugin from '@rollup/plugin-commonjs'
// import NodePolyfillsPlugin from 'rollup-plugin-node-polyfills'
import InjectPlugin from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ResolvePlugin({
    //   browser: true,
    //   preferBuiltins: true,
    //   mainFields: ['browser'],
    // }),
    TSConfigPathsPlugin(),
    NodePolyfillsPlugin({
      // include: null,
    }),
    react(),
  ],
  build: {
    minify: false,
    sourcemap: true,
    polyfillModulePreload: false,
    commonjsOptions: {
      // exclude: [/tslib/],
      include: [/node_modules/],
      transformMixedEsModules: true,
      ignoreGlobal: false,
      requireReturnsDefault: false,
      // defaultIsModuleExports: true,
      dynamicRequireTargets: ['**/react/**'],
      esmExternals: ['react-helmet']
    },
    rollupOptions: {
      // external: ["react", "react-dom"],
      // output: {
      //   globals: { // for UMD build
      //     react: 'React',
      //     'react-dom': 'ReactDOM',
      //   },
      // },
      plugins: [
        InjectPlugin({ Buffer: ['buffer', 'Buffer'] }),
        CommonJSPlugin({}),
      ],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      sourcemap: false,
      define: {
        global: 'globalThis',
      },
      plugins: [
        ESBuildGlobalsPolyfillsPlugin({
          process: true,
          buffer: true
        }),
      ],
    },
  },
  resolve: {
    alias: {
      http: 'stream-http',
      https: 'https-browserify',
      stream: 'stream-browserify',
      util: 'util',
    },
  },
  define: {
    'process.env': {},
  },
})
