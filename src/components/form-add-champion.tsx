'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { MultiSelect } from '@/components/multi-select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { champions } from '@/constants/champions';
import { useState } from 'react';

const championsNames = champions.map(champion => champion.name);

const multiSelectOptions = championsNames.map(champion => ({
  value: champion,
  label: champion
}));

const formSchema = z.object({
  name: z.string().min(1, 'Preencha o nome.'),
  strongerVs: z.array(z.string()).nonempty('Selecione pelo menos um campeão.'),
  weakerVs: z.array(z.string()).nonempty('Selecione pelo menos um campeão.'),
  synergy: z.array(z.string()).nonempty('Selecione pelo menos um campeão.')
});

export default function FormAddChampion() {
  const [selectedChampions, setSelectedChampions] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      strongerVs: [],
      weakerVs: [],
      synergy: []
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ezreal"
                  type="text"
                  className="text-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="strongerVs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Esse campeão é forte contra:</FormLabel>
              <FormControl>
                <MultiSelect
                  options={multiSelectOptions}
                  onValueChange={setSelectedChampions}
                  defaultValue={selectedChampions}
                  placeholder="Selecione os campeões"
                  variant="default"
                  maxCount={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
