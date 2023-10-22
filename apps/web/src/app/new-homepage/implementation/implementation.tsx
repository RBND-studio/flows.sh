"use client";

import { css } from "@flows/styled-system/css";
import type { ReactElement } from "react";
import React, { useState } from "react";
import { Text } from "ui";

import type { SwitcherVariant } from "./switcher";
import Switcher, { variants } from "./switcher";

const Implementation = (): ReactElement => {
  const [type, setType] = useState("No-Code");
  return (
    <div
      className={css({
        width: "100%",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "border",
        paddingX: "space24",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "space64",
          alignItems: "center",
          paddingY: "space120",
          maxWidth: "1100px",
          marginX: "auto",
        })}
      >
        <div
          className={css({
            maxWidth: "728px",
            marginX: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "space24",
            alignItems: "center",
          })}
        >
          <Text align="center" as="h2" variant="titleL">
            No-Code or In-Code
          </Text>
          <Text
            align="center"
            className={css({
              maxWidth: "542px",
            })}
            color="muted"
            variant="bodyL"
          >
            Prefer quick iteration detached from deploys or want to keep things stable? You can do
            both with Flows.
          </Text>
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              padding: "space4",
              background: "bg.subtle",
              borderRadius: "28px",
            })}
          >
            {Object.keys(variants).map((codeType) => (
              <button
                className={css({
                  paddingY: "space12",
                  paddingX: "space24",
                  borderRadius: "24px",
                  background: codeType === type ? "bg" : "transparent",
                  color: codeType === type ? "text.primary" : "text",
                  fontWeight: "bold",
                  cursor: "pointer",
                  "&:hover": {
                    color: codeType === type ? "text.primary" : "text.subtle",
                  },
                  transition: "all 120ms ease-in-out",
                })}
                key={codeType}
                onClick={() => {
                  setType(codeType);
                }}
                type="button"
              >
                {variants[codeType]}
              </button>
            ))}
          </div>
        </div>
        <Switcher variant={type as SwitcherVariant} />
      </div>
    </div>
  );
};

export default Implementation;
