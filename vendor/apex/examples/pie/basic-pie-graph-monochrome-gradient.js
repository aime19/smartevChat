var options = {
	chart: {
		width: 400,
		type: 'pie',
	},
	series: [25, 15, 44, 55, 41, 17],
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	fill: {
		type: 'gradient',
	},
	theme: {
		monochrome: {
			enabled: true,
			colors: ['#f8bb7a', '#f5936c', '#f26665', '#e53c51', '#a51225', '#670613'],
		}
	},
	title: {
		text: "Weekly Sales",
	},
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				width: 200
			},
			legend: {
				position: 'bottom'
			}
		}
	}],
	stroke: {
		width: 0,
	},
}
var chart = new ApexCharts(
	document.querySelector("#basic-pie-graph-monochrome-gradient"),
	options
);
chart.render();


