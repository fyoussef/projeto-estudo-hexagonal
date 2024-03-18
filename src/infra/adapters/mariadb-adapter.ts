import { createConnection } from "mysql2/promise";
import { Connection } from "../contracts/connection";

export class MariaDbAdapter implements Connection {
  async find(model: string, params?: any): Promise<any> {
    const conn = await createConnection(
      "mysql://root:root@localhost:3321/exemple"
    );
    const where = params?.id ? `where id in (${params.id})` : "";
    const [rows] = await conn.query(
      `select * from ${model} ${where} order by id desc;`
    );
    return rows;
  }

  async insert(model: string, params: any): Promise<any> {
    const conn = await createConnection(
      "mysql://root:root@localhost:3321/exemple"
    );
    await conn.query(
      `insert into ${model} (${Object.keys(params).join(
        ","
      )}) values (${Object.keys(params)
        .map((item) => `?`)
        .join(",")})`,
      Object.values(params)
    );
  }
}
