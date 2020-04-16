const parse = require('csv-parse');
const fs = require('fs');

var csvData = [];

fs.createReadStream(__dirname + '/input.csv')
    .pipe(
        parse({
            delimiter: ','

        })
    )
    .on('data', function(dataRow){
        csvData.push(dataRow);
    })
    .on('end', function(){
        console.log(csvData);

    });
