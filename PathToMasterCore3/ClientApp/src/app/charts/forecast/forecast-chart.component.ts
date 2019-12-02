import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
	selector: 'forecast-chart',
	templateUrl: './forecast-chart.component.html'
})
export class ForecastAnalyzComponent implements OnInit {
	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
			theme: "light2",
			animationEnabled: true,
			title: {
				text: "Прогнозування"
			},
			subtitles: [{
				fontSize: 16
			}],
			data: [{
				type: "line",				
				yValueFormatString: "≈ ###0\"млн. ₴\"",
				dataPoints: [
					{ y: 420, label: "2005", exploded: true },
					{ y: 450, label: "2006" , exploded: true},
					{ y: 500, label: "2007", exploded: true},
					{ y: 535, label: "2008", exploded: true },
					{ y: 600, label: "2009", exploded: true },
					{ y: 685, label: "2010", exploded: true },
					{ y: 700, label: "2011", exploded: true },
					{ y: 765, label: "2012", exploded: true },
					{ y: 780, label: "2013", exploded: true },
					{ y: 860, label: "2014", exploded: true },
					{ y: 890, label: "2015", exploded: true },
					{ y: 900, label: "2016", exploded: true },
					{ y: 920, label: "2017", exploded: true },
					{ y: 940, label: "2018", exploded: true },
					{ y: 950, label: "2019", exploded: true },
					
				]
			}]
		});
		chart.render();
	}
}

