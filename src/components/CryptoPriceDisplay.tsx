import { useMemo } from "react";
import { useCryptoStore } from "../store";

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const hasResult = useMemo(
    () => !Object.values(result).includes(""),
    [result]
  );
  return (
    <div className="result-wrapper">
      {hasResult && (
        <>
          <h2>Quote</h2>
          <div className="result">
            <div className="img-container">
                <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="cryptocurrency image"
                />
            </div>
            <div className="details">
              <p>
                The Price is: <span>{result.PRICE}</span>
              </p>
              <p>
                Highday Price: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                Lowday Price: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Change in 24 Hours: <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Last update: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
