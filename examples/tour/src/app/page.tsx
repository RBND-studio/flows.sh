"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Cool project");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Card id="create-project">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Launch your new project with a single click.</CardDescription>
        </CardHeader>
        <CardContent>
          <Label>Project name</Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name of your project"
          />
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={`/new-project?name=${name}`}>Create project</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
