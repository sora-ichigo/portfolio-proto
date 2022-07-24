// package: portfolio
// file: proto/api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_api_pb from "../proto/api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as proto_blogs_rss_feed_pb from "../proto/blogs/rss_feed_pb";
import * as proto_blogs_blog_pb from "../proto/blogs/blog_pb";

interface IPortfolioBackendApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createRSSFeed: IPortfolioBackendApiService_ICreateRSSFeed;
    batchGetRSSFeeds: IPortfolioBackendApiService_IBatchGetRSSFeeds;
    getRSSFeed: IPortfolioBackendApiService_IGetRSSFeed;
    deleteRSSFeed: IPortfolioBackendApiService_IDeleteRSSFeed;
    createBlog: IPortfolioBackendApiService_ICreateBlog;
    batchGetBlogs: IPortfolioBackendApiService_IBatchGetBlogs;
    getBlog: IPortfolioBackendApiService_IGetBlog;
    deleteBlog: IPortfolioBackendApiService_IDeleteBlog;
}

interface IPortfolioBackendApiService_ICreateRSSFeed extends grpc.MethodDefinition<proto_blogs_rss_feed_pb.CreateRSSFeedRequest, google_protobuf_empty_pb.Empty> {
    path: "/portfolio.PortfolioBackendApi/CreateRSSFeed";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_blogs_rss_feed_pb.CreateRSSFeedRequest>;
    requestDeserialize: grpc.deserialize<proto_blogs_rss_feed_pb.CreateRSSFeedRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPortfolioBackendApiService_IBatchGetRSSFeeds extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse> {
    path: "/portfolio.PortfolioBackendApi/BatchGetRSSFeeds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse>;
    responseDeserialize: grpc.deserialize<proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse>;
}
interface IPortfolioBackendApiService_IGetRSSFeed extends grpc.MethodDefinition<proto_blogs_rss_feed_pb.GetRSSFeedRequest, proto_blogs_rss_feed_pb.GetRSSFeedResponse> {
    path: "/portfolio.PortfolioBackendApi/GetRSSFeed";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_blogs_rss_feed_pb.GetRSSFeedRequest>;
    requestDeserialize: grpc.deserialize<proto_blogs_rss_feed_pb.GetRSSFeedRequest>;
    responseSerialize: grpc.serialize<proto_blogs_rss_feed_pb.GetRSSFeedResponse>;
    responseDeserialize: grpc.deserialize<proto_blogs_rss_feed_pb.GetRSSFeedResponse>;
}
interface IPortfolioBackendApiService_IDeleteRSSFeed extends grpc.MethodDefinition<proto_blogs_rss_feed_pb.DeleteRSSFeedRequest, google_protobuf_empty_pb.Empty> {
    path: "/portfolio.PortfolioBackendApi/DeleteRSSFeed";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_blogs_rss_feed_pb.DeleteRSSFeedRequest>;
    requestDeserialize: grpc.deserialize<proto_blogs_rss_feed_pb.DeleteRSSFeedRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPortfolioBackendApiService_ICreateBlog extends grpc.MethodDefinition<proto_blogs_blog_pb.CreateBlogRequest, google_protobuf_empty_pb.Empty> {
    path: "/portfolio.PortfolioBackendApi/CreateBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_blogs_blog_pb.CreateBlogRequest>;
    requestDeserialize: grpc.deserialize<proto_blogs_blog_pb.CreateBlogRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPortfolioBackendApiService_IBatchGetBlogs extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_blogs_blog_pb.BatchGetBlogsResponse> {
    path: "/portfolio.PortfolioBackendApi/BatchGetBlogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_blogs_blog_pb.BatchGetBlogsResponse>;
    responseDeserialize: grpc.deserialize<proto_blogs_blog_pb.BatchGetBlogsResponse>;
}
interface IPortfolioBackendApiService_IGetBlog extends grpc.MethodDefinition<proto_blogs_blog_pb.GetBlogRequest, proto_blogs_blog_pb.GetBlogResponse> {
    path: "/portfolio.PortfolioBackendApi/GetBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_blogs_blog_pb.GetBlogRequest>;
    requestDeserialize: grpc.deserialize<proto_blogs_blog_pb.GetBlogRequest>;
    responseSerialize: grpc.serialize<proto_blogs_blog_pb.GetBlogResponse>;
    responseDeserialize: grpc.deserialize<proto_blogs_blog_pb.GetBlogResponse>;
}
interface IPortfolioBackendApiService_IDeleteBlog extends grpc.MethodDefinition<proto_blogs_blog_pb.DeleteBlogRequest, google_protobuf_empty_pb.Empty> {
    path: "/portfolio.PortfolioBackendApi/DeleteBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_blogs_blog_pb.DeleteBlogRequest>;
    requestDeserialize: grpc.deserialize<proto_blogs_blog_pb.DeleteBlogRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const PortfolioBackendApiService: IPortfolioBackendApiService;

export interface IPortfolioBackendApiServer extends grpc.UntypedServiceImplementation {
    createRSSFeed: grpc.handleUnaryCall<proto_blogs_rss_feed_pb.CreateRSSFeedRequest, google_protobuf_empty_pb.Empty>;
    batchGetRSSFeeds: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse>;
    getRSSFeed: grpc.handleUnaryCall<proto_blogs_rss_feed_pb.GetRSSFeedRequest, proto_blogs_rss_feed_pb.GetRSSFeedResponse>;
    deleteRSSFeed: grpc.handleUnaryCall<proto_blogs_rss_feed_pb.DeleteRSSFeedRequest, google_protobuf_empty_pb.Empty>;
    createBlog: grpc.handleUnaryCall<proto_blogs_blog_pb.CreateBlogRequest, google_protobuf_empty_pb.Empty>;
    batchGetBlogs: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_blogs_blog_pb.BatchGetBlogsResponse>;
    getBlog: grpc.handleUnaryCall<proto_blogs_blog_pb.GetBlogRequest, proto_blogs_blog_pb.GetBlogResponse>;
    deleteBlog: grpc.handleUnaryCall<proto_blogs_blog_pb.DeleteBlogRequest, google_protobuf_empty_pb.Empty>;
}

export interface IPortfolioBackendApiClient {
    createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    batchGetRSSFeeds(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse) => void): grpc.ClientUnaryCall;
    batchGetRSSFeeds(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse) => void): grpc.ClientUnaryCall;
    batchGetRSSFeeds(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse) => void): grpc.ClientUnaryCall;
    getRSSFeed(request: proto_blogs_rss_feed_pb.GetRSSFeedRequest, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.GetRSSFeedResponse) => void): grpc.ClientUnaryCall;
    getRSSFeed(request: proto_blogs_rss_feed_pb.GetRSSFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.GetRSSFeedResponse) => void): grpc.ClientUnaryCall;
    getRSSFeed(request: proto_blogs_rss_feed_pb.GetRSSFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.GetRSSFeedResponse) => void): grpc.ClientUnaryCall;
    deleteRSSFeed(request: proto_blogs_rss_feed_pb.DeleteRSSFeedRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteRSSFeed(request: proto_blogs_rss_feed_pb.DeleteRSSFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteRSSFeed(request: proto_blogs_rss_feed_pb.DeleteRSSFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createBlog(request: proto_blogs_blog_pb.CreateBlogRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createBlog(request: proto_blogs_blog_pb.CreateBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createBlog(request: proto_blogs_blog_pb.CreateBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    batchGetBlogs(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.BatchGetBlogsResponse) => void): grpc.ClientUnaryCall;
    batchGetBlogs(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.BatchGetBlogsResponse) => void): grpc.ClientUnaryCall;
    batchGetBlogs(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.BatchGetBlogsResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: proto_blogs_blog_pb.GetBlogRequest, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.GetBlogResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: proto_blogs_blog_pb.GetBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.GetBlogResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: proto_blogs_blog_pb.GetBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.GetBlogResponse) => void): grpc.ClientUnaryCall;
    deleteBlog(request: proto_blogs_blog_pb.DeleteBlogRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteBlog(request: proto_blogs_blog_pb.DeleteBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteBlog(request: proto_blogs_blog_pb.DeleteBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PortfolioBackendApiClient extends grpc.Client implements IPortfolioBackendApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public batchGetRSSFeeds(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse) => void): grpc.ClientUnaryCall;
    public batchGetRSSFeeds(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse) => void): grpc.ClientUnaryCall;
    public batchGetRSSFeeds(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse) => void): grpc.ClientUnaryCall;
    public getRSSFeed(request: proto_blogs_rss_feed_pb.GetRSSFeedRequest, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.GetRSSFeedResponse) => void): grpc.ClientUnaryCall;
    public getRSSFeed(request: proto_blogs_rss_feed_pb.GetRSSFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.GetRSSFeedResponse) => void): grpc.ClientUnaryCall;
    public getRSSFeed(request: proto_blogs_rss_feed_pb.GetRSSFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_blogs_rss_feed_pb.GetRSSFeedResponse) => void): grpc.ClientUnaryCall;
    public deleteRSSFeed(request: proto_blogs_rss_feed_pb.DeleteRSSFeedRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteRSSFeed(request: proto_blogs_rss_feed_pb.DeleteRSSFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteRSSFeed(request: proto_blogs_rss_feed_pb.DeleteRSSFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createBlog(request: proto_blogs_blog_pb.CreateBlogRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createBlog(request: proto_blogs_blog_pb.CreateBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createBlog(request: proto_blogs_blog_pb.CreateBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public batchGetBlogs(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.BatchGetBlogsResponse) => void): grpc.ClientUnaryCall;
    public batchGetBlogs(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.BatchGetBlogsResponse) => void): grpc.ClientUnaryCall;
    public batchGetBlogs(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.BatchGetBlogsResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: proto_blogs_blog_pb.GetBlogRequest, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.GetBlogResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: proto_blogs_blog_pb.GetBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.GetBlogResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: proto_blogs_blog_pb.GetBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_blogs_blog_pb.GetBlogResponse) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: proto_blogs_blog_pb.DeleteBlogRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: proto_blogs_blog_pb.DeleteBlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: proto_blogs_blog_pb.DeleteBlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
