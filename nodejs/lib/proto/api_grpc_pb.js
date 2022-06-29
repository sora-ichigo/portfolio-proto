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

function serialize_portfolio_blogs_BatchGetRSSFeedsResponse(arg) {
  if (!(arg instanceof proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse)) {
    throw new Error('Expected argument of type portfolio.blogs.BatchGetRSSFeedsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_BatchGetRSSFeedsResponse(buffer_arg) {
  return proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_portfolio_blogs_DeleteRSSFeedRequest(arg) {
  if (!(arg instanceof proto_blogs_rss_feed_pb.DeleteRSSFeedRequest)) {
    throw new Error('Expected argument of type portfolio.blogs.DeleteRSSFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_DeleteRSSFeedRequest(buffer_arg) {
  return proto_blogs_rss_feed_pb.DeleteRSSFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_portfolio_blogs_GetRSSFeedRequest(arg) {
  if (!(arg instanceof proto_blogs_rss_feed_pb.GetRSSFeedRequest)) {
    throw new Error('Expected argument of type portfolio.blogs.GetRSSFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_GetRSSFeedRequest(buffer_arg) {
  return proto_blogs_rss_feed_pb.GetRSSFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_portfolio_blogs_GetRSSFeedResponse(arg) {
  if (!(arg instanceof proto_blogs_rss_feed_pb.GetRSSFeedResponse)) {
    throw new Error('Expected argument of type portfolio.blogs.GetRSSFeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_GetRSSFeedResponse(buffer_arg) {
  return proto_blogs_rss_feed_pb.GetRSSFeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_portfolio_blogs_UpdateRSSFeedRequest(arg) {
  if (!(arg instanceof proto_blogs_rss_feed_pb.UpdateRSSFeedRequest)) {
    throw new Error('Expected argument of type portfolio.blogs.UpdateRSSFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_UpdateRSSFeedRequest(buffer_arg) {
  return proto_blogs_rss_feed_pb.UpdateRSSFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  batchGetRSSFeeds: {
    path: '/portfolio.PortfolioBackendApi/BatchGetRSSFeeds',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_blogs_rss_feed_pb.BatchGetRSSFeedsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_portfolio_blogs_BatchGetRSSFeedsResponse,
    responseDeserialize: deserialize_portfolio_blogs_BatchGetRSSFeedsResponse,
  },
  getRSSFeed: {
    path: '/portfolio.PortfolioBackendApi/GetRSSFeed',
    requestStream: false,
    responseStream: false,
    requestType: proto_blogs_rss_feed_pb.GetRSSFeedRequest,
    responseType: proto_blogs_rss_feed_pb.GetRSSFeedResponse,
    requestSerialize: serialize_portfolio_blogs_GetRSSFeedRequest,
    requestDeserialize: deserialize_portfolio_blogs_GetRSSFeedRequest,
    responseSerialize: serialize_portfolio_blogs_GetRSSFeedResponse,
    responseDeserialize: deserialize_portfolio_blogs_GetRSSFeedResponse,
  },
  updateRSSFeed: {
    path: '/portfolio.PortfolioBackendApi/UpdateRSSFeed',
    requestStream: false,
    responseStream: false,
    requestType: proto_blogs_rss_feed_pb.UpdateRSSFeedRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_portfolio_blogs_UpdateRSSFeedRequest,
    requestDeserialize: deserialize_portfolio_blogs_UpdateRSSFeedRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteRSSFeed: {
    path: '/portfolio.PortfolioBackendApi/DeleteRSSFeed',
    requestStream: false,
    responseStream: false,
    requestType: proto_blogs_rss_feed_pb.DeleteRSSFeedRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_portfolio_blogs_DeleteRSSFeedRequest,
    requestDeserialize: deserialize_portfolio_blogs_DeleteRSSFeedRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PortfolioBackendApiClient = grpc.makeGenericClientConstructor(PortfolioBackendApiService);
