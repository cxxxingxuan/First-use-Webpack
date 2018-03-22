


      import $ from '../jquery.min'

export function goTop(ct) {
            this.ct = ct;
            this.target = $('<button>回到顶部</button>');
            this.createNode();
            this.bindEvent();
            this.scroll()
      }

      goTop.prototype = {
            bindEvent: function () {
                  var thisobj = this;
                  thisobj.target.on('click', function () {
                        $(window).scrollTop(0)
                  })
            },
            createNode: function () {
                  this.target.css({
                        color: 'red',
                        fontSize: 15,
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                  });
                  this.ct.append(this.target);
                  this.target.hide();
            },
            scroll: function () {
                  var _this = this;
                  $(window).scroll(function () {
                        if ($(window).scrollTop() > 100) {
                              _this.target.show();
                        } else {
                              _this.target.hide();
                        }
                  })
            }
      };

      /*function goTop(id) {
            console.log("gogogo");
            this.id = id || 'jrg-gotop';
            this.init();
      }

      goTop.prototype = {
            init: function() {
                  var $el = $('#' + this.id);
                  if ($el.length === 0) {
                        console.log('回到顶部');
                        this.$el = $('<div id="' + this.id + '" style="position: fixed; right: 10px; bottom: 10px; ">回到顶部</div>');
                        $('body').append(this.$el);
                  } else {
                        this.$el = $el;
                  }
                  this.$c = $(document);

                  this.bind();
            },

            bind: function() {
                  var me = this;

                  this.$c.on('click', function() {
                        me.goToTop();
                  });

                  this.$c.on('scroll', function(){
                        me.scroll();
                  });
            },

            goToTop: function() {
                  this.$c.scrollTop(0);
            },

            scroll: function(e) {
                  var scrollTop = this.$c.scrollTop();
                  if (scrollTop > 100) {
                        this.$el.show();
                  } else {
                        this.$el.hide();
                  }
            }
      };*/

      //new goTop();
      // let goTop2 = (function () {
      //
      //             return {
      //             init: function ($ct) {
      //                   $ct.each(function (idx, ct) {
      //                         new goTop($(ct));
      //                   })
      //             }
      //       }
      // })();