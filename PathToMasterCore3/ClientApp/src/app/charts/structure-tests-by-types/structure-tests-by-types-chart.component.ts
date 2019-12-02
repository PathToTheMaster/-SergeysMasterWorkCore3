import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
	selector: 'structure-tests-by-types',
	templateUrl: './structure-tests-by-types-chart.component.html'
})
export class StructureTestsTypesChartAnalyzComponent implements OnInit {
	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
			theme: "light2",
			animationEnabled: true,
			title: {
				text: "Структура тестів за видами"
			},
			subtitles: [{

				fontSize: 16
			}],
			data: [{
				type: "doughnut",
				indexLabelFontSize: 18,
				radius: 180,
				indexLabel: "{label} - {y}",
				yValueFormatString: "###0\"%\"",
				dataPoints: [
					{ y: 47, label: "Біохімія", exploded: true },
					{ y: 27, label: "Імунохімія" , exploded: true},
					{ y: 18, label: "Загально клінічна цитологія", exploded: true},
					{ y: 6, label: "ПЛР (полімерно ланцюгова реакція)", exploded: true },
					{ y: 2, label: "Мікробіологія", exploded: true }
					
				]
			}]
		});
		chart.render();
	}
}

