import { NextApiRequest, NextApiResponse } from 'next';

import { User } from 'types/user';

const createUser = (_: {}, index: number) => ({
  name: Math.random().toString(32).substring(2),

});
export default (_: NextApiRequest, res: NextApiResponse) => {
}
