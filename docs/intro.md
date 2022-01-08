---
sidebar_position: 1
---

# Getting Started

WatcherDAO provides entity analytics by and for the Solana community.

## Initializing the SDK

Every smart contract comes with an SDK. The two main smart contracts are `entity-lists` and `entity-lists-analytics`.

Let's get started by installing the SDKs.

```bash
yarn add @watcherdao/entity-lists @watcherdao/entity-lists-analytics
```

Next we can initialize the SDKs.

```typescript
import { PublicKey } from '@solana/web3.js'
import * as anchor from '@project-serum/anchor';
import { BN } from 'bn.js';
import { EntityLists } from '@watcherdao/entity-lists';
import { EntityListsAnalytics } from '@watcherdao/entity-lists-analytics';

anchor.setProvider(anchor.Provider.env());

const provider = anchor.getProvider();

let entityListsSdk;
let entityAnalyticsSdk

async function getPrograms() {
  entityListsSdk = await EntityLists.init(provider);
  entityAnalyticsSdk = await EntityListsAnalytics.init(provider);

  return {
    entityListsSdk,
    entityAnalyticsSdk
  }
}

getPrograms().catch(console.error);
```

## Fetching Entity Lists and Analytics

:::info Live Code

You can run and edit all of the code blocks in this tutorial against the Solana network! The above block contains all of the needed imports.
:::

Time to fetch the analytics.

```typescript
const entityLists = await entityListsSdk.getAll();
```
