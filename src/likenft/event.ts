/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "likechain.likenft";

export interface EventNewClass {
  classId: string;
  parentIscnIdPrefix: string;
  parentAccount: string;
}

export interface EventUpdateClass {
  classId: string;
  parentIscnIdPrefix: string;
  parentAccount: string;
}

export interface EventRevealClass {
  classId: string;
  parentIscnIdPrefix: string;
  parentAccount: string;
  success: boolean;
  error: string;
}

export interface EventMintNFT {
  classId: string;
  nftId: string;
  owner: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}

export interface EventBurnNFT {
  classId: string;
  nftId: string;
  owner: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}

export interface EventCreateMintableNFT {
  classId: string;
  mintableNftId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}

export interface EventUpdateMintableNFT {
  classId: string;
  mintableNftId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}

export interface EventDeleteMintableNFT {
  classId: string;
  mintableNftId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}

const baseEventNewClass: object = {
  classId: "",
  parentIscnIdPrefix: "",
  parentAccount: "",
};

export const EventNewClass = {
  encode(
    message: EventNewClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.parentIscnIdPrefix !== "") {
      writer.uint32(18).string(message.parentIscnIdPrefix);
    }
    if (message.parentAccount !== "") {
      writer.uint32(26).string(message.parentAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventNewClass } as EventNewClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.parentIscnIdPrefix = reader.string();
          break;
        case 3:
          message.parentAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventNewClass {
    const message = { ...baseEventNewClass } as EventNewClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (
      object.parentIscnIdPrefix !== undefined &&
      object.parentIscnIdPrefix !== null
    ) {
      message.parentIscnIdPrefix = String(object.parentIscnIdPrefix);
    } else {
      message.parentIscnIdPrefix = "";
    }
    if (object.parentAccount !== undefined && object.parentAccount !== null) {
      message.parentAccount = String(object.parentAccount);
    } else {
      message.parentAccount = "";
    }
    return message;
  },

  toJSON(message: EventNewClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.parentIscnIdPrefix !== undefined &&
      (obj.parentIscnIdPrefix = message.parentIscnIdPrefix);
    message.parentAccount !== undefined &&
      (obj.parentAccount = message.parentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventNewClass>): EventNewClass {
    const message = { ...baseEventNewClass } as EventNewClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (
      object.parentIscnIdPrefix !== undefined &&
      object.parentIscnIdPrefix !== null
    ) {
      message.parentIscnIdPrefix = object.parentIscnIdPrefix;
    } else {
      message.parentIscnIdPrefix = "";
    }
    if (object.parentAccount !== undefined && object.parentAccount !== null) {
      message.parentAccount = object.parentAccount;
    } else {
      message.parentAccount = "";
    }
    return message;
  },
};

const baseEventUpdateClass: object = {
  classId: "",
  parentIscnIdPrefix: "",
  parentAccount: "",
};

export const EventUpdateClass = {
  encode(
    message: EventUpdateClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.parentIscnIdPrefix !== "") {
      writer.uint32(18).string(message.parentIscnIdPrefix);
    }
    if (message.parentAccount !== "") {
      writer.uint32(26).string(message.parentAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateClass } as EventUpdateClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.parentIscnIdPrefix = reader.string();
          break;
        case 3:
          message.parentAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateClass {
    const message = { ...baseEventUpdateClass } as EventUpdateClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (
      object.parentIscnIdPrefix !== undefined &&
      object.parentIscnIdPrefix !== null
    ) {
      message.parentIscnIdPrefix = String(object.parentIscnIdPrefix);
    } else {
      message.parentIscnIdPrefix = "";
    }
    if (object.parentAccount !== undefined && object.parentAccount !== null) {
      message.parentAccount = String(object.parentAccount);
    } else {
      message.parentAccount = "";
    }
    return message;
  },

  toJSON(message: EventUpdateClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.parentIscnIdPrefix !== undefined &&
      (obj.parentIscnIdPrefix = message.parentIscnIdPrefix);
    message.parentAccount !== undefined &&
      (obj.parentAccount = message.parentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateClass>): EventUpdateClass {
    const message = { ...baseEventUpdateClass } as EventUpdateClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (
      object.parentIscnIdPrefix !== undefined &&
      object.parentIscnIdPrefix !== null
    ) {
      message.parentIscnIdPrefix = object.parentIscnIdPrefix;
    } else {
      message.parentIscnIdPrefix = "";
    }
    if (object.parentAccount !== undefined && object.parentAccount !== null) {
      message.parentAccount = object.parentAccount;
    } else {
      message.parentAccount = "";
    }
    return message;
  },
};

const baseEventRevealClass: object = {
  classId: "",
  parentIscnIdPrefix: "",
  parentAccount: "",
  success: false,
  error: "",
};

export const EventRevealClass = {
  encode(
    message: EventRevealClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.parentIscnIdPrefix !== "") {
      writer.uint32(18).string(message.parentIscnIdPrefix);
    }
    if (message.parentAccount !== "") {
      writer.uint32(26).string(message.parentAccount);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRevealClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventRevealClass } as EventRevealClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.parentIscnIdPrefix = reader.string();
          break;
        case 3:
          message.parentAccount = reader.string();
          break;
        case 4:
          message.success = reader.bool();
          break;
        case 5:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRevealClass {
    const message = { ...baseEventRevealClass } as EventRevealClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (
      object.parentIscnIdPrefix !== undefined &&
      object.parentIscnIdPrefix !== null
    ) {
      message.parentIscnIdPrefix = String(object.parentIscnIdPrefix);
    } else {
      message.parentIscnIdPrefix = "";
    }
    if (object.parentAccount !== undefined && object.parentAccount !== null) {
      message.parentAccount = String(object.parentAccount);
    } else {
      message.parentAccount = "";
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    return message;
  },

  toJSON(message: EventRevealClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.parentIscnIdPrefix !== undefined &&
      (obj.parentIscnIdPrefix = message.parentIscnIdPrefix);
    message.parentAccount !== undefined &&
      (obj.parentAccount = message.parentAccount);
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<EventRevealClass>): EventRevealClass {
    const message = { ...baseEventRevealClass } as EventRevealClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (
      object.parentIscnIdPrefix !== undefined &&
      object.parentIscnIdPrefix !== null
    ) {
      message.parentIscnIdPrefix = object.parentIscnIdPrefix;
    } else {
      message.parentIscnIdPrefix = "";
    }
    if (object.parentAccount !== undefined && object.parentAccount !== null) {
      message.parentAccount = object.parentAccount;
    } else {
      message.parentAccount = "";
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    return message;
  },
};

const baseEventMintNFT: object = {
  classId: "",
  nftId: "",
  owner: "",
  classParentIscnIdPrefix: "",
  classParentAccount: "",
};

export const EventMintNFT = {
  encode(
    message: EventMintNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(34).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(42).string(message.classParentAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventMintNFT } as EventMintNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.classParentIscnIdPrefix = reader.string();
          break;
        case 5:
          message.classParentAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMintNFT {
    const message = { ...baseEventMintNFT } as EventMintNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = String(object.nftId);
    } else {
      message.nftId = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = String(object.classParentIscnIdPrefix);
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = String(object.classParentAccount);
    } else {
      message.classParentAccount = "";
    }
    return message;
  },

  toJSON(message: EventMintNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.classParentIscnIdPrefix !== undefined &&
      (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined &&
      (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventMintNFT>): EventMintNFT {
    const message = { ...baseEventMintNFT } as EventMintNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = object.classParentIscnIdPrefix;
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = object.classParentAccount;
    } else {
      message.classParentAccount = "";
    }
    return message;
  },
};

const baseEventBurnNFT: object = {
  classId: "",
  nftId: "",
  owner: "",
  classParentIscnIdPrefix: "",
  classParentAccount: "",
};

export const EventBurnNFT = {
  encode(
    message: EventBurnNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(34).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(42).string(message.classParentAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventBurnNFT } as EventBurnNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.classParentIscnIdPrefix = reader.string();
          break;
        case 5:
          message.classParentAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBurnNFT {
    const message = { ...baseEventBurnNFT } as EventBurnNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = String(object.nftId);
    } else {
      message.nftId = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = String(object.classParentIscnIdPrefix);
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = String(object.classParentAccount);
    } else {
      message.classParentAccount = "";
    }
    return message;
  },

  toJSON(message: EventBurnNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.classParentIscnIdPrefix !== undefined &&
      (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined &&
      (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventBurnNFT>): EventBurnNFT {
    const message = { ...baseEventBurnNFT } as EventBurnNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = object.classParentIscnIdPrefix;
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = object.classParentAccount;
    } else {
      message.classParentAccount = "";
    }
    return message;
  },
};

const baseEventCreateMintableNFT: object = {
  classId: "",
  mintableNftId: "",
  classParentIscnIdPrefix: "",
  classParentAccount: "",
};

export const EventCreateMintableNFT = {
  encode(
    message: EventCreateMintableNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.mintableNftId !== "") {
      writer.uint32(18).string(message.mintableNftId);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventCreateMintableNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateMintableNFT } as EventCreateMintableNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.mintableNftId = reader.string();
          break;
        case 3:
          message.classParentIscnIdPrefix = reader.string();
          break;
        case 4:
          message.classParentAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateMintableNFT {
    const message = { ...baseEventCreateMintableNFT } as EventCreateMintableNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.mintableNftId !== undefined && object.mintableNftId !== null) {
      message.mintableNftId = String(object.mintableNftId);
    } else {
      message.mintableNftId = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = String(object.classParentIscnIdPrefix);
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = String(object.classParentAccount);
    } else {
      message.classParentAccount = "";
    }
    return message;
  },

  toJSON(message: EventCreateMintableNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.mintableNftId !== undefined &&
      (obj.mintableNftId = message.mintableNftId);
    message.classParentIscnIdPrefix !== undefined &&
      (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined &&
      (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventCreateMintableNFT>
  ): EventCreateMintableNFT {
    const message = { ...baseEventCreateMintableNFT } as EventCreateMintableNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.mintableNftId !== undefined && object.mintableNftId !== null) {
      message.mintableNftId = object.mintableNftId;
    } else {
      message.mintableNftId = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = object.classParentIscnIdPrefix;
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = object.classParentAccount;
    } else {
      message.classParentAccount = "";
    }
    return message;
  },
};

const baseEventUpdateMintableNFT: object = {
  classId: "",
  mintableNftId: "",
  classParentIscnIdPrefix: "",
  classParentAccount: "",
};

export const EventUpdateMintableNFT = {
  encode(
    message: EventUpdateMintableNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.mintableNftId !== "") {
      writer.uint32(18).string(message.mintableNftId);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventUpdateMintableNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateMintableNFT } as EventUpdateMintableNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.mintableNftId = reader.string();
          break;
        case 3:
          message.classParentIscnIdPrefix = reader.string();
          break;
        case 4:
          message.classParentAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateMintableNFT {
    const message = { ...baseEventUpdateMintableNFT } as EventUpdateMintableNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.mintableNftId !== undefined && object.mintableNftId !== null) {
      message.mintableNftId = String(object.mintableNftId);
    } else {
      message.mintableNftId = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = String(object.classParentIscnIdPrefix);
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = String(object.classParentAccount);
    } else {
      message.classParentAccount = "";
    }
    return message;
  },

  toJSON(message: EventUpdateMintableNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.mintableNftId !== undefined &&
      (obj.mintableNftId = message.mintableNftId);
    message.classParentIscnIdPrefix !== undefined &&
      (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined &&
      (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventUpdateMintableNFT>
  ): EventUpdateMintableNFT {
    const message = { ...baseEventUpdateMintableNFT } as EventUpdateMintableNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.mintableNftId !== undefined && object.mintableNftId !== null) {
      message.mintableNftId = object.mintableNftId;
    } else {
      message.mintableNftId = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = object.classParentIscnIdPrefix;
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = object.classParentAccount;
    } else {
      message.classParentAccount = "";
    }
    return message;
  },
};

const baseEventDeleteMintableNFT: object = {
  classId: "",
  mintableNftId: "",
  classParentIscnIdPrefix: "",
  classParentAccount: "",
};

export const EventDeleteMintableNFT = {
  encode(
    message: EventDeleteMintableNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.mintableNftId !== "") {
      writer.uint32(18).string(message.mintableNftId);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventDeleteMintableNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventDeleteMintableNFT } as EventDeleteMintableNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.mintableNftId = reader.string();
          break;
        case 3:
          message.classParentIscnIdPrefix = reader.string();
          break;
        case 4:
          message.classParentAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeleteMintableNFT {
    const message = { ...baseEventDeleteMintableNFT } as EventDeleteMintableNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.mintableNftId !== undefined && object.mintableNftId !== null) {
      message.mintableNftId = String(object.mintableNftId);
    } else {
      message.mintableNftId = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = String(object.classParentIscnIdPrefix);
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = String(object.classParentAccount);
    } else {
      message.classParentAccount = "";
    }
    return message;
  },

  toJSON(message: EventDeleteMintableNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.mintableNftId !== undefined &&
      (obj.mintableNftId = message.mintableNftId);
    message.classParentIscnIdPrefix !== undefined &&
      (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined &&
      (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventDeleteMintableNFT>
  ): EventDeleteMintableNFT {
    const message = { ...baseEventDeleteMintableNFT } as EventDeleteMintableNFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.mintableNftId !== undefined && object.mintableNftId !== null) {
      message.mintableNftId = object.mintableNftId;
    } else {
      message.mintableNftId = "";
    }
    if (
      object.classParentIscnIdPrefix !== undefined &&
      object.classParentIscnIdPrefix !== null
    ) {
      message.classParentIscnIdPrefix = object.classParentIscnIdPrefix;
    } else {
      message.classParentIscnIdPrefix = "";
    }
    if (
      object.classParentAccount !== undefined &&
      object.classParentAccount !== null
    ) {
      message.classParentAccount = object.classParentAccount;
    } else {
      message.classParentAccount = "";
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
