import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes,
  assertIsBroadcastTxSuccess,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { MsgCreateIscnRecord } from "../../dist/es6/iscn/tx";

const registry = new Registry([
  ...defaultRegistryTypes,
  ["/likechain.iscn.MsgCreateIscnRecord", MsgCreateIscnRecord],
]);


function formatISCNPayload(payload, version = 1) {
  const {
    title,
    description,
    tagsString,
    url,
    license,
    ipfsHash,
    fileSHA256,
    authorNames,
    authorUrls,
  } = payload;

  const contentFingerprints = [];
  if (fileSHA256) contentFingerprints.push(`hash://sha256/${fileSHA256}`);
  if (ipfsHash) contentFingerprints.push(`ipfs://${ipfsHash}`);
  const stakeholders = [];
  if (authorNames.length) {
    for (let i = 0; i < authorNames.length; i += 1) {
      const authorName = authorNames[i];
      const authorUrl = authorUrls[i];
      const isNonEmpty = authorUrl || authorName;
      if (isNonEmpty) {
        stakeholders.push(Buffer.from(JSON.stringify({
          entity: {
            id: authorUrl || undefined,
            name: authorName,
          },
          rewardProportion: 1,
          contributionType: 'http://schema.org/author',
        }), 'utf8'))
      }
    }
  }
  const contentMetadata = {
    "@context": "http://schema.org/",
    "@type": "CreativeWorks",
    title,
    description,
    version,
    url,
    keywords: tagsString,
    usageInfo: license,
  };
  return {
    recordNotes: '',
    contentFingerprints,
    stakeholders,
    contentMetadata: Buffer.from(JSON.stringify(contentMetadata), 'utf8'),
  };
}

export async function signISCNTx(payload, signer, address) {
  const client = await SigningStargateClient.connectWithSigner(
    process.env.rpcURL,
    signer,
    { registry }
  );

  const record = formatISCNPayload(payload);
  const message = {
    typeUrl: "/likechain.iscn.MsgCreateIscnRecord",
    value: {
      from: address,
      record,
    },
  };
  const fee = {
    amount: [{ amount: '1000000', denom: 'nanolike' }],
    gas: '1000000',
  };
  const memo = 'iscn sign';
  const response = await client.signAndBroadcast(address, [message], fee, memo);
  assertIsBroadcastTxSuccess(response);
  return response;
}

export default signISCNTx;
