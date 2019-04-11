var fs = require('fs');
var NDarray = require('ndarray-imshow');
var converter = require('@tensorflow/tfjs-converter');
var tfn =  require("@tensorflow/tfjs-node");
var tf =  require("@tensorflow/tfjs");

var data = tf.data.csv('../tensorflow_intro/mnist/mnist_test.csv')
console.log(data)

async function init(){
    var model = await tf.loadLayersModel('../tensorflow_intro/tfjs_model/model.json')
    console.log("loaded")
}
init()