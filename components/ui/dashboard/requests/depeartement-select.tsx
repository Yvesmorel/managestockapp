import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select";
  import { fetchDepartement } from "@/app/lib/data";
export default async function DeptSelect() {
    const departement = await fetchDepartement();
    return ( 
      
          <Select name="nom_departement">
            <SelectTrigger>
              <SelectValue
                aria-describedby="nom_departement-error"
                defaultValue={departement[0].id}
                placeholder="Select department"
                id="nom_departement"
              />
            </SelectTrigger>
            <SelectContent>
              {departement.map((dept, key) => {
                return (
                  <SelectItem key={key} value={dept.nom_departement}>
                    {dept.nom_departement}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
     );
}

