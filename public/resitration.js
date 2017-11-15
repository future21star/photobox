var Horseman, horseman;

Horseman = require('node-horseman');

horseman = new Horseman();

Math.floor(horseman.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0').open('http://www.google.com').type('input[name="q"]', 'github').click('[name="btnK"]').count('div').log() / (prints(out(the(number in results))).close()));
