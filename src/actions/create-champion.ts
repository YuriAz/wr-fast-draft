'use server';

import { db } from '@/lib/db';

export const createChampion = async () => {
  await db.champion.create({
    data: {
      name: 'Aatrox',
      image: '/public/images/champions/aatrox.webp',
      draftData: {
        create: [
          {
            name: 'Ahri',
            image: '/public/images/champions/ahri-face.webp',
            type: 'STRONGER'
          },
          {
            name: 'Akali',
            image: '/public/images/champions/akali-face.webp',
            type: 'WEAKER'
          }
        ]
      }
    }
  });
};
