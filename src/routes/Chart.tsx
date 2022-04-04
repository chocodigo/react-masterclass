import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";
import {useRecoilValue} from "recoil";
import {isDarkAtom} from "../atoms";

interface ChartProps {
    coinId: string;

}

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart({coinId}: ChartProps) {
    const isDark = useRecoilValue(isDarkAtom)
    const {isLoading, data} = useQuery<IHistorical[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        }
    );
    return (
        <div>
            {isLoading ? (
                "Loading Chart..."
            ) : (
                <ApexChart
                    type={"candlestick"}
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => {
                                return {
                                    x: price.time_close,
                                    y: [price.open, price.high, price.low, price.close],
                                };
                            }),
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isDark ? "dark" : "light",
                        },
                        chart: {
                            height: 300,
                            width: 300,
                            toolbar: {show: false},
                            background: "transparent",
                        },
                        grid: {
                            show: false,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            labels: {
                                show: false,
                            },
                            axisTicks: {
                                show: false,
                            },
                            axisBorder: {
                                show: false,
                            },
                            type: "datetime",
                            categories: data?.map((item) => item.time_close),
                        },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {gradientToColors: ["#839fa8"], stops: [0, 100]},
                        },
                        colors: ["#d85179"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$ ${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
