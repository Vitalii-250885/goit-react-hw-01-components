import { Items } from "./Items";
import { Table, Thead, Th } from "./TransactionHistory.styled";

export const TransactionHistory = ({ transactions }) => {
    

    return (
        <Table className="transaction-history">
            <Thead>
                <tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </tr>
            </Thead>

            <tbody>
                <Items items={transactions} />
            </tbody>
        </Table>
    );
};