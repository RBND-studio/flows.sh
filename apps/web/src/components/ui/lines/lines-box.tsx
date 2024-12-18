import { cva } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import type { JSX } from "react";

export const LinesBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <Box
      m="space40"
      borderColor="newBorder.neutral"
      borderWidth="1px"
      position="relative"
      className={className}
      lgDown={{
        m: "space24",
      }}
      mdDown={{
        m: "0",
        borderWidth: "0",
      }}
    >
      {children}
      <div className={newCorner({ variant: "topLeft" })} />
      <div className={newCorner({ variant: "topRight" })} />
      <div className={newCorner({ variant: "bottomRight" })} />
      <div className={newCorner({ variant: "bottomLeft" })} />
    </Box>
  );
};

export const newCorner = cva({
  base: {
    position: "absolute",
    _before: {
      content: '""',
      position: "absolute",
    },
    _after: {
      content: '""',
      position: "absolute",
    },
  },
  variants: {
    variant: {
      topRight: {
        top: 0,
        right: 0,
        _before: {
          top: "-1px",
          width: "40px",
          right: "-40px",
          height: "1px",
          background: "newBorder.neutral.muted",
          lgDown: {
            width: "24px",
            right: "-24px",
          },
          mdDown: {
            display: "none",
            width: "0px",
            right: "-0px",
          },
        },
        _after: {
          top: "-40px",
          height: "40px",
          right: "-1px",
          width: "1px",
          background: "newBorder.neutral.muted",
          lgDown: {
            height: "24px",
            top: "-24px",
          },
          mdDown: {
            display: "none",
            height: "0px",
            top: "-0px",
          },
        },
      },
      topLeft: {
        top: 0,
        left: 0,
        _before: {
          top: "-1px",
          width: "40px",
          left: "-40px",
          height: "1px",
          background: "newBorder.neutral.muted",
          lgDown: {
            width: "24px",
            left: "-24px",
          },
          mdDown: {
            display: "none",
            width: "0px",
            left: "-0px",
          },
        },
        _after: {
          top: "-40px",
          height: "40px",
          left: "-1px",
          width: "1px",
          background: "newBorder.neutral.muted",
          lgDown: {
            height: "24px",
            top: "-24px",
          },
          mdDown: {
            display: "none",
            height: "0px",
            top: "-0px",
          },
        },
      },
      bottomRight: {
        bottom: 0,
        right: 0,
        _before: {
          bottom: "-1px",
          width: "40px",
          right: "-40px",
          height: "1px",
          background: "newBorder.neutral.muted",
          lgDown: {
            width: "24px",
            right: "-24px",
          },
          mdDown: {
            display: "none",
            width: "0px",
            right: "-0px",
          },
        },
        _after: {
          bottom: "-40px",
          height: "40px",
          right: "-1px",
          width: "1px",
          background: "newBorder.neutral.muted",
          lgDown: {
            height: "24px",
            bottom: "-24px",
          },
          mdDown: {
            display: "none",
            height: "0px",
            bottom: "-0px",
          },
        },
      },
      bottomLeft: {
        bottom: 0,
        left: 0,
        _before: {
          bottom: "-1px",
          width: "40px",
          left: "-40px",
          height: "1px",
          background: "newBorder.neutral.muted",
          lgDown: {
            width: "24px",
            left: "-24px",
          },
          mdDown: {
            display: "none",
            width: "0px",
            left: "-0px",
          },
        },
        _after: {
          bottom: "-40px",
          height: "40px",
          left: "-1px",
          width: "1px",
          background: "newBorder.neutral.muted",
          lgDown: {
            height: "24px",
            bottom: "-24px",
          },
          mdDown: {
            display: "none",
            height: "0px",
            bottom: "-0px",
          },
        },
      },
    },
  },
});
