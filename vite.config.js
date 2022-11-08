import vue from '@vitejs/plugin-vue'
import typescript from 'rollup-plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs';
// import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'
import { resolve } from 'path'

export default {
    optimizeDeps: {
        include: ['interactjs']
    },
    plugins: [
        vue(),
        nodeResolve(),
        // commonjs(),
        typescript({
            tsconfig: false,
            experimentalDecorators: true,
            module: 'es2015'
        }),
        // postcss({
        //     plugins: [require('autoprefixer')]
        // }),
        // terser(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.js'),
            name: pkg.name,
            formats: ['umd', 'cjs', 'esm'],
            fileName: (format) => `${pkg.name}.${format}.js`
        },
        rollupOptions: {
            // input: 'src/components/index.js',
            // output: [
            //     {
            //         file: pkg.main,
            //         format: 'cjs'
            //     },
            //     {
            //         file: pkg.unpkg,
            //         format: 'umd',
            //         name: 'bundle'
            //     }
            // ],

            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
}
