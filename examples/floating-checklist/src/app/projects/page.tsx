import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-1 rounded-lg border bg-white p-3 dark:bg-neutral-900">
        <p className="text-lg font-semibold">Project page</p>
        <p className="mb-4 text-center text-muted-foreground">
          The item is marked as completed when you clicked on the button.
        </p>
        <Link className="underline" href="/">
          Go back to Home
        </Link>
      </div>
    </>
  );
}
