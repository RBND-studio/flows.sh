import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import { type FC, useEffect } from "react";

const generateVisitorId = async (): Promise<string> => {
  const load = (await import("@fingerprintjs/fingerprintjs")).load;
  // Initialize the agent
  const fp = await load();
  // Get the visitor identifier
  const result = await fp.get();
  return result.visitorId;
};

const setAffiliateCookie = async (affiliateCode: string): Promise<void> => {
  // Send click track event to LemonSqueezy - this is reverse engineered from https://lmsqueezy.com/affiliate.js because we don't want to use 3rd party scripts
  await fetch("https://app.lemonsqueezy.com/affiliates/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      store: "flows-sh",
      url: window.location.href,
      referrer: document.referrer,
      affiliate_ref: affiliateCode,
      visitor_id: await generateVisitorId(),
    }),
  })
    .then((res) => res.json())
    .then((data: { click?: string }) => {
      // The lemonsqueezy affiliate click ID is stored in a cookie
      if (data.click) {
        Cookies.set("flows_affiliate", data.click, {
          // 90 days
          expires: 90,
          secure: true,
          domain: `.${window.location.hostname}`,
        });
      }
    })
    .catch(() => {
      // Empty catch block to avoid uncaught promise rejection
    });
};

export const Affiliate: FC = () => {
  const searchParams = useSearchParams();
  const affiliateCode = searchParams.get("aff");

  useEffect(() => {
    if (!affiliateCode) return;

    void setAffiliateCookie(affiliateCode);
  }, [affiliateCode]);

  return null;
};
