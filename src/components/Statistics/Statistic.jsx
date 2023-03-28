import { Label, Percentage } from './Statistic.styled';

export const Statistic = ({ statistic }) => {
    const { label, percentage } = statistic;

    return (
        <>
            <Label className="label">{label}</Label>
            <Percentage className="percentage">{percentage}%</Percentage>
        </>
    );
};

