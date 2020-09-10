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

router.get('/playerList', async(req, res) => {
    var result = await PrintXg.playerList();

    if(result.length == 0){
        res.status(statusCode.OK).send(utils.successFalse(statusCode.NO_CONTENT, responseMessage.X_READ_ALL_SUCCESS('playerList')));
        return;
    }
    res.status(statusCode.OK).send(utils.successTrue(statusCode.OK, responseMessage.X_READ_ALL_SUCCESS('playerList'), result));
})

router.get('/:teamIdx/player', async(req, res) => {
    const teamIdx = req.params.teamIdx;
    var result = await PrintXg.player(teamIdx);
    res.status(statusCode.OK).send(utils.successTrue(statusCode.OK, responseMessage.X_READ_ALL_SUCCESS('teamList'), result));
});

router.get('/shooting/:playerIdx', async(req, res) => {
    const playerIdx = req.params.playerIdx;
    var result = await PrintXg.shooting(playerIdx);

    if(!result || result.length == 0) {
        res.status(statusCode.BAD_REQUEST).send(utils.successFalse(statusCode.BAD_REQUEST, responseMessage.X_READ_ALL_FAIL('shootings')));
        return;
    }

    res.status(statusCode.OK).send(utils.successTrue(statusCode.OK, responseMessage.X_READ_ALL_SUCCESS('shootings'), result));
});

module.exports = router;