const config = {
    secret: '9238fSf9fAKckj332Knaksnf9012ADSN',
    env: process.env.ENV,
    port: 3000,
    db: {
        dbUrl: process.env.DB_URL,
        dbName: 'diploma',
        // dbHost: 'localhost',
        // dbPort: 27017,
    },
    userCommentActions: {
        like: 'like',
        dislike: 'dislike',
        violate: 'violate',
    },
    requestTypes: {
        order: 'order',
        consultation: 'consultation',
    }
};

module.exports = config;