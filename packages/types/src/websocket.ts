import { type SDKBlock } from "./sdk";

export type WebsocketSDKMessage = {
  exitedBlockIds: string[];
  updatedBlocks: SDKBlock[];
};
