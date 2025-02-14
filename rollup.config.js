import postcss from 'rollup-plugin-postcss';

export default {
    // Your Rollup config
    plugins: [
        // Other plugins
        postcss({
            extract: true, // Extract CSS to a separate file
        }),
    ],
};