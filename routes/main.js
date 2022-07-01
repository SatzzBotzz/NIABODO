__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/index.html'),
    res.sendFile(__path + '/page1.html'),
    res.sendFile(__path + '/page2.html'),
    res.sendFile(__path + '/page3.html'),
    res.sendFile(__path + '/page4.html')
})
module.exports = router
