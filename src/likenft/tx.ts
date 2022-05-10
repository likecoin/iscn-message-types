/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ClassParentInput, ClassInput } from "../likenft/class_input";
import { Class, NFT } from "../cosmos/nft/v1beta1/nft";
import { NFTInput } from "../likenft/nft_input";

export const protobufPackage = "likechain.likenft";

export interface MsgNewClass {
  creator: string;
  parent?: ClassParentInput;
  input?: ClassInput;
}

export interface MsgNewClassResponse {
  class?: Class;
}

export interface MsgUpdateClass {
  creator: string;
  classId: string;
  input?: ClassInput;
}

export interface MsgUpdateClassResponse {
  class?: Class;
}

export interface MsgMintNFT {
  creator: string;
  classId: string;
  id: string;
  input?: NFTInput;
}

export interface MsgMintNFTResponse {
  nft?: NFT;
}

export interface MsgBurnNFT {
  creator: string;
  classId: string;
  nftId: string;
}

export interface MsgBurnNFTResponse {}

export interface MsgCreateMintableNFT {
  creator: string;
  classId: string;
  id: string;
  input?: NFTInput;
}

export interface MsgCreateMintableNFTResponse {}

export interface MsgUpdateMintableNFT {
  creator: string;
  classId: string;
  id: string;
  input?: NFTInput;
}

export interface MsgUpdateMintableNFTResponse {}

export interface MsgDeleteMintableNFT {
  creator: string;
  classId: string;
  id: string;
}

export interface MsgDeleteMintableNFTResponse {}

const baseMsgNewClass: object = { creator: "" };

export const MsgNewClass = {
  encode(
    message: MsgNewClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.parent !== undefined) {
      ClassParentInput.encode(
        message.parent,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.input !== undefined) {
      ClassInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgNewClass } as MsgNewClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.parent = ClassParentInput.decode(reader, reader.uint32());
          break;
        case 3:
          message.input = ClassInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewClass {
    const message = { ...baseMsgNewClass } as MsgNewClass;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = ClassParentInput.fromJSON(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = ClassInput.fromJSON(object.input);
    } else {
      message.input = undefined;
    }
    return message;
  },

  toJSON(message: MsgNewClass): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? ClassParentInput.toJSON(message.parent)
        : undefined);
    message.input !== undefined &&
      (obj.input = message.input
        ? ClassInput.toJSON(message.input)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgNewClass>): MsgNewClass {
    const message = { ...baseMsgNewClass } as MsgNewClass;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = ClassParentInput.fromPartial(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = ClassInput.fromPartial(object.input);
    } else {
      message.input = undefined;
    }
    return message;
  },
};

const baseMsgNewClassResponse: object = {};

export const MsgNewClassResponse = {
  encode(
    message: MsgNewClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgNewClassResponse } as MsgNewClassResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewClassResponse {
    const message = { ...baseMsgNewClassResponse } as MsgNewClassResponse;
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromJSON(object.class);
    } else {
      message.class = undefined;
    }
    return message;
  },

  toJSON(message: MsgNewClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined &&
      (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgNewClassResponse>): MsgNewClassResponse {
    const message = { ...baseMsgNewClassResponse } as MsgNewClassResponse;
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromPartial(object.class);
    } else {
      message.class = undefined;
    }
    return message;
  },
};

const baseMsgUpdateClass: object = { creator: "", classId: "" };

export const MsgUpdateClass = {
  encode(
    message: MsgUpdateClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.input !== undefined) {
      ClassInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateClass } as MsgUpdateClass;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.input = ClassInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClass {
    const message = { ...baseMsgUpdateClass } as MsgUpdateClass;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = ClassInput.fromJSON(object.input);
    } else {
      message.input = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateClass): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.input !== undefined &&
      (obj.input = message.input
        ? ClassInput.toJSON(message.input)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateClass>): MsgUpdateClass {
    const message = { ...baseMsgUpdateClass } as MsgUpdateClass;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = ClassInput.fromPartial(object.input);
    } else {
      message.input = undefined;
    }
    return message;
  },
};

const baseMsgUpdateClassResponse: object = {};

export const MsgUpdateClassResponse = {
  encode(
    message: MsgUpdateClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateClassResponse } as MsgUpdateClassResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClassResponse {
    const message = { ...baseMsgUpdateClassResponse } as MsgUpdateClassResponse;
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromJSON(object.class);
    } else {
      message.class = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined &&
      (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateClassResponse>
  ): MsgUpdateClassResponse {
    const message = { ...baseMsgUpdateClassResponse } as MsgUpdateClassResponse;
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromPartial(object.class);
    } else {
      message.class = undefined;
    }
    return message;
  },
};

const baseMsgMintNFT: object = { creator: "", classId: "", id: "" };

export const MsgMintNFT = {
  encode(
    message: MsgMintNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.input = NFTInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined &&
      (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT {
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgMintNFTResponse: object = {};

export const MsgMintNFTResponse = {
  encode(
    message: MsgMintNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFTResponse {
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromJSON(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },

  toJSON(message: MsgMintNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromPartial(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },
};

const baseMsgBurnNFT: object = { creator: "", classId: "", nftId: "" };

export const MsgBurnNFT = {
  encode(
    message: MsgBurnNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNFT {
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnNFT>): MsgBurnNFT {
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgBurnNFTResponse: object = {};

export const MsgBurnNFTResponse = {
  encode(
    _: MsgBurnNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBurnNFTResponse {
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse;
    return message;
  },

  toJSON(_: MsgBurnNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse;
    return message;
  },
};

const baseMsgCreateMintableNFT: object = { creator: "", classId: "", id: "" };

export const MsgCreateMintableNFT = {
  encode(
    message: MsgCreateMintableNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateMintableNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMintableNFT } as MsgCreateMintableNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.input = NFTInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMintableNFT {
    const message = { ...baseMsgCreateMintableNFT } as MsgCreateMintableNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgCreateMintableNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined &&
      (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMintableNFT>): MsgCreateMintableNFT {
    const message = { ...baseMsgCreateMintableNFT } as MsgCreateMintableNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgCreateMintableNFTResponse: object = {};

export const MsgCreateMintableNFTResponse = {
  encode(
    _: MsgCreateMintableNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateMintableNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMintableNFTResponse,
    } as MsgCreateMintableNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateMintableNFTResponse {
    const message = {
      ...baseMsgCreateMintableNFTResponse,
    } as MsgCreateMintableNFTResponse;
    return message;
  },

  toJSON(_: MsgCreateMintableNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMintableNFTResponse>
  ): MsgCreateMintableNFTResponse {
    const message = {
      ...baseMsgCreateMintableNFTResponse,
    } as MsgCreateMintableNFTResponse;
    return message;
  },
};

const baseMsgUpdateMintableNFT: object = { creator: "", classId: "", id: "" };

export const MsgUpdateMintableNFT = {
  encode(
    message: MsgUpdateMintableNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMintableNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMintableNFT } as MsgUpdateMintableNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.input = NFTInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMintableNFT {
    const message = { ...baseMsgUpdateMintableNFT } as MsgUpdateMintableNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgUpdateMintableNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined &&
      (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMintableNFT>): MsgUpdateMintableNFT {
    const message = { ...baseMsgUpdateMintableNFT } as MsgUpdateMintableNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgUpdateMintableNFTResponse: object = {};

export const MsgUpdateMintableNFTResponse = {
  encode(
    _: MsgUpdateMintableNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMintableNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMintableNFTResponse,
    } as MsgUpdateMintableNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMintableNFTResponse {
    const message = {
      ...baseMsgUpdateMintableNFTResponse,
    } as MsgUpdateMintableNFTResponse;
    return message;
  },

  toJSON(_: MsgUpdateMintableNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMintableNFTResponse>
  ): MsgUpdateMintableNFTResponse {
    const message = {
      ...baseMsgUpdateMintableNFTResponse,
    } as MsgUpdateMintableNFTResponse;
    return message;
  },
};

const baseMsgDeleteMintableNFT: object = { creator: "", classId: "", id: "" };

export const MsgDeleteMintableNFT = {
  encode(
    message: MsgDeleteMintableNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteMintableNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMintableNFT } as MsgDeleteMintableNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMintableNFT {
    const message = { ...baseMsgDeleteMintableNFT } as MsgDeleteMintableNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgDeleteMintableNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMintableNFT>): MsgDeleteMintableNFT {
    const message = { ...baseMsgDeleteMintableNFT } as MsgDeleteMintableNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgDeleteMintableNFTResponse: object = {};

export const MsgDeleteMintableNFTResponse = {
  encode(
    _: MsgDeleteMintableNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteMintableNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMintableNFTResponse,
    } as MsgDeleteMintableNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteMintableNFTResponse {
    const message = {
      ...baseMsgDeleteMintableNFTResponse,
    } as MsgDeleteMintableNFTResponse;
    return message;
  },

  toJSON(_: MsgDeleteMintableNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMintableNFTResponse>
  ): MsgDeleteMintableNFTResponse {
    const message = {
      ...baseMsgDeleteMintableNFTResponse,
    } as MsgDeleteMintableNFTResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  NewClass(request: MsgNewClass): Promise<MsgNewClassResponse>;
  UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  CreateMintableNFT(
    request: MsgCreateMintableNFT
  ): Promise<MsgCreateMintableNFTResponse>;
  UpdateMintableNFT(
    request: MsgUpdateMintableNFT
  ): Promise<MsgUpdateMintableNFTResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteMintableNFT(
    request: MsgDeleteMintableNFT
  ): Promise<MsgDeleteMintableNFTResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.NewClass = this.NewClass.bind(this);
    this.UpdateClass = this.UpdateClass.bind(this);
    this.MintNFT = this.MintNFT.bind(this);
    this.BurnNFT = this.BurnNFT.bind(this);
    this.CreateMintableNFT = this.CreateMintableNFT.bind(this);
    this.UpdateMintableNFT = this.UpdateMintableNFT.bind(this);
    this.DeleteMintableNFT = this.DeleteMintableNFT.bind(this);
  }
  NewClass(request: MsgNewClass): Promise<MsgNewClassResponse> {
    const data = MsgNewClass.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.Msg", "NewClass", data);
    return promise.then((data) =>
      MsgNewClassResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse> {
    const data = MsgUpdateClass.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.Msg",
      "UpdateClass",
      data
    );
    return promise.then((data) =>
      MsgUpdateClassResponse.decode(new _m0.Reader(data))
    );
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.Msg", "MintNFT", data);
    return promise.then((data) =>
      MsgMintNFTResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.Msg", "BurnNFT", data);
    return promise.then((data) =>
      MsgBurnNFTResponse.decode(new _m0.Reader(data))
    );
  }

  CreateMintableNFT(
    request: MsgCreateMintableNFT
  ): Promise<MsgCreateMintableNFTResponse> {
    const data = MsgCreateMintableNFT.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.Msg",
      "CreateMintableNFT",
      data
    );
    return promise.then((data) =>
      MsgCreateMintableNFTResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMintableNFT(
    request: MsgUpdateMintableNFT
  ): Promise<MsgUpdateMintableNFTResponse> {
    const data = MsgUpdateMintableNFT.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.Msg",
      "UpdateMintableNFT",
      data
    );
    return promise.then((data) =>
      MsgUpdateMintableNFTResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteMintableNFT(
    request: MsgDeleteMintableNFT
  ): Promise<MsgDeleteMintableNFTResponse> {
    const data = MsgDeleteMintableNFT.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.Msg",
      "DeleteMintableNFT",
      data
    );
    return promise.then((data) =>
      MsgDeleteMintableNFTResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
