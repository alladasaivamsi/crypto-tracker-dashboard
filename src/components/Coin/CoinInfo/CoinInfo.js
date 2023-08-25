import React, {useState} from 'react'
import "./CoinInfo.css";

const CoinInfo = ({heading,desc}) => {
  const [flag , setFlag] = useState(false);
  
  const shortDesc =
    desc.length > 400
      ? desc.slice(0, 400) +
        "<p style='color:var(--grey); cursor:pointer;'>Read More...</p>"
      : desc;

  const longDesc =
    desc.length > 400
      ? desc + "<p style='color:var(--grey);cursor:pointer;'>Read Less...</p>"
      : desc;


  return (
    <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
      <h2 className="coin-info-heading">{heading}</h2>
      <p
        onClick={() => {
          desc.length > 400 && setFlag(!flag);
        }}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: flag ? longDesc : shortDesc }}
      />
    </div>
  );
}

export default CoinInfo;