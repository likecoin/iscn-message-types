/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../likenft/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { QueryResponseRecord } from "../iscn/query";
import { MintableNFT } from "../likenft/mintable_nft";
import { Class } from "../nft/nft";
import { ClassesByISCN } from "../likenft/classes_by_iscn";
import { ClassesByAccount } from "../likenft/classes_by_account";

export const protobufPackage = "likechain.likenft";

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

export interface QueryMintableNFTRequest {
  classId: string;
  id: string;
}

export interface QueryMintableNFTResponse {
  mintableNft?: MintableNFT;
}

export interface QueryMintableNFTIndexRequest {
  pagination?: PageRequest;
}

export interface QueryMintableNFTIndexResponse {
  mintableNfts: MintableNFT[];
  pagination?: PageResponse;
}

export interface QueryMintableNFTsRequest {
  classId: string;
  pagination?: PageRequest;
}

export interface QueryMintableNFTsResponse {
  mintableNfts: MintableNFT[];
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

const baseQueryMintableNFTRequest: object = { classId: "", id: "" };

export const QueryMintableNFTRequest = {
  encode(
    message: QueryMintableNFTRequest,
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
  ): QueryMintableNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMintableNFTRequest,
    } as QueryMintableNFTRequest;
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

  fromJSON(object: any): QueryMintableNFTRequest {
    const message = {
      ...baseQueryMintableNFTRequest,
    } as QueryMintableNFTRequest;
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

  toJSON(message: QueryMintableNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMintableNFTRequest>
  ): QueryMintableNFTRequest {
    const message = {
      ...baseQueryMintableNFTRequest,
    } as QueryMintableNFTRequest;
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

const baseQueryMintableNFTResponse: object = {};

export const QueryMintableNFTResponse = {
  encode(
    message: QueryMintableNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintableNft !== undefined) {
      MintableNFT.encode(
        message.mintableNft,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMintableNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMintableNFTResponse,
    } as QueryMintableNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintableNft = MintableNFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintableNFTResponse {
    const message = {
      ...baseQueryMintableNFTResponse,
    } as QueryMintableNFTResponse;
    if (object.mintableNft !== undefined && object.mintableNft !== null) {
      message.mintableNft = MintableNFT.fromJSON(object.mintableNft);
    } else {
      message.mintableNft = undefined;
    }
    return message;
  },

  toJSON(message: QueryMintableNFTResponse): unknown {
    const obj: any = {};
    message.mintableNft !== undefined &&
      (obj.mintableNft = message.mintableNft
        ? MintableNFT.toJSON(message.mintableNft)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMintableNFTResponse>
  ): QueryMintableNFTResponse {
    const message = {
      ...baseQueryMintableNFTResponse,
    } as QueryMintableNFTResponse;
    if (object.mintableNft !== undefined && object.mintableNft !== null) {
      message.mintableNft = MintableNFT.fromPartial(object.mintableNft);
    } else {
      message.mintableNft = undefined;
    }
    return message;
  },
};

const baseQueryMintableNFTIndexRequest: object = {};

export const QueryMintableNFTIndexRequest = {
  encode(
    message: QueryMintableNFTIndexRequest,
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
  ): QueryMintableNFTIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMintableNFTIndexRequest,
    } as QueryMintableNFTIndexRequest;
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

  fromJSON(object: any): QueryMintableNFTIndexRequest {
    const message = {
      ...baseQueryMintableNFTIndexRequest,
    } as QueryMintableNFTIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMintableNFTIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMintableNFTIndexRequest>
  ): QueryMintableNFTIndexRequest {
    const message = {
      ...baseQueryMintableNFTIndexRequest,
    } as QueryMintableNFTIndexRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryMintableNFTIndexResponse: object = {};

export const QueryMintableNFTIndexResponse = {
  encode(
    message: QueryMintableNFTIndexResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mintableNfts) {
      MintableNFT.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryMintableNFTIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMintableNFTIndexResponse,
    } as QueryMintableNFTIndexResponse;
    message.mintableNfts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintableNfts.push(
            MintableNFT.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryMintableNFTIndexResponse {
    const message = {
      ...baseQueryMintableNFTIndexResponse,
    } as QueryMintableNFTIndexResponse;
    message.mintableNfts = [];
    if (object.mintableNfts !== undefined && object.mintableNfts !== null) {
      for (const e of object.mintableNfts) {
        message.mintableNfts.push(MintableNFT.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMintableNFTIndexResponse): unknown {
    const obj: any = {};
    if (message.mintableNfts) {
      obj.mintableNfts = message.mintableNfts.map((e) =>
        e ? MintableNFT.toJSON(e) : undefined
      );
    } else {
      obj.mintableNfts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMintableNFTIndexResponse>
  ): QueryMintableNFTIndexResponse {
    const message = {
      ...baseQueryMintableNFTIndexResponse,
    } as QueryMintableNFTIndexResponse;
    message.mintableNfts = [];
    if (object.mintableNfts !== undefined && object.mintableNfts !== null) {
      for (const e of object.mintableNfts) {
        message.mintableNfts.push(MintableNFT.fromPartial(e));
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

const baseQueryMintableNFTsRequest: object = { classId: "" };

export const QueryMintableNFTsRequest = {
  encode(
    message: QueryMintableNFTsRequest,
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
  ): QueryMintableNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMintableNFTsRequest,
    } as QueryMintableNFTsRequest;
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

  fromJSON(object: any): QueryMintableNFTsRequest {
    const message = {
      ...baseQueryMintableNFTsRequest,
    } as QueryMintableNFTsRequest;
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

  toJSON(message: QueryMintableNFTsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMintableNFTsRequest>
  ): QueryMintableNFTsRequest {
    const message = {
      ...baseQueryMintableNFTsRequest,
    } as QueryMintableNFTsRequest;
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

const baseQueryMintableNFTsResponse: object = {};

export const QueryMintableNFTsResponse = {
  encode(
    message: QueryMintableNFTsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mintableNfts) {
      MintableNFT.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryMintableNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMintableNFTsResponse,
    } as QueryMintableNFTsResponse;
    message.mintableNfts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintableNfts.push(
            MintableNFT.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryMintableNFTsResponse {
    const message = {
      ...baseQueryMintableNFTsResponse,
    } as QueryMintableNFTsResponse;
    message.mintableNfts = [];
    if (object.mintableNfts !== undefined && object.mintableNfts !== null) {
      for (const e of object.mintableNfts) {
        message.mintableNfts.push(MintableNFT.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMintableNFTsResponse): unknown {
    const obj: any = {};
    if (message.mintableNfts) {
      obj.mintableNfts = message.mintableNfts.map((e) =>
        e ? MintableNFT.toJSON(e) : undefined
      );
    } else {
      obj.mintableNfts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMintableNFTsResponse>
  ): QueryMintableNFTsResponse {
    const message = {
      ...baseQueryMintableNFTsResponse,
    } as QueryMintableNFTsResponse;
    message.mintableNfts = [];
    if (object.mintableNfts !== undefined && object.mintableNfts !== null) {
      for (const e of object.mintableNfts) {
        message.mintableNfts.push(MintableNFT.fromPartial(e));
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
  /** Queries a MintableNFT by index. */
  MintableNFT(
    request: QueryMintableNFTRequest
  ): Promise<QueryMintableNFTResponse>;
  /** Queries a list of MintableNFT items. */
  MintableNFTIndex(
    request: QueryMintableNFTIndexRequest
  ): Promise<QueryMintableNFTIndexResponse>;
  /** Queries a list of MintableNFTs by class_id */
  MintableNFTs(
    request: QueryMintableNFTsRequest
  ): Promise<QueryMintableNFTsResponse>;
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
    this.MintableNFT = this.MintableNFT.bind(this);
    this.MintableNFTIndex = this.MintableNFTIndex.bind(this);
    this.MintableNFTs = this.MintableNFTs.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  ClassesByISCN(
    request: QueryClassesByISCNRequest
  ): Promise<QueryClassesByISCNResponse> {
    const data = QueryClassesByISCNRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.Query",
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
      "likechain.likenft.Query",
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
      "likechain.likenft.Query",
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
      "likechain.likenft.Query",
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
      "likechain.likenft.Query",
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
      "likechain.likenft.Query",
      "AccountByClass",
      data
    );
    return promise.then((data) =>
      QueryAccountByClassResponse.decode(new _m0.Reader(data))
    );
  }

  MintableNFT(
    request: QueryMintableNFTRequest
  ): Promise<QueryMintableNFTResponse> {
    const data = QueryMintableNFTRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.Query",
      "MintableNFT",
      data
    );
    return promise.then((data) =>
      QueryMintableNFTResponse.decode(new _m0.Reader(data))
    );
  }

  MintableNFTIndex(
    request: QueryMintableNFTIndexRequest
  ): Promise<QueryMintableNFTIndexResponse> {
    const data = QueryMintableNFTIndexRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.Query",
      "MintableNFTIndex",
      data
    );
    return promise.then((data) =>
      QueryMintableNFTIndexResponse.decode(new _m0.Reader(data))
    );
  }

  MintableNFTs(
    request: QueryMintableNFTsRequest
  ): Promise<QueryMintableNFTsResponse> {
    const data = QueryMintableNFTsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "likechain.likenft.Query",
      "MintableNFTs",
      data
    );
    return promise.then((data) =>
      QueryMintableNFTsResponse.decode(new _m0.Reader(data))
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
