import FormAddChampion from '@/components/form-add-champion';
import { Button } from '@/components/ui/button';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function AddChampionPage() {
  return (
    <SignedIn>
      <section className="w-full h-screen p-10 bg-black text-white flex flex-col gap-10 justify-start items-center">
        <UserButton />
        <FormAddChampion />
        <Link href="/">
          <Button>Voltar</Button>
        </Link>
      </section>
    </SignedIn>
  );
}
