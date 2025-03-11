import Link from 'next/link';
import { Button } from './ui/button';

export default function AdmButton() {
  return (
    <Link href="/add-champion" className="absolute top-0 right-0">
      <Button className="bg-transparent text-transparent hover:text-white transition duration-300">
        ADM
      </Button>
    </Link>
  );
}
