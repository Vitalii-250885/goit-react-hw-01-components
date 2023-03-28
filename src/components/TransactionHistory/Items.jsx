import PropTypes from "prop-types";
import { Td, Tr } from "./Items.styled";

export const Items = ({ items }) => {
    return (
        <>
            {items.map(item => (
                <Tr key={item.id} odd={item.type === "payment"}>
                    <Td>{item.type}</Td>
                    <Td>{item.amount}</Td>
                    <Td>{item.currency}</Td>
                </Tr>
            ))}
        </>
    );
};

Items.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
};