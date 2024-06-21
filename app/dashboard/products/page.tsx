import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { PlusIcon, SearchIcon } from "lucide-react";
export default function Page() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Produits</h1>
        <Link href="/dashboard/products/create-products">
        <Button size="lg">
          <PlusIcon className="mr-2 h-5 w-5 h-[24px] w-[24px]" />
          Ajouter un produit
        </Button>
        </Link>
        
      </div>
      <div className="relative mb-8">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:outline-none"
        />
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom du produit</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Prix</TableHead>
              <TableHead>Quantité</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Product 1</TableCell>
              <TableCell>This is the description for Product 1.</TableCell>
              <TableCell>$49.99</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product 2</TableCell>
              <TableCell>This is the description for Product 2.</TableCell>
              <TableCell>$79.99</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product 3</TableCell>
              <TableCell>This is the description for Product 3.</TableCell>
              <TableCell>$24.99</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product 4</TableCell>
              <TableCell>This is the description for Product 4.</TableCell>
              <TableCell>$99.99</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
