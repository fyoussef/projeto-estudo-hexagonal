export interface Connection {
  find(model: string, params?: any): Promise<any>;
  insert(model: string, params: any): Promise<any>;
}
