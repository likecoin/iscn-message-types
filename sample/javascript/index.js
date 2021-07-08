const secp256k1 = require('secp256k1');
const createHash = require('create-hash');
const Long = require('long');
const { TxBody, AuthInfo, SignDoc, TxRaw } = require("@cosmjs/stargate/build/codec/cosmos/tx/v1beta1/tx");
const { PubKey } = require("@cosmjs/stargate/build/codec/cosmos/crypto/secp256k1/keys");
const { MsgCreateIscnRecord } = require("../../dist/iscn/tx");

// define parameters
const chainId = "likechain-local-testnet";
const privateKey = "69b4e47d3aa61ad6184493529cd0feb0d2dfb55ea31aa9799af42607de3cd1a9";
const publicKey = "A4Fj1Y4k77Qaxuy496CHYB2rpfWXkM3LCnlyrU8eKbH7";
const accountNumber = 2;
const fromAddress = "cosmos1lsagfzrm4gz28he4wunt63sts5xzmczw8pkek3";
const memo = "Test MsgCreateIscnRecord";
const gasLimit = 100000;
const sequence = 19;


const messages = [{
  typeUrl: "/likechain.iscn.MsgCreateIscnRecord",
  value: {
    from: fromAddress,
    record: {
      recordNotes: "A new record",
      contentFingerprints: [],
      stakeholders: [],
      contentMetadata: Buffer.from("null"),
    },
  }
}];

const wrappedMessages = messages.map(msg => {
  return {
    typeUrl: msg.typeUrl,
    value: MsgCreateIscnRecord.encode(msg.value).finish(),
  }
})

const body = {
  typeUrl: "/cosmos.tx.v1beta1.TxBody",
  value: {
    memo,
    messages: wrappedMessages,
    timeoutHeight: Long.UZERO,
    extensionOptions: [],
    nonCriticalExtensionOptions: [],
  },
}
const bodyBytes = TxBody.encode(body.value).finish();

const pubkeyBytes = PubKey.encode({ key: publicKey }).finish();

const authInfo = {
  signerInfos: [
    {
      sequence: Long.fromNumber(sequence),
      publicKey: {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: pubkeyBytes,
      },
      modeInfo: {
        single: {
          mode: 1,
        },
      },
    },
  ],
  fee: {
    gasLimit: Long.fromNumber(gasLimit),
    payer: "",
    granter: "",
    amount: [
      {
        denom: "nanolike",
        amount: "0",
      },
    ],
  },
}

const authInfoBytes = AuthInfo.encode(authInfo).finish();
const signDoc = {
  bodyBytes,
  authInfoBytes,
  chainId,
  accountNumber: Long.fromNumber(accountNumber),
}
const signBytes = SignDoc.encode(signDoc).finish();

const privkeyBytes = Buffer.from(privateKey, 'hex')

const sign = (msg, privateKey) => {
  const msgSha256 = createHash('sha256');
  msgSha256.update(msg);
  const msgHash = msgSha256.digest();
  const { signature: signatureArr } = secp256k1.ecdsaSign(msgHash, privateKey);
  const signature = Buffer.from(signatureArr)
  return signature;
}
const signatureBytes = sign(signBytes, privkeyBytes);

const tx = {
  bodyBytes,
  authInfoBytes,
  signatures: [signatureBytes],
}

const txBytes = TxRaw.encode(tx).finish();

console.log("Your tx_bytes:");
console.log(txBytes.toString('base64'));
