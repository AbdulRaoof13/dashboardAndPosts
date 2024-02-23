import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};


@Component({
  selector: 'app-info-graph',
  templateUrl: './info-graph.component.html',
  styleUrl: './info-graph.component.scss'
})
export class InfoGraphComponent implements OnInit {

  @ViewChild("chart") chart: any = ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor() {
    
  }




  ngOnInit(): void {
    this.chartOptions = {
      legend: {
        show: false
      },
      series: [
        {
          name: "New",
          type: "column",
          data: [11, 10, 8, 12, 8, 10, 17],
          colors: ['#606C81']
        },
        {
          name: "Closed",
          type: "line",
          data: [42, 28, 43, 34, 20, 25, 22],
          colors: ['#606C81']
        }
      ],
      chart: {
        height: 300,
        type: "line",
        colors: ['#606C81'],
        toolbar: {
          show: false
        },
        events: {
          mounted: (chart:any) => {
            chart.windowResizeHandler();
          }
        }
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false  
          }
        },
        row: {
          colors: ['#606C81'],
          opacity: 0.5

        }
      },
      stroke: {
        width: [0, 4],
        colors: ['#606C81']
      },
      title: {
        // text: "Traffic Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        style: {
          colors: ['#606C81']
        }
      },
      labels: [
        "Mon",
        "Tue",
        "Wed",
        "Thur",
        "Fri",
        "Sat",
        "Sun",
      ],
      xaxis: {
        type: "text",
        labels: {
          style: {
            colors: ['#606C81']
          }
        }

      },
      yaxis: [
        {
          min: 0,
          max:45,
          tickAmount: 5,
          title: {
            // text: "Website Blog"
          },
          labels: {
            style: {
              colors: ['#8F9AAF']
            }
          }
        },
      ],
      fill: {
        opacity: 1,
        colors: ['#606C81']
      },
      tooltip : {  enabled : true }

    };
  }


}
