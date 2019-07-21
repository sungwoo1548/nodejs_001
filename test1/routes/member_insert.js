var express = require('express');
var router = express.Router();

/* POST member_insert. */
router.post('/', function (req, res, next) { // post 요청시 처리 콜백

    console.log(req.body); // 브라우저의 요청 확인 
    console.log(req.body.name); // 요청보낸 인자의 key값으로 확인
    console.log(req.body.password); // 요청보낸 인자의 key값으로 확인

    req.body.msg = "등록됨"; // 서버의 처리내용을 브라우저로 전달하기 위하여 메세지 작성
    res.json(req.body); // 브라우저의 요청내용에 처리내용 첨가하여 다시 전달 (json 형식으로)

});

module.exports = router;
