"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC, Suspense } from "react";

export default function NewProject() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}

const Content: FC = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:py-10">
      <Link href="/" className="mb-4 flex items-center gap-2 text-muted-foreground">
        <ArrowLeft size={16} />
        <p>Home</p>
      </Link>
      <h1 className="mb-4 text-2xl font-bold text-foreground">{name}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Configure your project</CardTitle>
        </CardHeader>
        <CardContent>
          <div id="framework">
            <Label>Framework</Label>
            <ToggleGroup variant="outline" className="mt-1 justify-start" type="single">
              <ToggleGroupItem className="framework" value="1">
                React
              </ToggleGroupItem>
              <ToggleGroupItem className="framework" value="2">
                JavaScript
              </ToggleGroupItem>

              <ToggleGroupItem className="framework" value="5">
                Other
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div id="options">
            <p className="mt-4 font-semibold">Options</p>
            <div className="mt-2 flex items-center gap-2">
              <Checkbox id="hide-source-code" />
              <Label htmlFor="hide-source-code">Hide source code from published project</Label>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Checkbox id="inspect-build-logs" />
              <Label htmlFor="inspect-build-logs">Allow viewers to inspect build logs</Label>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Checkbox id="download-project" />
              <Label htmlFor="download-project">
                Allow viewers to download the project
                <span className="ml-1 text-muted-foreground">(coming soon)</span>
              </Label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button id="save">Save project</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
