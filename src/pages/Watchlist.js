import React, { useEffect, useState } from "react";
import Loader from "../components/Common/Loader/Loader";
import Header from "../components/Common/Header/Header";
import Button from "../components/Common/Button/Button";
import TabsComponent from "../components/Dashboard/Tabs/Tabs";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/Common/Footer/Footer";

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const allCoins = await get100Coins();
    if (coins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length === 0 || !coins ? (
            <div>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the WatchList
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="/dashboard">
                  <Button text={"Dashboard"} />
                </a>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
              <Footer />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;;