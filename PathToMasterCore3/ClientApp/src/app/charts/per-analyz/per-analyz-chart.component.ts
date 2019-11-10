import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
	selector: 'per-analyzes-chart',
	templateUrl: './per-analyz-chart.component.html'
})
export class CharPerAnalyzesComponent implements OnInit {
	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			theme: "light2",
			title: {
				text: "Вартість аналізу"
			},
			axisY: {
				includeZero: false
			},
			data: [{
				type: "line",
				dataPoints: [
					{ y: 200, label: "Артмедиуз" },
					{ y: 190, label: "Дніпролаб" },
					{ y: 210, label: "ДНК Центр" },
					{ y: 190, label: "Иммуно-Тест" },
					{ y: 180, label: "Оптима Фарм", indexLabel: "Найнижча ціна", markerColor: "red", markerType: "triangle" },
					{ y: 200, label: "НИКОЛАБ" },
					{ y: 210, label: "Эввива" },
					{ y: 220, label: "ДАД Гіппократ", indexLabel: "Найвища ціна", markerColor: "DarkSlateGrey", markerType: "triangle" },
					{ y: 200, label: "Мед-онлайн" },
					{ y: 180, label: "Синэво", indexLabel: "Найнижча ціна", markerColor: "red", markerType: "triangle" },
					{ y: 190, label: "НеоЛаб" },
					{ y: 200, label: "Новая диагностика" },
					{ y: 200, label: "CSD Health Care" },
					{ y: 210, label: "Оберіг" },
					{ y: 190, label: "ИНВИТРО" },
					{ y: 190, label: "IQLab" },
					{ y: 200, label: "MedLab" },
					{ y: 220, label: "Modern Diabetes Center", indexLabel: "Найвища ціна", markerColor: "DarkSlateGrey", markerType: "triangle" }
				]
			}]
		});
		chart.render();
	}
}

