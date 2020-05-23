const express = require('express');
const router = express.Router({mergeParams: true});

const utils = require('../../module/utils/utils');
const responseMessage = require('../../module/utils/responseMessage');
const statusCode = require('../../module/utils/statusCode');

const PrintXg = require('../../model/printXg')

router.get('/teamList', async(req, res) => {
    var result = await PrintXg.teamList();
    res.status(statusCode.OK).send(utils.successTrue(statusCode.OK, responseMessage.X_READ_ALL_SUCCESS('teamList'), result));
});

router.get('/:teamIdx/player', async(req, res) => {
    const teamIdx = req.params.teamIdx;
    var result = await PrintXg.player(teamIdx);
    res.status(statusCode.OK).send(utils.successTrue(statusCode.OK, responseMessage.X_READ_ALL_SUCCESS('teamList'), result));
});

module.exports = router;