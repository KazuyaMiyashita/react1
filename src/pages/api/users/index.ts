import { NextApiRequest, NextApiResponse } from 'next';

import { User } from 'types/user';

const createUser = (_: {}, index: number): User => ({
  id: Math.random().toString(32).substring(2),
  name: Math.random().toString(32).substring(2),
  iconUrl: 'https://avatars2.githubusercontent.com/u/55304930?s=200&v=4',
});

export default (_: NextApiRequest, res: NextApiResponse) => {
  const users = [...Array(100)].map(createUser);
  res.status(200).send(users);
}
