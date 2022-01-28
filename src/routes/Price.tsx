import styled from "styled-components";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
`;

const Ul = styled.ul`
  list-style: none;
`

interface PriceProps {
  priceData?: {
    ath_date: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };
}

function Price({ priceData }: PriceProps) {
  
  return <Overview>
    <Ul>

      <li>ath_date: {priceData?.ath_price}</li>
      <li>ath_price: {priceData?.market_cap}</li>
      <li>market_cap: {priceData?.market_cap_change_24h}</li>
      <li>market_cap_change_24h: {priceData?.percent_change_1h}</li>
      <li>percent_change_1h: {priceData?.percent_change_1y}</li>
      <li>percent_change_1y: {priceData?.percent_change_6h}</li>
      <li>percent_change_6h: {priceData?.percent_change_7d}</li>
      <li>percent_change_7d: {priceData?.percent_change_12h}</li>
      <li>percent_change_12h: {priceData?.percent_change_15m}</li>
      <li>percent_change_15m: {priceData?.percent_change_24h}</li>
      <li>percent_change_24h: {priceData?.percent_change_30d}</li>
      <li>percent_change_30d: {priceData?.percent_change_30m}</li>
      <li>percent_change_30m: {priceData?.percent_from_price_ath}</li>
      <li>percent_from_price_ath: {priceData?.price}</li>
      <li>price: {priceData?.volume_24h}</li>
      <li>volume_24h: {priceData?.volume_24h_change_24h}</li>
    </Ul>
  </Overview>;
}

export default Price;
