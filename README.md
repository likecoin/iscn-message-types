# ISCN-Message-Types

> Provides javascript/typescript protobuf message definition for ISCN messsage.

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm i -S @likecoin/iscn-message-types
```

## Usage

With [cosmjs](https://github.com/cosmos/cosmjs) `SigningStargateClient`

```typescript
import { MsgCreateIscnRecord } from '@likecoin/iscn-message-types/dist/iscn/tx';

const registry = new Registry([
  ...defaultRegistryTypes,
  ['/likechain.iscn.MsgCreateIscnRecord', MsgCreateIscnRecord],
]);

const client = await SigningStargateClient.connectWithSigner(
  RPC_URL,
  signer,
  { registry }
);

...

const message = {
  typeUrl: '/likechain.iscn.MsgCreateIscnRecord',
  value: {
    from: address,
    record,
  },
};

...

const response = await client.signAndBroadcast(address, [message], fee, '');
assertIsBroadcastTxSuccess(response);

```
With cosmjs [QueryClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/QueryClient.html)

Please refer to [iscn-js's ISCNQueryExtension](https://github.com/likecoin/iscn-js/blob/master/src/ISCNQueryExtension.ts) and [cosmjs documentation](https://github.com/cosmos/cosmjs/blob/main/packages/stargate/CUSTOM_PROTOBUF_CODECS.md#step-3b-instantiate-a-query-client-using-your-custom-query-service)

## Development

- Fetch cosmos `.proto` files needed to `./cosmos`

```bash
./scripts/1_clone_cosmos_proto.sh
```

- Build typescript definition in `./src`

```bash
./scripts/2_generate_typescript.sh
```

- Build javascript definition to `./dist`

```bash
npm run build
```

[npm-image]: https://img.shields.io/npm/v/@likecoin/iscn-message-types.svg
[npm-url]: https://www.npmjs.com/package/@likecoin/iscn-message-types
