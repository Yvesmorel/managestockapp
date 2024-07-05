import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { fetchCategories } from "@/app/lib/data";
export default async function CategorieSelect() {
  const categories = await fetchCategories();
  return (
    <Select >
      <SelectTrigger>
        <SelectValue
          aria-describedby="nom_categorie-error"
        //   defaultValue={categories[0].id_categorie}
          placeholder="Select department"
          id="nom_categorie"
        />
      </SelectTrigger>
      <SelectContent>
        {categories.map((categorie, key) => {
          return ( 
            <>
            <input key={`${key}hidden`} type="hidden"  name="nom_categorie"/>
            <SelectItem key={key} value={categorie.nom}>
              {categorie.nom}
            </SelectItem>
            </>
          );
        })}
      </SelectContent>
    </Select>
  );
}
