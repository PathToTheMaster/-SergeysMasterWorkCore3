import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
	selector: 'app-counter-component',
	templateUrl: './chart.component.html'
})
export class CharPerMonthComponent implements OnInit {
	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Кількість послуг за місяць середне арефметичне"
			},
			data: [{
				type: "column",
				dataPoints: [
					{ y: 620000, label: "Артмедиуз" },
					{ y: 340000, label: "Дніпролаб" },
					{ y: 840000, label: "ДНК Центр" },
					{ y: 410000, label: "Иммуно-Тест" },
					{ y: 30000, label: "Оптима Фарм" },
					{ y: 480000, label: "НИКОЛАБ" },
					{ y: 500000, label: "Эввива" },
					{ y: 870000, label: "ДАД Гіппократ" },
					{ y: 370000, label: "Мед-онлайн" },
					{ y: 460000, label: "Синэво" },
					{ y: 790000, label: "НеоЛаб" },
					{ y: 640000, label: "Новая диагностика" },
					{ y: 990000, label: "CSD Health Care" },
					{ y: 630000, label: "Оберіг" },
					{ y: 150000, label: "ИНВИТРО" },
					{ y: 770000, label: "IQLab" },
					{ y: 870000, label: "MedLab" },
					{ y: 370000, label: "Modern Diabetes Center" }
				]
			}]
		});

		chart.render();
	}
}