// package: portfolio.blogs
// file: proto/blogs/blog.proto

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

export class CreateBlogRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateBlogRequest;

    hasPostedAt(): boolean;
    clearPostedAt(): void;
    getPostedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPostedAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateBlogRequest;
    getSiteUrl(): string;
    setSiteUrl(value: string): CreateBlogRequest;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): CreateBlogRequest;
    getServiceName(): string;
    setServiceName(value: string): CreateBlogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBlogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBlogRequest): CreateBlogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBlogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBlogRequest;
    static deserializeBinaryFromReader(message: CreateBlogRequest, reader: jspb.BinaryReader): CreateBlogRequest;
}

export namespace CreateBlogRequest {
    export type AsObject = {
        title: string,
        postedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        siteUrl: string,
        thumbnailUrl: string,
        serviceName: string,
    }
}

export class BatchGetBlogsResponse extends jspb.Message { 
    clearBlogsList(): void;
    getBlogsList(): Array<Blog>;
    setBlogsList(value: Array<Blog>): BatchGetBlogsResponse;
    addBlogs(value?: Blog, index?: number): Blog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchGetBlogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchGetBlogsResponse): BatchGetBlogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchGetBlogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchGetBlogsResponse;
    static deserializeBinaryFromReader(message: BatchGetBlogsResponse, reader: jspb.BinaryReader): BatchGetBlogsResponse;
}

export namespace BatchGetBlogsResponse {
    export type AsObject = {
        blogsList: Array<Blog.AsObject>,
    }
}

export class GetBlogRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBlogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlogRequest): GetBlogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlogRequest;
    static deserializeBinaryFromReader(message: GetBlogRequest, reader: jspb.BinaryReader): GetBlogRequest;
}

export namespace GetBlogRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetBlogResponse extends jspb.Message { 

    hasBlogs(): boolean;
    clearBlogs(): void;
    getBlogs(): Blog | undefined;
    setBlogs(value?: Blog): GetBlogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlogResponse): GetBlogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlogResponse;
    static deserializeBinaryFromReader(message: GetBlogResponse, reader: jspb.BinaryReader): GetBlogResponse;
}

export namespace GetBlogResponse {
    export type AsObject = {
        blogs?: Blog.AsObject,
    }
}

export class DeleteBlogRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteBlogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteBlogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteBlogRequest): DeleteBlogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteBlogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteBlogRequest;
    static deserializeBinaryFromReader(message: DeleteBlogRequest, reader: jspb.BinaryReader): DeleteBlogRequest;
}

export namespace DeleteBlogRequest {
    export type AsObject = {
        id: string,
    }
}
