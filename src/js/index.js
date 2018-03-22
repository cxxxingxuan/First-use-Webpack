import _ from 'lodash';
import '../css/index.css';

// var $ = require('./jquery.min');
// var goTop = require('./com/gotop');
// var carousel = require('./com/carousel');
// var loadFallFlow = require('./com/loadFallFlow');
import $ from  './jquery.min'
import {goTop} from './com/gotop'
import {carousel} from  './com/carousel'
import {loadFallFlow} from './com/loadFallFlow'

      new goTop($('.layout'));
      new carousel($('.carousel'),$(window).width(),$(window).height());
      new loadFallFlow($('.lff-content'));
