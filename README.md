NESTJS
1. nest new "nameApp"
2. npm run start:dev
3. Generate commands
    a. nest g module "nameModule"
    b.  nest g service "nameService" --no-spec
4. @Global() usato come decorator in un modulo rende il modulo disponibile in ogni modulo.

DOCKER
1. docker compose up --> run di un Volume
    a. dev-db farebbe runnare un servizio specifico che si chiama "dev-db" se lo abbiamo
    b. -d lo fa runnare in background


PRISMA
1. prisma migrate dev --> crea un migration
2. prima generate --> genera i modelli da utilizzare in typescript delle risorse nel DB
