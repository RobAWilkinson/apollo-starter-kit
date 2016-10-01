import knex from 'knex';

const db = knex({
  client: 'postgresql',
  connection: {
    host     : '127.0.0.1',
    database : 'scholarfisher',
    charset  : 'utf8',
  }
})
db.raw('select 1+1 as result').then(function () {
  console.log('valid connection..');
});
export default db

