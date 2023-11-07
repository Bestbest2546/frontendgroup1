import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [d, setD] = useState(null);
  const [formData, setFormData] = useState({
    year: "2023",
    month: "",
    day: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://co2api.thetigerteamacademy.net/predict",
        formData
      );
      const numbersArray = response.data[0];



      setA(numbersArray[0]);
      setB(numbersArray[1]);
      setC(numbersArray[2]);
      setD(numbersArray[3]);
      setResponseMessage(`Response received: ${JSON.stringify(numbersArray)}`);
    } catch (error) {
      setResponseMessage("There was an error!");
    }
  };

  function numberToColorIntensity(number, min, max) {
    const intensity = (number - min) / (max - min);
    const alpha = Math.max(0, Math.min(1, intensity));
    return `rgba(188, 6,  ${alpha}, ${alpha})`;
  }

  const numbera = `${a}`;
  const numberb = `${b}`;
  const numberc = `${c}`;
  const numberd = `${d}`;

  const colora = numberToColorIntensity(numbera, 0, 3);
  const colorb = numberToColorIntensity(numberb, 0, 3);
  const colorc = numberToColorIntensity(numberc, 0, 3);
  const colord = numberToColorIntensity(numberd, 0, 3);

  return (
    <main className="container">
      <div className="header">
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <div style={{marginLeft:'10px'}}>
            <span>Logo</span>
          </div>
          <div style={{marginRight:'10px'}}>
            <span>Thailand Co2 predict icon</span>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <svg
          width="700"
          height="700"
          viewBox="0 0 700 1350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M172.5 850L196 848.5L201 854.5V859.5L192.5 866.5L182 879L174.5 887L178.5 896L180 904.5L174.5 912V920H169.5V928V946L163.5 954.5L169.5 963.5L172 979.5L180 986.5L174.5 996V1003.5L185.5 1007.5L201 1000L211 993L228.5 996L233 1007.5L234.5 1021L236.5 1043.5L239 1058L247.5 1066.5H257.5L264.5 1074.5L266.5 1083.5L272 1110L276.5 1133L281.5 1154.5L283.5 1171L296 1181L306 1196.5L332 1215.5L344 1211L352 1206H363L378.5 1214L388.5 1229.5L403 1246.5L427.5 1263.5L431 1278L424 1285L418 1292V1300L411.5 1308L403 1316L388.5 1314L382.5 1300L368.5 1302L358 1310.5L352 1322L344 1327.5L334.5 1320.5L327.5 1312V1302L334.5 1294.5V1276V1270L327.5 1274L316.5 1276L310 1254.5L290.5 1252.5L272 1245L266.5 1231.5H261L257 1243L254.5 1254.5L248 1252.5L228 1226.5L208.5 1204.5L211 1192L200 1185.5L190 1179.5L180 1161.5L174.5 1148.5L165.5 1144.5V1161.5L160 1164.5L151.5 1154.5V1135.5L146.5 1116H139L128.5 1108.5L122.5 1100.5V1124.5H112L109 1113.5L104 1122.5V1129.5L96.5 1137.5L87.5 1140.5L84.5 1118.5L83 1094V1082L79 1068.5L81 1045.5L87.5 1040.5L83 1032.5V1003.5L92.5 1000L94.5 994L99 990V975.5L104 963.5L108.5 945L134 896V870.5L155 852L164.5 845L167 848.5L172.5 850Z"
            fill={colora}
            stroke="black"
          />
          <path
            d="M126.5 439L112 432.5V455.5L106.5 456.5L99.5 465L87.5 462.5L79 473.5V484.5L84 492.5L87.5 509.5L99.5 528L114 545L131 562.5L150.5 586.5L163.5 601.5L166 626V647.5L160 651.5L157.5 664.5L166 669.5L167 687.5L186.5 706V719.5L189.5 734.5L196 741L199 754L201 763L207 767.5L206 779L201 786L193 794.5L184 811L175.5 822.5L166 836.5V848L172.5 850L196 848V836.5L204 833V815L211 803.5L216.5 789.5L224.5 781L229 760.5L243 745.5V728.5L240 719.5V708.5V693L247 677.5L252 664.5L247 651.5L240 643.5L245 637.5L256.5 631L271.5 628.5L285.5 623L294 617.5L301 626H316L324 633.5L322 643.5V651.5L316 659.5L322 667.5L316 672.5V677.5L320 686.5L312.5 691L316 704.5L328.5 710.5L336 702.5L345.5 699L355.5 702.5L365.5 708.5L381.5 702.5L399 699L412 710.5L432.5 719.5L435.5 732.5L437.5 745.5L448.5 760.5L461 763L459 754L470 756.5L476.5 750.5L480.5 756.5L483.5 766L491.5 776.5L496 789.5L503 799.5L505.5 789.5L501 773.5L491.5 754L483.5 739L487.5 732.5L491.5 725L489 717L468 699V683L462.5 664.5L454 651.5V623L470 621L474 617.5L468 612.5L474 606.5L485 600L493 585L502.5 573V564H495H487.5L468 566.5H448.5H430.5L416.5 557.5L418 553L416.5 546.5H407.5L400 550H391.5L380.5 540H364.5L347.5 533V517L357 514.5L368 507.5L373.5 496.5L368 488L366 473.5V456.5L364.5 442.5H359.5L357 456.5L350 459.5H332L320 448.5L316.5 439L309.5 448.5L300.5 459.5L287.5 476L280 479.5L273 476L262.5 459.5L246 450.5L236.5 443L235.5 434.5L220.5 432.5L210.5 434.5L197.5 442.5L195.5 439L189.5 434.5L184 430L176 426L165 421.5L162 426V434.5L159 437L153.5 442.5L158 450.5V459.5L156.5 470H150.5L143.5 465L140.5 455.5L135.5 454L132 448.5L128.5 446.5L126.5 439Z"
            fill={colorb}
            stroke="black"
          />
          <path
            d="M317.5 267.5L330 259.5L341 267.5L350.5 264.5L359.5 255L375 244.5L379 232L394 225L397.5 218L406.5 219.5L414 213.5L421 203H432L434 208.5L448 215.5L471.5 225L473.5 236.5H481.5L488 232L497.5 225H517V213.5L523.5 208.5L527.5 196.5L531.5 182.5L539 180L555.5 182.5L562.5 187.5L579 190L587.5 194L595.5 190L602.5 196.5L607 206.5L613 218L618.5 225L621 236.5H628.5L635 246.5L647.5 256L663 269.5L670 277.5L672.5 287L670 299L666.5 312.5L663 343L666.5 357H672.5L680 370.5L690 380.5L692.5 392L706.5 394.5L719 397.5L723 402L719 410.5L723 415.5L737.5 424L743.5 432.5L740.5 442V450.5L733 456.5L737.5 459L733 466L730.5 476L733 484L743.5 490L737.5 495L733 504L730.5 515L737.5 527L733 533.5L713.5 549.5L702 560H692.5L683.5 549.5L676 542.5H652L641.5 549.5H631L621 542.5L608 551.5L592 553.5L584.5 549.5L573.5 542.5L564 540.5L553 546L546.5 549.5H514L505 564H495L468.5 566.5H451H431L416.5 557L418.5 553.5L416.5 546H408L399.5 549.5H392L380.5 540.5H364.5L347.5 533V517.5L356.5 514.5L368.5 507.5L373.5 496.5L368.5 487.5L366 472V458L364.5 442H359.5L356.5 457L350 460H332.5L319.5 448.5L317.5 437L316 423.5L311 410.5L306.5 400.5L301 397V392.5L309 387.5L301 373L306.5 368L314.5 365.5L319.5 349L327.5 342L324 335.5V328.5L336.5 322V308.5L338.5 295.5V287L332.5 282.5H324V276.5L317.5 267.5Z"
            fill={colorc}
            stroke="black"
          />
          <path
            d="M317 267L330 259V242H334.5V233H342.5L347 221.5V192.5V186.5L340.5 184V174.5L347 169.5L354.5 166.5V157V144L360.5 133V122.5L354.5 117L351.5 104.5L349 96L356.5 94V82L349 77.5L337.5 76L318 77.5L312.5 82L311 86.5L306.5 88V83.5H297L293 88H288.5L285.5 77.5L279 70.5V67L284 62L290 52.5L297 45V29.5L295 24H287L282.5 20L279 15L276 9.5L272 4.5L263 6L257 11L255 18.5L249.5 20V9.5L244.5 6L239.5 0.5H229.5L227.5 4.5L222.5 9.5L218 12.5L211 11L204.5 9.5L196 7.5L192 4.5L187.5 11L193.5 15L196 24L200 28L193.5 31H164.5L156.5 33.5L152 39.5V49.5V60H144H131L121 64.5L115.5 69H85L80.5 64.5L74.5 60L69 56.5H60.5V70.5L56.5 76L48.5 79L44 81.5V94H41V99L39.5 109.5L44 112.5V122.5L39.5 128L32 133.5L29 140L36 144L39.5 146.5V170H29L25.5 172.5L18.5 175L11.5 172.5L10 165.5H4L1 170V176L8 185.5L11.5 194.5L14 201L19 199.5L24 194.5L25.5 199.5L29 204.5L32 209.5L34.5 217L38 223L34.5 227L32 230.5L34.5 236.5L38 246L44 252L52 257.5L58.5 267L67.5 275.5L71.5 283.5L78 288L82 296L86.5 298L88 308.5H98L102.5 311.5L107 318.5V329L102.5 333L107 342.5L111.5 346L118 357V373L124 376L132 370.5L138 364L143.5 368V376L140.5 382L138 387.5L132 390.5L124 387.5L118 392.5L111.5 395.5L114.5 406.5V415L111.5 421.5V432L120 437L126 439.5L128.5 446.5L132 448L135 453.5L140.5 455.5L143.5 464.5L150.5 469.5H156L157.5 459.5V455.5V451L156 448L153.5 442.5L157.5 437L162 435V425.5L166 421.5L176 425.5L186 432L197.5 442.5L210 435L221 432L235 435L237 442.5L246.5 451L262 459.5L273 476.5L280 479.5L288 476.5L300.5 459.5L311.5 446.5L317 437V428L311.5 411L306 400.5L300.5 397.5V392.5L303.5 390.5L309 387.5L306 382L303.5 378L300.5 373L306 368L314.5 366L317 357L319.5 348L327.5 342.5L324 336V329L336 322V309.5L338.5 294.5V287L332.5 283H324V276.5L317 267Z"
            fill={colord}
            stroke="black"
          />
        </svg>
      </div>
      <div className="content">
        {/* {" "}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Years" variant="outlined" />
        </Box> */}
        <div style={{}}>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Year"
              style={{
                color: "black",
                border: "1px solid gray",
                padding: "10px",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <input
              type="number"
              name="month"
              value={formData.month}
              onChange={handleChange}
              placeholder="Month"
              style={{
                color: "black",
                border: "1px solid gray",
                padding: "10px",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <input
              type="number"
              name="day"
              value={formData.day}
              onChange={handleChange}
              placeholder="Day"
              style={{
                color: "black",
                border: "1px solid gray",
                padding: "10px",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <button type="submit">Predict</button>
          </form>
          <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <p>C: {c}</p>
            <p>D: {d}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
