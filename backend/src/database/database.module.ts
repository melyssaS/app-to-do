import { Global, Module } from '@nestjs/common';
import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm';

// const client = new Client({
//   user: 'root',
//   host: 'localhost',
//   database: 'my_db',
//   password: '123456',
//   port: 5432,
// });

// client.connect();

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '123456',
      database: 'my_db',
      synchronize:true,
      autoLoadEntities:true,
    }),
  ],
  providers: [
    // {
    //   provide: 'PG',
    //   useValue: client,
    // },
        {
      provide: 'TypeOrmModule',
      useValue: TypeOrmModule,
    },
  ],
  exports: ['TypeOrmModule'],
})
export class DatabaseModule {}
