const appBook = require('./appBook');

appBook.listen(appBook.get('port'), () => {
    console.log(`La API se esta ejecutando en el puerto: ${appBook.get('port')}`)
})