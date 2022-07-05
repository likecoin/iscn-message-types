/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "likechain.likenft.v1";

export interface ClassRevealQueueEntry {
  revealTime?: Date;
  classId: string;
}

const baseClassRevealQueueEntry: object = { classId: "" };

export const ClassRevealQueueEntry = {
  encode(
    message: ClassRevealQueueEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.revealTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.revealTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClassRevealQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassRevealQueueEntry } as ClassRevealQueueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revealTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): ClassRevealQueueEntry {
    const message = { ...baseClassRevealQueueEntry } as ClassRevealQueueEntry;
    if (object.revealTime !== undefined && object.revealTime !== null) {
      message.revealTime = fromJsonTimestamp(object.revealTime);
    } else {
      message.revealTime = undefined;
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },

  toJSON(message: ClassRevealQueueEntry): unknown {
    const obj: any = {};
    message.revealTime !== undefined &&
      (obj.revealTime = message.revealTime.toISOString());
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ClassRevealQueueEntry>
  ): ClassRevealQueueEntry {
    const message = { ...baseClassRevealQueueEntry } as ClassRevealQueueEntry;
    if (object.revealTime !== undefined && object.revealTime !== null) {
      message.revealTime = object.revealTime;
    } else {
      message.revealTime = undefined;
    }
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
