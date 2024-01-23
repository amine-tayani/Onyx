import { atom, useAtom } from 'jotai';

import { applications, ApplicationT } from '../../../../prisma/data';

type Config = {
  selected: ApplicationT['id'] | null;
};

const configAtom = atom<Config>({
  selected: applications[0].id,
});

export function useApplication() {
  return useAtom(configAtom);
}
