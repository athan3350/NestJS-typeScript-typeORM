import { ConnectionOptions } from "typeorm";

const ormconfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'sebastian',
    password: 'admin',
    database: 'sebastiandb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
};

export default ormconfig;