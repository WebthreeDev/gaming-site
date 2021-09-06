import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss']
})
export class TokenomicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    am4core.useTheme(am4themes_animated);
    am4core.addLicense("ch-custom-attribution");
    this.initChart();
  }
  public initChart(): void {
    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.legend.labels.template.text = " [bold {color}]{name}[/]";
    chart.legend.labels.template.fill = am4core.color("#fff");
    chart.legend.valueLabels.template.fill = am4core.color("#fff");

    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      },
      {
        country: "Belgium",
        litres: 60
      },
      {
        country: "The Netherlands",
        litres: 50
      }
    ];

    chart.innerRadius = 100;
    
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.ticks.template.disabled = true;
    series.alignLabels = false;
    series.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    series.labels.template.radius = am4core.percent(-25);
    series.labels.template.fill = am4core.color("white");
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
  }
}
