"use client";

import "@flows/react-components/index.css";

import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";
import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import {
  BooleanTest,
  NumberTest,
  SelectTest,
  SlotableBanner,
  StringTest,
} from "components/flows-components";
import { type FC, type FormEvent, type ReactNode, useState } from "react";
import { Button, Input, Label, Text } from "ui";

type Config = {
  organizationId: string;
  environment: string;
  userId: string;
  apiUrl?: string;
  userProperties?: Record<string, string | number | boolean | null | Date | undefined>;
};

type Props = {
  children?: ReactNode;
};
export const ConfigProvider: FC<Props> = ({ children }) => {
  const [config, setConfig] = useState<Config>();

  if (config)
    return (
      <FlowsProvider
        {...config}
        components={{
          ...components,
          StringTest,
          NumberTest,
          BooleanTest,
          SelectTest,
          SlotableBanner,
        }}
        tourComponents={{ ...tourComponents }}
      >
        {children}
      </FlowsProvider>
    );

  return <ConfigForm onSubmit={setConfig} />;
};

type ConfigFormProps = {
  onSubmit: (config: Config) => void;
};
const ConfigForm: FC<ConfigFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSubmit(JSON.parse(value) as Config);
  };

  const placeholder = `{
  "organizationId": "your-org-id",
  "environment": "your-env",
  "apiUrl": "https://api.flows-cloud.com",
  "userId": "your-user-id",
  
  // Optional
  "userProperties": {
    "your-property": "your-value"
  }
}`;

  return (
    <Box layerStyle="card" p="space24" my="space120" mx="auto" maxWidth={800}>
      <Text variant="titleL">E2E demo</Text>
      <Text mb="space12">
        This demo is used in our end-to-end tests to verify that Flows works as expected in a real
        app. It dynamically loads desired Flows organization based on the config you provide.
      </Text>
      <Label htmlFor="config-input">Enter config:</Label>
      <form onSubmit={handleSubmit}>
        <Input
          id="config-input"
          inputClassName={css({ height: "unset!", fontFamily: "monospace" })}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          asChild
          placeholder={placeholder}
        >
          <textarea rows={12} />
        </Input>
        <Button mt="space8" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
