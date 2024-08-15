const crypto = require('crypto');

// Generate a 32-byte secret (256-bit)
const secret = crypto.randomBytes(32).toString('hex');

console.log('Secret:', secret);
