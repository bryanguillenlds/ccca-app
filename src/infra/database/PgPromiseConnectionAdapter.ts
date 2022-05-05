import Connection from "./Connection";
import pgp from "pg-promise";

export default class PgPromiseConnectionAdapter implements Connection {
	pgp: any;

	constructor () {
		this.pgp = pgp()("postgres://postgres:123456@localhost:5432/ccca");
	}

	query(statement: string, params: any): Promise<any> {
		return this.pgp.query(statement, params);
	}
}