import styles from "./ListRow.module.css";

const ListCell = ({ children, onClickq ,row}) => {
  const sample = (row)=>{ 
    onClickq(row)
  }
  return <tr className={styles.cell}
  onClick={()=>sample(row)}>{children}</tr>;
};

export default ListCell;