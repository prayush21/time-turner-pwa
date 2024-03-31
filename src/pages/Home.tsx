import React, { useState } from "react";
import {
  ChevronRightIcon,
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";

function Home() {
  const [value, setValue] = useState("24hrs");
  const [customValue, setCustomValue] = useState("");
  return (
    <div className=" max-w-md md:max-w-2xl flex flex-col m-auto p-10 gap-8">
      <div className="flex flex-col gap-2">
        <div className=" text-left text-2xl font-semibold">Enter a goal</div>
        <Input placeholder="you may enter any activity..." />
      </div>

      <div className="flex flex-col gap-2">
        <div className=" text-left text-2xl font-semibold">
          By when will you finish it?
        </div>
        {/* <ToggleGroup
          className="space-x-4"
          // value={value}
          // onValueChange={(value) => {
          //   console.log("val", value);

          //   setValue(value);
          // }}
          type="multiple"
        >
        <ToggleGroupItem className="min-w-max" value="24">
            24hrs
          </ToggleGroupItem>
          <ToggleGroupItem className="min-w-max" value="3">
            3days
          </ToggleGroupItem>
          <ToggleGroupItem className="min-w-max" value="2">
            2weeks
          </ToggleGroupItem>
          <ToggleGroupItem className="min-w-max" value="1">
            1month
          </ToggleGroupItem>
          <ToggleGroupItem className="min-w-max" value="custom">
            Custom
          </ToggleGroupItem>
        </ToggleGroup>         */}
        <RadioGroup
          value={value}
          onValueChange={(value) => {
            console.log("val", value);

            setValue(value);
          }}
        >
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem value="24 hours" id="r1" />
            <Label htmlFor="r1">24 hours</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3 days" id="r2" />
            <Label htmlFor="r2">3 days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2 weeks" id="r3" />
            <Label htmlFor="r3">2 week</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1 month" id="r4" />
            <Label htmlFor="r4">1 month</Label>
          </div>
          <div className="flex items-center space-x-2 max-w-fit">
            <RadioGroupItem value="custom" id="r5" />
            <Input
              disabled={value != "custom"}
              placeholder="custom"
              value={customValue}
              onInput={(e) => {
                setCustomValue(e.target.value);
              }}
            />
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-2">
        <div className=" text-left text-2xl font-semibold">
          okay, getting to work on it now?
        </div>
        <Input placeholder="maybe later...." />
        <ToggleGroup type="multiple" size="lg">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <FontBoldIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <FontItalicIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <Button variant="outline" className=" w-auto">
        Next <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Home;
