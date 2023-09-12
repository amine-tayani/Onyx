"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CommandList } from "cmdk";

interface Country {
  label: string;
  value: string;
}

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [countries, setCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    const getCountries = async () => {
      const data = await fetch(
        "https://valid.layercode.workers.dev/list/countries?format=select",
        {
          cache: "force-cache",
        }
      );
      const response = await data.json();
      setCountries(response.countries);
    };

    getCountries();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          aria-expanded={open}
          className="capitalize justify-between text-neutral-500"
        >
          {value || "Select country"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0 bg-neutral-900 w-full border-none ">
        <Command className="w-[400px] bg-neutral-900 text-neutral-400">
          <CommandInput placeholder="Search country..." />
          <CommandEmpty>No country found.</CommandEmpty>
          <ScrollArea className="">
            <CommandList className="text-neutral-400 max-h-[250px]">
              {countries.map((country) => (
                <CommandItem
                  className=" active:bg-neutral-600 aria-selected:bg-neutral-800 mt-1 aria-selected:text-neutral-300"
                  key={country.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {country.label}
                </CommandItem>
              ))}
            </CommandList>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
