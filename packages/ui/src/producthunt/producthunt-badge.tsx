import { css } from "@flows/styled-system/css";
import { type ReactNode } from "react";

export const ProductHuntBadge = (): ReactNode => {
  return (
    <a
      href="https://www.producthunt.com/products/flows-4?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-flows&#0045;2&#0045;0&#0045;2"
      target="_blank"
      rel="noopener noreferrer"
      className={css({
        animation: "fadeIn 0.6s ease-out",
        opacity: 0,
        animationFillMode: "forwards",
      })}
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1044630&theme=light&t=1764599099786"
        alt="Flows&#0032;2&#0046;0 - The&#0032;better&#0032;way&#0032;to&#0032;build&#0032;product&#0032;adoption | Product Hunt"
        width="250"
        height="54"
        className={css({
          shadow: "antimetal",
          borderRadius: 10,
        })}
      />
    </a>
  );
};
