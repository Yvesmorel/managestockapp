import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { fetchDepartement } from "@/app/lib/data";
import EmptyText from "../empty";
export default async function DeptSelect() {
  const departement = await fetchDepartement();

  
  if (departement.length === 0) return <EmptyText text="Aucuns departements" />;
  return (
    <Select name="nom_departement">
      <SelectTrigger>
        <SelectValue
          aria-describedby="nom_departement-error"
      
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
