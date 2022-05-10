/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "likechain.likenft";

export interface ClassesByISCN {
  iscnIdPrefix: string;
  classIds: string[];
}

const baseClassesByISCN: object = { iscnIdPrefix: "", classIds: "" };

export const ClassesByISCN = {
  encode(
    message: ClassesByISCN,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassesByISCN {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassesByISCN } as ClassesByISCN;
    message.classIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
          break;
        case 2:
          message.classIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassesByISCN {
    const message = { ...baseClassesByISCN } as ClassesByISCN;
    message.classIds = [];
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = String(object.iscnIdPrefix);
    } else {
      message.iscnIdPrefix = "";
    }
    if (object.classIds !== undefined && object.classIds !== null) {
      for (const e of object.classIds) {
        message.classIds.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ClassesByISCN): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined &&
      (obj.iscnIdPrefix = message.iscnIdPrefix);
    if (message.classIds) {
      obj.classIds = message.classIds.map((e) => e);
    } else {
      obj.classIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ClassesByISCN>): ClassesByISCN {
    const message = { ...baseClassesByISCN } as ClassesByISCN;
    message.classIds = [];
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = object.iscnIdPrefix;
    } else {
      message.iscnIdPrefix = "";
    }
    if (object.classIds !== undefined && object.classIds !== null) {
      for (const e of object.classIds) {
        message.classIds.push(e);
      }
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
