import usa from "../images/USD.png";
import korea from "../images/KRW.png";
import euro from "../images/EUR.png";
import jpy from "../images/JPY.png";
import france from "../images/CHF.png";
import canada from "../images/CAD.png";
import aud from "../images/AUD.png";
import africa from "../images/ZAR.png";
import sweden from "../images/SEK.png";
import brazil from "../images/BRL.png";

export default function ImageTwo({ flag }) {
  const flags = {
    USD: usa,
    KRW: korea,
    EUR: euro,
    JPY: jpy,
    CHF: france,
    CAD: canada,
    AUD: aud,
    ZAR: africa,
    SEK: sweden,
    BRL: brazil,
  };
  return <img src={flags[flag]} className="second-flag" />;

  //   <img src={`./images/${flag}.svg`} />;
}
