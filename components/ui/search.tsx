"use client";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "lucide-react";
import { Input } from "./input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="relative mb-8">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        type="search"
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:outline-none"
      />
    </div>
  );
}
