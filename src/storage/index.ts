import { Sequelize } from "sequelize";
import { storageSettings } from "../constant";
import { initUserModel } from "./users.table";

let sequelize: Sequelize | null = null;


export const initSequelize = async (): Promise<Sequelize> => {
  if (sequelize !== null) return sequelize;

  console.log(storageSettings.username)

  sequelize = new Sequelize({
    database: storageSettings.database,
    username: storageSettings.username,
    password: storageSettings.password,
    host: storageSettings.host,
    port: 3306,
    logging: false,
    dialect: "mysql",
    pool: {
      max: 15,
      min: 5,
      idle: 5000,
      evict: 15000,
      acquire: 30000,
    },
  });

  initUserModel(sequelize)
  // Create new tables
  await sequelize.sync();

  return sequelize;
};
