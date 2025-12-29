import { Action, StateMemory } from "@flows/react";
import { useEmbedParam } from "../providers/example-info";
import { Button } from "../ui/button";
import Link from "next/link";

type ActionButtonProps = Action & {
  variant: "primary" | "secondary";
  completed?: StateMemory;
};

export const ActionButton = ({
  label,
  callAction,
  url,
  openInNew,
  variant,
  completed,
}: ActionButtonProps) => {
  // If no label is provided, do not render the button
  if (!label) return null;

  // Add embed param to buttonUrl if it exists (only needed for the example app)
  const embed = useEmbedParam();
  const embedButtonUrl = url ? (embed ? `/embed${url}` : url) : undefined;

  // Check if the memory is manual
  const isManualMemory = completed?.triggers.some((trigger) => trigger.type === "manual");

  // When the button is clicked, set the memory to true if it's manual otherwise call the callAction handler
  const handleButtonClick = () => {
    if (isManualMemory && variant === "primary" && completed) {
      completed.setValue(true);
    }
    if (callAction) {
      callAction();
    }
  };

  return (
    <Button
      size="xs"
      variant={variant === "primary" ? "default" : "outline"}
      asChild={!!url}
      onClick={handleButtonClick}
    >
      <SmartLink url={embedButtonUrl} openInNew={openInNew}>
        {label}
      </SmartLink>
    </Button>
  );
};

type SmartLinkProps = Pick<Action, "url" | "openInNew"> & {
  children: React.ReactNode;
};

const SmartLink = ({ url, openInNew, children, ...rest }: SmartLinkProps) => {
  if (!url) return <>{children}</>;

  if (openInNew) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={url} {...rest}>
      {children}
    </Link>
  );
};
