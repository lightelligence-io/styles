import pack from './package.json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import comments from 'postcss-discard-comments';

const debug = false; // internal debug mode to check your output
const headerTitle = `${pack.name} v${pack.version}`; // @todo add header to each output
const headerCommet = `/** ${headerTitle} **/`;
const packageName = 'lightelligence-ui';
const moduleName = 'lightelligence';
const targetDir = 'dist';

const plugins = [
    resolve({}),
    babel({
        exclude: [
            'source/style/**',
            'node_modules/**',
        ]
    }),
    debug ? null : uglify(), // minify
    postcss({
        extract: true,
        minimize: true,
        sourceMap: false,
        plugins: [
            debug ? null : comments({removeAll: true}),
        ]
    })
];

export default {
    input: 'source/framework.js',
    treeshake: false,
    plugins,
    output: [
        {
            file: `${targetDir}/${packageName}.js`,
            name: moduleName, // export module name
            format: 'umd' // umd package type for best support
        }
    ]
};
