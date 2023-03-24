import { Wrapper, StatLabel, StatQuantity, StatsItem } from "./Stats.styles"

export const Stats = ({ followers, views, likes }) => {
    return (
        <Wrapper className="stats">
            <StatsItem>
            <StatLabel className="label">Followers</StatLabel>
            <StatQuantity className="quantity">{followers}</StatQuantity>
            </StatsItem>
            <StatsItem>
            <StatLabel className="label">Views</StatLabel>
            <StatQuantity className="quantity">{views}</StatQuantity>
            </StatsItem>
            <StatsItem>
            <StatLabel className="label">Likes</StatLabel>
            <StatQuantity className="quantity">{likes}</StatQuantity>
            </StatsItem>
        </Wrapper>
    );
};