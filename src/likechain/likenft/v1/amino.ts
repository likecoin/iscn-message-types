import {
  MsgNewClass,
  MsgUpdateClass,
  MsgMintNFT,
  MsgBurnNFT,
  MsgCreateBlindBoxContent,
  MsgUpdateBlindBoxContent,
  MsgDeleteBlindBoxContent,
  MsgCreateOffer,
  MsgUpdateOffer,
  MsgDeleteOffer,
  MsgCreateListing,
  MsgUpdateListing,
  MsgDeleteListing,
  MsgSellNFT,
  MsgBuyNFT,
  MsgCreateRoyaltyConfig,
  MsgUpdateRoyaltyConfig,
  MsgDeleteRoyaltyConfig,
} from './tx';
import {
  CreateRoyaltyConfigAuthorization,
  UpdateRoyaltyConfigAuthorization,
  DeleteRoyaltyConfigAuthorization,
  CreateListingAuthorization,
  UpdateListingAuthorization,
  DeleteListingAuthorization,
  CreateOfferAuthorization,
  UpdateOfferAuthorization,
  DeleteOfferAuthorization,
  NewClassAuthorization,
  UpdateClassAuthorization,
  SendNFTAuthorization,
  MintNFTAuthorization,
} from './authz';
import { AssertIsAminoConverter, AssertIsAminoType, dateToAmino, jsonInputFromAmino, jsonInputToAmino, longFromAmino } from '../../../amino';
import { ClassInput, ClassParentInput } from './class_input';
import { classParentTypeToJSON, classParentTypeFromJSON, MintPeriod, BlindBoxConfig, ClassConfig } from './class_data';
import { NFTInput } from './nft_input';
import { RoyaltyConfigInput, RoyaltyStakeholderInput } from './royalty_config';

export enum ClassParentTypeAmino {
  UNKNOWN = 'UNKNOWN',
  ISCN = 'ISCN',
  ACCOUNT = 'ACCOUNT',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface ClassParentInputAmino {
  type: ClassParentTypeAmino;
  iscn_id_prefix: string;
}

export const ClassParentInputAminoConverter = {
	aminoType: '/likechain.likenft.v1.ClassParentInput',
	toAmino: ({ iscnIdPrefix, type }: ClassParentInput): ClassParentInputAmino => ({
		iscn_id_prefix: iscnIdPrefix,
		type: classParentTypeToJSON(type) as ClassParentTypeAmino,
	}),
	fromAmino: ({ iscn_id_prefix, type }: ClassParentInputAmino): ClassParentInput => ({
		iscnIdPrefix: iscn_id_prefix,
		type: classParentTypeFromJSON(type),
	}),
};

type ClassParentInputAminoConverter = AssertIsAminoConverter<typeof ClassParentInputAminoConverter>;

export interface MintPeriodAmino {
  start_time: string;
  allowed_addresses: string[];
  mint_price: string;
}

const MintPeriodAminoConverter = {
	aminoType: '/likechain.likenft.v1.MintPeriod',
	toAmino: ({ startTime, allowedAddresses, mintPrice }: MintPeriod): MintPeriodAmino => ({
		start_time: dateToAmino(startTime),
		allowed_addresses: allowedAddresses,
		mint_price: mintPrice.toString(),
	}),
	fromAmino: ({ start_time, allowed_addresses, mint_price }: MintPeriodAmino): MintPeriod => ({
		startTime: new Date(start_time),
		allowedAddresses: allowed_addresses,
		mintPrice: longFromAmino(mint_price),
	}),
};

type MintPeriodAminoConverter = AssertIsAminoConverter<typeof MintPeriodAminoConverter>;

export interface BlindBoxConfigAmino {
  mint_periods: MintPeriodAmino[];
  reveal_time: string;
}

const BlindBoxConfigAminoConverter = {
	aminoType: '/likechain.likenft.v1.BlindBoxConfig',
	toAmino: ({ mintPeriods, revealTime }: BlindBoxConfig): BlindBoxConfigAmino => ({
		mint_periods: mintPeriods.map(MintPeriodAminoConverter.toAmino),
		reveal_time: dateToAmino(revealTime),
	}),
	fromAmino: ({ mint_periods, reveal_time }: BlindBoxConfigAmino): BlindBoxConfig => ({
		mintPeriods: mint_periods.map(MintPeriodAminoConverter.fromAmino),
		revealTime: new Date(reveal_time),
	}),
};

type BlindBoxConfigAminoConverter = AssertIsAminoConverter<typeof BlindBoxConfigAminoConverter>;

export interface ClassConfigAmino {
  burnable: boolean;
  max_supply: string;
  blind_box_config: BlindBoxConfigAmino | null;
}

export const ClassConfigAminoConverter = {
	aminoType: '/likechain.likenft.v1.ClassConfig',
	toAmino: ({ burnable, maxSupply, blindBoxConfig }: ClassConfig): ClassConfigAmino => ({
		burnable,
		max_supply: maxSupply.toString(),
		blind_box_config: blindBoxConfig ? BlindBoxConfigAminoConverter.toAmino(blindBoxConfig) : null,
	}),
	fromAmino: ({ burnable, max_supply, blind_box_config }: ClassConfigAmino): ClassConfig => ({
		burnable,
		maxSupply: longFromAmino(max_supply),
		blindBoxConfig: blind_box_config === null ? undefined : BlindBoxConfigAminoConverter.fromAmino(blind_box_config),
	}),
};

type ClassConfigAminoConverter = AssertIsAminoConverter<typeof ClassConfigAminoConverter>;

export interface ClassInputAmino {
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  metadata: any;
  config: ClassConfigAmino;
}

export const ClassInputAminoConverter = {
  aminoType: '/likechain.likenft.v1.ClassInput',
  toAmino: ({ name, symbol, description, uri, uriHash, metadata, config }: ClassInput): ClassInputAmino => {
    const output: Partial<ClassInputAmino> = {
      name,
      symbol,
      description,
      uri,
      uri_hash: uriHash,
      metadata: jsonInputToAmino(metadata),
    };
    if (config) {
      output.config = ClassConfigAminoConverter.toAmino(config);
    } else {
      output.config = { burnable: false, max_supply: '0', blind_box_config: null };
    }
    return output as ClassInputAmino;
	},
  fromAmino: ({ name, symbol, description, uri, uri_hash, metadata, config }: ClassInputAmino): ClassInput => ({
    name,
    symbol,
    description,
    uri,
    uriHash: uri_hash,
    metadata: jsonInputFromAmino(metadata),
    config: ClassConfigAminoConverter.fromAmino(config),
  }),
};

type ClassInputAminoConverter = AssertIsAminoConverter<typeof ClassInputAminoConverter>;

export interface MsgNewClassAmino {
  creator: string;
  parent: ClassParentInputAmino;
  input: ClassInputAmino;
}

export const MsgNewClassAminoType = {
  '/likechain.likenft.v1.MsgNewClass': {
    aminoType: 'likenft/NewClass',
    toAmino: ({ creator, parent, input }: MsgNewClass): MsgNewClassAmino => {
      const output: Partial<MsgNewClassAmino> = {
        creator,
      }
      if (parent) {
        output.parent = ClassParentInputAminoConverter.toAmino(parent);
      } else {
        output.parent = { iscn_id_prefix: '', type: ClassParentTypeAmino.UNKNOWN };
      }
      if (input) {
        output.input = ClassInputAminoConverter.toAmino(input);
      } else {
        output.input = {
          name: '',
          symbol: '',
          description: '',
          uri: '',
          uri_hash: '',
          metadata: null,
          config: { blind_box_config: null, burnable: false, max_supply: '0' },
        };
      }
			return output as MsgNewClassAmino;
    },
    fromAmino: ({ creator, parent, input }: MsgNewClassAmino): MsgNewClass => ({
      creator,
      parent: ClassParentInputAminoConverter.fromAmino(parent),
      input: ClassInputAminoConverter.fromAmino(input),
    }),
  },
};

export interface MsgUpdateClassAmino {
  creator: string;
  class_id: string;
  input: ClassInputAmino;
}

export const MsgUpdateClassAminoType = {
  '/likechain.likenft.v1.MsgUpdateClass': {
    aminoType: 'likenft/UpdateClass',
    toAmino: ({ creator, classId, input }: MsgUpdateClass): MsgUpdateClassAmino => {
      const output: Partial<MsgUpdateClassAmino> = {
        creator,
        class_id: classId ?? '',
      }
      if (input) {
        output.input = ClassInputAminoConverter.toAmino(input);
      } else {
        output.input = {
          name: '',
          symbol: '',
          description: '',
          uri: '',
          uri_hash: '',
          metadata: null,
          config: { blind_box_config: null, burnable: false, max_supply: '0' },
        };
      }
			return output as MsgUpdateClassAmino;
    },
    fromAmino: ({ creator, class_id, input }: MsgUpdateClassAmino): MsgUpdateClass => ({
      creator,
      classId: class_id,
      input: ClassInputAminoConverter.fromAmino(input),
    }),
  },
};

export interface NFTInputAmino {
  uri: string;
  uri_hash: string;
  metadata: any;
}

export const NFTInputAminoConverter = {
  aminoType: '/likechain.likenft.v1.NFTInput',
  toAmino: ({ uri, uriHash, metadata }: NFTInput): NFTInputAmino => ({
    uri,
    uri_hash: uriHash,
    metadata: jsonInputToAmino(metadata),
  }),
  fromAmino: ({ uri, uri_hash, metadata }: NFTInputAmino): NFTInput => ({
    uri,
    uriHash: uri_hash,
    metadata: jsonInputFromAmino(metadata),
  }),
};

type NFTInputAminoConverter = AssertIsAminoConverter<typeof NFTInputAminoConverter>;

export interface MsgMintNFTAmino {
  creator: string;
  class_id: string;
  id: string;
  input: NFTInputAmino | null;
}

export const MsgMintNFTAminoType = {
  '/likechain.likenft.v1.MsgMintNFT': {
    aminoType: 'likenft/MintNFT',
    toAmino: ({ creator, classId, id, input }: MsgMintNFT): MsgMintNFTAmino => ({
      creator,
      class_id: classId,
      id,
      input: input ? NFTInputAminoConverter.toAmino(input) : null,
    }),
    fromAmino: ({ creator, class_id, id, input }: MsgMintNFTAmino): MsgMintNFT => ({
      creator,
      classId: class_id,
      id,
      input: input ? NFTInputAminoConverter.fromAmino(input) : undefined,
    }),
  },
};

export interface MsgBurnNFTAmino {
  creator: string;
  class_id: string;
  nft_id: string ;
}

export const MsgBurnNFTAminoType = {
  '/likechain.likenft.v1.MsgBurnNFT': {
    aminoType: 'likenft/BurnNFT',
    toAmino: ({ classId, creator, nftId }: MsgBurnNFT) => ({
      creator,
      class_id: classId,
      nft_id: nftId,
    }),
    fromAmino: ({ creator, class_id, nft_id }: MsgBurnNFTAmino): MsgBurnNFT => ({
      creator,
      classId: class_id,
      nftId: nft_id,
    }),
  },
};

export interface MsgCreateBlindBoxContentAmino {
  creator: string;
  class_id: string;
  id: string;
  input: NFTInputAmino;
}

export const MsgCreateBlindBoxContentAminoType = {
  'likechain.likenft.v1.MsgCreateBlindBoxContent': {
    aminoType: 'likenft/CreateBlindBoxContent',
    toAmino: ({ creator, classId, id, input }: MsgCreateBlindBoxContent): MsgCreateBlindBoxContentAmino => ({
      creator,
      class_id: classId,
      id,
      input: input ? NFTInputAminoConverter.toAmino(input) : { uri: '', uri_hash: '', metadata: null },
    }),
    fromAmino: ({ creator, class_id, id, input }: MsgCreateBlindBoxContentAmino): MsgCreateBlindBoxContent => ({
      creator,
      classId: class_id,
      id,
      input: NFTInputAminoConverter.fromAmino(input),
    }),
  },
};

export interface MsgUpdateBlindBoxContentAmino {
  creator: string;
  class_id: string;
  id: string;
  input: NFTInputAmino;
}

export const MsgUpdateBlindBoxContentAminoType = {
  'likechain.likenft.v1.MsgUpdateBlindBoxContent': {
    aminoType: 'likenft/UpdateBlindBoxContent',
    toAmino: ({ creator, classId, id, input }: MsgUpdateBlindBoxContent): MsgUpdateBlindBoxContentAmino => ({
      creator,
      class_id: classId,
      id,
      input: input ? NFTInputAminoConverter.toAmino(input) : { uri: '', uri_hash: '', metadata: null },
    }),
    fromAmino: ({ creator, class_id, id, input }: MsgUpdateBlindBoxContentAmino): MsgUpdateBlindBoxContent => ({
      creator,
      classId: class_id,
      id,
      input: NFTInputAminoConverter.fromAmino(input),
    }),
  },
};

export interface MsgDeleteBlindBoxContentAmino {
  creator: string;
  class_id: string;
  id: string;
}

export const MsgDeleteBlindBoxContentAminoType = {
  'likechain.likenft.v1.MsgDeleteBlindBoxContent': {
    aminoType: 'likenft/DeleteBlindBoxContent',
    toAmino: ({ creator, classId, id }: MsgDeleteBlindBoxContent): MsgDeleteBlindBoxContentAmino => ({
      creator,
      class_id: classId,
      id,
    }),
    fromAmino: ({ creator, class_id, id }: MsgDeleteBlindBoxContentAmino): MsgDeleteBlindBoxContent => ({
      creator,
      classId: class_id,
      id,
    }),
  },
};

export interface MsgCreateOfferAmino {
  creator: string;
  class_id: string;
  nft_id: string;
  price: string;
  expiration: string;
}

export const MsgCreateOfferAminoType = {
  'likechain.likenft.v1.MsgCreateOffer': {
    aminoType: 'likenft/CreateOffer',
    toAmino: ({ creator, classId, nftId, price, expiration }: MsgCreateOffer): MsgCreateOfferAmino => ({
      creator,
      class_id: classId,
      nft_id: nftId,
      price: price.toString(),
      expiration: dateToAmino(expiration),
    }),
    fromAmino: ({ creator, class_id, nft_id, price, expiration }: MsgCreateOfferAmino): MsgCreateOffer => ({
      creator,
      classId: class_id,
      nftId: nft_id,
      price: longFromAmino(price),
      expiration: new Date(expiration),
    }),
  },
};

export interface MsgUpdateOfferAmino {
  creator: string;
  class_id: string;
  nft_id: string;
  price: string;
  expiration: string;
}

export const MsgUpdateOfferAminoType = {
  'likechain.likenft.v1.MsgUpdateOffer': {
    aminoType: 'likenft/UpdateOffer',
    toAmino: ({ creator, classId, nftId, price, expiration }: MsgUpdateOffer): MsgUpdateOfferAmino => ({
      creator,
      class_id: classId,
      nft_id: nftId,
      price: price.toString(),
      expiration: dateToAmino(expiration),
    }),
    fromAmino: ({ creator, class_id, nft_id, price, expiration }: MsgUpdateOfferAmino): MsgUpdateOffer => ({
      creator,
      classId: class_id,
      nftId: nft_id,
      price: longFromAmino(price),
      expiration: new Date(expiration),
    }),
  },
};

export interface MsgDeleteOfferAmino {
  creator: string;
  class_id: string;
  nft_id: string;
}

export const MsgDeleteOfferAminoType = {
  'likechain.likenft.v1.MsgDeleteOffer': {
    aminoType: 'likenft/DeleteOffer',
    toAmino: ({ creator, classId, nftId }: MsgDeleteOffer): MsgDeleteOfferAmino => ({
      creator,
      class_id: classId,
      nft_id: nftId,
    }),
    fromAmino: ({ creator, class_id, nft_id }: MsgDeleteOfferAmino): MsgDeleteOffer => ({
      creator,
      classId: class_id,
      nftId: nft_id,
    }),
  },
};


export interface MsgCreateListingAmino {
  creator: string;
  class_id: string;
  nft_id: string;
  price: string;
  expiration: string;
  full_pay_to_royalty: boolean;
}

export const MsgCreateListingAminoType = {
  'likechain.likenft.v1.MsgCreateListing': {
    aminoType: 'likenft/CreateListing',
    toAmino: ({ creator, classId, nftId, price, expiration, fullPayToRoyalty }: MsgCreateListing): MsgCreateListingAmino => ({
      creator,
      class_id: classId,
      nft_id: nftId,
      price: price.toString(),
      expiration: dateToAmino(expiration),
      full_pay_to_royalty: fullPayToRoyalty,
    }),
    fromAmino: ({ creator, class_id, nft_id, price, expiration, full_pay_to_royalty }: MsgCreateListingAmino): MsgCreateListing => ({
      creator,
      classId: class_id,
      nftId: nft_id,
      price: longFromAmino(price),
      expiration: new Date(expiration),
      fullPayToRoyalty: full_pay_to_royalty,
    }),
  },
};

export interface MsgUpdateListingAmino {
  creator: string;
  class_id: string;
  nft_id: string;
  price: string;
  expiration: string;
  full_pay_to_royalty: boolean;
}

export const MsgUpdateListingAminoType = {
  'likechain.likenft.v1.MsgUpdateListing': {
    aminoType: 'likenft/UpdateListing',
    toAmino: ({ creator, classId, nftId, price, expiration, fullPayToRoyalty }: MsgUpdateListing): MsgUpdateListingAmino => ({
      creator,
      class_id: classId,
      nft_id: nftId,
      price: price.toString(),
      expiration: dateToAmino(expiration),
      full_pay_to_royalty: fullPayToRoyalty,
    }),
    fromAmino: ({ creator, class_id, nft_id, price, expiration, full_pay_to_royalty }: MsgUpdateListingAmino): MsgUpdateListing => ({
      creator,
      classId: class_id,
      nftId: nft_id,
      price: longFromAmino(price),
      expiration: new Date(expiration),
      fullPayToRoyalty: full_pay_to_royalty,
    }),
  },
};

export interface MsgDeleteListingAmino {
  creator: string;
  class_id: string;
  nft_id: string;
}

export const MsgDeleteListingAminoType = {
  'likechain.likenft.v1.MsgDeleteListing': {
    aminoType: 'likenft/DeleteListing',
    toAmino: ({ creator, classId, nftId }: MsgDeleteListing): MsgDeleteListingAmino => ({
      creator,
      class_id: classId,
      nft_id: nftId,
    }),
    fromAmino: ({ creator, class_id, nft_id }: MsgDeleteListingAmino): MsgDeleteListing => ({
      creator,
      classId: class_id,
      nftId: nft_id,
    }),
  },
};

export interface MsgSellNFTAmino {
  creator: string;
  class_id: string;
  nft_id: string;
  buyer: string;
  price: string;
  full_pay_to_royalty: boolean;
}

export const MsgSellNFTAminoType = {
  'likechain.likenft.v1.MsgSellNFT': {
    aminoType: 'likenft/SellNFT',
    toAmino: ({ creator, classId, nftId, buyer, price, fullPayToRoyalty }: MsgSellNFT): MsgSellNFTAmino => ({
      creator,
      class_id: classId,
      nft_id: nftId,
      buyer,
      price: price.toString(),
      full_pay_to_royalty: fullPayToRoyalty,
    }),
    fromAmino: ({ creator, class_id, nft_id, buyer, price, full_pay_to_royalty }: MsgSellNFTAmino): MsgSellNFT => ({
      creator,
      classId: class_id,
      nftId: nft_id,
      buyer,
      price: longFromAmino(price),
      fullPayToRoyalty: full_pay_to_royalty,
    }),
  },
};

export interface MsgBuyNFTAmino {
  creator: string;
  class_id: string;
  nft_id: string;
  seller: string;
  price: string;
}

export const MsgBuyNFTAminoType = {
  'likechain.likenft.v1.MsgBuyNFT': {
    aminoType: 'likenft/BuyNFT',
    toAmino: ({ creator, classId, nftId, seller, price }: MsgBuyNFT): MsgBuyNFTAmino => ({
      creator,
      class_id: classId,
      nft_id: nftId,
      seller,
      price: price.toString(),
    }),
    fromAmino: ({ creator, class_id, nft_id, seller, price }: MsgBuyNFTAmino): MsgBuyNFT => ({
      creator,
      classId: class_id,
      nftId: nft_id,
      seller,
      price: longFromAmino(price),
    }),
  },
};

export interface RoyaltyStakeholderInputAmino {
  account: string;
  weight: string;
}

export const RoyaltyStakeholderInputAminoConverter = {
	aminoType: '/likechain.likenft.v1.RoyaltyStakeholderInput',
  toAmino: ({ account, weight }: RoyaltyStakeholderInput): RoyaltyStakeholderInputAmino => ({
    account,
    weight: weight.toString(),
  }),
  fromAmino: ({ account, weight }: RoyaltyStakeholderInputAmino): RoyaltyStakeholderInput => ({
    account,
    weight: longFromAmino(weight),
  }),
};

type RoyaltyStakeholderInputAminoConverter = AssertIsAminoConverter<typeof RoyaltyStakeholderInputAminoConverter>;

export interface RoyaltyConfigInputAmino {
  rate_basis_points: string;
  stakeholders: RoyaltyStakeholderInputAmino[];
}

export const RoyaltyConfigInputAminoConverter = {
	aminoType: '/likechain.likenft.v1.RoyaltyConfigInput',
	toAmino: ({ rateBasisPoints, stakeholders }: RoyaltyConfigInput): RoyaltyConfigInputAmino => ({
		rate_basis_points: rateBasisPoints.toString(),
    stakeholders: stakeholders.map(RoyaltyStakeholderInputAminoConverter.toAmino),
	}),
	fromAmino: ({ rate_basis_points, stakeholders }: RoyaltyConfigInputAmino): RoyaltyConfigInput => ({
    rateBasisPoints: longFromAmino(rate_basis_points),
    stakeholders: stakeholders.map(RoyaltyStakeholderInputAminoConverter.fromAmino),
	}),
};

type RoyaltyConfigInputAminoConverter = AssertIsAminoConverter<typeof RoyaltyConfigInputAminoConverter>;

export interface MsgCreateRoyaltyConfigAmino {
  creator: string;
  class_id: string;
  royalty_config: RoyaltyConfigInputAmino;
}

export const MsgCreateRoyaltyConfigAminoType = {
  'likechain.likenft.v1.MsgCreateRoyaltyConfig': {
    aminoType: 'likenft/CreateRoyaltyConfig',
    toAmino: ({ creator, classId, royaltyConfig }: MsgCreateRoyaltyConfig): MsgCreateRoyaltyConfigAmino => ({
      creator,
      class_id: classId,
      royalty_config: royaltyConfig ? RoyaltyConfigInputAminoConverter.toAmino(royaltyConfig) : {
        rate_basis_points: '0',
        stakeholders: [],
      },
    }),
    fromAmino: ({ creator, class_id, royalty_config }: MsgCreateRoyaltyConfigAmino): MsgCreateRoyaltyConfig => ({
      creator,
      classId: class_id,
      royaltyConfig: RoyaltyConfigInputAminoConverter.fromAmino(royalty_config),
    }),
  },
};

export interface MsgUpdateRoyaltyConfigAmino {
  creator: string;
  class_id: string;
  royalty_config: RoyaltyConfigInputAmino;
}

export const MsgUpdateRoyaltyConfigAminoType = {
  'likechain.likenft.v1.MsgUpdateRoyaltyConfig': {
    aminoType: 'likenft/UpdateRoyaltyConfig',
    toAmino: ({ creator, classId, royaltyConfig }: MsgUpdateRoyaltyConfig): MsgUpdateRoyaltyConfigAmino => ({
      creator,
      class_id: classId,
      royalty_config: royaltyConfig ? RoyaltyConfigInputAminoConverter.toAmino(royaltyConfig) : {
        rate_basis_points: '0',
        stakeholders: [],
      },
    }),
    fromAmino: ({ creator, class_id, royalty_config }: MsgUpdateRoyaltyConfigAmino): MsgUpdateRoyaltyConfig => ({
      creator,
      classId: class_id,
      royaltyConfig: RoyaltyConfigInputAminoConverter.fromAmino(royalty_config),
    }),
  },
};

export interface MsgDeleteRoyaltyConfigAmino {
  creator: string;
  class_id: string;
}

export const MsgDeleteRoyaltyConfigAminoType = {
  'likechain.likenft.v1.MsgDeleteRoyaltyConfig': {
    aminoType: 'likenft/DeleteRoyaltyConfig',
    toAmino: ({ creator, classId }: MsgDeleteRoyaltyConfig): MsgDeleteRoyaltyConfigAmino => ({
      creator,
      class_id: classId,
    }),
    fromAmino: ({ creator, class_id }: MsgDeleteRoyaltyConfigAmino): MsgDeleteRoyaltyConfig => ({
      creator,
      classId: class_id,
    }),
  },
};

export interface CreateRoyaltyConfigAuthorizationAmino {
  class_id: string;
}

export const CreateRoyaltyConfigAuthorizationAminoType = {
  '/likechain.likenft.v1.CreateRoyaltyConfigAuthorization': {
    aminoType: 'likenft/CreateRoyaltyConfigAuthorization',
    toAmino({ classId }: CreateRoyaltyConfigAuthorization): CreateRoyaltyConfigAuthorizationAmino {
      return { class_id: classId };
    },
    fromAmino({ class_id }: CreateRoyaltyConfigAuthorizationAmino): CreateRoyaltyConfigAuthorization {
      return { classId: class_id };
    },
  },
};

export interface UpdateRoyaltyConfigAuthorizationAmino {
  class_id: string;
}

export const UpdateRoyaltyConfigAuthorizationAminoType = {
  '/likechain.likenft.v1.UpdateRoyaltyConfigAuthorization': {
    aminoType: 'likenft/UpdateRoyaltyConfigAuthorization',
    toAmino({ classId }: UpdateRoyaltyConfigAuthorization): UpdateRoyaltyConfigAuthorizationAmino {
      return { class_id: classId };
    },
    fromAmino({ class_id }: UpdateRoyaltyConfigAuthorizationAmino): UpdateRoyaltyConfigAuthorization {
      return { classId: class_id };
    },
  },
};

export interface DeleteRoyaltyConfigAuthorizationAmino {
  class_id: string;
}

export const DeleteRoyaltyConfigAuthorizationAminoType = {
  '/likechain.likenft.v1.DeleteRoyaltyConfigAuthorization': {
    aminoType: 'likenft/DeleteRoyaltyConfigAuthorization',
    toAmino({ classId }: DeleteRoyaltyConfigAuthorization): DeleteRoyaltyConfigAuthorizationAmino {
      return { class_id: classId };
    },
    fromAmino({ class_id }: DeleteRoyaltyConfigAuthorizationAmino): DeleteRoyaltyConfigAuthorization {
      return { classId: class_id };
    },
  },
};

export interface CreateListingAuthorizationAmino {
  class_id: string;
  nft_id: string;
}

export const CreateListingAuthorizationAminoType = {
  '/likechain.likenft.v1.CreateListingAuthorization': {
    aminoType: 'likenft/CreateListingAuthorization',
    toAmino({ classId, nftId }: CreateListingAuthorization): CreateListingAuthorizationAmino {
      return { class_id: classId, nft_id: nftId };
    },
    fromAmino({ class_id, nft_id }: CreateListingAuthorizationAmino): CreateListingAuthorization {
      return { classId: class_id, nftId: nft_id };
    },
  },
};

export interface UpdateListingAuthorizationAmino {
  class_id: string;
  nft_id: string;
}

export const UpdateListingAuthorizationAminoType = {
  '/likechain.likenft.v1.UpdateListingAuthorization': {
    aminoType: 'likenft/UpdateListingAuthorization',
    toAmino({ classId, nftId }: UpdateListingAuthorization): UpdateListingAuthorizationAmino {
      return { class_id: classId, nft_id: nftId };
    },
    fromAmino({ class_id, nft_id }: UpdateListingAuthorizationAmino): UpdateListingAuthorization {
      return { classId: class_id, nftId: nft_id };
    },
  },
};

export interface DeleteListingAuthorizationAmino {
  class_id: string;
  nft_id: string;
}

export const DeleteListingAuthorizationAminoType = {
  '/likechain.likenft.v1.DeleteListingAuthorization': {
    aminoType: 'likenft/DeleteListingAuthorization',
    toAmino({ classId, nftId }: DeleteListingAuthorization): DeleteListingAuthorizationAmino {
      return { class_id: classId, nft_id: nftId };
    },
    fromAmino({ class_id, nft_id }: DeleteListingAuthorizationAmino): DeleteListingAuthorization {
      return { classId: class_id, nftId: nft_id };
    },
  },
};

export interface CreateOfferAuthorizationAmino {
  class_id: string;
  nft_id: string;
}

export const CreateOfferAuthorizationAminoType = {
  '/likechain.likenft.v1.CreateOfferAuthorization': {
    aminoType: 'likenft/CreateOfferAuthorization',
    toAmino({ classId, nftId }: CreateOfferAuthorization): CreateOfferAuthorizationAmino {
      return { class_id: classId, nft_id: nftId };
    },
    fromAmino({ class_id, nft_id }: CreateOfferAuthorizationAmino): CreateOfferAuthorization {
      return { classId: class_id, nftId: nft_id };
    },
  },
};

export interface UpdateOfferAuthorizationAmino {
  class_id: string;
  nft_id: string;
}

export const UpdateOfferAuthorizationAminoType = {
  '/likechain.likenft.v1.UpdateOfferAuthorization': {
    aminoType: 'likenft/UpdateOfferAuthorization',
    toAmino({ classId, nftId }: UpdateOfferAuthorization): UpdateOfferAuthorizationAmino {
      return { class_id: classId, nft_id: nftId };
    },
    fromAmino({ class_id, nft_id }: UpdateOfferAuthorizationAmino): UpdateOfferAuthorization {
      return { classId: class_id, nftId: nft_id };
    },
  },
};

export interface DeleteOfferAuthorizationAmino {
  class_id: string;
  nft_id: string;
}

export const DeleteOfferAuthorizationAminoType = {
  '/likechain.likenft.v1.DeleteOfferAuthorization': {
    aminoType: 'likenft/DeleteOfferAuthorization',
    toAmino({ classId, nftId }: DeleteOfferAuthorization): DeleteOfferAuthorizationAmino {
      return { class_id: classId, nft_id: nftId };
    },
    fromAmino({ class_id, nft_id }: DeleteOfferAuthorizationAmino): DeleteOfferAuthorization {
      return { classId: class_id, nftId: nft_id };
    },
  },
};

export interface NewClassAuthorizationAmino {
  iscn_id_prefix: string;
}

export const NewClassAuthorizationAminoType = {
  '/likechain.likenft.v1.NewClassAuthorization': {
    aminoType: 'likenft/NewClassAuthorization',
    toAmino({ iscnIdPrefix }: NewClassAuthorization): NewClassAuthorizationAmino {
      return { iscn_id_prefix: iscnIdPrefix };
    },
    fromAmino({ iscn_id_prefix }: NewClassAuthorizationAmino): NewClassAuthorization {
      return { iscnIdPrefix: iscn_id_prefix };
    },
  },
};

export interface UpdateClassAuthorizationAmino {
  class_id: string;
}

export const UpdateClassAuthorizationAminoType = {
  '/likechain.likenft.v1.UpdateClassAuthorization': {
    aminoType: 'likenft/UpdateClassAuthorization',
    toAmino({ classId }: UpdateClassAuthorization): UpdateClassAuthorizationAmino {
      return { class_id: classId };
    },
    fromAmino({ class_id }: UpdateClassAuthorizationAmino): UpdateClassAuthorization {
      return { classId: class_id };
    },
  },
};

export interface MintNFTAuthorizationAmino {
  class_id: string;
}

export const MintNFTAuthorizationAminoType = {
  '/likechain.likenft.v1.MintNFTAuthorization': {
    aminoType: 'likenft/MintNFTAuthorization',
    toAmino({ classId }: MintNFTAuthorization): MintNFTAuthorizationAmino {
      return { class_id: classId };
    },
    fromAmino({ class_id }: MintNFTAuthorizationAmino): MintNFTAuthorization {
      return { classId: class_id };
    },
  },
};

export interface SendNFTAuthorizationAmino {
  class_id: string;
  id: string;
}

export const SendNFTAuthorizationAminoType = {
  '/likechain.likenft.v1.SendNFTAuthorization': {
    aminoType: 'likenft/SendNFTAuthorization',
    toAmino({ classId, id }: SendNFTAuthorization): SendNFTAuthorizationAmino {
      return { class_id: classId, id };
    },
    fromAmino({ class_id, id }: SendNFTAuthorizationAmino): SendNFTAuthorization {
      return { classId: class_id, id };
    },
  },
};

export const LikeNftAminoTypes = {
	...MsgNewClassAminoType,
  ...MsgUpdateClassAminoType,
  ...MsgMintNFTAminoType,
  ...MsgBurnNFTAminoType,
  ...MsgCreateBlindBoxContentAminoType,
  ...MsgUpdateBlindBoxContentAminoType,
  ...MsgDeleteBlindBoxContentAminoType,
  ...MsgCreateOfferAminoType,
  ...MsgUpdateOfferAminoType,
  ...MsgDeleteOfferAminoType,
  ...MsgCreateListingAminoType,
  ...MsgUpdateListingAminoType,
  ...MsgDeleteListingAminoType,
  ...MsgSellNFTAminoType,
  ...MsgBuyNFTAminoType,
  ...MsgCreateRoyaltyConfigAminoType,
  ...MsgUpdateRoyaltyConfigAminoType,
  ...MsgDeleteRoyaltyConfigAminoType,
  ...CreateRoyaltyConfigAuthorizationAminoType,
  ...UpdateRoyaltyConfigAuthorizationAminoType,
  ...DeleteRoyaltyConfigAuthorizationAminoType,
  ...CreateListingAuthorizationAminoType,
  ...UpdateListingAuthorizationAminoType,
  ...DeleteListingAuthorizationAminoType,
  ...CreateOfferAuthorizationAminoType,
  ...UpdateOfferAuthorizationAminoType,
  ...DeleteOfferAuthorizationAminoType,
  ...NewClassAuthorizationAminoType,
  ...UpdateClassAuthorizationAminoType,
  ...MintNFTAuthorizationAminoType,
  ...SendNFTAuthorizationAminoType,
};

type LikeNftAminoTypes = AssertIsAminoType<typeof LikeNftAminoTypes>

export default LikeNftAminoTypes;
