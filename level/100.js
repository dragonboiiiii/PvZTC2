oS.Init(
	{
		PName: [oExplodePeashooter, oExplodeSunFlower],
		ZName: [oExplodZombie],
		PicArr: (function () {
			var a = oSnowPea.prototype;
			var b = a.PicArr;
			return ["images/interface/background666.jpg", "images/interface/crater1.png", b[a.CardGif], b[a.NormalGif]];
		})(),
		backgroundImage: "images/interface/background666.jpg",
		CanSelectCard: 0,
		LevelName: "SQ 1",
		LvlEName: 6,
		LargeWaveFlag: { 9: $("imgFlag1") },
	},
	{
		AZ: [
			[oExplodZombie, 3, 1],
		],
		FlagNum: 9,
		FlagToSumNum: { a1: [3, 5, 8], a2: [1, 2, 3, 9] },
		FlagToMonitor: { 8: [ShowFinalWave, 0] },
		FlagToEnd() {
			NewImg("imgSF", "images/Card/Plants/SnowPea.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
				onclick() {
					GetNewCard(this, oSnowPea, 7);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll);
		},
	}
);
