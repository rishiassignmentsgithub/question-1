import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import { v4 as uuidv4 } from 'uuid';
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({rows,currency,onRowClick}) => {
  
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>{`Order Volume / ${currency}`}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow key={uuidv4()} onClickq={onRowClick} row= {row}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;