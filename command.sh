cd backend
npm init
npm install
docker-compose up -d postgres
docker-compose up -d pgadmin
cd ..
cd frontend 
npm init
npm install
npm run serve & (cd ../backend && npm run start:dev)


