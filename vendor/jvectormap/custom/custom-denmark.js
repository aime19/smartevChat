// Denmark
$(function(){
	$('#mapDenmark').vectorMap({
		map: 'dk_mill',
		zoomOnScroll: false,
		regionStyle:{
			initial: {
				fill: '#074b9c',
			},
			hover: {
				"fill-opacity": 0.8
			},
			selected: {
				fill: '#8459ca'
			},
		},
		backgroundColor: 'transparent',
	});
});