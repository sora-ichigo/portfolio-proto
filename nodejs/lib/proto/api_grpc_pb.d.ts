// package: portfolio
// file: proto/api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_api_pb from "../proto/api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as proto_blogs_rss_feed_pb from "../proto/blogs/rss_feed_pb";

interface IPortfolioBackendApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createRSSFeed: IPortfolioBackendApiService_ICreateRSSFeed;
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

export const PortfolioBackendApiService: IPortfolioBackendApiService;

export interface IPortfolioBackendApiServer extends grpc.UntypedServiceImplementation {
    createRSSFeed: grpc.handleUnaryCall<proto_blogs_rss_feed_pb.CreateRSSFeedRequest, google_protobuf_empty_pb.Empty>;
}

export interface IPortfolioBackendApiClient {
    createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PortfolioBackendApiClient extends grpc.Client implements IPortfolioBackendApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createRSSFeed(request: proto_blogs_rss_feed_pb.CreateRSSFeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
