/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../likechain/likenft/v1/params";
import { ClassesByISCN } from "../../../likechain/likenft/v1/classes_by_iscn";
import { ClassesByAccount } from "../../../likechain/likenft/v1/classes_by_account";
import { BlindBoxContent } from "../../../likechain/likenft/v1/blind_box_content";
import { ClassRevealQueueEntry } from "../../../likechain/likenft/v1/class_reveal_queue";
import { Offer } from "../../../likechain/likenft/v1/offer";
import { Listing } from "../../../likechain/likenft/v1/listing";
import { OfferExpireQueueEntry } from "../../../likechain/likenft/v1/offer_expire_queue";
import { ListingExpireQueueEntry } from "../../../likechain/likenft/v1/listing_expire_queue";
import { RoyaltyConfigByClass } from "../../../likechain/likenft/v1/royalty_config";

export const protobufPackage = "likechain.likenft.v1";

/** GenesisState defines the likenft module's genesis state. */
export interface GenesisState {
  params?: Params;
  classesByIscnList: ClassesByISCN[];
  classesByAccountList: ClassesByAccount[];
  blindBoxContentList: BlindBoxContent[];
  classRevealQueue: ClassRevealQueueEntry[];
  offerList: Offer[];
  listingList: Listing[];
  offerExpireQueue: OfferExpireQueueEntry[];
  listingExpireQueue: ListingExpireQueueEntry[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  royaltyConfigByClassList: RoyaltyConfigByClass[];
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
    for (const v of message.blindBoxContentList) {
      BlindBoxContent.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.classRevealQueue) {
      ClassRevealQueueEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.offerList) {
      Offer.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.listingList) {
      Listing.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.offerExpireQueue) {
      OfferExpireQueueEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.listingExpireQueue) {
      ListingExpireQueueEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.royaltyConfigByClassList) {
      RoyaltyConfigByClass.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.classesByIscnList = [];
    message.classesByAccountList = [];
    message.blindBoxContentList = [];
    message.classRevealQueue = [];
    message.offerList = [];
    message.listingList = [];
    message.offerExpireQueue = [];
    message.listingExpireQueue = [];
    message.royaltyConfigByClassList = [];
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
          message.blindBoxContentList.push(
            BlindBoxContent.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.classRevealQueue.push(
            ClassRevealQueueEntry.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.offerList.push(Offer.decode(reader, reader.uint32()));
          break;
        case 7:
          message.listingList.push(Listing.decode(reader, reader.uint32()));
          break;
        case 8:
          message.offerExpireQueue.push(
            OfferExpireQueueEntry.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.listingExpireQueue.push(
            ListingExpireQueueEntry.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.royaltyConfigByClassList.push(
            RoyaltyConfigByClass.decode(reader, reader.uint32())
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
    message.blindBoxContentList = [];
    message.classRevealQueue = [];
    message.offerList = [];
    message.listingList = [];
    message.offerExpireQueue = [];
    message.listingExpireQueue = [];
    message.royaltyConfigByClassList = [];
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
      object.blindBoxContentList !== undefined &&
      object.blindBoxContentList !== null
    ) {
      for (const e of object.blindBoxContentList) {
        message.blindBoxContentList.push(BlindBoxContent.fromJSON(e));
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
    if (object.offerList !== undefined && object.offerList !== null) {
      for (const e of object.offerList) {
        message.offerList.push(Offer.fromJSON(e));
      }
    }
    if (object.listingList !== undefined && object.listingList !== null) {
      for (const e of object.listingList) {
        message.listingList.push(Listing.fromJSON(e));
      }
    }
    if (
      object.offerExpireQueue !== undefined &&
      object.offerExpireQueue !== null
    ) {
      for (const e of object.offerExpireQueue) {
        message.offerExpireQueue.push(OfferExpireQueueEntry.fromJSON(e));
      }
    }
    if (
      object.listingExpireQueue !== undefined &&
      object.listingExpireQueue !== null
    ) {
      for (const e of object.listingExpireQueue) {
        message.listingExpireQueue.push(ListingExpireQueueEntry.fromJSON(e));
      }
    }
    if (
      object.royaltyConfigByClassList !== undefined &&
      object.royaltyConfigByClassList !== null
    ) {
      for (const e of object.royaltyConfigByClassList) {
        message.royaltyConfigByClassList.push(RoyaltyConfigByClass.fromJSON(e));
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
    if (message.blindBoxContentList) {
      obj.blindBoxContentList = message.blindBoxContentList.map((e) =>
        e ? BlindBoxContent.toJSON(e) : undefined
      );
    } else {
      obj.blindBoxContentList = [];
    }
    if (message.classRevealQueue) {
      obj.classRevealQueue = message.classRevealQueue.map((e) =>
        e ? ClassRevealQueueEntry.toJSON(e) : undefined
      );
    } else {
      obj.classRevealQueue = [];
    }
    if (message.offerList) {
      obj.offerList = message.offerList.map((e) =>
        e ? Offer.toJSON(e) : undefined
      );
    } else {
      obj.offerList = [];
    }
    if (message.listingList) {
      obj.listingList = message.listingList.map((e) =>
        e ? Listing.toJSON(e) : undefined
      );
    } else {
      obj.listingList = [];
    }
    if (message.offerExpireQueue) {
      obj.offerExpireQueue = message.offerExpireQueue.map((e) =>
        e ? OfferExpireQueueEntry.toJSON(e) : undefined
      );
    } else {
      obj.offerExpireQueue = [];
    }
    if (message.listingExpireQueue) {
      obj.listingExpireQueue = message.listingExpireQueue.map((e) =>
        e ? ListingExpireQueueEntry.toJSON(e) : undefined
      );
    } else {
      obj.listingExpireQueue = [];
    }
    if (message.royaltyConfigByClassList) {
      obj.royaltyConfigByClassList = message.royaltyConfigByClassList.map((e) =>
        e ? RoyaltyConfigByClass.toJSON(e) : undefined
      );
    } else {
      obj.royaltyConfigByClassList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.classesByIscnList = [];
    message.classesByAccountList = [];
    message.blindBoxContentList = [];
    message.classRevealQueue = [];
    message.offerList = [];
    message.listingList = [];
    message.offerExpireQueue = [];
    message.listingExpireQueue = [];
    message.royaltyConfigByClassList = [];
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
      object.blindBoxContentList !== undefined &&
      object.blindBoxContentList !== null
    ) {
      for (const e of object.blindBoxContentList) {
        message.blindBoxContentList.push(BlindBoxContent.fromPartial(e));
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
    if (object.offerList !== undefined && object.offerList !== null) {
      for (const e of object.offerList) {
        message.offerList.push(Offer.fromPartial(e));
      }
    }
    if (object.listingList !== undefined && object.listingList !== null) {
      for (const e of object.listingList) {
        message.listingList.push(Listing.fromPartial(e));
      }
    }
    if (
      object.offerExpireQueue !== undefined &&
      object.offerExpireQueue !== null
    ) {
      for (const e of object.offerExpireQueue) {
        message.offerExpireQueue.push(OfferExpireQueueEntry.fromPartial(e));
      }
    }
    if (
      object.listingExpireQueue !== undefined &&
      object.listingExpireQueue !== null
    ) {
      for (const e of object.listingExpireQueue) {
        message.listingExpireQueue.push(ListingExpireQueueEntry.fromPartial(e));
      }
    }
    if (
      object.royaltyConfigByClassList !== undefined &&
      object.royaltyConfigByClassList !== null
    ) {
      for (const e of object.royaltyConfigByClassList) {
        message.royaltyConfigByClassList.push(
          RoyaltyConfigByClass.fromPartial(e)
        );
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
