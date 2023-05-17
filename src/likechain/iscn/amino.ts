import {
  IscnRecord,
  MsgCreateIscnRecord,
  MsgUpdateIscnRecord,
  MsgChangeIscnRecordOwnership,
} from './tx';
import { UpdateAuthorization } from './authz';
import {
  jsonInputFromAmino,
  jsonInputToAmino,
  AssertIsAminoConverter,
  AssertIsAminoType,
  longFromAmino,
} from '../../amino';

export interface IscnRecordAmino {
  recordNotes: string;
  contentFingerprints?: string[];
  stakeholders?: any[];
  contentMetadata: any;
}

export const IscnRecordAminoConverter = {
  aminoType: '/likechain.iscn.IscnRecord',
  toAmino(record: IscnRecord): IscnRecordAmino {
    const result: IscnRecordAmino = {
      ...record,
      stakeholders: record.stakeholders.map((s) => jsonInputToAmino(s)),
      contentMetadata: jsonInputToAmino(record?.contentMetadata),
    };
    if (!result.stakeholders || result.stakeholders.length === 0) {
      delete result.stakeholders;
    }
    if (!result.contentFingerprints || result.contentFingerprints.length === 0) {
      delete result.contentFingerprints;
    }
    return result;
  },
  fromAmino(record: IscnRecordAmino): IscnRecord {
    const stakeholders = record.stakeholders?.map((s) => jsonInputFromAmino(s)) || [];
    return {
      recordNotes: record.recordNotes || '',
      stakeholders,
      contentFingerprints: record?.contentFingerprints || [],
      contentMetadata: jsonInputFromAmino(record.contentMetadata),
    };
  },
};

type IscnRecordAminoConverter = AssertIsAminoConverter<typeof IscnRecordAminoConverter>;

export interface MsgCreateIscnRecordAmino {
  from: string;
  record: IscnRecordAmino;
  nonce?: string;
}

export const MsgCreateIscnRecordAminoType = {
  '/likechain.iscn.MsgCreateIscnRecord': {
    aminoType: 'likecoin-chain/MsgCreateIscnRecord',
    toAmino: ({ from, record, nonce }: MsgCreateIscnRecord): MsgCreateIscnRecordAmino => {
      const result: MsgCreateIscnRecordAmino = {
        from,
        record: IscnRecordAminoConverter.toAmino(record!),
      };
      if (nonce.notEquals(0)) {
        result.nonce = nonce.toString();
      }
      return result;
    },
    fromAmino: ({ from, record, nonce = '0' }: MsgCreateIscnRecordAmino): MsgCreateIscnRecord => ({
      from,
      record: IscnRecordAminoConverter.fromAmino(record),
      nonce: longFromAmino(nonce)
    }),
  },
};

export interface MsgUpdateIscnRecordAmino {
  from: string;
  iscn_id: string;
  record: IscnRecordAmino;
}

export const MsgUpdateIscnRecordAminoType = {
  '/likechain.iscn.MsgUpdateIscnRecord': {
    aminoType: 'likecoin-chain/MsgUpdateIscnRecord',
    toAmino: ({ from, iscnId, record }: MsgUpdateIscnRecord): MsgUpdateIscnRecordAmino => ({
      from,
      iscn_id: iscnId,
      record: IscnRecordAminoConverter.toAmino(record!)
    }),
    fromAmino: ({ from, iscn_id, record }: MsgUpdateIscnRecordAmino): MsgUpdateIscnRecord => ({
      from,
      iscnId: iscn_id,
      record: IscnRecordAminoConverter.fromAmino(record),
    }),
  },
};

export interface MsgChangeIscnRecordOwnershipAmino {
  from: string;
  iscn_id: string;
  new_owner: string;
}

export const MsgChangeIscnRecordOwnershipAminoType = {
  '/likechain.iscn.MsgChangeIscnRecordOwnership': {
    aminoType: 'likecoin-chain/MsgChangeIscnRecordOwnership',
    toAmino: ({ from, iscnId, newOwner }: MsgChangeIscnRecordOwnership): MsgChangeIscnRecordOwnershipAmino => ({
      from,
      iscn_id: iscnId,
      new_owner: newOwner,
    }),
    fromAmino: ({ from, iscn_id, new_owner }: MsgChangeIscnRecordOwnershipAmino): MsgChangeIscnRecordOwnership => ({
      from, iscnId: iscn_id, newOwner: new_owner,
    }),
  }
}

export interface UpdateAuthorizationAmino {
  iscn_id_prefix: string;
}

export const UpdateAuthorizationAminoType = {
  '/likechain.iscn.UpdateAuthorization': {
    aminoType:  'likecoin-chain/UpdateAuthorization',
    toAmino(a: UpdateAuthorization): UpdateAuthorizationAmino {
      return {
        iscn_id_prefix: a.iscnIdPrefix,
      };
    },
    fromAmino(a: UpdateAuthorizationAmino): UpdateAuthorization {
      return {
        iscnIdPrefix: a.iscn_id_prefix,
      };
    },
  }
};

export const IscnAminoTypes = {
  ...MsgCreateIscnRecordAminoType,
  ...MsgUpdateIscnRecordAminoType,
  ...MsgChangeIscnRecordOwnershipAminoType,
  ...UpdateAuthorizationAminoType,
};

type IscnAminoTypes = AssertIsAminoType<typeof IscnAminoTypes>;

export default IscnAminoTypes;
