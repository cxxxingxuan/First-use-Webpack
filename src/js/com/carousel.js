




      import $ from '../jquery.min'

export function carousel($ct, width, height) {
            this.$ct = $ct;
            this.$width = width;
            this.$height = height;
            this.bind();
            this.operation();
            this.bindClick();
      }

      carousel.prototype.bind = function () {
            console.log(this.$width, this.$height);
            this.$ct.width(this.$width);
            this.$ct.height(this.$height);
            this.$prebtn = this.$ct.find('.leftbtn');
            this.$nextbtn = this.$ct.find('.rightbtn');
            this.$imgCt = this.$ct.find('.img-ct');
            this.$imgs = this.$ct.find('.img-ct').children('.img');
            this.$imgs.width(this.$width);
            this.$imgs.height(this.$height);
            this.imgCount = this.$imgs.length;
            this.imgWidth = this.$imgs.width(this.width).width();
            this.pageindex = 0;  //设置参数判断当前的画面在第几副图
            this.$btns = this.$ct.find('.btnWrap').children('.btn');
            this.pageAnimate = false //设置参数判断是否在动画中
      };

      carousel.prototype.operation = function () {
            this.$imgCt.append(this.$imgs.first().clone());
            this.$imgCt.prepend(this.$imgs.last().clone());
            console.log(this.imgWidth);
            this.$imgCt.width(this.imgWidth * (this.imgCount + 2));
            this.$imgCt.css({left: -this.imgWidth});
            console.log(this.pageindex);
      };

      carousel.prototype.play = function (len) {
            if (this.pageAnimate) {
                  return;
            }
            var _this = this;
            console.log(len, this.imgWidth, this.imgCount);
            this.pageindex += len;
            this.pageAnimate = true;//判断是否在动画中
            this.$imgCt.animate({
                  left: '-=' + this.imgWidth * len
            }, function () {
                  if (_this.pageindex === _this.imgCount) {

                        _this.pageindex = 0;
                        _this.$imgCt.css({left: -_this.imgWidth})
                  }
                  if (_this.pageindex === -1) {
                        _this.pageindex = _this.imgCount - 1;
                        console.log(_this.pageindex);
                        _this.$imgCt.css({left: -_this.imgWidth * _this.imgCount})
                  }

                  _this.setButton()
            });
      };

      carousel.prototype.setButton = function () {
            this.$btns.removeClass('active').eq(this.pageindex).addClass('active');
            this.pageAnimate = false;
      };

      carousel.prototype.bindClick = function () {
            var _this = this;
            this.$btns.on('click', function () {
                  index = $(this).index();
                  console.log(index);
                  _this.play(index - _this.pageindex);
            });

            this.$prebtn.on('click', function () {
                  console.log("点击切换到前一张图")
                  _this.play(-1)
            });

            this.$nextbtn.on('click', function () {
                  console.log("点击切换到下一张图")
                  _this.play(1)
            });
      };



      // Carousel2 = (function () {
      //       return {
      //             init: function ($ct, width, height) {
      //                   $ct.each(function (idx, ct) {
      //                         new Carousel($(ct), width, height);
      //                   })
      //             }
      //       }
      // })();


