/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../likenft/params";
import { ClassesByISCN } from "../likenft/classes_by_iscn";
import { ClassesByAccount } from "../likenft/classes_by_account";
import { MintableNFT } from "../likenft/mintable_nft";
import { ClassRevealQueueEntry } from "../likenft/class_reveal_queue";

export const protobufPackage = "likechain.likenft";

/** GenesisState defines the likenft module's genesis state. */
export interface GenesisState {
  params?: Params;
  classesByIscnList: ClassesByISCN[];
  classesByAccountList: ClassesByAccount[];
  mintableNftList: MintableNFT[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  classRevealQueue: ClassRevealQueueEntry[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.classesByIscnList) {
      ClassesByISCN.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.classesByAccountList) {
      ClassesByAccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.mintableNftList) {
      MintableNFT.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.classRevealQueue) {
      ClassRevealQueueEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.classesByIscnList = [];
    message.classesByAccountList = [];
    message.mintableNftList = [];
    message.classRevealQueue = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.classesByIscnList.push(
            ClassesByISCN.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.classesByAccountList.push(
            ClassesByAccount.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.mintableNftList.push(
            MintableNFT.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.classRevealQueue.push(
            ClassRevealQueueEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.classesByIscnList = [];
    message.classesByAccountList = [];
    message.mintableNftList = [];
    message.classRevealQueue = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.classesByIscnList !== undefined &&
      object.classesByIscnList !== null
    ) {
      for (const e of object.classesByIscnList) {
        message.classesByIscnList.push(ClassesByISCN.fromJSON(e));
      }
    }
    if (
      object.classesByAccountList !== undefined &&
      object.classesByAccountList !== null
    ) {
      for (const e of object.classesByAccountList) {
        message.classesByAccountList.push(ClassesByAccount.fromJSON(e));
      }
    }
    if (
      object.mintableNftList !== undefined &&
      object.mintableNftList !== null
    ) {
      for (const e of object.mintableNftList) {
        message.mintableNftList.push(MintableNFT.fromJSON(e));
      }
    }
    if (
      object.classRevealQueue !== undefined &&
      object.classRevealQueue !== null
    ) {
      for (const e of object.classRevealQueue) {
        message.classRevealQueue.push(ClassRevealQueueEntry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.classesByIscnList) {
      obj.classesByIscnList = message.classesByIscnList.map((e) =>
        e ? ClassesByISCN.toJSON(e) : undefined
      );
    } else {
      obj.classesByIscnList = [];
    }
    if (message.classesByAccountList) {
      obj.classesByAccountList = message.classesByAccountList.map((e) =>
        e ? ClassesByAccount.toJSON(e) : undefined
      );
    } else {
      obj.classesByAccountList = [];
    }
    if (message.mintableNftList) {
      obj.mintableNftList = message.mintableNftList.map((e) =>
        e ? MintableNFT.toJSON(e) : undefined
      );
    } else {
      obj.mintableNftList = [];
    }
    if (message.classRevealQueue) {
      obj.classRevealQueue = message.classRevealQueue.map((e) =>
        e ? ClassRevealQueueEntry.toJSON(e) : undefined
      );
    } else {
      obj.classRevealQueue = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.classesByIscnList = [];
    message.classesByAccountList = [];
    message.mintableNftList = [];
    message.classRevealQueue = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.classesByIscnList !== undefined &&
      object.classesByIscnList !== null
    ) {
      for (const e of object.classesByIscnList) {
        message.classesByIscnList.push(ClassesByISCN.fromPartial(e));
      }
    }
    if (
      object.classesByAccountList !== undefined &&
      object.classesByAccountList !== null
    ) {
      for (const e of object.classesByAccountList) {
        message.classesByAccountList.push(ClassesByAccount.fromPartial(e));
      }
    }
    if (
      object.mintableNftList !== undefined &&
      object.mintableNftList !== null
    ) {
      for (const e of object.mintableNftList) {
        message.mintableNftList.push(MintableNFT.fromPartial(e));
      }
    }
    if (
      object.classRevealQueue !== undefined &&
      object.classRevealQueue !== null
    ) {
      for (const e of object.classRevealQueue) {
        message.classRevealQueue.push(ClassRevealQueueEntry.fromPartial(e));
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
