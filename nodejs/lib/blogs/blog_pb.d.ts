// package: blogs
// file: blogs/blog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Blog extends jspb.Message { 
    getId(): string;
    setId(value: string): Blog;
    getTitle(): string;
    setTitle(value: string): Blog;

    hasPostedAt(): boolean;
    clearPostedAt(): void;
    getPostedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPostedAt(value?: google_protobuf_timestamp_pb.Timestamp): Blog;
    getSiteUrl(): string;
    setSiteUrl(value: string): Blog;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): Blog;
    getServiceName(): string;
    setServiceName(value: string): Blog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blog.AsObject;
    static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blog;
    static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
    export type AsObject = {
        id: string,
        title: string,
        postedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        siteUrl: string,
        thumbnailUrl: string,
        serviceName: string,
    }
}

export class BlogFromRSSItem extends jspb.Message { 
    getId(): string;
    setId(value: string): BlogFromRSSItem;
    getTitle(): string;
    setTitle(value: string): BlogFromRSSItem;

    hasPostedAt(): boolean;
    clearPostedAt(): void;
    getPostedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPostedAt(value?: google_protobuf_timestamp_pb.Timestamp): BlogFromRSSItem;
    getSiteUrl(): string;
    setSiteUrl(value: string): BlogFromRSSItem;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): BlogFromRSSItem;
    getServiceName(): string;
    setServiceName(value: string): BlogFromRSSItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogFromRSSItem.AsObject;
    static toObject(includeInstance: boolean, msg: BlogFromRSSItem): BlogFromRSSItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogFromRSSItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogFromRSSItem;
    static deserializeBinaryFromReader(message: BlogFromRSSItem, reader: jspb.BinaryReader): BlogFromRSSItem;
}

export namespace BlogFromRSSItem {
    export type AsObject = {
        id: string,
        title: string,
        postedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        siteUrl: string,
        thumbnailUrl: string,
        serviceName: string,
    }
}

export class BlogFromManualItem extends jspb.Message { 
    getId(): string;
    setId(value: string): BlogFromManualItem;
    getTitle(): string;
    setTitle(value: string): BlogFromManualItem;

    hasPostedAt(): boolean;
    clearPostedAt(): void;
    getPostedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPostedAt(value?: google_protobuf_timestamp_pb.Timestamp): BlogFromManualItem;
    getSiteUrl(): string;
    setSiteUrl(value: string): BlogFromManualItem;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): BlogFromManualItem;
    getServiceName(): string;
    setServiceName(value: string): BlogFromManualItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogFromManualItem.AsObject;
    static toObject(includeInstance: boolean, msg: BlogFromManualItem): BlogFromManualItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogFromManualItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogFromManualItem;
    static deserializeBinaryFromReader(message: BlogFromManualItem, reader: jspb.BinaryReader): BlogFromManualItem;
}

export namespace BlogFromManualItem {
    export type AsObject = {
        id: string,
        title: string,
        postedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        siteUrl: string,
        thumbnailUrl: string,
        serviceName: string,
    }
}

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
