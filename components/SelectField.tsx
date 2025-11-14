"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectFieldProps = {
  value: string;
  onValueChange: (v: string) => void;
  placeholder: string;
  items: string[];
  className?: string;
  textStyle?: React.CSSProperties;
  contentAlignStart?: boolean; // keep same align="start" as your original
};

export function SelectField({
  value,
  onValueChange,
  placeholder,
  items,
  className = "",
  textStyle,
  contentAlignStart = true,
}: SelectFieldProps) {
  return (
    <div className={`relative ${className}`}>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          className="h-12 md:h-14 bg-transparent border-0 focus:ring-0 focus-visible:ring-0 text-left pl-4 pr-7"
          style={textStyle}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          align={contentAlignStart ? "start" : undefined}
          className="menu-surface"
        >
          {items.map((it) => (
            <SelectItem key={it} value={it}>
              {it}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
