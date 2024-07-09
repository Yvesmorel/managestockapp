import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
export function ProductTableRowSkeleton() {
  return (
    <TableRow className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/*Nom du produit*/}
      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </TableCell>
      {/*Prix */}
      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </TableCell>
      {/* description*/}
      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </TableCell>
      {/* quantité*/}
      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </TableCell>
      {/* Actions */}
      <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </TableCell>
    </TableRow>
  );
}

export function ProductsMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function ProductsTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <ProductsMobileSkeleton />
            <ProductsMobileSkeleton />
            <ProductsMobileSkeleton />
            <ProductsMobileSkeleton />
            <ProductsMobileSkeleton />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom du produit</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Quantité</TableHead>
                <TableHead className="text-right">Editer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <ProductTableRowSkeleton />
              <ProductTableRowSkeleton />
              <ProductTableRowSkeleton />
              <ProductTableRowSkeleton />
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export function RequestTableRowSkeleton() {
  return (
    <TableRow className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </TableCell>

      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </TableCell>

      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </TableCell>

      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </TableCell>

      <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </TableCell>
    </TableRow>
  );
}

export function RequestMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function RequestTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <RequestMobileSkeleton />
            <RequestMobileSkeleton />
            <RequestMobileSkeleton />
            <RequestMobileSkeleton />
            <RequestMobileSkeleton />
            <RequestMobileSkeleton />
            <RequestMobileSkeleton />
            <RequestMobileSkeleton />
            <RequestMobileSkeleton />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Request</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead className="text-right">Editer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <RequestTableRowSkeleton />
              <RequestTableRowSkeleton />
              <RequestTableRowSkeleton />
              <RequestTableRowSkeleton />
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export function OrdersTableRowSkeleton() {
  return (
    <TableRow className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </TableCell>

      <TableCell className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </TableCell>

      <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </TableCell>
    </TableRow>
  );
}

export function OrdersMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function OrdersTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <OrdersMobileSkeleton />
            <OrdersMobileSkeleton />
            <OrdersMobileSkeleton />
            <OrdersMobileSkeleton />
            <OrdersMobileSkeleton />
            <OrdersMobileSkeleton />
            <OrdersMobileSkeleton />
            <OrdersMobileSkeleton />
            <OrdersMobileSkeleton />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
             
                <TableHead>Delivery Goods Number</TableHead>
                <TableHead>Order Status</TableHead>
                <TableHead className="text-right">Editer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <OrdersTableRowSkeleton />
              <OrdersTableRowSkeleton />
              <OrdersTableRowSkeleton />
              <OrdersTableRowSkeleton />
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export function ProductTableSkeleton() {
  const rows = 3; // Nombre de lignes dans le squelette
  const columns = 5; // Nombre de colonnes dans le squelette

  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, idx) => (
              <th key={idx} className="px-6 py-3 bg-gray-100">
                <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: columns }).map((_, colIdx) => (
                <td key={colIdx} className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RequestsTableSkeleton() {
  return (
    <div className="overflow-auto border rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Request
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Department
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nom
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prénoms
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Position
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: 3 }).map((_, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function OrderTableSkeleton() {
  return (
    <div className="overflow-auto border rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Order Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Delivery Good Number
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Order Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: 3 }).map((_, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 justify-end">
                  <div className="h-8 w-16 bg-gray-300 rounded"></div>
                  <div className="h-8 w-16 bg-gray-300 rounded"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function OrderDetailsSkeleton() {
  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8 animate-pulse">
      <h1 className="text-2xl font-bold mb-6 bg-gray-300 h-6 w-40 rounded"></h1>
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="text-muted-foreground bg-gray-300 h-4 w-32 rounded"></p>
            <p className="bg-gray-300 h-6 rounded"></p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground bg-gray-300 h-4 w-32 rounded"></p>
            <p className="bg-gray-300 h-6 rounded"></p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="text-muted-foreground bg-gray-300 h-4 w-32 rounded"></p>
            <p className="bg-gray-300 h-6 rounded"></p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground bg-gray-300 h-4 w-32 rounded"></p>
            <p className="bg-gray-300 h-6 rounded"></p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="text-muted-foreground bg-gray-300 h-4 w-32 rounded"></p>
            <p className="bg-gray-300 h-6 rounded"></p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground bg-gray-300 h-4 w-32 rounded"></p>
            <p className="bg-gray-300 h-6 rounded"></p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="text-muted-foreground bg-gray-300 h-4 w-32 rounded"></p>
            <p className="bg-gray-300 h-6 rounded"></p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground bg-gray-300 h-4 w-32 rounded"></p>
            <p className="bg-gray-300 h-6 rounded"></p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gray-300 h-10 w-32 rounded"></div>
        </div>
      </div>
    </div>
  );
}
