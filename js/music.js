$(document).ready(function() {

	function GetRandomNum(Min, Max) {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}
	var readyMusic = {
		// 手动添加歌单id，name可写可不写
		music_id: [{
			name: '云音乐飙升榜',
			id: '19723756'
		}, {
			name: '云音乐新歌榜',
			id: '3779629'
		}, {
			name: '云音乐电音榜',
			id: '1978921795'
		}, {
			name: '云音乐原创歌曲榜',
			id: '2884035'
		}, {
			name: '云音乐嘻哈榜',
			id: '991319590'
		}, {
			name: '云音乐ACG音乐榜',
			id: '71385702'
		}, {
			name: '云音乐新电力榜',
			id: '10520166'
		}, {
			name: 'Beatport电子舞曲榜',
			id: '3812895'
		}, {
			name: 'iTunes榜',
			id: '11641012'
		}, {
			name: 'KTV',
			id: '21845217'
		}, {
			name: '中国TOP排行榜（内地榜）',
			id: '64016'
		}, {
			name: '中国TOP排行榜（港台榜）',
			id: '112504'
		}],
		iframe: $("<iframe>"),
		iframe_box: $("<div>"),
		span: $("<span>音乐</span>"),
		
		initMusic: function() {
			this.createDom();
			this.setStyle();
			this.show();
			this.iframeOnload();
		},
		createDom: function() {
			var play_music_id = this.music_id[GetRandomNum(0, this.music_id.length-1)].id; //随机选择一个歌单播放
			var musicUrl = "http://music.163.com/outchain/player?type=0&id=" + play_music_id + "&auto=1&height=auto&loop=true";
			this.iframe.attr('src', musicUrl);
			this.iframe_box.append(this.iframe);
			$("body").append(this.iframe_box);
		},
		setStyle: function() {
			this.span.css({
				"display": "inline-block",
				"position": "absolute",
				"top": "10px",
				"right": "-20px",
				"padding-top": "10px",
				"line-height": "24px",
				"width": "30px",
				"height": "56px",
				"text-align": "center",
				"background": "#469B9D",
				"color": "#fff",
				"cursor": "pointer",
				"font-size": "16px",
			});
			this.iframe.css({
				"width": "100%",
				"height": "300px",
				"border": "none",
				"margin": "0px",
				"padding": "0px",
			});
			this.iframe_box.css({
				"position": "fixed",
				"left": '-9px',
				"bottom": "14px",
				"max-width": "414px",
				"z-index": 99999,
				"height": "auto",
			})
		},
		iframeOnload: function() {
			var _self = this;
			this.iframe.load(function() {
				_self.iframe_box.append(_self.span);
				_self.autoHide();
			});
		},
		show: function() {
			var _self = this;
			this.span.on("click", function() {
				var iframe_box_left = Math.abs(parseInt(_self.iframe_box.css("left")));
				var iframe_box_width = parseInt(_self.iframe_box.css("width"));
				if (iframe_box_left > 9) {
					_self.iframe_box.animate({
						"left": "-9px",
					});
				} else {
					_self.iframe_box.animate({
						"left": -(iframe_box_width - 9) + "px",
					});
				}

			})
		},
		autoHide: function() {
			var _self = this;
			setTimeout(function() {
				var iframe_box_width = parseInt(_self.iframe_box.css("width"));
				_self.iframe_box.animate({
					"left": -(iframe_box_width - 9) + "px",
				});
			}, 5000);
		},

	};
	readyMusic.initMusic();

});