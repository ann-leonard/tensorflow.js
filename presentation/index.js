var fs = require('fs');
var NDarray = require('ndarray-imshow');
var tf = require('@tensorflow/tfjs')

var model=tf.loadModel('../tensorflow_intro/tfjs_model/model.json')
var data = tf.data.csv('../tensorflow_intro/mnist/mnist_test.csv')
