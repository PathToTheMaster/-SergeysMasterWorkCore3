import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
	selector: 'income-per-analyz',
	templateUrl: './income-per-analyz-chart.component.html'
})
export class CharIncomePerAnalyzComponent implements OnInit {
	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
			theme: "light2",
			animationEnabled: true,
			title: {
				text: "Квартальний дохід по аналізу"
			},
			subtitles: [{
				
				fontSize: 16
			}],
			data: [{
				type: "pie",
				indexLabelFontSize: 18,
				radius: 180,
				indexLabel: "{label} - {y}",
				yValueFormatString: "###0\"₴\"",
				dataPoints: [
					{ y: 18000, label: "Зима" },
					{ y: 25000, label: "Весна"},
					{ y: 22000, label: "Літо" },
					{ y: 20000, label: "Осінь" },
				]
			}]
		});
		chart.render();
	}
}

