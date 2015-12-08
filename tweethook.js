var Async = require('async');
var Twit = require('twit');

var HTTPS_URL_LENGTH = 23; // As at 2015-12-08
var HASHTAG = '#tweethook';
var SPACE = ' ';

module.exports = function (ctx, cb) {
    if (ctx.body.ref !== 'refs/heads/master') return cb(null, {});
    
    var twit = new Twit({
        consumer_key: ctx.data.CONSUMER_KEY,
        consumer_secret: ctx.data.CONSUMER_SECRET,
        access_token: ctx.data.ACCESS_TOKEN,
        access_token_secret: ctx.data.ACCESS_TOKEN_SECRET,
    });
    
    Async.map(ctx.body.commits, function (commit, next) {
        var truncateCommitMessage = 140
            - HTTPS_URL_LENGTH
            - HASHTAG.length
            - SPACE.length * 2;
        var status = commit.message.slice(0, truncateCommitMessage)
            + SPACE + HASHTAG
            + SPACE + commit.url;
            
        twit.post('statuses/update', { status: status }, next);
    }, cb);
};