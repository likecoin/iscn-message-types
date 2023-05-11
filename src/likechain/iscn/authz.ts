/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "likechain.iscn";

export interface UpdateAuthorization {
  iscnIdPrefix: string;
}

const baseUpdateAuthorization: object = { iscnIdPrefix: "" };

export const UpdateAuthorization = {
  encode(
    message: UpdateAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateAuthorization } as UpdateAuthorization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthorization {
    const message = { ...baseUpdateAuthorization } as UpdateAuthorization;
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = String(object.iscnIdPrefix);
    } else {
      message.iscnIdPrefix = "";
    }
    return message;
  },

  toJSON(message: UpdateAuthorization): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined &&
      (obj.iscnIdPrefix = message.iscnIdPrefix);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateAuthorization>): UpdateAuthorization {
    const message = { ...baseUpdateAuthorization } as UpdateAuthorization;
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = object.iscnIdPrefix;
    } else {
      message.iscnIdPrefix = "";
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
