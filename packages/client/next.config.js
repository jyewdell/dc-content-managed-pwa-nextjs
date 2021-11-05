const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'Jake Test.cdn.content.amplience.net'
    },
    poweredByHeader: false,
    target: 'serverless'
}
