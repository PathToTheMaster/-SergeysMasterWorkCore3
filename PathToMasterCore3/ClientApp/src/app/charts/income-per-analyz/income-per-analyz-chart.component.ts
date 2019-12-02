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
				text: "Місячний дохід по аналізу"
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
					{ y: 21200, label: "Січень", exploded: true },
					{ y: 24000, label: "Лютий" , exploded: true},
					{ y: 22000, label: "Березень", exploded: true},
					{ y: 25230, label: "Квітень", exploded: true },
					{ y: 22120, label: "Травень", exploded: true },
					{ y: 23600, label: "Червень", exploded: true },
					{ y: 24560, label: "Липень" , exploded: true},
					{ y: 23650, label: "Серпень" , exploded: true},
					{ y: 22330, label: "Вересень" , exploded: true},
					{ y: 21290, label: "Жовтень", exploded: true },
					{ y: 21220, label: "Листопад", exploded: true},
					{ y: 23210, label: "Грудень", exploded: true }
				]
			}]
		});
		chart.render();
	}
}

