var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));
app.listen(app.get('port'), function(){
    console.log('listening on', app.get('port'))
});
