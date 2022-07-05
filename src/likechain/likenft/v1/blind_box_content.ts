/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NFTInput } from "../../../likechain/likenft/v1/nft_input";

export const protobufPackage = "likechain.likenft.v1";

export interface BlindBoxContent {
  classId: string;
  id: string;
  input?: NFTInput;
}

const baseBlindBoxContent: object = { classId: "", id: "" };

export const BlindBoxContent = {
  encode(
    message: BlindBoxContent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlindBoxContent } as BlindBoxContent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.input = NFTInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlindBoxContent {
    const message = { ...baseBlindBoxContent } as BlindBoxContent;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = NFTInput.fromJSON(object.input);
    } else {
      message.input = undefined;
    }
    return message;
  },

  toJSON(message: BlindBoxContent): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined &&
      (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlindBoxContent>): BlindBoxContent {
    const message = { ...baseBlindBoxContent } as BlindBoxContent;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = NFTInput.fromPartial(object.input);
    } else {
      message.input = undefined;
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
