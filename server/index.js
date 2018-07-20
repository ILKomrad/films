var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    multiparty = require('multiparty'),
    fs = require('fs'),
    mysql = require('mysql'),
    config = require('./models/config.js'),
    pool = mysql.createPool(config.db),
    db = require('./models/db.js')(pool);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/getList', function(req, res) {
    db.getAll('films', function(err, data) {
        res.json({
            films: {
                films: data
            }
        })
    })
});

app.post('/addItem', function(req, res) {
    var item = req.body.item;

    db.addToDb('films', {
        title: item['title'],
        'release Year': item['release year'],
        format: item['format'],
        stars: item['stars']
    }, function(err, data) {
        res.json({
            id: data.insertId
        })
    });
});

app.post('/uploadFile', function(req, res) {
    var form = new multiparty.Form();
 
    form.parse(req, function(err, fields, files) {
        fs.readFile(files.file[0].path, function(err, data) {
            var data2 = data.toString(),
                arr = [];
            data2 = data2.split(/\n\n/);
            data2.forEach(function(item) {
                var lines = item.split(/\n/),
                    obj = {};
                
                lines.forEach(function(line) {
                    var lineSplit = line.split(':');
                    obj[lineSplit[0]] = lineSplit[1];
                });
                arr.push(obj);
            });
            
            arr.forEach(function(item) {
                if (item['Title']) {
                    db.addToDb('films', {
                        title: item['Title'].trim(),
                        'release year': item['Release Year'].trim(),
                        format: item['Format'].trim(),
                        stars: item['Stars'].trim()
                    });
                }
            });

            db.getAll('films', function(err, data) {
                res.json({
                    films: {
                        films: data
                    }
                })
            });
        })
    });
});

app.get('/search', function(req, res) {
    db.findOne(req.query.searchBy, req.query.q, function(err, data) {
        res.json({
            films: {
                films: data
            }
        })
    });
});

app.delete('/deleteItem', function(req, res) {
    db.deleteOne('films', {id: +req.query.id}, function(err, data) {
        res.json({})
    });
});

app.listen(3002, function() {
    console.log(3002);
})