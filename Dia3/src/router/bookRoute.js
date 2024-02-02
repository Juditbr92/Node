const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Bienvenido al servidor de MyBooks')
})

module.exports = router;