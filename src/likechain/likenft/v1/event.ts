/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "likechain.likenft.v1";

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

export interface EventCreateBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}

export interface EventUpdateBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}

export interface EventDeleteBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}

export interface EventCreateOffer {
  classId: string;
  nftId: string;
  buyer: string;
}

export interface EventUpdateOffer {
  classId: string;
  nftId: string;
  buyer: string;
}

export interface EventDeleteOffer {
  classId: string;
  nftId: string;
  buyer: string;
}

export interface EventCreateListing {
  classId: string;
  nftId: string;
  seller: string;
}

export interface EventUpdateListing {
  classId: string;
  nftId: string;
  seller: string;
}

export interface EventDeleteListing {
  classId: string;
  nftId: string;
  seller: string;
}

export interface EventSellNFT {
  classId: string;
  nftId: string;
  seller: string;
  buyer: string;
  price: Long;
  fullPayToRoyalty: boolean;
}

export interface EventBuyNFT {
  classId: string;
  nftId: string;
  seller: string;
  buyer: string;
  price: Long;
}

export interface EventExpireOffer {
  classId: string;
  nftId: string;
  buyer: string;
  success: boolean;
  error: string;
}

export interface EventExpireListing {
  classId: string;
  nftId: string;
  seller: string;
  success: boolean;
  error: string;
}

export interface EventCreateRoyaltyConfig {
  classId: string;
}

export interface EventUpdateRoyaltyConfig {
  classId: string;
}

export interface EventDeleteRoyaltyConfig {
  classId: string;
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

const baseEventRevealClass: object = { classId: "", success: false, error: "" };

export const EventRevealClass = {
  encode(
    message: EventRevealClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
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
          message.success = reader.bool();
          break;
        case 3:
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

const baseEventCreateBlindBoxContent: object = {
  classId: "",
  contentId: "",
  classParentIscnIdPrefix: "",
  classParentAccount: "",
};

export const EventCreateBlindBoxContent = {
  encode(
    message: EventCreateBlindBoxContent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
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
  ): EventCreateBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventCreateBlindBoxContent,
    } as EventCreateBlindBoxContent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.contentId = reader.string();
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

  fromJSON(object: any): EventCreateBlindBoxContent {
    const message = {
      ...baseEventCreateBlindBoxContent,
    } as EventCreateBlindBoxContent;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.contentId !== undefined && object.contentId !== null) {
      message.contentId = String(object.contentId);
    } else {
      message.contentId = "";
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

  toJSON(message: EventCreateBlindBoxContent): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.contentId !== undefined && (obj.contentId = message.contentId);
    message.classParentIscnIdPrefix !== undefined &&
      (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined &&
      (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventCreateBlindBoxContent>
  ): EventCreateBlindBoxContent {
    const message = {
      ...baseEventCreateBlindBoxContent,
    } as EventCreateBlindBoxContent;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.contentId !== undefined && object.contentId !== null) {
      message.contentId = object.contentId;
    } else {
      message.contentId = "";
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

const baseEventUpdateBlindBoxContent: object = {
  classId: "",
  contentId: "",
  classParentIscnIdPrefix: "",
  classParentAccount: "",
};

export const EventUpdateBlindBoxContent = {
  encode(
    message: EventUpdateBlindBoxContent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
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
  ): EventUpdateBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventUpdateBlindBoxContent,
    } as EventUpdateBlindBoxContent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.contentId = reader.string();
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

  fromJSON(object: any): EventUpdateBlindBoxContent {
    const message = {
      ...baseEventUpdateBlindBoxContent,
    } as EventUpdateBlindBoxContent;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.contentId !== undefined && object.contentId !== null) {
      message.contentId = String(object.contentId);
    } else {
      message.contentId = "";
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

  toJSON(message: EventUpdateBlindBoxContent): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.contentId !== undefined && (obj.contentId = message.contentId);
    message.classParentIscnIdPrefix !== undefined &&
      (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined &&
      (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventUpdateBlindBoxContent>
  ): EventUpdateBlindBoxContent {
    const message = {
      ...baseEventUpdateBlindBoxContent,
    } as EventUpdateBlindBoxContent;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.contentId !== undefined && object.contentId !== null) {
      message.contentId = object.contentId;
    } else {
      message.contentId = "";
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

const baseEventDeleteBlindBoxContent: object = {
  classId: "",
  contentId: "",
  classParentIscnIdPrefix: "",
  classParentAccount: "",
};

export const EventDeleteBlindBoxContent = {
  encode(
    message: EventDeleteBlindBoxContent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
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
  ): EventDeleteBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventDeleteBlindBoxContent,
    } as EventDeleteBlindBoxContent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.contentId = reader.string();
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

  fromJSON(object: any): EventDeleteBlindBoxContent {
    const message = {
      ...baseEventDeleteBlindBoxContent,
    } as EventDeleteBlindBoxContent;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.contentId !== undefined && object.contentId !== null) {
      message.contentId = String(object.contentId);
    } else {
      message.contentId = "";
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

  toJSON(message: EventDeleteBlindBoxContent): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.contentId !== undefined && (obj.contentId = message.contentId);
    message.classParentIscnIdPrefix !== undefined &&
      (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined &&
      (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventDeleteBlindBoxContent>
  ): EventDeleteBlindBoxContent {
    const message = {
      ...baseEventDeleteBlindBoxContent,
    } as EventDeleteBlindBoxContent;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.contentId !== undefined && object.contentId !== null) {
      message.contentId = object.contentId;
    } else {
      message.contentId = "";
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

const baseEventCreateOffer: object = { classId: "", nftId: "", buyer: "" };

export const EventCreateOffer = {
  encode(
    message: EventCreateOffer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateOffer } as EventCreateOffer;
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
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateOffer {
    const message = { ...baseEventCreateOffer } as EventCreateOffer;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    return message;
  },

  toJSON(message: EventCreateOffer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateOffer>): EventCreateOffer {
    const message = { ...baseEventCreateOffer } as EventCreateOffer;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    return message;
  },
};

const baseEventUpdateOffer: object = { classId: "", nftId: "", buyer: "" };

export const EventUpdateOffer = {
  encode(
    message: EventUpdateOffer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateOffer } as EventUpdateOffer;
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
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateOffer {
    const message = { ...baseEventUpdateOffer } as EventUpdateOffer;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    return message;
  },

  toJSON(message: EventUpdateOffer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateOffer>): EventUpdateOffer {
    const message = { ...baseEventUpdateOffer } as EventUpdateOffer;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    return message;
  },
};

const baseEventDeleteOffer: object = { classId: "", nftId: "", buyer: "" };

export const EventDeleteOffer = {
  encode(
    message: EventDeleteOffer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventDeleteOffer } as EventDeleteOffer;
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
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeleteOffer {
    const message = { ...baseEventDeleteOffer } as EventDeleteOffer;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    return message;
  },

  toJSON(message: EventDeleteOffer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDeleteOffer>): EventDeleteOffer {
    const message = { ...baseEventDeleteOffer } as EventDeleteOffer;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    return message;
  },
};

const baseEventCreateListing: object = { classId: "", nftId: "", seller: "" };

export const EventCreateListing = {
  encode(
    message: EventCreateListing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateListing } as EventCreateListing;
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
          message.seller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateListing {
    const message = { ...baseEventCreateListing } as EventCreateListing;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    return message;
  },

  toJSON(message: EventCreateListing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateListing>): EventCreateListing {
    const message = { ...baseEventCreateListing } as EventCreateListing;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    return message;
  },
};

const baseEventUpdateListing: object = { classId: "", nftId: "", seller: "" };

export const EventUpdateListing = {
  encode(
    message: EventUpdateListing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateListing } as EventUpdateListing;
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
          message.seller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateListing {
    const message = { ...baseEventUpdateListing } as EventUpdateListing;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    return message;
  },

  toJSON(message: EventUpdateListing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateListing>): EventUpdateListing {
    const message = { ...baseEventUpdateListing } as EventUpdateListing;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    return message;
  },
};

const baseEventDeleteListing: object = { classId: "", nftId: "", seller: "" };

export const EventDeleteListing = {
  encode(
    message: EventDeleteListing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventDeleteListing } as EventDeleteListing;
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
          message.seller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeleteListing {
    const message = { ...baseEventDeleteListing } as EventDeleteListing;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    return message;
  },

  toJSON(message: EventDeleteListing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDeleteListing>): EventDeleteListing {
    const message = { ...baseEventDeleteListing } as EventDeleteListing;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    return message;
  },
};

const baseEventSellNFT: object = {
  classId: "",
  nftId: "",
  seller: "",
  buyer: "",
  price: Long.UZERO,
  fullPayToRoyalty: false,
};

export const EventSellNFT = {
  encode(
    message: EventSellNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }
    if (!message.price.isZero()) {
      writer.uint32(40).uint64(message.price);
    }
    if (message.fullPayToRoyalty === true) {
      writer.uint32(48).bool(message.fullPayToRoyalty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSellNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventSellNFT } as EventSellNFT;
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
          message.seller = reader.string();
          break;
        case 4:
          message.buyer = reader.string();
          break;
        case 5:
          message.price = reader.uint64() as Long;
          break;
        case 6:
          message.fullPayToRoyalty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSellNFT {
    const message = { ...baseEventSellNFT } as EventSellNFT;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    if (
      object.fullPayToRoyalty !== undefined &&
      object.fullPayToRoyalty !== null
    ) {
      message.fullPayToRoyalty = Boolean(object.fullPayToRoyalty);
    } else {
      message.fullPayToRoyalty = false;
    }
    return message;
  },

  toJSON(message: EventSellNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    message.fullPayToRoyalty !== undefined &&
      (obj.fullPayToRoyalty = message.fullPayToRoyalty);
    return obj;
  },

  fromPartial(object: DeepPartial<EventSellNFT>): EventSellNFT {
    const message = { ...baseEventSellNFT } as EventSellNFT;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    if (
      object.fullPayToRoyalty !== undefined &&
      object.fullPayToRoyalty !== null
    ) {
      message.fullPayToRoyalty = object.fullPayToRoyalty;
    } else {
      message.fullPayToRoyalty = false;
    }
    return message;
  },
};

const baseEventBuyNFT: object = {
  classId: "",
  nftId: "",
  seller: "",
  buyer: "",
  price: Long.UZERO,
};

export const EventBuyNFT = {
  encode(
    message: EventBuyNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }
    if (!message.price.isZero()) {
      writer.uint32(40).uint64(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventBuyNFT } as EventBuyNFT;
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
          message.seller = reader.string();
          break;
        case 4:
          message.buyer = reader.string();
          break;
        case 5:
          message.price = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBuyNFT {
    const message = { ...baseEventBuyNFT } as EventBuyNFT;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    return message;
  },

  toJSON(message: EventBuyNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventBuyNFT>): EventBuyNFT {
    const message = { ...baseEventBuyNFT } as EventBuyNFT;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    return message;
  },
};

const baseEventExpireOffer: object = {
  classId: "",
  nftId: "",
  buyer: "",
  success: false,
  error: "",
};

export const EventExpireOffer = {
  encode(
    message: EventExpireOffer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExpireOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventExpireOffer } as EventExpireOffer;
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
          message.buyer = reader.string();
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

  fromJSON(object: any): EventExpireOffer {
    const message = { ...baseEventExpireOffer } as EventExpireOffer;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
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

  toJSON(message: EventExpireOffer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<EventExpireOffer>): EventExpireOffer {
    const message = { ...baseEventExpireOffer } as EventExpireOffer;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
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

const baseEventExpireListing: object = {
  classId: "",
  nftId: "",
  seller: "",
  success: false,
  error: "",
};

export const EventExpireListing = {
  encode(
    message: EventExpireListing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExpireListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventExpireListing } as EventExpireListing;
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
          message.seller = reader.string();
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

  fromJSON(object: any): EventExpireListing {
    const message = { ...baseEventExpireListing } as EventExpireListing;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
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

  toJSON(message: EventExpireListing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<EventExpireListing>): EventExpireListing {
    const message = { ...baseEventExpireListing } as EventExpireListing;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
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

const baseEventCreateRoyaltyConfig: object = { classId: "" };

export const EventCreateRoyaltyConfig = {
  encode(
    message: EventCreateRoyaltyConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventCreateRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventCreateRoyaltyConfig,
    } as EventCreateRoyaltyConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateRoyaltyConfig {
    const message = {
      ...baseEventCreateRoyaltyConfig,
    } as EventCreateRoyaltyConfig;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: EventCreateRoyaltyConfig): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventCreateRoyaltyConfig>
  ): EventCreateRoyaltyConfig {
    const message = {
      ...baseEventCreateRoyaltyConfig,
    } as EventCreateRoyaltyConfig;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseEventUpdateRoyaltyConfig: object = { classId: "" };

export const EventUpdateRoyaltyConfig = {
  encode(
    message: EventUpdateRoyaltyConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventUpdateRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventUpdateRoyaltyConfig,
    } as EventUpdateRoyaltyConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateRoyaltyConfig {
    const message = {
      ...baseEventUpdateRoyaltyConfig,
    } as EventUpdateRoyaltyConfig;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: EventUpdateRoyaltyConfig): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventUpdateRoyaltyConfig>
  ): EventUpdateRoyaltyConfig {
    const message = {
      ...baseEventUpdateRoyaltyConfig,
    } as EventUpdateRoyaltyConfig;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseEventDeleteRoyaltyConfig: object = { classId: "" };

export const EventDeleteRoyaltyConfig = {
  encode(
    message: EventDeleteRoyaltyConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventDeleteRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventDeleteRoyaltyConfig,
    } as EventDeleteRoyaltyConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeleteRoyaltyConfig {
    const message = {
      ...baseEventDeleteRoyaltyConfig,
    } as EventDeleteRoyaltyConfig;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: EventDeleteRoyaltyConfig): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventDeleteRoyaltyConfig>
  ): EventDeleteRoyaltyConfig {
    const message = {
      ...baseEventDeleteRoyaltyConfig,
    } as EventDeleteRoyaltyConfig;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
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
