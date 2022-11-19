npm i express
npm i nodemon
npm init
npm run dev // menjalankan
npm i sequelize
npm i sequelize
npm i -D sequelize-cli
npx sequelize-cli init
npx sequelize-cli db:create // membuat database
npx sequelize model:create --name user --attributes fullname:string,email:text,tgl_lahir:tex // membuat tabel
npx sequelize-cli db:migrate //post db
npx sequelize-cli db:migrate:undo
npx sequelize seed:create --name demo-user // membuat file tambah data
npx sequelize db:seed nama_file // post tambah data ke db
npx sequelize db:seed:undo nama_file // batal post tambah data ke db
npm i bcrypt
npm i jsonwebtoken
