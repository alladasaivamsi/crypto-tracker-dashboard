import React, { useState } from "react";
import "./List.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { IconButton, Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import removeFromWatchlist from "../../../functions/removeFromWatchlist";
import AddToWatchlist from "../../../functions/AddToWatchist";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";

const List = ({ coin }) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <Tooltip title="Coin Logo">
          <td className="td-image">
            <img src={coin.image} className="coin-logo list-coin-logo" />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol list-coin-symbol">{coin.symbol}</p>
              <p className="coin-name list-coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip
          title="Price Change In 24Hrs"
          placement="bottom-start"
        ></Tooltip>
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <div className="price-chip list-price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="chip-flex">
            <div className="price-chip chip-red list-price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
        <Tooltip title="Current Price">
          <td>
            <h3
              className="coin-price td-center-align list-coin-price"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-end">
          <td>
            <p className="total_volume list_total_volume td-right-align td-total-volume">
              ${coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="desktop-td-mkt">
            <p className="total_volume td-right-align">
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="mobile-td-mkt">
            <p className="total_volume td-right-align">
              ${convertNumbers(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
        <td style={{ width: "fit-content" }}>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                AddToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
        </td>
      </tr>
    </Link>
  );
};

export default List;
