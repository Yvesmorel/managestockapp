
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="container w-full   px-4 py-12">
      <div className="space-y-4">
        <div className="">
          <h1 className="text-3xl font-bold">Order Registration</h1>
          <p className="text-muted-foreground">
            Please fill out the form to record your order details.
          </p>
        </div>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="grid gap-2">
            <Label htmlFor="order-date">Order Date</Label>
            <Input type="date" id="order-date" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="delivery-number">Delivery Goods Number</Label>
            <Input type="text" id="delivery-number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="order-status">Order Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue id="order-status" placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input type="text" id="last-name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input type="text" id="first-name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">Contact</Label>
            <Input type="text" id="contact" />
          </div>
          <div className="col-span-2 grid gap-2">
            <Label htmlFor="supplier-address">Supplier Address</Label>
            <Textarea id="supplier-address" rows={3} />
          </div>
        </form>
        <div className="flex justify-end gap-2">
          <Link href="/dashboard/orders">
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Button type="submit">Submit Order</Button>
        </div>
      </div>
    </div>
  );
}
