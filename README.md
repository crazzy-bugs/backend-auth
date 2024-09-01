
Can someone check this issue i am having with the command:
curl -X POST http://localhost:5000/api/login -H "Content-Type: application/json" -d '{"username": "deep", "password": "deep123"}'

Possible checks:
1.Database name 
2.Collection name
3.Hash Cross Check
All the properties are checked on my system but you should try locally


use SIH_test;
db.users.insertMany([
  {
    username: 'omkar',
    password: '$2b$10$DfmJ98VreT6P2xvHlKpcKeSRkpSb4YhTrLYb09qKjlupxgU1C5tMy',
    role: 'superadmin'
  },
  {
    username: 'deep',
    password: '$2b$10$W8w5ziknTe6kZwUBuevsX.KAVjBnngnIcxYsIIK.XuXB72GGNLnKu',
    role: 'admin'
  },
  {
    username: 'sarthak',
    password: '$2b$10$0ZGZ5kPFWE7XiZY9e7gaIut5Hyp4dh0f4qSWqHiH43OTFnbHXT8D2',
    role: 'faculty'
  },
  {
    username: 'aditi',
    password: '$2b$10$QajgmUe/8Fd/SYliPECvqOPv1qtiY5zkOm/obQ3O2EqWk1VLCpjgi',
    role: 'student'
  },
  {
    username: 'superadmin',
    password: '$2b$10$MjvjKw6xuvGsQKL8oR5FmOcNkZhTd9y298gitamgjx6Zi/k9.1Fei',
    role: 'superadmin'
  }
]);

