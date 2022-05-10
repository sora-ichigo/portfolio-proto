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
