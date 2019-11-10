import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
	selector: 'per-filial-chart',
	templateUrl: './per-filial-chart.component.html'
})
export class CharPerFilialComponent implements OnInit {
	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			axisX:{
				interval: 1
			},
			width: 1200,
			height: 800,
			title: {
				text: "Кількість філіалів"
			},
			data: [{
				type: "bar",
				name: "філіали",
				axisYType: "secondary",
				dataPoints: [
					{ y: 65, label: "Артмедиуз" },
					{ y: 5, label: "Дніпролаб" },
					{ y: 99, label: "ДНК Центр" },
					{ y: 77, label: "Иммуно-Тест" },
					{ y: 99, label: "Оптима Фарм" },
					{ y: 34, label: "НИКОЛАБ" },
					{ y: 43, label: "Эввива" },
					{ y: 26, label: "ДАД Гіппократ" },
					{ y: 16, label: "Мед-онлайн" },
					{ y: 86, label: "Синэво" },
					{ y: 84, label: "НеоЛаб" },
					{ y: 71, label: "Новая диагностика" },
					{ y: 15, label: "CSD Health Care" },
					{ y: 8, label: "Оберіг" },
					{ y: 94, label: "ИНВИТРО" },
					{ y: 99, label: "IQLab" },
					{ y: 58, label: "MedLab" },
					{ y: 50, label: "Modern Diabetes Center" }
				]
			}]
		});

		chart.render();
	}
}

