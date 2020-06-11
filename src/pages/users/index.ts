import * as React from 'react';
import { ErrorObject as JSONError } from 'ajv';

import getAbsoluteUrl from 'utils/getAbsoluteUrl';
import { GetServerSideProps } from 'next';
import { User, parseUsers } from 'types/user';
import { Either } from 'utils/Either';

type Props = {
  // readonly をつけることでミューテーションを禁止することができる
  users?: Either<JSONError, readonly User[]>;
};

/** 
 * この名前の関数を export するとサーバー側で
 * SSR する前にで実行して props を page components に渡してくれる
 * @param ctx: { 
 *   query: urlをパースして取ってきた値
 *   req: リクエストオブジェクト express のと大体一緒
 *   res: レsポンスオブジェクト express のと大体一緒
 * }
 * */
export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const usersRes = await fetch(`${getAbsoluteUrl(req)}/api/users`);
  const users = parseUsers(await usersRes.text());
  return { props: { users } };
}
