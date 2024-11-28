"use client";

import "@flows/react-components/index.css";

import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";
import { css } from "@flows/styled-system/css";
import { type FC, type FormEvent, type ReactNode, useState } from "react";
import { Button, Input } from "ui";

type Config = {
  organizationId: string;
  environment: string;
  userId?: string;
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
        components={{ ...components }}
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

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="config-input"
        inputClassName={css({ height: "unset!", fontFamily: "monospace" })}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        asChild
      >
        <textarea rows={10} />
      </Input>
      <Button type="submit">Submit</Button>
    </form>
  );
};
