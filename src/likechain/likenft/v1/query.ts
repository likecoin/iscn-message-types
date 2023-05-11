/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../likechain/likenft/v1/params";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { QueryResponseRecord } from "../../../likechain/iscn/query";
import { BlindBoxContent } from "../../../likechain/likenft/v1/blind_box_content";
import { Offer } from "../../../likechain/likenft/v1/offer";
import { Listing } from "../../../likechain/likenft/v1/listing";
import {
  RoyaltyConfig,
  RoyaltyConfigByClass,
} from "../../../likechain/likenft/v1/royalty_config";
import { Class } from "../../../cosmos/nft/v1beta1/nft";
import { ClassesByISCN } from "../../../likechain/likenft/v1/classes_by_iscn";
import { ClassesByAccount } from "../../../likechain/likenft/v1/classes_by_account";

export const protobufPackage = "likechain.likenft.v1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryClassesByISCNRequest {
  iscnIdPrefix: string;
  pagination?: PageRequest;
}

export interface QueryClassesByISCNResponse {
  iscnIdPrefix: string;
  classes: Class[];
  pagination?: PageResponse;
}

export interface QueryClassesByISCNIndexRequest {
  pagination?: PageRequest;
}

export interface QueryClassesByISCNIndexResponse {
  classesByIscns: ClassesByISCN[];
  pagination?: PageResponse;
}

export interface QueryISCNByClassRequest {
  classId: string;
}

export interface QueryISCNByClassResponse {
  iscnIdPrefix: string;
  owner: string;
  latestVersion: Long;
  latestRecord?: QueryResponseRecord;
}

export interface QueryClassesByAccountRequest {
  account: string;
  pagination?: PageRequest;
}

export interface QueryClassesByAccountResponse {
  account: string;
  classes: Class[];
  pagination?: PageResponse;
}

export interface QueryClassesByAccountIndexRequest {
  pagination?: PageRequest;
}

export interface QueryClassesByAccountIndexResponse {
  classesByAccounts: ClassesByAccount[];
  pagination?: PageResponse;
}

export interface QueryAccountByClassRequest {
  classId: string;
}

export interface QueryAccountByClassResponse {
  address: string;
}

export interface QueryBlindBoxContentRequest {
  classId: string;
  id: string;
}

export interface QueryBlindBoxContentResponse {
  blindBoxContent?: BlindBoxContent;
}

export interface QueryBlindBoxContentIndexRequest {
  pagination?: PageRequest;
}

export interface QueryBlindBoxContentIndexResponse {
  blindBoxContents: BlindBoxContent[];
  pagination?: PageResponse;
}

export interface QueryBlindBoxContentsRequest {
  classId: string;
  pagination?: PageRequest;
}

export interface QueryBlindBoxContentsResponse {
  blindBoxContents: BlindBoxContent[];
  pagination?: PageResponse;
}

export interface QueryOfferRequest {
  classId: string;
  nftId: string;
  buyer: string;
}

export interface QueryOfferResponse {
  offer?: Offer;
}

export interface QueryOfferIndexRequest {
  pagination?: PageRequest;
}

export interface QueryOfferIndexResponse {
  offers: Offer[];
  pagination?: PageResponse;
}

export interface QueryOffersByClassRequest {
  classId: string;
  pagination?: PageRequest;
}

export interface QueryOffersByClassResponse {
  offers: Offer[];
  pagination?: PageResponse;
}

export interface QueryOffersByNFTRequest {
  classId: string;
  nftId: string;
  pagination?: PageRequest;
}

export interface QueryOffersByNFTResponse {
  offers: Offer[];
  pagination?: PageResponse;
}

export interface QueryListingRequest {
  classId: string;
  nftId: string;
  seller: string;
}

export interface QueryListingResponse {
  listing?: Listing;
}

export interface QueryListingIndexRequest {
  pagination?: PageRequest;
}

export interface QueryListingIndexResponse {
  listings: Listing[];
  pagination?: PageResponse;
}

export interface QueryListingsByClassRequest {
  classId: string;
  pagination?: PageRequest;
}

export interface QueryListingsByClassResponse {
  listings: Listing[];
  pagination?: PageResponse;
}

export interface QueryListingsByNFTRequest {
  classId: string;
  nftId: string;
  pagination?: PageRequest;
}

export interface QueryListingsByNFTResponse {
  listings: Listing[];
  pagination?: PageResponse;
}

export interface QueryRoyaltyConfigRequest {
  classId: string;
}

export interface QueryRoyaltyConfigResponse {
  royaltyConfig?: RoyaltyConfig;
}

export interface QueryRoyaltyConfigIndexRequest {
  pagination?: PageRequest;
}

export interface QueryRoyaltyConfigIndexResponse {
  royaltyConfigByClass: RoyaltyConfigByClass[];
  pagination?: PageResponse;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryClassesByISCNRequest: object = { iscnIdPrefix: "" };

export const QueryClassesByISCNRequest = {
  encode(
    message: QueryClassesByISCNRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClassesByISCNRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClassesByISCNRequest,
    } as QueryClassesByISCNRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesByISCNRequest {
    const message = {
      ...baseQueryClassesByISCNRequest,
    } as QueryClassesByISCNRequest;
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = String(object.iscnIdPrefix);
    } else {
      message.iscnIdPrefix = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClassesByISCNRequest): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined &&
      (obj.iscnIdPrefix = message.iscnIdPrefix);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClassesByISCNRequest>
  ): QueryClassesByISCNRequest {
    const message = {
      ...baseQueryClassesByISCNRequest,
    } as QueryClassesByISCNRequest;
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = object.iscnIdPrefix;
    } else {
      message.iscnIdPrefix = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryClassesByISCNResponse: object = { iscnIdPrefix: "" };

export const QueryClassesByISCNResponse = {
  encode(
    message: QueryClassesByISCNResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClassesByISCNResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClassesByISCNResponse,
    } as QueryClassesByISCNResponse;
    message.classes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
          break;
        case 2:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesByISCNResponse {
    const message = {
      ...baseQueryClassesByISCNResponse,
    } as QueryClassesByISCNResponse;
    message.classes = [];
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = String(object.iscnIdPrefix);
    } else {
      message.iscnIdPrefix = "";
    }
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(Class.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClassesByISCNResponse): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined &&
      (obj.iscnIdPrefix = message.iscnIdPrefix);
    if (message.classes) {
      obj.classes = message.classes.map((e) =>
        e ? Class.toJSON(e) : undefined
      );
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClassesByISCNResponse>
  ): QueryClassesByISCNResponse {
    const message = {
      ...baseQueryClassesByISCNResponse,
    } as QueryClassesByISCNResponse;
    message.classes = [];
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = object.iscnIdPrefix;
    } else {
      message.iscnIdPrefix = "";
    }
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(Class.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryClassesByISCNIndexRequest: object = {};

export const QueryClassesByISCNIndexRequest = {
  encode(
    message: QueryClassesByISCNIndexRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClassesByISCNIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClassesByISCNIndexRequest,
    } as QueryClassesByISCNIndexRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesByISCNIndexRequest {
    const message = {
      ...baseQueryClassesByISCNIndexRequest,
    } as QueryClassesByISCNIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClassesByISCNIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClassesByISCNIndexRequest>
  ): QueryClassesByISCNIndexRequest {
    const message = {
      ...baseQueryClassesByISCNIndexRequest,
    } as QueryClassesByISCNIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryClassesByISCNIndexResponse: object = {};

export const QueryClassesByISCNIndexResponse = {
  encode(
    message: QueryClassesByISCNIndexResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.classesByIscns) {
      ClassesByISCN.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClassesByISCNIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClassesByISCNIndexResponse,
    } as QueryClassesByISCNIndexResponse;
    message.classesByIscns = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classesByIscns.push(
            ClassesByISCN.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesByISCNIndexResponse {
    const message = {
      ...baseQueryClassesByISCNIndexResponse,
    } as QueryClassesByISCNIndexResponse;
    message.classesByIscns = [];
    if (object.classesByIscns !== undefined && object.classesByIscns !== null) {
      for (const e of object.classesByIscns) {
        message.classesByIscns.push(ClassesByISCN.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClassesByISCNIndexResponse): unknown {
    const obj: any = {};
    if (message.classesByIscns) {
      obj.classesByIscns = message.classesByIscns.map((e) =>
        e ? ClassesByISCN.toJSON(e) : undefined
      );
    } else {
      obj.classesByIscns = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClassesByISCNIndexResponse>
  ): QueryClassesByISCNIndexResponse {
    const message = {
      ...baseQueryClassesByISCNIndexResponse,
    } as QueryClassesByISCNIndexResponse;
    message.classesByIscns = [];
    if (object.classesByIscns !== undefined && object.classesByIscns !== null) {
      for (const e of object.classesByIscns) {
        message.classesByIscns.push(ClassesByISCN.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryISCNByClassRequest: object = { classId: "" };

export const QueryISCNByClassRequest = {
  encode(
    message: QueryISCNByClassRequest,
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
  ): QueryISCNByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryISCNByClassRequest,
    } as QueryISCNByClassRequest;
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

  fromJSON(object: any): QueryISCNByClassRequest {
    const message = {
      ...baseQueryISCNByClassRequest,
    } as QueryISCNByClassRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: QueryISCNByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryISCNByClassRequest>
  ): QueryISCNByClassRequest {
    const message = {
      ...baseQueryISCNByClassRequest,
    } as QueryISCNByClassRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseQueryISCNByClassResponse: object = {
  iscnIdPrefix: "",
  owner: "",
  latestVersion: Long.UZERO,
};

export const QueryISCNByClassResponse = {
  encode(
    message: QueryISCNByClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (!message.latestVersion.isZero()) {
      writer.uint32(24).uint64(message.latestVersion);
    }
    if (message.latestRecord !== undefined) {
      QueryResponseRecord.encode(
        message.latestRecord,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryISCNByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryISCNByClassResponse,
    } as QueryISCNByClassResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.latestVersion = reader.uint64() as Long;
          break;
        case 4:
          message.latestRecord = QueryResponseRecord.decode(
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

  fromJSON(object: any): QueryISCNByClassResponse {
    const message = {
      ...baseQueryISCNByClassResponse,
    } as QueryISCNByClassResponse;
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = String(object.iscnIdPrefix);
    } else {
      message.iscnIdPrefix = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.latestVersion !== undefined && object.latestVersion !== null) {
      message.latestVersion = Long.fromString(object.latestVersion);
    } else {
      message.latestVersion = Long.UZERO;
    }
    if (object.latestRecord !== undefined && object.latestRecord !== null) {
      message.latestRecord = QueryResponseRecord.fromJSON(object.latestRecord);
    } else {
      message.latestRecord = undefined;
    }
    return message;
  },

  toJSON(message: QueryISCNByClassResponse): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined &&
      (obj.iscnIdPrefix = message.iscnIdPrefix);
    message.owner !== undefined && (obj.owner = message.owner);
    message.latestVersion !== undefined &&
      (obj.latestVersion = (message.latestVersion || Long.UZERO).toString());
    message.latestRecord !== undefined &&
      (obj.latestRecord = message.latestRecord
        ? QueryResponseRecord.toJSON(message.latestRecord)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryISCNByClassResponse>
  ): QueryISCNByClassResponse {
    const message = {
      ...baseQueryISCNByClassResponse,
    } as QueryISCNByClassResponse;
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = object.iscnIdPrefix;
    } else {
      message.iscnIdPrefix = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.latestVersion !== undefined && object.latestVersion !== null) {
      message.latestVersion = object.latestVersion as Long;
    } else {
      message.latestVersion = Long.UZERO;
    }
    if (object.latestRecord !== undefined && object.latestRecord !== null) {
      message.latestRecord = QueryResponseRecord.fromPartial(
        object.latestRecord
      );
    } else {
      message.latestRecord = undefined;
    }
    return message;
  },
};

const baseQueryClassesByAccountRequest: object = { account: "" };

export const QueryClassesByAccountRequest = {
  encode(
    message: QueryClassesByAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClassesByAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClassesByAccountRequest,
    } as QueryClassesByAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesByAccountRequest {
    const message = {
      ...baseQueryClassesByAccountRequest,
    } as QueryClassesByAccountRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClassesByAccountRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClassesByAccountRequest>
  ): QueryClassesByAccountRequest {
    const message = {
      ...baseQueryClassesByAccountRequest,
    } as QueryClassesByAccountRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryClassesByAccountResponse: object = { account: "" };

export const QueryClassesByAccountResponse = {
  encode(
    message: QueryClassesByAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClassesByAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClassesByAccountResponse,
    } as QueryClassesByAccountResponse;
    message.classes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesByAccountResponse {
    const message = {
      ...baseQueryClassesByAccountResponse,
    } as QueryClassesByAccountResponse;
    message.classes = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(Class.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClassesByAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.classes) {
      obj.classes = message.classes.map((e) =>
        e ? Class.toJSON(e) : undefined
      );
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClassesByAccountResponse>
  ): QueryClassesByAccountResponse {
    const message = {
      ...baseQueryClassesByAccountResponse,
    } as QueryClassesByAccountResponse;
    message.classes = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(Class.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryClassesByAccountIndexRequest: object = {};

export const QueryClassesByAccountIndexRequest = {
  encode(
    message: QueryClassesByAccountIndexRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClassesByAccountIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClassesByAccountIndexRequest,
    } as QueryClassesByAccountIndexRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesByAccountIndexRequest {
    const message = {
      ...baseQueryClassesByAccountIndexRequest,
    } as QueryClassesByAccountIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClassesByAccountIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClassesByAccountIndexRequest>
  ): QueryClassesByAccountIndexRequest {
    const message = {
      ...baseQueryClassesByAccountIndexRequest,
    } as QueryClassesByAccountIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryClassesByAccountIndexResponse: object = {};

export const QueryClassesByAccountIndexResponse = {
  encode(
    message: QueryClassesByAccountIndexResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.classesByAccounts) {
      ClassesByAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClassesByAccountIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClassesByAccountIndexResponse,
    } as QueryClassesByAccountIndexResponse;
    message.classesByAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classesByAccounts.push(
            ClassesByAccount.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesByAccountIndexResponse {
    const message = {
      ...baseQueryClassesByAccountIndexResponse,
    } as QueryClassesByAccountIndexResponse;
    message.classesByAccounts = [];
    if (
      object.classesByAccounts !== undefined &&
      object.classesByAccounts !== null
    ) {
      for (const e of object.classesByAccounts) {
        message.classesByAccounts.push(ClassesByAccount.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClassesByAccountIndexResponse): unknown {
    const obj: any = {};
    if (message.classesByAccounts) {
      obj.classesByAccounts = message.classesByAccounts.map((e) =>
        e ? ClassesByAccount.toJSON(e) : undefined
      );
    } else {
      obj.classesByAccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClassesByAccountIndexResponse>
  ): QueryClassesByAccountIndexResponse {
    const message = {
      ...baseQueryClassesByAccountIndexResponse,
    } as QueryClassesByAccountIndexResponse;
    message.classesByAccounts = [];
    if (
      object.classesByAccounts !== undefined &&
      object.classesByAccounts !== null
    ) {
      for (const e of object.classesByAccounts) {
        message.classesByAccounts.push(ClassesByAccount.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAccountByClassRequest: object = { classId: "" };

export const QueryAccountByClassRequest = {
  encode(
    message: QueryAccountByClassRequest,
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
  ): QueryAccountByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountByClassRequest,
    } as QueryAccountByClassRequest;
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

  fromJSON(object: any): QueryAccountByClassRequest {
    const message = {
      ...baseQueryAccountByClassRequest,
    } as QueryAccountByClassRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: QueryAccountByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountByClassRequest>
  ): QueryAccountByClassRequest {
    const message = {
      ...baseQueryAccountByClassRequest,
    } as QueryAccountByClassRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseQueryAccountByClassResponse: object = { address: "" };

export const QueryAccountByClassResponse = {
  encode(
    message: QueryAccountByClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountByClassResponse,
    } as QueryAccountByClassResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountByClassResponse {
    const message = {
      ...baseQueryAccountByClassResponse,
    } as QueryAccountByClassResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryAccountByClassResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountByClassResponse>
  ): QueryAccountByClassResponse {
    const message = {
      ...baseQueryAccountByClassResponse,
    } as QueryAccountByClassResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryBlindBoxContentRequest: object = { classId: "", id: "" };

export const QueryBlindBoxContentRequest = {
  encode(
    message: QueryBlindBoxContentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBlindBoxContentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBlindBoxContentRequest,
    } as QueryBlindBoxContentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentRequest {
    const message = {
      ...baseQueryBlindBoxContentRequest,
    } as QueryBlindBoxContentRequest;
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

  toJSON(message: QueryBlindBoxContentRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlindBoxContentRequest>
  ): QueryBlindBoxContentRequest {
    const message = {
      ...baseQueryBlindBoxContentRequest,
    } as QueryBlindBoxContentRequest;
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

const baseQueryBlindBoxContentResponse: object = {};

export const QueryBlindBoxContentResponse = {
  encode(
    message: QueryBlindBoxContentResponse,
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
  ): QueryBlindBoxContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBlindBoxContentResponse,
    } as QueryBlindBoxContentResponse;
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

  fromJSON(object: any): QueryBlindBoxContentResponse {
    const message = {
      ...baseQueryBlindBoxContentResponse,
    } as QueryBlindBoxContentResponse;
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

  toJSON(message: QueryBlindBoxContentResponse): unknown {
    const obj: any = {};
    message.blindBoxContent !== undefined &&
      (obj.blindBoxContent = message.blindBoxContent
        ? BlindBoxContent.toJSON(message.blindBoxContent)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlindBoxContentResponse>
  ): QueryBlindBoxContentResponse {
    const message = {
      ...baseQueryBlindBoxContentResponse,
    } as QueryBlindBoxContentResponse;
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

const baseQueryBlindBoxContentIndexRequest: object = {};

export const QueryBlindBoxContentIndexRequest = {
  encode(
    message: QueryBlindBoxContentIndexRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBlindBoxContentIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBlindBoxContentIndexRequest,
    } as QueryBlindBoxContentIndexRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentIndexRequest {
    const message = {
      ...baseQueryBlindBoxContentIndexRequest,
    } as QueryBlindBoxContentIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryBlindBoxContentIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlindBoxContentIndexRequest>
  ): QueryBlindBoxContentIndexRequest {
    const message = {
      ...baseQueryBlindBoxContentIndexRequest,
    } as QueryBlindBoxContentIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryBlindBoxContentIndexResponse: object = {};

export const QueryBlindBoxContentIndexResponse = {
  encode(
    message: QueryBlindBoxContentIndexResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.blindBoxContents) {
      BlindBoxContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBlindBoxContentIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBlindBoxContentIndexResponse,
    } as QueryBlindBoxContentIndexResponse;
    message.blindBoxContents = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blindBoxContents.push(
            BlindBoxContent.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentIndexResponse {
    const message = {
      ...baseQueryBlindBoxContentIndexResponse,
    } as QueryBlindBoxContentIndexResponse;
    message.blindBoxContents = [];
    if (
      object.blindBoxContents !== undefined &&
      object.blindBoxContents !== null
    ) {
      for (const e of object.blindBoxContents) {
        message.blindBoxContents.push(BlindBoxContent.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryBlindBoxContentIndexResponse): unknown {
    const obj: any = {};
    if (message.blindBoxContents) {
      obj.blindBoxContents = message.blindBoxContents.map((e) =>
        e ? BlindBoxContent.toJSON(e) : undefined
      );
    } else {
      obj.blindBoxContents = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlindBoxContentIndexResponse>
  ): QueryBlindBoxContentIndexResponse {
    const message = {
      ...baseQueryBlindBoxContentIndexResponse,
    } as QueryBlindBoxContentIndexResponse;
    message.blindBoxContents = [];
    if (
      object.blindBoxContents !== undefined &&
      object.blindBoxContents !== null
    ) {
      for (const e of object.blindBoxContents) {
        message.blindBoxContents.push(BlindBoxContent.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryBlindBoxContentsRequest: object = { classId: "" };

export const QueryBlindBoxContentsRequest = {
  encode(
    message: QueryBlindBoxContentsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBlindBoxContentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBlindBoxContentsRequest,
    } as QueryBlindBoxContentsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentsRequest {
    const message = {
      ...baseQueryBlindBoxContentsRequest,
    } as QueryBlindBoxContentsRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryBlindBoxContentsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlindBoxContentsRequest>
  ): QueryBlindBoxContentsRequest {
    const message = {
      ...baseQueryBlindBoxContentsRequest,
    } as QueryBlindBoxContentsRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryBlindBoxContentsResponse: object = {};

export const QueryBlindBoxContentsResponse = {
  encode(
    message: QueryBlindBoxContentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.blindBoxContents) {
      BlindBoxContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBlindBoxContentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBlindBoxContentsResponse,
    } as QueryBlindBoxContentsResponse;
    message.blindBoxContents = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blindBoxContents.push(
            BlindBoxContent.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentsResponse {
    const message = {
      ...baseQueryBlindBoxContentsResponse,
    } as QueryBlindBoxContentsResponse;
    message.blindBoxContents = [];
    if (
      object.blindBoxContents !== undefined &&
      object.blindBoxContents !== null
    ) {
      for (const e of object.blindBoxContents) {
        message.blindBoxContents.push(BlindBoxContent.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryBlindBoxContentsResponse): unknown {
    const obj: any = {};
    if (message.blindBoxContents) {
      obj.blindBoxContents = message.blindBoxContents.map((e) =>
        e ? BlindBoxContent.toJSON(e) : undefined
      );
    } else {
      obj.blindBoxContents = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlindBoxContentsResponse>
  ): QueryBlindBoxContentsResponse {
    const message = {
      ...baseQueryBlindBoxContentsResponse,
    } as QueryBlindBoxContentsResponse;
    message.blindBoxContents = [];
    if (
      object.blindBoxContents !== undefined &&
      object.blindBoxContents !== null
    ) {
      for (const e of object.blindBoxContents) {
        message.blindBoxContents.push(BlindBoxContent.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOfferRequest: object = { classId: "", nftId: "", buyer: "" };

export const QueryOfferRequest = {
  encode(
    message: QueryOfferRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOfferRequest } as QueryOfferRequest;
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

  fromJSON(object: any): QueryOfferRequest {
    const message = { ...baseQueryOfferRequest } as QueryOfferRequest;
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

  toJSON(message: QueryOfferRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOfferRequest>): QueryOfferRequest {
    const message = { ...baseQueryOfferRequest } as QueryOfferRequest;
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

const baseQueryOfferResponse: object = {};

export const QueryOfferResponse = {
  encode(
    message: QueryOfferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOfferResponse } as QueryOfferResponse;
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

  fromJSON(object: any): QueryOfferResponse {
    const message = { ...baseQueryOfferResponse } as QueryOfferResponse;
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Offer.fromJSON(object.offer);
    } else {
      message.offer = undefined;
    }
    return message;
  },

  toJSON(message: QueryOfferResponse): unknown {
    const obj: any = {};
    message.offer !== undefined &&
      (obj.offer = message.offer ? Offer.toJSON(message.offer) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOfferResponse>): QueryOfferResponse {
    const message = { ...baseQueryOfferResponse } as QueryOfferResponse;
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Offer.fromPartial(object.offer);
    } else {
      message.offer = undefined;
    }
    return message;
  },
};

const baseQueryOfferIndexRequest: object = {};

export const QueryOfferIndexRequest = {
  encode(
    message: QueryOfferIndexRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOfferIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOfferIndexRequest } as QueryOfferIndexRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOfferIndexRequest {
    const message = { ...baseQueryOfferIndexRequest } as QueryOfferIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOfferIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOfferIndexRequest>
  ): QueryOfferIndexRequest {
    const message = { ...baseQueryOfferIndexRequest } as QueryOfferIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOfferIndexResponse: object = {};

export const QueryOfferIndexResponse = {
  encode(
    message: QueryOfferIndexResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOfferIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOfferIndexResponse,
    } as QueryOfferIndexResponse;
    message.offers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offers.push(Offer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOfferIndexResponse {
    const message = {
      ...baseQueryOfferIndexResponse,
    } as QueryOfferIndexResponse;
    message.offers = [];
    if (object.offers !== undefined && object.offers !== null) {
      for (const e of object.offers) {
        message.offers.push(Offer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOfferIndexResponse): unknown {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map((e) => (e ? Offer.toJSON(e) : undefined));
    } else {
      obj.offers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOfferIndexResponse>
  ): QueryOfferIndexResponse {
    const message = {
      ...baseQueryOfferIndexResponse,
    } as QueryOfferIndexResponse;
    message.offers = [];
    if (object.offers !== undefined && object.offers !== null) {
      for (const e of object.offers) {
        message.offers.push(Offer.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOffersByClassRequest: object = { classId: "" };

export const QueryOffersByClassRequest = {
  encode(
    message: QueryOffersByClassRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOffersByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOffersByClassRequest,
    } as QueryOffersByClassRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOffersByClassRequest {
    const message = {
      ...baseQueryOffersByClassRequest,
    } as QueryOffersByClassRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOffersByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOffersByClassRequest>
  ): QueryOffersByClassRequest {
    const message = {
      ...baseQueryOffersByClassRequest,
    } as QueryOffersByClassRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOffersByClassResponse: object = {};

export const QueryOffersByClassResponse = {
  encode(
    message: QueryOffersByClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOffersByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOffersByClassResponse,
    } as QueryOffersByClassResponse;
    message.offers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offers.push(Offer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOffersByClassResponse {
    const message = {
      ...baseQueryOffersByClassResponse,
    } as QueryOffersByClassResponse;
    message.offers = [];
    if (object.offers !== undefined && object.offers !== null) {
      for (const e of object.offers) {
        message.offers.push(Offer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOffersByClassResponse): unknown {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map((e) => (e ? Offer.toJSON(e) : undefined));
    } else {
      obj.offers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOffersByClassResponse>
  ): QueryOffersByClassResponse {
    const message = {
      ...baseQueryOffersByClassResponse,
    } as QueryOffersByClassResponse;
    message.offers = [];
    if (object.offers !== undefined && object.offers !== null) {
      for (const e of object.offers) {
        message.offers.push(Offer.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOffersByNFTRequest: object = { classId: "", nftId: "" };

export const QueryOffersByNFTRequest = {
  encode(
    message: QueryOffersByNFTRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOffersByNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOffersByNFTRequest,
    } as QueryOffersByNFTRequest;
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOffersByNFTRequest {
    const message = {
      ...baseQueryOffersByNFTRequest,
    } as QueryOffersByNFTRequest;
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOffersByNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOffersByNFTRequest>
  ): QueryOffersByNFTRequest {
    const message = {
      ...baseQueryOffersByNFTRequest,
    } as QueryOffersByNFTRequest;
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOffersByNFTResponse: object = {};

export const QueryOffersByNFTResponse = {
  encode(
    message: QueryOffersByNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOffersByNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOffersByNFTResponse,
    } as QueryOffersByNFTResponse;
    message.offers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offers.push(Offer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOffersByNFTResponse {
    const message = {
      ...baseQueryOffersByNFTResponse,
    } as QueryOffersByNFTResponse;
    message.offers = [];
    if (object.offers !== undefined && object.offers !== null) {
      for (const e of object.offers) {
        message.offers.push(Offer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOffersByNFTResponse): unknown {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map((e) => (e ? Offer.toJSON(e) : undefined));
    } else {
      obj.offers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOffersByNFTResponse>
  ): QueryOffersByNFTResponse {
    const message = {
      ...baseQueryOffersByNFTResponse,
    } as QueryOffersByNFTResponse;
    message.offers = [];
    if (object.offers !== undefined && object.offers !== null) {
      for (const e of object.offers) {
        message.offers.push(Offer.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListingRequest: object = { classId: "", nftId: "", seller: "" };

export const QueryListingRequest = {
  encode(
    message: QueryListingRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryListingRequest } as QueryListingRequest;
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

  fromJSON(object: any): QueryListingRequest {
    const message = { ...baseQueryListingRequest } as QueryListingRequest;
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

  toJSON(message: QueryListingRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingRequest>): QueryListingRequest {
    const message = { ...baseQueryListingRequest } as QueryListingRequest;
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

const baseQueryListingResponse: object = {};

export const QueryListingResponse = {
  encode(
    message: QueryListingResponse,
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
  ): QueryListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryListingResponse } as QueryListingResponse;
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

  fromJSON(object: any): QueryListingResponse {
    const message = { ...baseQueryListingResponse } as QueryListingResponse;
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromJSON(object.listing);
    } else {
      message.listing = undefined;
    }
    return message;
  },

  toJSON(message: QueryListingResponse): unknown {
    const obj: any = {};
    message.listing !== undefined &&
      (obj.listing = message.listing
        ? Listing.toJSON(message.listing)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingResponse>): QueryListingResponse {
    const message = { ...baseQueryListingResponse } as QueryListingResponse;
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromPartial(object.listing);
    } else {
      message.listing = undefined;
    }
    return message;
  },
};

const baseQueryListingIndexRequest: object = {};

export const QueryListingIndexRequest = {
  encode(
    message: QueryListingIndexRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryListingIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListingIndexRequest,
    } as QueryListingIndexRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListingIndexRequest {
    const message = {
      ...baseQueryListingIndexRequest,
    } as QueryListingIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListingIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListingIndexRequest>
  ): QueryListingIndexRequest {
    const message = {
      ...baseQueryListingIndexRequest,
    } as QueryListingIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListingIndexResponse: object = {};

export const QueryListingIndexResponse = {
  encode(
    message: QueryListingIndexResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryListingIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListingIndexResponse,
    } as QueryListingIndexResponse;
    message.listings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListingIndexResponse {
    const message = {
      ...baseQueryListingIndexResponse,
    } as QueryListingIndexResponse;
    message.listings = [];
    if (object.listings !== undefined && object.listings !== null) {
      for (const e of object.listings) {
        message.listings.push(Listing.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListingIndexResponse): unknown {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) =>
        e ? Listing.toJSON(e) : undefined
      );
    } else {
      obj.listings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListingIndexResponse>
  ): QueryListingIndexResponse {
    const message = {
      ...baseQueryListingIndexResponse,
    } as QueryListingIndexResponse;
    message.listings = [];
    if (object.listings !== undefined && object.listings !== null) {
      for (const e of object.listings) {
        message.listings.push(Listing.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListingsByClassRequest: object = { classId: "" };

export const QueryListingsByClassRequest = {
  encode(
    message: QueryListingsByClassRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryListingsByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListingsByClassRequest,
    } as QueryListingsByClassRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListingsByClassRequest {
    const message = {
      ...baseQueryListingsByClassRequest,
    } as QueryListingsByClassRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListingsByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListingsByClassRequest>
  ): QueryListingsByClassRequest {
    const message = {
      ...baseQueryListingsByClassRequest,
    } as QueryListingsByClassRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListingsByClassResponse: object = {};

export const QueryListingsByClassResponse = {
  encode(
    message: QueryListingsByClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryListingsByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListingsByClassResponse,
    } as QueryListingsByClassResponse;
    message.listings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListingsByClassResponse {
    const message = {
      ...baseQueryListingsByClassResponse,
    } as QueryListingsByClassResponse;
    message.listings = [];
    if (object.listings !== undefined && object.listings !== null) {
      for (const e of object.listings) {
        message.listings.push(Listing.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListingsByClassResponse): unknown {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) =>
        e ? Listing.toJSON(e) : undefined
      );
    } else {
      obj.listings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListingsByClassResponse>
  ): QueryListingsByClassResponse {
    const message = {
      ...baseQueryListingsByClassResponse,
    } as QueryListingsByClassResponse;
    message.listings = [];
    if (object.listings !== undefined && object.listings !== null) {
      for (const e of object.listings) {
        message.listings.push(Listing.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListingsByNFTRequest: object = { classId: "", nftId: "" };

export const QueryListingsByNFTRequest = {
  encode(
    message: QueryListingsByNFTRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryListingsByNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListingsByNFTRequest,
    } as QueryListingsByNFTRequest;
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListingsByNFTRequest {
    const message = {
      ...baseQueryListingsByNFTRequest,
    } as QueryListingsByNFTRequest;
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListingsByNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListingsByNFTRequest>
  ): QueryListingsByNFTRequest {
    const message = {
      ...baseQueryListingsByNFTRequest,
    } as QueryListingsByNFTRequest;
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListingsByNFTResponse: object = {};

export const QueryListingsByNFTResponse = {
  encode(
    message: QueryListingsByNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryListingsByNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListingsByNFTResponse,
    } as QueryListingsByNFTResponse;
    message.listings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListingsByNFTResponse {
    const message = {
      ...baseQueryListingsByNFTResponse,
    } as QueryListingsByNFTResponse;
    message.listings = [];
    if (object.listings !== undefined && object.listings !== null) {
      for (const e of object.listings) {
        message.listings.push(Listing.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListingsByNFTResponse): unknown {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map((e) =>
        e ? Listing.toJSON(e) : undefined
      );
    } else {
      obj.listings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListingsByNFTResponse>
  ): QueryListingsByNFTResponse {
    const message = {
      ...baseQueryListingsByNFTResponse,
    } as QueryListingsByNFTResponse;
    message.listings = [];
    if (object.listings !== undefined && object.listings !== null) {
      for (const e of object.listings) {
        message.listings.push(Listing.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryRoyaltyConfigRequest: object = { classId: "" };

export const QueryRoyaltyConfigRequest = {
  encode(
    message: QueryRoyaltyConfigRequest,
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
  ): QueryRoyaltyConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRoyaltyConfigRequest,
    } as QueryRoyaltyConfigRequest;
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

  fromJSON(object: any): QueryRoyaltyConfigRequest {
    const message = {
      ...baseQueryRoyaltyConfigRequest,
    } as QueryRoyaltyConfigRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: QueryRoyaltyConfigRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRoyaltyConfigRequest>
  ): QueryRoyaltyConfigRequest {
    const message = {
      ...baseQueryRoyaltyConfigRequest,
    } as QueryRoyaltyConfigRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseQueryRoyaltyConfigResponse: object = {};

export const QueryRoyaltyConfigResponse = {
  encode(
    message: QueryRoyaltyConfigResponse,
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
  ): QueryRoyaltyConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRoyaltyConfigResponse,
    } as QueryRoyaltyConfigResponse;
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

  fromJSON(object: any): QueryRoyaltyConfigResponse {
    const message = {
      ...baseQueryRoyaltyConfigResponse,
    } as QueryRoyaltyConfigResponse;
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfig.fromJSON(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },

  toJSON(message: QueryRoyaltyConfigResponse): unknown {
    const obj: any = {};
    message.royaltyConfig !== undefined &&
      (obj.royaltyConfig = message.royaltyConfig
        ? RoyaltyConfig.toJSON(message.royaltyConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRoyaltyConfigResponse>
  ): QueryRoyaltyConfigResponse {
    const message = {
      ...baseQueryRoyaltyConfigResponse,
    } as QueryRoyaltyConfigResponse;
    if (object.royaltyConfig !== undefined && object.royaltyConfig !== null) {
      message.royaltyConfig = RoyaltyConfig.fromPartial(object.royaltyConfig);
    } else {
      message.royaltyConfig = undefined;
    }
    return message;
  },
};

const baseQueryRoyaltyConfigIndexRequest: object = {};

export const QueryRoyaltyConfigIndexRequest = {
  encode(
    message: QueryRoyaltyConfigIndexRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRoyaltyConfigIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRoyaltyConfigIndexRequest,
    } as QueryRoyaltyConfigIndexRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRoyaltyConfigIndexRequest {
    const message = {
      ...baseQueryRoyaltyConfigIndexRequest,
    } as QueryRoyaltyConfigIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryRoyaltyConfigIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRoyaltyConfigIndexRequest>
  ): QueryRoyaltyConfigIndexRequest {
    const message = {
      ...baseQueryRoyaltyConfigIndexRequest,
    } as QueryRoyaltyConfigIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryRoyaltyConfigIndexResponse: object = {};

export const QueryRoyaltyConfigIndexResponse = {
  encode(
    message: QueryRoyaltyConfigIndexResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.royaltyConfigByClass) {
      RoyaltyConfigByClass.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRoyaltyConfigIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRoyaltyConfigIndexResponse,
    } as QueryRoyaltyConfigIndexResponse;
    message.royaltyConfigByClass = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.royaltyConfigByClass.push(
            RoyaltyConfigByClass.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRoyaltyConfigIndexResponse {
    const message = {
      ...baseQueryRoyaltyConfigIndexResponse,
    } as QueryRoyaltyConfigIndexResponse;
    message.royaltyConfigByClass = [];
    if (
      object.royaltyConfigByClass !== undefined &&
      object.royaltyConfigByClass !== null
    ) {
      for (const e of object.royaltyConfigByClass) {
        message.royaltyConfigByClass.push(RoyaltyConfigByClass.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryRoyaltyConfigIndexResponse): unknown {
    const obj: any = {};
    if (message.royaltyConfigByClass) {
      obj.royaltyConfigByClass = message.royaltyConfigByClass.map((e) =>
        e ? RoyaltyConfigByClass.toJSON(e) : undefined
      );
    } else {
      obj.royaltyConfigByClass = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRoyaltyConfigIndexResponse>
  ): QueryRoyaltyConfigIndexResponse {
    const message = {
      ...baseQueryRoyaltyConfigIndexResponse,
    } as QueryRoyaltyConfigIndexResponse;
    message.royaltyConfigByClass = [];
    if (
      object.royaltyConfigByClass !== undefined &&
      object.royaltyConfigByClass !== null
    ) {
      for (const e of object.royaltyConfigByClass) {
        message.royaltyConfigByClass.push(RoyaltyConfigByClass.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a ClassesByISCN by index. */
  ClassesByISCN(
    request: QueryClassesByISCNRequest
  ): Promise<QueryClassesByISCNResponse>;
  /** Queries a list of ClassesByISCN items. */
  ClassesByISCNIndex(
    request: QueryClassesByISCNIndexRequest
  ): Promise<QueryClassesByISCNIndexResponse>;
  /** Queries a list of ISCNByClass items. */
  ISCNByClass(
    request: QueryISCNByClassRequest
  ): Promise<QueryISCNByClassResponse>;
  /** Queries a ClassesByAccount by index. */
  ClassesByAccount(
    request: QueryClassesByAccountRequest
  ): Promise<QueryClassesByAccountResponse>;
  /** Queries a list of ClassesByAccount items. */
  ClassesByAccountIndex(
    request: QueryClassesByAccountIndexRequest
  ): Promise<QueryClassesByAccountIndexResponse>;
  /** Queries a list of AccountByClass items. */
  AccountByClass(
    request: QueryAccountByClassRequest
  ): Promise<QueryAccountByClassResponse>;
  /** Queries a BlindBoxContent by index. */
  BlindBoxContent(
    request: QueryBlindBoxContentRequest
  ): Promise<QueryBlindBoxContentResponse>;
  /** Queries a list of BlindBoxContent items. */
  BlindBoxContentIndex(
    request: QueryBlindBoxContentIndexRequest
  ): Promise<QueryBlindBoxContentIndexResponse>;
  /** Queries a list of BlindBoxContents by class_id */
  BlindBoxContents(
    request: QueryBlindBoxContentsRequest
  ): Promise<QueryBlindBoxContentsResponse>;
  /** Queries a Offer by index. */
  Offer(request: QueryOfferRequest): Promise<QueryOfferResponse>;
  /** Queries a list of Offer items. */
  OfferIndex(request: QueryOfferIndexRequest): Promise<QueryOfferIndexResponse>;
  /** Queries a list of OffersByClass items. */
  OffersByClass(
    request: QueryOffersByClassRequest
  ): Promise<QueryOffersByClassResponse>;
  /** Queries a list of OffersByNFT items. */
  OffersByNFT(
    request: QueryOffersByNFTRequest
  ): Promise<QueryOffersByNFTResponse>;
  /** Queries a Listing by index. */
  Listing(request: QueryListingRequest): Promise<QueryListingResponse>;
  /** Queries a list of Listing items. */
  ListingIndex(
    request: QueryListingIndexRequest
  ): Promise<QueryListingIndexResponse>;
  /** Queries a list of Listing items by class */
  ListingsByClass(
    request: QueryListingsByClassRequest
  ): Promise<QueryListingsByClassResponse>;
  /** Queries a list of Listing items by nft */
  ListingsByNFT(
    request: QueryListingsByNFTRequest
  ): Promise<QueryListingsByNFTResponse>;
  /** Queries a RoyaltyConfig by class */
  RoyaltyConfig(
    request: QueryRoyaltyConfigRequest
  ): Promise<QueryRoyaltyConfigResponse>;
  /** Queries index of RoyaltyConfig of all classes */
  RoyaltyConfigIndex(
    request: QueryRoyaltyConfigIndexRequest
  ): Promise<QueryRoyaltyConfigIndexResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ClassesByISCN = this.ClassesByISCN.bind(this);
    this.ClassesByISCNIndex = this.ClassesByISCNIndex.bind(this);
    this.ISCNByClass = this.ISCNByClass.bind(this);
    this.ClassesByAccount = this.ClassesByAccount.bind(this);
    this.ClassesByAccountIndex = this.ClassesByAccountIndex.bind(this);
    this.AccountByClass = this.AccountByClass.bind(this);
    this.BlindBoxContent = this.BlindBoxContent.bind(this);
    this.BlindBoxContentIndex = this.BlindBoxContentIndex.bind(this);
    this.BlindBoxContents = this.BlindBoxContents.bind(this);
    this.Offer = this.Offer.bind(this);
    this.OfferIndex = this.OfferIndex.bind(this);
    this.OffersByClass = this.OffersByClass.bind(this);
    this.OffersByNFT = this.OffersByNFT.bind(this);
    this.Listing = this.Listing.bind(this);
    this.ListingIndex = this.ListingIndex.bind(this);
    this.ListingsByClass = this.ListingsByClass.bind(this);
    this.ListingsByNFT = this.ListingsByNFT.bind(this);
    this.RoyaltyConfig = this.RoyaltyConfig.bind(this);
    this.RoyaltyConfigIndex = this.RoyaltyConfigIndex.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  ClassesByISCN(
    request: QueryClassesByISCNRequest
  ): Promise<QueryClassesByISCNResponse> {
    const data = QueryClassesByISCNRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "ClassesByISCN",
      data
    );
    return promise.then((data) =>
      QueryClassesByISCNResponse.decode(new _m0.Reader(data))
    );
  }

  ClassesByISCNIndex(
    request: QueryClassesByISCNIndexRequest
  ): Promise<QueryClassesByISCNIndexResponse> {
    const data = QueryClassesByISCNIndexRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "ClassesByISCNIndex",
      data
    );
    return promise.then((data) =>
      QueryClassesByISCNIndexResponse.decode(new _m0.Reader(data))
    );
  }

  ISCNByClass(
    request: QueryISCNByClassRequest
  ): Promise<QueryISCNByClassResponse> {
    const data = QueryISCNByClassRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "ISCNByClass",
      data
    );
    return promise.then((data) =>
      QueryISCNByClassResponse.decode(new _m0.Reader(data))
    );
  }

  ClassesByAccount(
    request: QueryClassesByAccountRequest
  ): Promise<QueryClassesByAccountResponse> {
    const data = QueryClassesByAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "ClassesByAccount",
      data
    );
    return promise.then((data) =>
      QueryClassesByAccountResponse.decode(new _m0.Reader(data))
    );
  }

  ClassesByAccountIndex(
    request: QueryClassesByAccountIndexRequest
  ): Promise<QueryClassesByAccountIndexResponse> {
    const data = QueryClassesByAccountIndexRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "ClassesByAccountIndex",
      data
    );
    return promise.then((data) =>
      QueryClassesByAccountIndexResponse.decode(new _m0.Reader(data))
    );
  }

  AccountByClass(
    request: QueryAccountByClassRequest
  ): Promise<QueryAccountByClassResponse> {
    const data = QueryAccountByClassRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "AccountByClass",
      data
    );
    return promise.then((data) =>
      QueryAccountByClassResponse.decode(new _m0.Reader(data))
    );
  }

  BlindBoxContent(
    request: QueryBlindBoxContentRequest
  ): Promise<QueryBlindBoxContentResponse> {
    const data = QueryBlindBoxContentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "BlindBoxContent",
      data
    );
    return promise.then((data) =>
      QueryBlindBoxContentResponse.decode(new _m0.Reader(data))
    );
  }

  BlindBoxContentIndex(
    request: QueryBlindBoxContentIndexRequest
  ): Promise<QueryBlindBoxContentIndexResponse> {
    const data = QueryBlindBoxContentIndexRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "BlindBoxContentIndex",
      data
    );
    return promise.then((data) =>
      QueryBlindBoxContentIndexResponse.decode(new _m0.Reader(data))
    );
  }

  BlindBoxContents(
    request: QueryBlindBoxContentsRequest
  ): Promise<QueryBlindBoxContentsResponse> {
    const data = QueryBlindBoxContentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "BlindBoxContents",
      data
    );
    return promise.then((data) =>
      QueryBlindBoxContentsResponse.decode(new _m0.Reader(data))
    );
  }

  Offer(request: QueryOfferRequest): Promise<QueryOfferResponse> {
    const data = QueryOfferRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "Offer",
      data
    );
    return promise.then((data) =>
      QueryOfferResponse.decode(new _m0.Reader(data))
    );
  }

  OfferIndex(
    request: QueryOfferIndexRequest
  ): Promise<QueryOfferIndexResponse> {
    const data = QueryOfferIndexRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "OfferIndex",
      data
    );
    return promise.then((data) =>
      QueryOfferIndexResponse.decode(new _m0.Reader(data))
    );
  }

  OffersByClass(
    request: QueryOffersByClassRequest
  ): Promise<QueryOffersByClassResponse> {
    const data = QueryOffersByClassRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "OffersByClass",
      data
    );
    return promise.then((data) =>
      QueryOffersByClassResponse.decode(new _m0.Reader(data))
    );
  }

  OffersByNFT(
    request: QueryOffersByNFTRequest
  ): Promise<QueryOffersByNFTResponse> {
    const data = QueryOffersByNFTRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "OffersByNFT",
      data
    );
    return promise.then((data) =>
      QueryOffersByNFTResponse.decode(new _m0.Reader(data))
    );
  }

  Listing(request: QueryListingRequest): Promise<QueryListingResponse> {
    const data = QueryListingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "Listing",
      data
    );
    return promise.then((data) =>
      QueryListingResponse.decode(new _m0.Reader(data))
    );
  }

  ListingIndex(
    request: QueryListingIndexRequest
  ): Promise<QueryListingIndexResponse> {
    const data = QueryListingIndexRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "ListingIndex",
      data
    );
    return promise.then((data) =>
      QueryListingIndexResponse.decode(new _m0.Reader(data))
    );
  }

  ListingsByClass(
    request: QueryListingsByClassRequest
  ): Promise<QueryListingsByClassResponse> {
    const data = QueryListingsByClassRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "ListingsByClass",
      data
    );
    return promise.then((data) =>
      QueryListingsByClassResponse.decode(new _m0.Reader(data))
    );
  }

  ListingsByNFT(
    request: QueryListingsByNFTRequest
  ): Promise<QueryListingsByNFTResponse> {
    const data = QueryListingsByNFTRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "ListingsByNFT",
      data
    );
    return promise.then((data) =>
      QueryListingsByNFTResponse.decode(new _m0.Reader(data))
    );
  }

  RoyaltyConfig(
    request: QueryRoyaltyConfigRequest
  ): Promise<QueryRoyaltyConfigResponse> {
    const data = QueryRoyaltyConfigRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "RoyaltyConfig",
      data
    );
    return promise.then((data) =>
      QueryRoyaltyConfigResponse.decode(new _m0.Reader(data))
    );
  }

  RoyaltyConfigIndex(
    request: QueryRoyaltyConfigIndexRequest
  ): Promise<QueryRoyaltyConfigIndexResponse> {
    const data = QueryRoyaltyConfigIndexRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.v1.Query",
      "RoyaltyConfigIndex",
      data
    );
    return promise.then((data) =>
      QueryRoyaltyConfigIndexResponse.decode(new _m0.Reader(data))
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
