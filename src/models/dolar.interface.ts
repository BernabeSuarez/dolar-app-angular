export interface Info {
  casa: IDolar;
}

export interface IDolar {
  compra: string;
  venta: string;
  agencia: string;
  nombre: string;
  variacion?: string;
  ventaCero?: string;
  decimales?: string;
  mejor_compra?: string;
  mejor_venta?: string;
  fecha?: string;
  recorrido?: string;
}
