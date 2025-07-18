const calculateSum = (req, res) => {
  const bodyChunck = [];
  req.on("data", (chunk) => {
    bodyChunck.push(chunk);
  });

  req.on("end", () => {
    const fullBody = Buffer.concat(bodyChunck).toString();
    const param = new URLSearchParams(fullBody);
    // const firstValue = Number(param.get("first-number"));
    // const secondValue = Number(param.get("second-number"));
    // console.log(firstValue + secondValue);
    const bodyObj = Object.fromEntries(param);
    const result =
      Number(bodyObj["first-number"]) + Number(bodyObj["second-number"]);
    console.log(result);
  });
  res.end();
};

module.exports = calculateSum;
