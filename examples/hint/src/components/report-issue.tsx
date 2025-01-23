import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export const ReportIssue = () => {
  return (
    <Card id="card">
      <CardHeader>
        <CardTitle id="heading">Hint demo card</CardTitle>
        <CardDescription>Click on blinking dots to explore hints.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2" id="file">
            <Label htmlFor="type">File type</Label>
            <Select defaultValue="design">
              <SelectTrigger id="type" aria-label="Type">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="figjam">FigJam</SelectItem>
                <SelectItem value="prototype">Prototype</SelectItem>
                <SelectItem value="presentation">Presentation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description" id="description-label">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Please include all information relevant to your file."
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Submit</Button>
      </CardFooter>
    </Card>
  );
};
