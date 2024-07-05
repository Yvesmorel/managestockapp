import { fetchDepartement, fetchProducts } from "@/app/lib/data";
import CreateRequest from "@/components/ui/dashboard/requests/create-request";
export default async function Page() {
    const departement= await fetchDepartement()
    const products=await fetchProducts()
    return (  
        <>
            <CreateRequest products={products} departement={departement}/>
        </>
    );
}