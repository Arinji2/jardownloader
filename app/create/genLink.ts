export default function genLink({
  name,
  version,
}: {
  name: string;
  version: string;
}) {
  let link = "";
  if (version === "0" && name === "PREMIUM") link = "0";
  else if (version === "0" && name === "EXTREME") link = "4";
  else if (version === "1" && name === "PREMIUM") link = "5";
  else if (version === "1" && name === "EXTREME") link = "6";
  else if (version === "2" && name === "PREMIUM") link = "8";
  else if (version === "2" && name === "EXTREME") link = "7";
  else if (version === "3" && name === "PREMIUM") link = "9";
  else if (version === "3" && name === "EXTREME") link = "10";
  else if (version === "4" && name === "PREMIUM") link = "12";
  else if (version === "4" && name === "EXTREME") link = "11";
  else link = "12";

  return link;
}
