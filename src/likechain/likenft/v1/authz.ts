/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "likechain.likenft.v1";

export interface CreateRoyaltyConfigAuthorization {
  classId: string;
}

export interface UpdateRoyaltyConfigAuthorization {
  classId: string;
}

export interface DeleteRoyaltyConfigAuthorization {
  classId: string;
}

export interface CreateListingAuthorization {
  classId: string;
  nftId: string;
}

export interface UpdateListingAuthorization {
  classId: string;
  nftId: string;
}

export interface DeleteListingAuthorization {
  classId: string;
  nftId: string;
}

export interface CreateOfferAuthorization {
  classId: string;
  nftId: string;
}

export interface UpdateOfferAuthorization {
  classId: string;
  nftId: string;
}

export interface DeleteOfferAuthorization {
  classId: string;
  nftId: string;
}

export interface NewClassAuthorization {
  iscnIdPrefix: string;
}

export interface UpdateClassAuthorization {
  classId: string;
}

export interface MintNFTAuthorization {
  classId: string;
}

export interface SendNFTAuthorization {
  classId: string;
  id: string;
}

const baseCreateRoyaltyConfigAuthorization: object = { classId: "" };

export const CreateRoyaltyConfigAuthorization = {
  encode(
    message: CreateRoyaltyConfigAuthorization,
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
  ): CreateRoyaltyConfigAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateRoyaltyConfigAuthorization,
    } as CreateRoyaltyConfigAuthorization;
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

  fromJSON(object: any): CreateRoyaltyConfigAuthorization {
    const message = {
      ...baseCreateRoyaltyConfigAuthorization,
    } as CreateRoyaltyConfigAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: CreateRoyaltyConfigAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateRoyaltyConfigAuthorization>
  ): CreateRoyaltyConfigAuthorization {
    const message = {
      ...baseCreateRoyaltyConfigAuthorization,
    } as CreateRoyaltyConfigAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseUpdateRoyaltyConfigAuthorization: object = { classId: "" };

export const UpdateRoyaltyConfigAuthorization = {
  encode(
    message: UpdateRoyaltyConfigAuthorization,
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
  ): UpdateRoyaltyConfigAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateRoyaltyConfigAuthorization,
    } as UpdateRoyaltyConfigAuthorization;
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

  fromJSON(object: any): UpdateRoyaltyConfigAuthorization {
    const message = {
      ...baseUpdateRoyaltyConfigAuthorization,
    } as UpdateRoyaltyConfigAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: UpdateRoyaltyConfigAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateRoyaltyConfigAuthorization>
  ): UpdateRoyaltyConfigAuthorization {
    const message = {
      ...baseUpdateRoyaltyConfigAuthorization,
    } as UpdateRoyaltyConfigAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseDeleteRoyaltyConfigAuthorization: object = { classId: "" };

export const DeleteRoyaltyConfigAuthorization = {
  encode(
    message: DeleteRoyaltyConfigAuthorization,
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
  ): DeleteRoyaltyConfigAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteRoyaltyConfigAuthorization,
    } as DeleteRoyaltyConfigAuthorization;
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

  fromJSON(object: any): DeleteRoyaltyConfigAuthorization {
    const message = {
      ...baseDeleteRoyaltyConfigAuthorization,
    } as DeleteRoyaltyConfigAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: DeleteRoyaltyConfigAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteRoyaltyConfigAuthorization>
  ): DeleteRoyaltyConfigAuthorization {
    const message = {
      ...baseDeleteRoyaltyConfigAuthorization,
    } as DeleteRoyaltyConfigAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseCreateListingAuthorization: object = { classId: "", nftId: "" };

export const CreateListingAuthorization = {
  encode(
    message: CreateListingAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateListingAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateListingAuthorization,
    } as CreateListingAuthorization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateListingAuthorization {
    const message = {
      ...baseCreateListingAuthorization,
    } as CreateListingAuthorization;
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

  toJSON(message: CreateListingAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateListingAuthorization>
  ): CreateListingAuthorization {
    const message = {
      ...baseCreateListingAuthorization,
    } as CreateListingAuthorization;
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

const baseUpdateListingAuthorization: object = { classId: "", nftId: "" };

export const UpdateListingAuthorization = {
  encode(
    message: UpdateListingAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateListingAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateListingAuthorization,
    } as UpdateListingAuthorization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateListingAuthorization {
    const message = {
      ...baseUpdateListingAuthorization,
    } as UpdateListingAuthorization;
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

  toJSON(message: UpdateListingAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateListingAuthorization>
  ): UpdateListingAuthorization {
    const message = {
      ...baseUpdateListingAuthorization,
    } as UpdateListingAuthorization;
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

const baseDeleteListingAuthorization: object = { classId: "", nftId: "" };

export const DeleteListingAuthorization = {
  encode(
    message: DeleteListingAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteListingAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteListingAuthorization,
    } as DeleteListingAuthorization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteListingAuthorization {
    const message = {
      ...baseDeleteListingAuthorization,
    } as DeleteListingAuthorization;
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

  toJSON(message: DeleteListingAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteListingAuthorization>
  ): DeleteListingAuthorization {
    const message = {
      ...baseDeleteListingAuthorization,
    } as DeleteListingAuthorization;
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

const baseCreateOfferAuthorization: object = { classId: "", nftId: "" };

export const CreateOfferAuthorization = {
  encode(
    message: CreateOfferAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOfferAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateOfferAuthorization,
    } as CreateOfferAuthorization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOfferAuthorization {
    const message = {
      ...baseCreateOfferAuthorization,
    } as CreateOfferAuthorization;
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

  toJSON(message: CreateOfferAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateOfferAuthorization>
  ): CreateOfferAuthorization {
    const message = {
      ...baseCreateOfferAuthorization,
    } as CreateOfferAuthorization;
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

const baseUpdateOfferAuthorization: object = { classId: "", nftId: "" };

export const UpdateOfferAuthorization = {
  encode(
    message: UpdateOfferAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOfferAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateOfferAuthorization,
    } as UpdateOfferAuthorization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOfferAuthorization {
    const message = {
      ...baseUpdateOfferAuthorization,
    } as UpdateOfferAuthorization;
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

  toJSON(message: UpdateOfferAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateOfferAuthorization>
  ): UpdateOfferAuthorization {
    const message = {
      ...baseUpdateOfferAuthorization,
    } as UpdateOfferAuthorization;
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

const baseDeleteOfferAuthorization: object = { classId: "", nftId: "" };

export const DeleteOfferAuthorization = {
  encode(
    message: DeleteOfferAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteOfferAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteOfferAuthorization,
    } as DeleteOfferAuthorization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOfferAuthorization {
    const message = {
      ...baseDeleteOfferAuthorization,
    } as DeleteOfferAuthorization;
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

  toJSON(message: DeleteOfferAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteOfferAuthorization>
  ): DeleteOfferAuthorization {
    const message = {
      ...baseDeleteOfferAuthorization,
    } as DeleteOfferAuthorization;
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

const baseNewClassAuthorization: object = { iscnIdPrefix: "" };

export const NewClassAuthorization = {
  encode(
    message: NewClassAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewClassAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewClassAuthorization } as NewClassAuthorization;
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

  fromJSON(object: any): NewClassAuthorization {
    const message = { ...baseNewClassAuthorization } as NewClassAuthorization;
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = String(object.iscnIdPrefix);
    } else {
      message.iscnIdPrefix = "";
    }
    return message;
  },

  toJSON(message: NewClassAuthorization): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined &&
      (obj.iscnIdPrefix = message.iscnIdPrefix);
    return obj;
  },

  fromPartial(
    object: DeepPartial<NewClassAuthorization>
  ): NewClassAuthorization {
    const message = { ...baseNewClassAuthorization } as NewClassAuthorization;
    if (object.iscnIdPrefix !== undefined && object.iscnIdPrefix !== null) {
      message.iscnIdPrefix = object.iscnIdPrefix;
    } else {
      message.iscnIdPrefix = "";
    }
    return message;
  },
};

const baseUpdateClassAuthorization: object = { classId: "" };

export const UpdateClassAuthorization = {
  encode(
    message: UpdateClassAuthorization,
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
  ): UpdateClassAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClassAuthorization,
    } as UpdateClassAuthorization;
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

  fromJSON(object: any): UpdateClassAuthorization {
    const message = {
      ...baseUpdateClassAuthorization,
    } as UpdateClassAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: UpdateClassAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateClassAuthorization>
  ): UpdateClassAuthorization {
    const message = {
      ...baseUpdateClassAuthorization,
    } as UpdateClassAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseMintNFTAuthorization: object = { classId: "" };

export const MintNFTAuthorization = {
  encode(
    message: MintNFTAuthorization,
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
  ): MintNFTAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMintNFTAuthorization } as MintNFTAuthorization;
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

  fromJSON(object: any): MintNFTAuthorization {
    const message = { ...baseMintNFTAuthorization } as MintNFTAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: MintNFTAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<MintNFTAuthorization>): MintNFTAuthorization {
    const message = { ...baseMintNFTAuthorization } as MintNFTAuthorization;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
};

const baseSendNFTAuthorization: object = { classId: "", id: "" };

export const SendNFTAuthorization = {
  encode(
    message: SendNFTAuthorization,
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
  ): SendNFTAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendNFTAuthorization } as SendNFTAuthorization;
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

  fromJSON(object: any): SendNFTAuthorization {
    const message = { ...baseSendNFTAuthorization } as SendNFTAuthorization;
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

  toJSON(message: SendNFTAuthorization): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<SendNFTAuthorization>): SendNFTAuthorization {
    const message = { ...baseSendNFTAuthorization } as SendNFTAuthorization;
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
