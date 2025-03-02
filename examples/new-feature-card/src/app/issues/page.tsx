import Link from "next/link";

export default function Issues() {
  return (
    <>
      {/* To see how the NewFeatureCard is inserted into the sidebar, check out the Sidebar component */}
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-1 rounded-lg border bg-white p-3 dark:bg-neutral-900">
        <p className="text-lg font-semibold">Issues page</p>
        <p className="mb-4 text-center text-muted-foreground">
          The announcement card in the sidebar is closed when user clicks on it and is navigated to
          this page.
        </p>
        <Link className="underline" href="/">
          Go back to Home
        </Link>
      </div>
    </>
  );
}
