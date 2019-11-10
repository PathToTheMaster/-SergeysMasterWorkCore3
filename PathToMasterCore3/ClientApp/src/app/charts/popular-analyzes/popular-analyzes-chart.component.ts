import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
	selector: 'popular-analyzes-chart',
	templateUrl: './popular-analyzes-chart.component.html'
})
export class CharPopularAnalyzesComponent implements OnInit {
	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			axisX:{
				interval: 1
			},
			width: 1000,
			height: 600,
			title: {
				text: "Топ 10 аналізів"
			},
			data: [{
				type: "column",
				
				dataPoints: [
					{ y: 10000000, label: "Загальний аналіз крові з лейкоцитарною формулою" },
					{ y: 9000000, label: "Загальний аналіз сечі" },
					{ y: 8500000, label: "Глюкоза крові" },
					{ y: 8400000, label: "Загальний холестерин" },
					{ y: 7300000, label: "Швидкий тест на вагітність" },
					{ y: 7000000, label: "Швидкий тест на тропонін" },
					{ y: 6500000, label: "Швидкий тест на ВІЛ" },
					{ y: 6200000, label: "Швидкий тест на вірусні гепатити" },
					{ y: 4100000, label: "Білірубін: загальний і прямий" },
					{ y: 3300000, label: "Білок загальний" }
				]
			}]
		});

		chart.render();
	}
}