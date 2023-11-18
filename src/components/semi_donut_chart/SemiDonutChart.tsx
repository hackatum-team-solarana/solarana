import ReactApexChart from "react-apexcharts";

interface ProfitNInvest {
    profit: number;
    invest: number;
}

function SemiDonutChart(props: ProfitNInvest) {
    const {profit, invest} = props;

    const state = {
        series: [profit, invest],
        options: {
            chart: {
                type: 'donut',
            },
            labels: ["Profit", "Invest"],
            colors: ['#008f83', '#990040'],
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                    offsetY: 10
                }
            },
            grid: {
                padding: {
                    bottom: -80
                }
            },
            legend: {
                show: false,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 500
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return (<div id="chart" style={{width: "800px"}}><ReactApexChart options={state.options} series={state.series}
                                                                     type="donut"/>
        </div>
    );
}

export default SemiDonutChart;