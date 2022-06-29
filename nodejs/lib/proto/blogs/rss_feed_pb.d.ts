// package: portfolio.blogs
// file: proto/blogs/rss_feed.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RSSFeed extends jspb.Message { 
    getId(): string;
    setId(value: string): RSSFeed;
    getUrl(): string;
    setUrl(value: string): RSSFeed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RSSFeed.AsObject;
    static toObject(includeInstance: boolean, msg: RSSFeed): RSSFeed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RSSFeed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RSSFeed;
    static deserializeBinaryFromReader(message: RSSFeed, reader: jspb.BinaryReader): RSSFeed;
}

export namespace RSSFeed {
    export type AsObject = {
        id: string,
        url: string,
    }
}

export class CreateRSSFeedRequest extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): CreateRSSFeedRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRSSFeedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRSSFeedRequest): CreateRSSFeedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRSSFeedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRSSFeedRequest;
    static deserializeBinaryFromReader(message: CreateRSSFeedRequest, reader: jspb.BinaryReader): CreateRSSFeedRequest;
}

export namespace CreateRSSFeedRequest {
    export type AsObject = {
        url: string,
    }
}

export class BatchGetRSSFeedsResponse extends jspb.Message { 
    clearRssFeedsList(): void;
    getRssFeedsList(): Array<RSSFeed>;
    setRssFeedsList(value: Array<RSSFeed>): BatchGetRSSFeedsResponse;
    addRssFeeds(value?: RSSFeed, index?: number): RSSFeed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchGetRSSFeedsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchGetRSSFeedsResponse): BatchGetRSSFeedsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchGetRSSFeedsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchGetRSSFeedsResponse;
    static deserializeBinaryFromReader(message: BatchGetRSSFeedsResponse, reader: jspb.BinaryReader): BatchGetRSSFeedsResponse;
}

export namespace BatchGetRSSFeedsResponse {
    export type AsObject = {
        rssFeedsList: Array<RSSFeed.AsObject>,
    }
}

export class GetRSSFeedRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetRSSFeedRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRSSFeedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRSSFeedRequest): GetRSSFeedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRSSFeedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRSSFeedRequest;
    static deserializeBinaryFromReader(message: GetRSSFeedRequest, reader: jspb.BinaryReader): GetRSSFeedRequest;
}

export namespace GetRSSFeedRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetRSSFeedResponse extends jspb.Message { 

    hasRssFeeds(): boolean;
    clearRssFeeds(): void;
    getRssFeeds(): RSSFeed | undefined;
    setRssFeeds(value?: RSSFeed): GetRSSFeedResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRSSFeedResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRSSFeedResponse): GetRSSFeedResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRSSFeedResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRSSFeedResponse;
    static deserializeBinaryFromReader(message: GetRSSFeedResponse, reader: jspb.BinaryReader): GetRSSFeedResponse;
}

export namespace GetRSSFeedResponse {
    export type AsObject = {
        rssFeeds?: RSSFeed.AsObject,
    }
}

export class UpdateRSSFeedRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateRSSFeedRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRSSFeedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRSSFeedRequest): UpdateRSSFeedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRSSFeedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRSSFeedRequest;
    static deserializeBinaryFromReader(message: UpdateRSSFeedRequest, reader: jspb.BinaryReader): UpdateRSSFeedRequest;
}

export namespace UpdateRSSFeedRequest {
    export type AsObject = {
        id: string,
    }
}

export class DeleteRSSFeedRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteRSSFeedRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRSSFeedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRSSFeedRequest): DeleteRSSFeedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRSSFeedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRSSFeedRequest;
    static deserializeBinaryFromReader(message: DeleteRSSFeedRequest, reader: jspb.BinaryReader): DeleteRSSFeedRequest;
}

export namespace DeleteRSSFeedRequest {
    export type AsObject = {
        id: string,
    }
}
