const dao = require('./dao')
var id = '61b7b1c94e0281746dc23648';
/*dao.findById(req.params.id,function (err, docs)).then(results => re.json())*/
dao.find(id, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", docs);
    }
});