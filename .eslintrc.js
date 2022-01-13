module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["airbnb/base"],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-plusplus': 'off',
        'no-tabs': 'off',
        'prefer-destructuring': 'off',
        'indent': [2, 'tab'],
    }
}