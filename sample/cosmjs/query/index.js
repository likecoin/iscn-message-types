import { QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { setupISCNExtension } from "./extension";

let queryClient;

async function initQueryClient() {
  const tendermintClient = await Tendermint34Client.connect(process.env.rpcURL);
  queryClient = QueryClient.withExtensions(
    tendermintClient,
    setupISCNExtension,
  );
}

export async function queryRecordsById(iscnId: string, fromVersion?: number, toVersion?: number) {
  if (!queryClient) await initQueryClient();
  return queryClient.iscn.recordsById(iscnId, fromVersion, toVersion);
}

export async function queryRecordsByFingerprint(fingerprint: string, fromSequence?: number) {
  if (!queryClient) await initQueryClient();
  return queryClient.iscn.recordsByFingerprint(fingerprint, fromSequence);
}

export async function queryRecordsByOwner(owner: string, fromSequence?: number) {
  if (!queryClient) await initQueryClient();
  return queryClient.iscn.recordsByOwner(owner, fromSequence)
}
