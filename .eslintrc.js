module.exports = {
    extends: ['react-app'],
    rules: {
        'operator-linebreak': ['error', 'before'],
        'indent': ['error', 2],
        'quotes': [
            'error',
            'single'
        ],
        'object-curly-spacing': ['error', 'always'],
        'jsx-quotes': ['error', 'prefer-single']
    },
    globals: {
        window: true,
        document: true,
        localStorage: true
    }
};
