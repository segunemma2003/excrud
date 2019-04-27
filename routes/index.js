var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query="SELECT * FROM `players` ORDER BY id ASC";
  db.query(query,(err,result)=>{
    if(err){
      res.redirect('/');
    }
    res.render('index', { title: 'Welcome to soccer',players:result });
  });
 
});

router.all('/test',function(req,res,next){
  console.log(req.body);
  if(req.files){
    console.log(req.files.ppix);
  }
  // res.render('try',{check:"test running this"});
  // res.json(200,{message:"done"});
  res.redirect('/');
});
module.exports = router;
