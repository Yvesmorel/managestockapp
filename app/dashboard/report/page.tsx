/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Re871ZiI3Vw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
      <Card className="bg-primary text-primary-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">Products</CardTitle>
          <CardDescription>Total number of products available</CardDescription>
        </CardHeader>
        <CardContent className="text-4xl font-bold">
          <span>245</span>
        </CardContent>
      </Card>
      <Card className="bg-white text-secondary-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">Orders</CardTitle>
          <CardDescription>Total number of orders received</CardDescription>
        </CardHeader>
        <CardContent className="text-4xl font-bold">
          <span>1,523</span>
        </CardContent>
      </Card>
      <Card className="bg-white text-accent-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">Requests</CardTitle>
          <CardDescription>Total number of customer requests</CardDescription>
        </CardHeader>
        <CardContent className="text-4xl font-bold">
          <span>789</span>
        </CardContent>
      </Card>
    </div>
  )
}