import { Component, OnDestroy, OnInit } from '@angular/core';
declare let am4core: any, am4themes_animated: any, am4charts: any;

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss']
})
export class TokenomicsComponent implements OnInit, OnDestroy {

  constructor() { }

  public ngOnInit(): void {
    am4core.useTheme(am4themes_animated);
    am4core.addLicense("ch-custom-attribution");
    am4core.options.autoDispose = true;
    this.initChart();
  }
  public ngOnDestroy(): void {
    am4core.disposeAllCharts();
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
        category: "Team",
        percentage: 1
      },
      {
        category: "Liquidity",
        percentage: 98
      },
      {
        category: "Airdrop",
        percentage: 2
      }
    ];

    chart.innerRadius = 100;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.ticks.template.disabled = true;
    series.alignLabels = false;
    series.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    series.labels.template.radius = am4core.percent(-25);
    series.labels.template.fill = am4core.color("white");
    series.dataFields.value = "percentage";
    series.dataFields.category = "category";
  }

}
