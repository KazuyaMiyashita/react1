import { createSchema as S, TsjsonParser } from 'ts-json-validator';
import { ErrorObject as JSONParseError } from 'ajv';

import { Either, right, left } from 'utils/Either';


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

const userParser = new TsjsonParser(schema);
export const parseUser = (str: string): Either<JSONParseError, User> => {
  try {
    return right(userParser.parse(str));
  } catch (e) {
    return left(e);
  }
};

export const usersParser = new TsjsonParser(S({ type: 'array', items: schema }))
export const parseUsers = (str: string): Either<JSONParseError, readonly User[]> => {
  try {
    return right(usersParser.parse(str));
  } catch (e) {
    return left(e);
  }
}
