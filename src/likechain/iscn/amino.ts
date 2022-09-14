import { Buffer } from 'buffer/';
import {
  IscnRecord,
  MsgCreateIscnRecord,
  MsgUpdateIscnRecord,
  MsgChangeIscnRecordOwnership,
} from './tx';

function recordToAmino(record?: IscnRecord): any {
  const result: any = {
    ...record,
    stakeholders: record?.stakeholders.map(s => JSON.parse(s.toString())),
    contentMetadata: JSON.parse(record?.contentMetadata.toString() || '{}'),
  };
  if (!result.stakeholders || result.stakeholders.length === 0) {
    delete result.stakeholders;
  }
  if (!result.contentFingerprints || result.contentFingerprints.length === 0) {
    delete result.contentFingerprints;
  }
  return result;
}

function recordFromAmino(record?: any): IscnRecord {
  const stakeholders = record?.stakeholders?.map((s: string) =>
    Buffer.from(JSON.stringify(s), 'utf8')
  ) || [];
  return {
    recordNotes: record?.recordNotes || '',
    stakeholders,
    contentFingerprints: record?.contentFingerprints || [],
    contentMetadata: Buffer.from(JSON.stringify(record?.contentMetadata || {}), 'utf8'),
  };
}

// from @cosmjs/stargate/build/aminotypes.d.ts
export interface AminoConverter {
  readonly aminoType: string;
  readonly toAmino: (value: any) => any;
  readonly fromAmino: (value: any) => any;
}

const IscnAminoTypes = {
  '/likechain.iscn.MsgCreateIscnRecord': {
    aminoType: 'likecoin-chain/MsgCreateIscnRecord',
    toAmino: ({ from, record }: MsgCreateIscnRecord) => ({
      from,
      record: recordToAmino(record),
    }),
    fromAmino: ({ from, record }: { from: string, record: any }): MsgCreateIscnRecord => ({
      from,
      record: recordFromAmino(record),
    }),
  },
  '/likechain.iscn.MsgUpdateIscnRecord': {
    aminoType: 'likecoin-chain/MsgUpdateIscnRecord',
    toAmino: ({ from, iscnId, record }: MsgUpdateIscnRecord) => ({
      from,
      iscn_id: iscnId,
      record: recordToAmino(record),
    }),
    fromAmino: ({ from, iscn_id, record }: { from: string, iscn_id: string, record: any }): MsgUpdateIscnRecord => ({
      from,
      iscnId: iscn_id,
      record: recordFromAmino(record),
    }),
  },
  '/likechain.iscn.MsgChangeIscnRecordOwnership': {
    aminoType: 'likecoin-chain/MsgChangeIscnRecordOwnership',
    toAmino: ({ from, iscnId, newOwner }: MsgChangeIscnRecordOwnership) => ({
      from,
      iscn_id: iscnId,
      new_owner: newOwner,
    }),
    fromAmino: ({ from, iscn_id, new_owner }: { from: string, iscn_id: string, new_owner: string }): MsgChangeIscnRecordOwnership => ({
      from, iscnId: iscn_id, newOwner: new_owner,
    }),
  }
} as Record<string, AminoConverter>;

export default IscnAminoTypes;
