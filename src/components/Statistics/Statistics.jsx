import { Statistic } from "./Statistic";
import { Wrapper, StatList, Title, StatItem } from "./Statistics.styled";
import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
    
    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(statistic => (
                    <StatItem key={statistic.id}>
                        <Statistic statistic={statistic}/>
                    </StatItem>
                ))}
            </StatList>
        </Wrapper>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
};