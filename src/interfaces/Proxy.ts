export type Protcol = "https" | "http";

export interface ProxyOptions {
  url?: URL;
  protocol?: Protcol;
  overrideBody?: any;
}
