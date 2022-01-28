import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from 'react-apexcharts'

interface ChartProps{
    coinId:string;
}

interface IHistorical{
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low:number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart({coinId}:ChartProps){
    const {isLoading,data}=useQuery<IHistorical[]>(["ohlcv",coinId],()=>fetchCoinHistory(coinId));
    return (
        <div>
        {isLoading? "Loading Chart...":
        <ApexChart
            type={"line"}
            series={[{name:'Price',data: data?.map(price=>price.close)}]}
            options={{
                theme:{
                    mode:"dark"
                },
                chart:{
                    height:300,
                    width:300,
                    toolbar:{show:false},
                    background:'transparent'
                },
                grid:{
                    show:false
                },
                yaxis:{
                    show:false
                },
                xaxis:{
                  labels:{
                      show:false
                  },
                    axisTicks:{
                      show:false
                    },
                    axisBorder:{
                      show:false
                    },
                    type:"datetime",
                    categories:data?.map(item=> item.time_close),
                },
                stroke:{
                    curve:"smooth",
                    width: 4,
                },
                fill:{
                    type:"gradient",
                    gradient:{gradientToColors:["#839fa8"], stops:[0,100]}
                },
                colors:["#d85179"],
                tooltip:{
                    y:{
                        formatter:(value)=>`$ ${value.toFixed(2)}`
                    }
                }
            }}/>}
        </div>);
}

export default Chart;
