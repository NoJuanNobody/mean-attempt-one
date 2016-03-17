var fs = require('fs'),
    fabric = require('fabric').fabric,
    out = fs.createWriteStream(__dirname + '/helloworld.png');

var canvas = fabric.createCanvasForNode(200, 200);
var text = new fabric.Text('Hello world', {
  left:0,
  top:0,
  fill: '#f55',
  angle: 15
});
canvas.add(text);

var stream = canvas.createPNGStream();
stream.on('data', function(chunk) {
  out.write(chunk);
});