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
    }
}
