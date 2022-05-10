// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var proto_blogs_rss_feed_pb = require('../proto/blogs/rss_feed_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_portfolio_blogs_CreateRSSFeedRequest(arg) {
  if (!(arg instanceof proto_blogs_rss_feed_pb.CreateRSSFeedRequest)) {
    throw new Error('Expected argument of type portfolio.blogs.CreateRSSFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_CreateRSSFeedRequest(buffer_arg) {
  return proto_blogs_rss_feed_pb.CreateRSSFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PortfolioBackendApiService = exports.PortfolioBackendApiService = {
  createRSSFeed: {
    path: '/portfolio.PortfolioBackendApi/CreateRSSFeed',
    requestStream: false,
    responseStream: false,
    requestType: proto_blogs_rss_feed_pb.CreateRSSFeedRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_portfolio_blogs_CreateRSSFeedRequest,
    requestDeserialize: deserialize_portfolio_blogs_CreateRSSFeedRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PortfolioBackendApiClient = grpc.makeGenericClientConstructor(PortfolioBackendApiService);
