import { MsgChangeIscnRecordOwnership, MsgCreateIscnRecord, MsgUpdateIscnRecord } from "./tx";

const IscnAminoTypes = {
  '/likechain.iscn.MsgCreateIscnRecord': {
    aminoType: 'likecoin-chain/MsgCreateIscnRecord',
    toAmino: ({ from, record }: MsgCreateIscnRecord) => ({
      from,
      record: {
        ...record,
        stakeholders: record?.stakeholders.map(s => JSON.parse(s.toString())),
        contentMetadata: JSON.parse(record?.contentMetadata.toString() || '{}'),
      },
    }),
    fromAmino: ({ from, record }: { from: string, record: any }): MsgCreateIscnRecord => ({
      from,
      record: {
        ...record,
        stakeholders: record?.stakeholders.map((s: string) =>
          Buffer.from(JSON.stringify(s), 'utf8')
        ),
        contentMetadata: Buffer.from(JSON.stringify(record?.contentMetadata || {}), 'utf8'),
      },
    }),
  },
  '/likechain.iscn.MsgUpdateIscnRecord': {
    aminoType: 'likecoin-chain/MsgUpdateIscnRecord',
    toAmino: ({ from, iscnId, record }: MsgUpdateIscnRecord) => ({
      from,
      iscnId,
      record: {
        ...record,
        stakeholders: record?.stakeholders.map(s => JSON.parse(s.toString())),
        contentMetadata: JSON.parse(record?.contentMetadata.toString() || '{}'),
      },
    }),
    fromAmino: ({ from, iscnId, record }: { from: string, iscnId: string, record: any }): MsgUpdateIscnRecord => ({
      from,
      iscnId,
      record: {
        ...record,
        stakeholders: record?.stakeholders.map((s: string) =>
          Buffer.from(JSON.stringify(s), 'utf8')
        ),
        contentMetadata: Buffer.from(JSON.stringify(record?.contentMetadata || {}), 'utf8'),
      },
    }),
  },
  '/likechain.iscn.MsgChangeIscnRecordOwnership': {
    aminoType: 'likecoin-chain/MsgChangeIscnRecordOwnership',
    toAmino: ({ from, iscnId, newOwner }: MsgChangeIscnRecordOwnership) => ({
      from,
      iscnId,
      newOwner,
    }),
    fromAmino: ({ from, iscnId, newOwner }: { from: string, iscnId: string, newOwner: string }): MsgChangeIscnRecordOwnership => ({
      from, iscnId, newOwner,
    }),
  }
}

export default IscnAminoTypes;
