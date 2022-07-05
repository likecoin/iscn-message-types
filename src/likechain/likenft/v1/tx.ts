/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ClassParentInput,
  ClassInput,
} from "../../../likechain/likenft/v1/class_input";
import { Class, NFT } from "../../../backport/nft/v1beta1/nft";
import { NFTInput } from "../../../likechain/likenft/v1/nft_input";
import { BlindBoxContent } from "../../../likechain/likenft/v1/blind_box_content";
import { Offer } from "../../../likechain/likenft/v1/offer";
import { Listing } from "../../../likechain/likenft/v1/listing";
import {
  RoyaltyConfigInput,
  RoyaltyConfig,
} from "../../../likechain/likenft/v1/royalty_config";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "likechain.likenft.v1";

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

export interface MsgCreateBlindBoxContent {
  creator: string;
  classId: string;
  id: string;
  input?: NFTInput;
}

export interface MsgCreateBlindBoxContentResponse {
  blindBoxContent?: BlindBoxContent;
}

export interface MsgUpdateBlindBoxContent {
  creator: string;
  classId: string;
  id: string;
  input?: NFTInput;
}

export interface MsgUpdateBlindBoxContentResponse {
  blindBoxContent?: BlindBoxContent;
}

export interface MsgDeleteBlindBoxContent {
  creator: string;
  classId: string;
  id: string;
}

export interface MsgDeleteBlindBoxContentResponse {}

export interface MsgCreateOffer {
  creator: string;
  classId: string;
  nftId: string;
  price: Long;
  expiration?: Date;
}

export interface MsgCreateOfferResponse {
  offer?: Offer;
}

export interface MsgUpdateOffer {
  creator: string;
  classId: string;
  nftId: string;
  price: Long;
  expiration?: Date;
}

export interface MsgUpdateOfferResponse {
  offer?: Offer;
}

export interface MsgDeleteOffer {
  creator: string;
  classId: string;
  nftId: string;
}

export interface MsgDeleteOfferResponse {}

export interface MsgCreateListing {
  creator: string;
  classId: string;
  nftId: string;
  price: Long;
  expiration?: Date;
}

export interface MsgCreateListingResponse {
  listing?: Listing;
}

export interface MsgUpdateListing {
  creator: string;
  classId: string;
  nftId: string;
  price: Long;
  expiration?: Date;
}

export interface MsgUpdateListingResponse {
  listing?: Listing;
}

export interface MsgDeleteListing {
  creator: string;
  classId: string;
  nftId: string;
}

export interface MsgDeleteListingResponse {}

export interface MsgSellNFT {
  creator: string;
  classId: string;
  nftId: string;
  buyer: string;
  price: Long;
}

export interface MsgSellNFTResponse {}

export interface MsgBuyNFT {
  creator: string;
  classId: string;
  nftId: string;
  seller: string;
  price: Long;
}

export interface MsgBuyNFTResponse {}

export interface MsgCreateRoyaltyConfig {
  creator: string;
  classId: string;
  royaltyConfig?: RoyaltyConfigInput;
}

export interface MsgCreateRoyaltyConfigResponse {
  royaltyConfig?: RoyaltyConfig;
}

export interface MsgUpdateRoyaltyConfig {
  creator: string;
  classId: string;
  royaltyConfig?: RoyaltyConfigInput;
}

export interface MsgUpdateRoyaltyConfigResponse {
  royaltyConfig?: RoyaltyConfig;
}

export interface MsgDeleteRoyaltyConfig {
  creator: string;
  classId: string;
}

export interface MsgDeleteRoyaltyConfigResponse {}

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

const baseMsgCreateBlindBoxContent: object = {
  creator: "",
  classId: "",
  id: "",
};

export const MsgCreateBlindBoxContent = {
  encode(
    message: MsgCreateBlindBoxContent,
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
  ): MsgCreateBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBlindBoxContent,
    } as MsgCreateBlindBoxContent;
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

  fromJSON(object: any): MsgCreateBlindBoxContent {
    const message = {
      ...baseMsgCreateBlindBoxContent,
    } as MsgCreateBlindBoxContent;
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

  toJSON(message: MsgCreateBlindBoxContent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined &&
      (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateBlindBoxContent>
  ): MsgCreateBlindBoxContent {
    const message = {
      ...baseMsgCreateBlindBoxContent,
    } as MsgCreateBlindBoxContent;
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

const baseMsgCreateBlindBoxContentResponse: object = {};

export const MsgCreateBlindBoxContentResponse = {
  encode(
    message: MsgCreateBlindBoxContentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(
        message.blindBoxContent,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateBlindBoxContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBlindBoxContentResponse,
    } as MsgCreateBlindBoxContentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blindBoxContent = BlindBoxContent.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBlindBoxContentResponse {
    const message = {
      ...baseMsgCreateBlindBoxContentResponse,
    } as MsgCreateBlindBoxContentResponse;
    if (
      object.blindBoxContent !== undefined &&
      object.blindBoxContent !== null
    ) {
      message.blindBoxContent = BlindBoxContent.fromJSON(
        object.blindBoxContent
      );
    } else {
      message.blindBoxContent = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateBlindBoxContentResponse): unknown {
    const obj: any = {};
    message.blindBoxContent !== undefined &&
      (obj.blindBoxContent = message.blindBoxContent
        ? BlindBoxContent.toJSON(message.blindBoxContent)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateBlindBoxContentResponse>
  ): MsgCreateBlindBoxContentResponse {
    const message = {
      ...baseMsgCreateBlindBoxContentResponse,
    } as MsgCreateBlindBoxContentResponse;
    if (
      object.blindBoxContent !== undefined &&
      object.blindBoxContent !== null
    ) {
      message.blindBoxContent = BlindBoxContent.fromPartial(
        object.blindBoxContent
      );
    } else {
      message.blindBoxContent = undefined;
    }
    return message;
  },
};

const baseMsgUpdateBlindBoxContent: object = {
  creator: "",
  classId: "",
  id: "",
};

export const MsgUpdateBlindBoxContent = {
  encode(
    message: MsgUpdateBlindBoxContent,
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
  ): MsgUpdateBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBlindBoxContent,
    } as MsgUpdateBlindBoxContent;
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

  fromJSON(object: any): MsgUpdateBlindBoxContent {
    const message = {
      ...baseMsgUpdateBlindBoxContent,
    } as MsgUpdateBlindBoxContent;
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

  toJSON(message: MsgUpdateBlindBoxContent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined &&
      (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateBlindBoxContent>
  ): MsgUpdateBlindBoxContent {
    const message = {
      ...baseMsgUpdateBlindBoxContent,
    } as MsgUpdateBlindBoxContent;
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

const baseMsgUpdateBlindBoxContentResponse: object = {};

export const MsgUpdateBlindBoxContentResponse = {
  encode(
    message: MsgUpdateBlindBoxContentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(
        message.blindBoxContent,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateBlindBoxContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBlindBoxContentResponse,
    } as MsgUpdateBlindBoxContentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blindBoxContent = BlindBoxContent.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBlindBoxContentResponse {
    const message = {
      ...baseMsgUpdateBlindBoxContentResponse,
    } as MsgUpdateBlindBoxContentResponse;
    if (
      object.blindBoxContent !== undefined &&
      object.blindBoxContent !== null
    ) {
      message.blindBoxContent = BlindBoxContent.fromJSON(
        object.blindBoxContent
      );
    } else {
      message.blindBoxContent = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateBlindBoxContentResponse): unknown {
    const obj: any = {};
    message.blindBoxContent !== undefined &&
      (obj.blindBoxContent = message.blindBoxContent
        ? BlindBoxContent.toJSON(message.blindBoxContent)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateBlindBoxContentResponse>
  ): MsgUpdateBlindBoxContentResponse {
    const message = {
      ...baseMsgUpdateBlindBoxContentResponse,
    } as MsgUpdateBlindBoxContentResponse;
    if (
      object.blindBoxContent !== undefined &&
      object.blindBoxContent !== null
    ) {
      message.blindBoxContent = BlindBoxContent.fromPartial(
        object.blindBoxContent
      );
    } else {
      message.blindBoxContent = undefined;
    }
    return message;
  },
};

const baseMsgDeleteBlindBoxContent: object = {
  creator: "",
  classId: "",
  id: "",
};

export const MsgDeleteBlindBoxContent = {
  encode(
    message: MsgDeleteBlindBoxContent,
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
  ): MsgDeleteBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBlindBoxContent,
    } as MsgDeleteBlindBoxContent;
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

  fromJSON(object: any): MsgDeleteBlindBoxContent {
    const message = {
      ...baseMsgDeleteBlindBoxContent,
    } as MsgDeleteBlindBoxContent;
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

  toJSON(message: MsgDeleteBlindBoxContent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteBlindBoxContent>
  ): MsgDeleteBlindBoxContent {
    const message = {
      ...baseMsgDeleteBlindBoxContent,
    } as MsgDeleteBlindBoxContent;
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

const baseMsgDeleteBlindBoxContentResponse: object = {};

export const MsgDeleteBlindBoxContentResponse = {
  encode(
    _: MsgDeleteBlindBoxContentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteBlindBoxContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBlindBoxContentResponse,
    } as MsgDeleteBlindBoxContentResponse;
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

  fromJSON(_: any): MsgDeleteBlindBoxContentResponse {
    const message = {
      ...baseMsgDeleteBlindBoxContentResponse,
    } as MsgDeleteBlindBoxContentResponse;
    return message;
  },

  toJSON(_: MsgDeleteBlindBoxContentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBlindBoxContentResponse>
  ): MsgDeleteBlindBoxContentResponse {
    const message = {
      ...baseMsgDeleteBlindBoxContentResponse,
    } as MsgDeleteBlindBoxContentResponse;
    return message;
  },
};

const baseMsgCreateOffer: object = {
  creator: "",
  classId: "",
  nftId: "",
  price: Long.UZERO,
};

export const MsgCreateOffer = {
  encode(
    message: MsgCreateOffer,
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
    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOffer } as MsgCreateOffer;
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
        case 4:
          message.price = reader.uint64() as Long;
          break;
        case 5:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOffer {
    const message = { ...baseMsgCreateOffer } as MsgCreateOffer;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromJsonTimestamp(object.expiration);
    } else {
      message.expiration = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOffer>): MsgCreateOffer {
    const message = { ...baseMsgCreateOffer } as MsgCreateOffer;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = object.expiration;
    } else {
      message.expiration = undefined;
    }
    return message;
  },
};

const baseMsgCreateOfferResponse: object = {};

export const MsgCreateOfferResponse = {
  encode(
    message: MsgCreateOfferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOfferResponse } as MsgCreateOfferResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offer = Offer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOfferResponse {
    const message = { ...baseMsgCreateOfferResponse } as MsgCreateOfferResponse;
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Offer.fromJSON(object.offer);
    } else {
      message.offer = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateOfferResponse): unknown {
    const obj: any = {};
    message.offer !== undefined &&
      (obj.offer = message.offer ? Offer.toJSON(message.offer) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateOfferResponse>
  ): MsgCreateOfferResponse {
    const message = { ...baseMsgCreateOfferResponse } as MsgCreateOfferResponse;
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Offer.fromPartial(object.offer);
    } else {
      message.offer = undefined;
    }
    return message;
  },
};

const baseMsgUpdateOffer: object = {
  creator: "",
  classId: "",
  nftId: "",
  price: Long.UZERO,
};

export const MsgUpdateOffer = {
  encode(
    message: MsgUpdateOffer,
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
    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOffer } as MsgUpdateOffer;
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
        case 4:
          message.price = reader.uint64() as Long;
          break;
        case 5:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOffer {
    const message = { ...baseMsgUpdateOffer } as MsgUpdateOffer;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromJsonTimestamp(object.expiration);
    } else {
      message.expiration = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOffer>): MsgUpdateOffer {
    const message = { ...baseMsgUpdateOffer } as MsgUpdateOffer;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = object.expiration;
    } else {
      message.expiration = undefined;
    }
    return message;
  },
};

const baseMsgUpdateOfferResponse: object = {};

export const MsgUpdateOfferResponse = {
  encode(
    message: MsgUpdateOfferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOfferResponse } as MsgUpdateOfferResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offer = Offer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOfferResponse {
    const message = { ...baseMsgUpdateOfferResponse } as MsgUpdateOfferResponse;
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Offer.fromJSON(object.offer);
    } else {
      message.offer = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateOfferResponse): unknown {
    const obj: any = {};
    message.offer !== undefined &&
      (obj.offer = message.offer ? Offer.toJSON(message.offer) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateOfferResponse>
  ): MsgUpdateOfferResponse {
    const message = { ...baseMsgUpdateOfferResponse } as MsgUpdateOfferResponse;
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Offer.fromPartial(object.offer);
    } else {
      message.offer = undefined;
    }
    return message;
  },
};

const baseMsgDeleteOffer: object = { creator: "", classId: "", nftId: "" };

export const MsgDeleteOffer = {
  encode(
    message: MsgDeleteOffer,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOffer } as MsgDeleteOffer;
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

  fromJSON(object: any): MsgDeleteOffer {
    const message = { ...baseMsgDeleteOffer } as MsgDeleteOffer;
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

  toJSON(message: MsgDeleteOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteOffer>): MsgDeleteOffer {
    const message = { ...baseMsgDeleteOffer } as MsgDeleteOffer;
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

const baseMsgDeleteOfferResponse: object = {};

export const MsgDeleteOfferResponse = {
  encode(
    _: MsgDeleteOfferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOfferResponse } as MsgDeleteOfferResponse;
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

  fromJSON(_: any): MsgDeleteOfferResponse {
    const message = { ...baseMsgDeleteOfferResponse } as MsgDeleteOfferResponse;
    return message;
  },

  toJSON(_: MsgDeleteOfferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteOfferResponse>): MsgDeleteOfferResponse {
    const message = { ...baseMsgDeleteOfferResponse } as MsgDeleteOfferResponse;
    return message;
  },
};

const baseMsgCreateListing: object = {
  creator: "",
  classId: "",
  nftId: "",
  price: Long.UZERO,
};

export const MsgCreateListing = {
  encode(
    message: MsgCreateListing,
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
    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
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
        case 4:
          message.price = reader.uint64() as Long;
          break;
        case 5:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateListing {
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromJsonTimestamp(object.expiration);
    } else {
      message.expiration = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateListing>): MsgCreateListing {
    const message = { ...baseMsgCreateListing } as MsgCreateListing;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = object.expiration;
    } else {
      message.expiration = undefined;
    }
    return message;
  },
};

const baseMsgCreateListingResponse: object = {};

export const MsgCreateListingResponse = {
  encode(
    message: MsgCreateListingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateListingResponse {
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromJSON(object.listing);
    } else {
      message.listing = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateListingResponse): unknown {
    const obj: any = {};
    message.listing !== undefined &&
      (obj.listing = message.listing
        ? Listing.toJSON(message.listing)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateListingResponse>
  ): MsgCreateListingResponse {
    const message = {
      ...baseMsgCreateListingResponse,
    } as MsgCreateListingResponse;
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromPartial(object.listing);
    } else {
      message.listing = undefined;
    }
    return message;
  },
};

const baseMsgUpdateListing: object = {
  creator: "",
  classId: "",
  nftId: "",
  price: Long.UZERO,
};

export const MsgUpdateListing = {
  encode(
    message: MsgUpdateListing,
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
    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
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
        case 4:
          message.price = reader.uint64() as Long;
          break;
        case 5:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateListing {
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromJsonTimestamp(object.expiration);
    } else {
      message.expiration = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateListing>): MsgUpdateListing {
    const message = { ...baseMsgUpdateListing } as MsgUpdateListing;
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
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = object.expiration;
    } else {
      message.expiration = undefined;
    }
    return message;
  },
};

const baseMsgUpdateListingResponse: object = {};

export const MsgUpdateListingResponse = {
  encode(
    message: MsgUpdateListingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateListingResponse {
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromJSON(object.listing);
    } else {
      message.listing = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateListingResponse): unknown {
    const obj: any = {};
    message.listing !== undefined &&
      (obj.listing = message.listing
        ? Listing.toJSON(message.listing)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateListingResponse>
  ): MsgUpdateListingResponse {
    const message = {
      ...baseMsgUpdateListingResponse,
    } as MsgUpdateListingResponse;
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromPartial(object.listing);
    } else {
      message.listing = undefined;
    }
    return message;
  },
};

const baseMsgDeleteListing: object = { creator: "", classId: "", nftId: "" };

export const MsgDeleteListing = {
  encode(
    message: MsgDeleteListing,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
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

  fromJSON(object: any): MsgDeleteListing {
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
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

  toJSON(message: MsgDeleteListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteListing>): MsgDeleteListing {
    const message = { ...baseMsgDeleteListing } as MsgDeleteListing;
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

const baseMsgDeleteListingResponse: object = {};

export const MsgDeleteListingResponse = {
  encode(
    _: MsgDeleteListingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
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

  fromJSON(_: any): MsgDeleteListingResponse {
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
    return message;
  },

  toJSON(_: MsgDeleteListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteListingResponse>
  ): MsgDeleteListingResponse {
    const message = {
      ...baseMsgDeleteListingResponse,
    } as MsgDeleteListingResponse;
    return message;
  },
};

const baseMsgSellNFT: object = {
  creator: "",
  classId: "",
  nftId: "",
  buyer: "",
  price: Long.UZERO,
};

export const MsgSellNFT = {
  encode(
    message: MsgSellNFT,
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
    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }
    if (!message.price.isZero()) {
      writer.uint32(40).uint64(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellNFT } as MsgSellNFT;
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

  fromJSON(object: any): MsgSellNFT {
    const message = { ...baseMsgSellNFT } as MsgSellNFT;
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

  toJSON(message: MsgSellNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSellNFT>): MsgSellNFT {
    const message = { ...baseMsgSellNFT } as MsgSellNFT;
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

const baseMsgSellNFTResponse: object = {};

export const MsgSellNFTResponse = {
  encode(
    _: MsgSellNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellNFTResponse } as MsgSellNFTResponse;
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

  fromJSON(_: any): MsgSellNFTResponse {
    const message = { ...baseMsgSellNFTResponse } as MsgSellNFTResponse;
    return message;
  },

  toJSON(_: MsgSellNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSellNFTResponse>): MsgSellNFTResponse {
    const message = { ...baseMsgSellNFTResponse } as MsgSellNFTResponse;
    return message;
  },
};

const baseMsgBuyNFT: object = {
  creator: "",
  classId: "",
  nftId: "",
  seller: "",
  price: Long.UZERO,
};

export const MsgBuyNFT = {
  encode(
    message: MsgBuyNFT,
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
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    if (!message.price.isZero()) {
      writer.uint32(40).uint64(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyNFT } as MsgBuyNFT;
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
        case 4:
          message.seller = reader.string();
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

  fromJSON(object: any): MsgBuyNFT {
    const message = { ...baseMsgBuyNFT } as MsgBuyNFT;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Long.fromString(object.price);
    } else {
      message.price = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgBuyNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyNFT>): MsgBuyNFT {
    const message = { ...baseMsgBuyNFT } as MsgBuyNFT;
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price as Long;
    } else {
      message.price = Long.UZERO;
    }
    return message;
  },
};

const baseMsgBuyNFTResponse: object = {};

export const MsgBuyNFTResponse = {
  encode(
    _: MsgBuyNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyNFTResponse } as MsgBuyNFTResponse;
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

  fromJSON(_: any): MsgBuyNFTResponse {
    const message = { ...baseMsgBuyNFTResponse } as MsgBuyNFTResponse;
    return message;
  },

  toJSON(_: MsgBuyNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyNFTResponse>): MsgBuyNFTResponse {
    const message = { ...baseMsgBuyNFTResponse } as MsgBuyNFTResponse;
    return message;
  },
};

const baseMsgCreateRoyaltyConfig: object = { creator: "", classId: "" };

export const MsgCreateRoyaltyConfig = {
  encode(
    message: MsgCreateRoyaltyConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfigInput.encode(
        message.royaltyConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRoyaltyConfig } as MsgCreateRoyaltyConfig;
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
          message.royaltyConfig = RoyaltyConfigInput.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRoyaltyConfig {
    const message = { ...baseMsgCreateRoyaltyConfig } as MsgCreateRoyaltyConfig;
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
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfigInput.fromJSON(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateRoyaltyConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.royaltyConfig !== undefined &&
      (obj.royaltyConfig = message.royaltyConfig
        ? RoyaltyConfigInput.toJSON(message.royaltyConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRoyaltyConfig>
  ): MsgCreateRoyaltyConfig {
    const message = { ...baseMsgCreateRoyaltyConfig } as MsgCreateRoyaltyConfig;
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
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfigInput.fromPartial(
        object.royaltyConfig
      );
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },
};

const baseMsgCreateRoyaltyConfigResponse: object = {};

export const MsgCreateRoyaltyConfigResponse = {
  encode(
    message: MsgCreateRoyaltyConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(
        message.royaltyConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateRoyaltyConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRoyaltyConfigResponse,
    } as MsgCreateRoyaltyConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.royaltyConfig = RoyaltyConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRoyaltyConfigResponse {
    const message = {
      ...baseMsgCreateRoyaltyConfigResponse,
    } as MsgCreateRoyaltyConfigResponse;
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfig.fromJSON(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateRoyaltyConfigResponse): unknown {
    const obj: any = {};
    message.royaltyConfig !== undefined &&
      (obj.royaltyConfig = message.royaltyConfig
        ? RoyaltyConfig.toJSON(message.royaltyConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRoyaltyConfigResponse>
  ): MsgCreateRoyaltyConfigResponse {
    const message = {
      ...baseMsgCreateRoyaltyConfigResponse,
    } as MsgCreateRoyaltyConfigResponse;
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfig.fromPartial(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },
};

const baseMsgUpdateRoyaltyConfig: object = { creator: "", classId: "" };

export const MsgUpdateRoyaltyConfig = {
  encode(
    message: MsgUpdateRoyaltyConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfigInput.encode(
        message.royaltyConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRoyaltyConfig } as MsgUpdateRoyaltyConfig;
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
          message.royaltyConfig = RoyaltyConfigInput.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRoyaltyConfig {
    const message = { ...baseMsgUpdateRoyaltyConfig } as MsgUpdateRoyaltyConfig;
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
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfigInput.fromJSON(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateRoyaltyConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.royaltyConfig !== undefined &&
      (obj.royaltyConfig = message.royaltyConfig
        ? RoyaltyConfigInput.toJSON(message.royaltyConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRoyaltyConfig>
  ): MsgUpdateRoyaltyConfig {
    const message = { ...baseMsgUpdateRoyaltyConfig } as MsgUpdateRoyaltyConfig;
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
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfigInput.fromPartial(
        object.royaltyConfig
      );
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },
};

const baseMsgUpdateRoyaltyConfigResponse: object = {};

export const MsgUpdateRoyaltyConfigResponse = {
  encode(
    message: MsgUpdateRoyaltyConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(
        message.royaltyConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRoyaltyConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRoyaltyConfigResponse,
    } as MsgUpdateRoyaltyConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.royaltyConfig = RoyaltyConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRoyaltyConfigResponse {
    const message = {
      ...baseMsgUpdateRoyaltyConfigResponse,
    } as MsgUpdateRoyaltyConfigResponse;
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfig.fromJSON(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateRoyaltyConfigResponse): unknown {
    const obj: any = {};
    message.royaltyConfig !== undefined &&
      (obj.royaltyConfig = message.royaltyConfig
        ? RoyaltyConfig.toJSON(message.royaltyConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRoyaltyConfigResponse>
  ): MsgUpdateRoyaltyConfigResponse {
    const message = {
      ...baseMsgUpdateRoyaltyConfigResponse,
    } as MsgUpdateRoyaltyConfigResponse;
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfig.fromPartial(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },
};

const baseMsgDeleteRoyaltyConfig: object = { creator: "", classId: "" };

export const MsgDeleteRoyaltyConfig = {
  encode(
    message: MsgDeleteRoyaltyConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteRoyaltyConfig } as MsgDeleteRoyaltyConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRoyaltyConfig {
    const message = { ...baseMsgDeleteRoyaltyConfig } as MsgDeleteRoyaltyConfig;
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
    return message;
  },

  toJSON(message: MsgDeleteRoyaltyConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteRoyaltyConfig>
  ): MsgDeleteRoyaltyConfig {
    const message = { ...baseMsgDeleteRoyaltyConfig } as MsgDeleteRoyaltyConfig;
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
    return message;
  },
};

const baseMsgDeleteRoyaltyConfigResponse: object = {};

export const MsgDeleteRoyaltyConfigResponse = {
  encode(
    _: MsgDeleteRoyaltyConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteRoyaltyConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRoyaltyConfigResponse,
    } as MsgDeleteRoyaltyConfigResponse;
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

  fromJSON(_: any): MsgDeleteRoyaltyConfigResponse {
    const message = {
      ...baseMsgDeleteRoyaltyConfigResponse,
    } as MsgDeleteRoyaltyConfigResponse;
    return message;
  },

  toJSON(_: MsgDeleteRoyaltyConfigResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteRoyaltyConfigResponse>
  ): MsgDeleteRoyaltyConfigResponse {
    const message = {
      ...baseMsgDeleteRoyaltyConfigResponse,
    } as MsgDeleteRoyaltyConfigResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  NewClass(request: MsgNewClass): Promise<MsgNewClassResponse>;
  UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  CreateBlindBoxContent(
    request: MsgCreateBlindBoxContent
  ): Promise<MsgCreateBlindBoxContentResponse>;
  UpdateBlindBoxContent(
    request: MsgUpdateBlindBoxContent
  ): Promise<MsgUpdateBlindBoxContentResponse>;
  DeleteBlindBoxContent(
    request: MsgDeleteBlindBoxContent
  ): Promise<MsgDeleteBlindBoxContentResponse>;
  CreateOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse>;
  UpdateOffer(request: MsgUpdateOffer): Promise<MsgUpdateOfferResponse>;
  DeleteOffer(request: MsgDeleteOffer): Promise<MsgDeleteOfferResponse>;
  CreateListing(request: MsgCreateListing): Promise<MsgCreateListingResponse>;
  UpdateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
  DeleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse>;
  SellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse>;
  BuyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
  CreateRoyaltyConfig(
    request: MsgCreateRoyaltyConfig
  ): Promise<MsgCreateRoyaltyConfigResponse>;
  UpdateRoyaltyConfig(
    request: MsgUpdateRoyaltyConfig
  ): Promise<MsgUpdateRoyaltyConfigResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteRoyaltyConfig(
    request: MsgDeleteRoyaltyConfig
  ): Promise<MsgDeleteRoyaltyConfigResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.NewClass = this.NewClass.bind(this);
    this.UpdateClass = this.UpdateClass.bind(this);
    this.MintNFT = this.MintNFT.bind(this);
    this.BurnNFT = this.BurnNFT.bind(this);
    this.CreateBlindBoxContent = this.CreateBlindBoxContent.bind(this);
    this.UpdateBlindBoxContent = this.UpdateBlindBoxContent.bind(this);
    this.DeleteBlindBoxContent = this.DeleteBlindBoxContent.bind(this);
    this.CreateOffer = this.CreateOffer.bind(this);
    this.UpdateOffer = this.UpdateOffer.bind(this);
    this.DeleteOffer = this.DeleteOffer.bind(this);
    this.CreateListing = this.CreateListing.bind(this);
    this.UpdateListing = this.UpdateListing.bind(this);
    this.DeleteListing = this.DeleteListing.bind(this);
    this.SellNFT = this.SellNFT.bind(this);
    this.BuyNFT = this.BuyNFT.bind(this);
    this.CreateRoyaltyConfig = this.CreateRoyaltyConfig.bind(this);
    this.UpdateRoyaltyConfig = this.UpdateRoyaltyConfig.bind(this);
    this.DeleteRoyaltyConfig = this.DeleteRoyaltyConfig.bind(this);
  }
  NewClass(request: MsgNewClass): Promise<MsgNewClassResponse> {
    const data = MsgNewClass.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "NewClass",
      data
    );
    return promise.then((data) =>
      MsgNewClassResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse> {
    const data = MsgUpdateClass.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "UpdateClass",
      data
    );
    return promise.then((data) =>
      MsgUpdateClassResponse.decode(new _m0.Reader(data))
    );
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "MintNFT",
      data
    );
    return promise.then((data) =>
      MsgMintNFTResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "BurnNFT",
      data
    );
    return promise.then((data) =>
      MsgBurnNFTResponse.decode(new _m0.Reader(data))
    );
  }

  CreateBlindBoxContent(
    request: MsgCreateBlindBoxContent
  ): Promise<MsgCreateBlindBoxContentResponse> {
    const data = MsgCreateBlindBoxContent.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "CreateBlindBoxContent",
      data
    );
    return promise.then((data) =>
      MsgCreateBlindBoxContentResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateBlindBoxContent(
    request: MsgUpdateBlindBoxContent
  ): Promise<MsgUpdateBlindBoxContentResponse> {
    const data = MsgUpdateBlindBoxContent.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "UpdateBlindBoxContent",
      data
    );
    return promise.then((data) =>
      MsgUpdateBlindBoxContentResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteBlindBoxContent(
    request: MsgDeleteBlindBoxContent
  ): Promise<MsgDeleteBlindBoxContentResponse> {
    const data = MsgDeleteBlindBoxContent.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "DeleteBlindBoxContent",
      data
    );
    return promise.then((data) =>
      MsgDeleteBlindBoxContentResponse.decode(new _m0.Reader(data))
    );
  }

  CreateOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse> {
    const data = MsgCreateOffer.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "CreateOffer",
      data
    );
    return promise.then((data) =>
      MsgCreateOfferResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateOffer(request: MsgUpdateOffer): Promise<MsgUpdateOfferResponse> {
    const data = MsgUpdateOffer.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "UpdateOffer",
      data
    );
    return promise.then((data) =>
      MsgUpdateOfferResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteOffer(request: MsgDeleteOffer): Promise<MsgDeleteOfferResponse> {
    const data = MsgDeleteOffer.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "DeleteOffer",
      data
    );
    return promise.then((data) =>
      MsgDeleteOfferResponse.decode(new _m0.Reader(data))
    );
  }

  CreateListing(request: MsgCreateListing): Promise<MsgCreateListingResponse> {
    const data = MsgCreateListing.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "CreateListing",
      data
    );
    return promise.then((data) =>
      MsgCreateListingResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse> {
    const data = MsgUpdateListing.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "UpdateListing",
      data
    );
    return promise.then((data) =>
      MsgUpdateListingResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse> {
    const data = MsgDeleteListing.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "DeleteListing",
      data
    );
    return promise.then((data) =>
      MsgDeleteListingResponse.decode(new _m0.Reader(data))
    );
  }

  SellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse> {
    const data = MsgSellNFT.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "SellNFT",
      data
    );
    return promise.then((data) =>
      MsgSellNFTResponse.decode(new _m0.Reader(data))
    );
  }

  BuyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse> {
    const data = MsgBuyNFT.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "BuyNFT",
      data
    );
    return promise.then((data) =>
      MsgBuyNFTResponse.decode(new _m0.Reader(data))
    );
  }

  CreateRoyaltyConfig(
    request: MsgCreateRoyaltyConfig
  ): Promise<MsgCreateRoyaltyConfigResponse> {
    const data = MsgCreateRoyaltyConfig.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "CreateRoyaltyConfig",
      data
    );
    return promise.then((data) =>
      MsgCreateRoyaltyConfigResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateRoyaltyConfig(
    request: MsgUpdateRoyaltyConfig
  ): Promise<MsgUpdateRoyaltyConfigResponse> {
    const data = MsgUpdateRoyaltyConfig.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "UpdateRoyaltyConfig",
      data
    );
    return promise.then((data) =>
      MsgUpdateRoyaltyConfigResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteRoyaltyConfig(
    request: MsgDeleteRoyaltyConfig
  ): Promise<MsgDeleteRoyaltyConfigResponse> {
    const data = MsgDeleteRoyaltyConfig.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Msg",
      "DeleteRoyaltyConfig",
      data
    );
    return promise.then((data) =>
      MsgDeleteRoyaltyConfigResponse.decode(new _m0.Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
