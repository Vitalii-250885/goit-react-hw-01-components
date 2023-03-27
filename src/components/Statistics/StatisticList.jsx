import { Statistic } from "./Statistic";
import { Wrapper, StatList, Title, StatItem } from "./StatisticList.styled";

export const StatisticList = ({statistics}) => {
    
    return (
        <Wrapper>
            <Title>UPLOAD STATS</Title>
            <StatList>
                {statistics.map(statistic => (
                    <StatItem key={statistic.id}>
                        <Statistic statistic={statistic}/>
                    </StatItem>
                ))}
            </StatList>
        </Wrapper>
    );
    
};