import { DataSource, DataSourceOptions } from "typeorm";
import ormConfigConstant from '@app/constants/ORMConfigConstant';

const ormconfig = new DataSource(ormConfigConstant as DataSourceOptions);

export default ormconfig;