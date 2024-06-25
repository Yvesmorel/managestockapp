import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="w-full h-full">
      <form className="grid gap-6 p-6 sm:p-8 md:p-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Create request</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input type="date" id="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="request">Request</Label>
            <Textarea id="request" placeholder="Enter your request" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Input id="position" placeholder="Enter your position" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="flex justify-end gap-2">
          <Link href="/dashboard/requests">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button type="submit">Submit Request</Button>
        </div>
      </form>
    </div>
  );
}
