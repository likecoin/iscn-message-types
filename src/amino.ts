import { Buffer } from 'buffer/';
export { fromString as longFromAmino } from 'long';

// from @cosmjs/stargate/build/aminotypes.d.ts
export interface AminoConverter {
  readonly aminoType: string;
  readonly toAmino: (value: any) => any;
  readonly fromAmino: (value: any) => any;
}

export type AminoType = Record<string, AminoConverter>;

export type AssertIsAminoType<T extends AminoType> = void;
export type AssertIsAminoConverter<T extends AminoConverter> = void;

export function jsonInputToAmino(buf?: Uint8Array, defaultValue = null): any {
  if (buf === undefined || buf === null || buf.length === 0) {
    return defaultValue;
  }
  return JSON.parse(buf.toString());
}

export function jsonInputFromAmino(input?: any, defaultValue = {}): Uint8Array {
  return Buffer.from(JSON.stringify(input ?? defaultValue), 'utf8');
}

function padNumber(n: number, length: number) {
  return n.toString().padStart(length, '0');
}

export function dateToAmino(date?: Date): string {
  if (date === null || date === undefined) {
    return '0001-01-01T00:00:00Z';
  }
  const YYYY = padNumber(date.getUTCFullYear(), 4);
  const MM = padNumber(date.getUTCMonth() + 1, 2);
  const DD = padNumber(date.getUTCDate(), 2);
  const hh = padNumber(date.getUTCHours(), 2);
  const mm = padNumber(date.getUTCMinutes(), 2);
  const ss = padNumber(date.getUTCSeconds(), 2);
  const milliseconds = date.getUTCMilliseconds();
  const digital = milliseconds === 0 ? '' : `.${padNumber(milliseconds * 1e6, 9)}`;
  return `${YYYY}-${MM}-${DD}T${hh}:${mm}:${ss}${digital}Z`;
}
