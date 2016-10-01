import db from './connectors'
import rp from 'request-promise';

const resolvers = {
  Query: {
    program(root, args){
      console.log(args);
      return db('fa_data1_jul16')
        .innerJoin('fa_data2_jul16', 'fa_data1_jul16.f_id', 'fa_data2_jul16.f_id')
        .where({'fa_data1_jul16.f_id': args.f_id })
        .then(results => {
          return results[0];
      });
    },
    programFindByAmount(root, args) {
      return db('fa_data1_jul16').where({
        f_amount: {
          $gt: args.f_amount,
        },
      });
    },
    getFortuneCookie() {
      return rp('http://fortunecookieapi.com/v1/cookie')
        .then((res) => JSON.parse(res))
        .then((res) => {
          return res[0].fortune.message;
        });
    },
  },
};
export default resolvers;
