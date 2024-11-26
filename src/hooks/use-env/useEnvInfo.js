import useSiteInfo from "@/recoils/siteInfo/useSiteInfo";
import { useEffect, useState } from "react";

const useEnvInfo = () => {
  const { siteInfo } = useSiteInfo();

  // url
  const [siteDomain, setSiteDomain] = useState("");

  // get Site Domain
  const getSiteDomain = (domain, mainDomain) => {
    if (domain !== mainDomain && mainDomain !== "")
      return `https://${mainDomain}`;

    switch (process.env.NEXT_PUBLIC_NODE_ENV) {
      case "local":
        return `https://${domain}.dev.qshop.ai`;
      case "development":
        return `https://${domain}.dev.qshop.ai`;
      case "stage":
        return `https://${domain}.stg.qshop.ai`;
      default:
        return `https://${domain}.qshop.ai`;
    }
  };

  useEffect(() => {
    setSiteDomain(getSiteDomain(siteInfo?.domain, siteInfo?.mainDomain));
  }, [siteInfo]);

  return { siteDomain, envInfo: process.env.NEXT_PUBLIC_NODE_ENV };
};

export default useEnvInfo;
