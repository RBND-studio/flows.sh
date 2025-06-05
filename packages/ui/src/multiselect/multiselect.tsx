"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import { Popover, PopoverContent, PopoverPortal, PopoverTrigger } from "@radix-ui/react-popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "cmdk";
import { Check16 } from "icons";
import { memo, type ReactNode, useCallback, useMemo, useState } from "react";

import { Badge } from "../badge";
import { Icon } from "../icon";
import { Input } from "../input";
import { Text } from "../text";

type Option = { value: string; label: ReactNode };

type Props = {
  options: Option[];
  placeholder: string;
  noResultsMessage: string;
  defaultValue: string[];
  onChange: (value: string[]) => void;
};

export const Multiselect = memo<Props>(function Multiselect({
  options,
  placeholder,
  defaultValue,
  onChange,
  noResultsMessage,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string[]>(defaultValue);

  const handleChange = useCallback(
    (changedValue: string) => {
      setValue((prev) => {
        const prevValueSet = new Set(prev);
        let newValue: string[];
        if (prevValueSet.has(changedValue))
          newValue = [...prevValueSet].filter((v) => v !== changedValue);
        else newValue = [...prevValueSet, changedValue];

        // Using setTimeout to avoid React error
        setTimeout(() => {
          onChange(newValue);
        }, 0);
        return newValue;
      });
    },
    [onChange],
  );

  const valueSet = useMemo(() => new Set(value), [value]);
  const buttonText = useMemo(() => {
    if (!valueSet.size)
      return (
        <Text variant="bodyS" py="1px" color="newFg.neutral.muted">
          {placeholder}
        </Text>
      );
    return options
      .filter((opt) => valueSet.has(opt.value))
      .map((v) => {
        return <Badge key={v.value}>{v.label}</Badge>;
      });
  }, [options, placeholder, valueSet]);

  return (
    <Popover modal open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          aria-controls="popover-content"
          type="button"
          className={css({
            py: "space4",
            my: "space4",
            px: "space8",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "newControl.border",
            bg: "newControl.bg",
            borderRadius: "radius6",
            display: "flex",
            flexWrap: "wrap",
            gap: "space4",
            cursor: "pointer",
            _hover: {
              borderColor: "newControl.border.hover",
            },
          })}
        >
          {buttonText}
        </button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          id="popover-content"
          className={css({
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "pane.border.elevated",
            backgroundColor: "pane.bg.elevated",
            boxShadow: "newL2",
            borderRadius: "radius8",
            zIndex: 10,
            maxHeight: "min(500px, var(--radix-popover-content-available-height))",
            display: "flex",
            flexDirection: "column",
            width: "var(--radix-popover-trigger-width)",
            overflow: "hidden",
            "&[data-state=open]": {
              animationName: "enter",
              animationDuration: "120ms",
            },
            "&[data-state=closed]": {
              animationName: "exit",
              animationDuration: "120ms",
            },
          })}
          sideOffset={4}
        >
          <Command
            className={css({
              height: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            })}
          >
            <Box p="space8" borderBottomWidth="1px" borderColor="pane.border.elevated">
              <CommandInput
                asChild
                className={css({
                  width: "100%",
                  "& input": { margin: 0 },
                })}
                placeholder="Search..."
              >
                <Input />
              </CommandInput>
            </Box>
            <CommandList
              className={css({ overflowY: "auto", scrollbarWidth: "thin", py: "space8" })}
              style={{ scrollbarColor: `${token.var("colors.pane.fg.scroll")} transparent` }}
            >
              <CommandEmpty>{noResultsMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((opt) => {
                  const checked = valueSet.has(opt.value);
                  return (
                    <Item checked={checked} option={opt} onChange={handleChange} key={opt.value} />
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
});

type ItemProps = {
  checked: boolean;
  option: Option;
  onChange: (value: string) => void;
};

const Item = memo<ItemProps>(function Item({ checked, onChange, option }) {
  return (
    <CommandItem
      data-state={checked ? "checked" : undefined}
      value={option.value}
      onSelect={onChange}
      className={css({
        display: "flex",
        alignItems: "center",
        pb: "space2",
        px: "space8",
        cursor: "default",
        _hover: {
          "& div": {
            backgroundColor: "newControl.bg.hover",
          },
        },
        "&[data-selected=true] div": {
          backgroundColor: "newControl.bg.hover",
        },
        "&[data-state=checked] div": {
          backgroundColor: "newControl.bg.selected",
        },
        "&[data-state=checked]": {
          _hover: {
            "& div": {
              backgroundColor: "newControl.bg.selected",
            },
          },
        },
        _last: {
          pb: 0,
        },
      })}
    >
      <Flex
        w="100%"
        borderRadius="radius6"
        gap="space6"
        pl="space4"
        pr="space8"
        py="space4"
        alignItems="center"
      >
        <Icon
          icon={Check16}
          color="newFg.primary"
          className={css({ opacity: !checked ? 0 : undefined })}
        />
        <Text as="span">{option.label}</Text>
      </Flex>
    </CommandItem>
  );
});
