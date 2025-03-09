'use client';

import { createChampion } from '@/actions/create-champion';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';

export default function TestPage() {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => createChampion());
  };

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <Button disabled={isPending} onClick={onClick}>
        Salvar
      </Button>
    </div>
  );
}
