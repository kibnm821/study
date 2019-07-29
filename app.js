const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();

app.use(express.static('public'))
app.use(express.static('Views'))

//ps.형 여기 인덱스로 들어가는거요 127.0.0.1:3000/주소일때 접속하는 주소
//분류 페이지 제가 만들어 놓을테니까 이거는 건드시지 마시고 나머지 주소 건드시면 됩니다.

//localhost domain


router.get('/geo', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/0724/Function.html'));
});

router.get('/Cookies', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/0724/Cookies.html'));
});

router.get('/login', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/0724/login.html'));
});

router.get('/jQuery', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/0725/jQuery.html'));
});

//request



router.get('/loginpage', function (req, res) {
console.log(req.query);
res.send('Request id : '+req.query.id+'<br>Request password : '+req.query.pwd)
});

//////////////////////////////////////웅재////////////////////////////////////////////////

router.get('/popup', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/0725/jquery.html'));
    });
router.get('/pro1', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/0725/pro1.html'));
    });
router.get('/syntax', function (req, res) {
    res.sendFile(path.join(__dirname + '/Views/0725/syntax.html'));
    });
app.use('/', router);

/////////////////////////////////////치원/////////////////////////////////////////////////
router.get('/Sign_Up', function (req, res) {
console.log(req.query);
res.send('Request id : '+req.query.id+'<br>Request name : '+req.query.name+'<br>Request Password : '+req.query.pwd+
'<br>Request email : '+req.query.email+'<br>Request pwdcheck : '+req.query.pwdcheck+'<br>Request tel : '+req.query.tel1+
' - '+req.query.tel2+' - '+req.query.tel3+'<br>Request addr : '+req.query.addr)
});

router.get('/Signup', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/small pro/SignUp.html'));
});