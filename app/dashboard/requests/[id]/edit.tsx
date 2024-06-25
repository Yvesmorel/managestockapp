import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="grid gap-6 p-6 sm:p-8 md:p-10">
        <div className="full flex justify-between align-items">
          <h2 className="text-2xl font-bold">Create a Request</h2>
          <Link href="/dashboard/requests/create-requests">
            <Button className="flex items-center justify-end">
              <PlusIcon className="mr-2 h-4 w-4" />
              Create Request
            </Button>
          </Link>
        </div>
        <div className="overflow-auto border rounded-lg">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Request</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-06-25</TableCell>
                <TableCell>Need new laptop for work</TableCell>
                <TableCell>Engineering</TableCell>
                <TableCell>John</TableCell>
                <TableCell>Doe</TableCell>
                <TableCell>Software Engineer</TableCell>
                <TableCell>123 Main St, Anytown USA</TableCell>
                <TableCell>555-1234</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-20</TableCell>
                <TableCell>Request for marketing materials</TableCell>
                <TableCell>Marketing</TableCell>
                <TableCell>Jane</TableCell>
                <TableCell>Smith</TableCell>
                <TableCell>Marketing Coordinator</TableCell>
                <TableCell>456 Oak Rd, Somewhere City</TableCell>
                <TableCell>555-5678</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-15</TableCell>
                <TableCell>Need to order office supplies</TableCell>
                <TableCell>Operations</TableCell>
                <TableCell>Michael</TableCell>
                <TableCell>Johnson</TableCell>
                <TableCell>Operations Manager</TableCell>
                <TableCell>789 Pine St, Othertown</TableCell>
                <TableCell>555-9012</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
