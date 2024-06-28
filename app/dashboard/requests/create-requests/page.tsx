"use client";
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
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
import { CreateRequests } from "@/app/lib/actions";
export default function Page() {
  const initialState = {
    errors: {
      libelle_demande: [],
      nom_departement: [],
      nom_employe: [],
      prenom_employe: [],
      poste_employe: [],
      adresse_employe: [],
      telephone_employe: [],
    },
    message: "",
  };
  const [state, dispatch] = useFormState(CreateRequests, initialState);
  return (
    <div className="w-full h-full">
      <form className="grid gap-6 p-6 sm:p-8 md:p-10" action={dispatch}>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Create request</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          
          <div className="space-y-2">
            <Label htmlFor="libelle_demande">Request</Label>
            <Textarea
              aria-describedby="libelle_demande-error"
              required
              id="libelle_demande"
              placeholder="Enter your request"
              name="libelle_demande"
            />
            <div
              id="libelle_demande-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.libelle_demande &&
                state.errors.libelle_demande.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="nom_departement">Department</Label>
          <Select name="nom_departement">
            <SelectTrigger>
              <SelectValue
                aria-describedby="nom_departement-error"
                defaultValue={"Engineering"}
                placeholder="Select department"
                id="nom_departement"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
          <div id="nom_departement-error" aria-live="polite" aria-atomic="true">
            {state.errors?.nom_departement &&
              state.errors.nom_departement.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nom_employe">First Name</Label>
            <Input
              aria-describedby="nom_employe-error"
              required
              id="nom_employe"
              placeholder="Enter your first name"
              name="nom_employe"
            />
            <div id="nom_employe-error" aria-live="polite" aria-atomic="true">
              {state.errors?.nom_employe &&
                state.errors.nom_employe.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="prenom_employe">Last Name</Label>
            <Input
              aria-describedby="prenom_employe-error"
              required
              id="prenom_employe"
              placeholder="Enter your last name"
              name="prenom_employe"
            />
            <div
              id="prenom_employe-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.prenom_employe &&
                state.errors.prenom_employe.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="poste_employe">Position</Label>
            <Input
              aria-describedby="poste_employe-error"
              required
              id="poste_employe"
              placeholder="Enter your position"
              name="poste_employe"
            />
            <div id="poste_employe-error" aria-live="polite" aria-atomic="true">
              {state.errors?.poste_employe &&
                state.errors.poste_employe.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="adresse_employe">Address</Label>
            <Input
              aria-describedby="adresse_employe-error"
              required
              id="adresse_employe"
              placeholder="Enter your address"
              name="adresse_employe"
            />
            <div
              id="adresse_employe-error"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors?.adresse_employe &&
                state.errors.adresse_employe.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone_employe">Phone</Label>
          <Input
            aria-describedby="adresse_employe-error"
            required
            id="telephone_employe"
            type="tel"
            placeholder="Enter your phone number"
            name="telephone_employe"
          />
          <div id="adresse_employe-error" aria-live="polite" aria-atomic="true">
            {state.errors?.adresse_employe &&
              state.errors.adresse_employe.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Link href="/dashboard/requests">
            <Button variant="outline">Cancel</Button>
          </Link>
          <CreateRequestButton />
        </div>
        {state.message && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
      </form>
    </div>
  );
}
function CreateRequestButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} disabled={pending}>
      Submit Request
    </Button>
  );
}
