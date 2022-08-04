import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  name = 'Angular   6';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.canvas.width = 600;
    this.ctx.canvas.height = 400;

    let myChart = new Chart(this.ctx, {
      type: 'line',

      data: {
        datasets: [
          {
            label: '',
            backgroundColor: 'pink',
            borderColor:  'blue',
            data: [
              { x: 2.000, y: 100 },
              { x: 0.850, y: 97 },
              { x: 0.600, y: 96 },
              { x: 0.425, y: 93 },
              { x: 0.300, y: 91 },
              { x: 0.150, y: 82 },
              { x: 0.075, y: 71 },
              { x: 0.051, y: 63 },
              { x: 0.036, y: 61 },
              { x: 0.026, y: 61 },
              { x: 0.018, y: 59 },
              { x: 0.013, y: 59 },
              { x: 0.009, y: 57 },
              { x: 0.007, y: 57 },
              { x: 0.005, y: 55 },
              { x: 0.003, y: 49 },
              { x: 0.002, y: 47 },
              { x: 0.001, y: 43 },
            ],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: '',
        },
        scales: {
          xAxes: [
            {
              type: 'logarithmic',
              position: 'top',
              ticks: {
                stepSize: 10,
              
                userCallback: function (tick) {
                  if (tick >= 10) {
                    return (tick /1).toString() + '.0';
                  }
                  return tick.toString() + '';
                },
                min:  0.001,
                max: 10,
              },
              scaleLabel: {
                labelString: 'Percent Size In Millimeters',
                display: true,
             


              },
            },
          ],
          yAxes: [
            {
              type: 'linear',
              ticks: {
                userCallback: function (tick) {
                  return tick.toString() + '';
                },
               
              min:0,
              max:100,
            

                
              },
              scaleLabel: {
                labelString: 'Percent Passing',
                display: true,
                stepSize: 10,
              
              },
            },
          ],
        },
      },
    });
  }
}
