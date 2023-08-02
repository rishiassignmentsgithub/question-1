import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";
import Card2 from "../component/card/Card2";

const Dashboard = () => {
   const [currency, setCurrency] = useState("EUR");
   const [searchText, setSearchText] = useState("");
   const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
   const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
   let ordersLength = mockData.results.length;

   const orders = mockData.results;
   const orderDates = timestamps.results;

   const mergedData = orders.map((order) => {
      const orderDateData = orderDates.find((item) => item['&id'] === order['&id']);
      return {
         ...order,
         timestamps: orderDateData ? orderDateData.timestamps : null,
      };
   });
   let filteredData = [];
   if (searchText !== "") {
      filteredData = mergedData.filter((item) =>
         item["&id"].includes(searchText)
      );
   }
   else filteredData = mergedData;

   const handleOrderClick = (row) => {
      setSelectedOrderDetails(row);
      setSelectedOrderTimeStamps(row)
   }

   return (
      <div>
         <div className={styles.header}>
            <HeaderTitle primaryTitle="Orders" secondaryTitle={`${ordersLength} orders`} />
            <div className={styles.actionBox}>
               <Search
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
               />
               <Dropdown
                  options={["GBP", "USD", "JPY", "EUR"]}
                  onChange={(e) => setCurrency(e.target.value)}
                  selectedItem={currency}
               />
            </div>
         </div>
         <div className={styles.content}>
            <div className={styles.section}>
               <Card
                  cardData={selectedOrderDetails}
                  title="Selected Order Details"
               />
               <Card2
                  cardData={selectedOrderTimeStamps}
                  title="Selected Order Timestamps"
               />
            </div>
            <List rows={filteredData} currency={currency} onRowClick={handleOrderClick} />
         </div>
      </div>
   );
};

export default Dashboard;
