import { createSchema as S, TsjsonParser } from 'ts-json-validator';

export type User = {
  id: string;
  name: string;
  iconUrl: string;
};

const schema = S({
  type: 'object',
  properties: {
    id: S({ type: 'string' }),
    name: S({ type: 'string' }),
    iconUrl: S({ type: 'string' }),
  },
  required: ['id', 'name', 'iconUrl'],
})

export const parseUser = new TsjsonParser(schema);

export const parseUsers = new TsjsonParser(S({ type: 'array', items: schema }))
