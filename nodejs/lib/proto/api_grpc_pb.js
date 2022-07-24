// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var proto_blogs_rss_feed_pb = require('../proto/blogs/rss_feed_pb.js');
var proto_blogs_blog_pb = require('../proto/blogs/blog_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_portfolio_blogs_BatchGetBlogsResponse(arg) {
  if (!(arg instanceof proto_blogs_blog_pb.BatchGetBlogsResponse)) {
    throw new Error('Expected argument of type portfolio.blogs.BatchGetBlogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_BatchGetBlogsResponse(buffer_arg) {
  return proto_blogs_blog_pb.BatchGetBlogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_portfolio_blogs_CreateBlogRequest(arg) {
  if (!(arg instanceof proto_blogs_blog_pb.CreateBlogRequest)) {
    throw new Error('Expected argument of type portfolio.blogs.CreateBlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_CreateBlogRequest(buffer_arg) {
  return proto_blogs_blog_pb.CreateBlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_portfolio_blogs_DeleteBlogRequest(arg) {
  if (!(arg instanceof proto_blogs_blog_pb.DeleteBlogRequest)) {
    throw new Error('Expected argument of type portfolio.blogs.DeleteBlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_DeleteBlogRequest(buffer_arg) {
  return proto_blogs_blog_pb.DeleteBlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_portfolio_blogs_GetBlogRequest(arg) {
  if (!(arg instanceof proto_blogs_blog_pb.GetBlogRequest)) {
    throw new Error('Expected argument of type portfolio.blogs.GetBlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_GetBlogRequest(buffer_arg) {
  return proto_blogs_blog_pb.GetBlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_portfolio_blogs_GetBlogResponse(arg) {
  if (!(arg instanceof proto_blogs_blog_pb.GetBlogResponse)) {
    throw new Error('Expected argument of type portfolio.blogs.GetBlogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_portfolio_blogs_GetBlogResponse(buffer_arg) {
  return proto_blogs_blog_pb.GetBlogResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var PortfolioBackendApiService = exports.PortfolioBackendApiService = {
  // For RSS Feed ========================
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
  // For Blog ============================
createBlog: {
    path: '/portfolio.PortfolioBackendApi/CreateBlog',
    requestStream: false,
    responseStream: false,
    requestType: proto_blogs_blog_pb.CreateBlogRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_portfolio_blogs_CreateBlogRequest,
    requestDeserialize: deserialize_portfolio_blogs_CreateBlogRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  batchGetBlogs: {
    path: '/portfolio.PortfolioBackendApi/BatchGetBlogs',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_blogs_blog_pb.BatchGetBlogsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_portfolio_blogs_BatchGetBlogsResponse,
    responseDeserialize: deserialize_portfolio_blogs_BatchGetBlogsResponse,
  },
  getBlog: {
    path: '/portfolio.PortfolioBackendApi/GetBlog',
    requestStream: false,
    responseStream: false,
    requestType: proto_blogs_blog_pb.GetBlogRequest,
    responseType: proto_blogs_blog_pb.GetBlogResponse,
    requestSerialize: serialize_portfolio_blogs_GetBlogRequest,
    requestDeserialize: deserialize_portfolio_blogs_GetBlogRequest,
    responseSerialize: serialize_portfolio_blogs_GetBlogResponse,
    responseDeserialize: deserialize_portfolio_blogs_GetBlogResponse,
  },
  deleteBlog: {
    path: '/portfolio.PortfolioBackendApi/DeleteBlog',
    requestStream: false,
    responseStream: false,
    requestType: proto_blogs_blog_pb.DeleteBlogRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_portfolio_blogs_DeleteBlogRequest,
    requestDeserialize: deserialize_portfolio_blogs_DeleteBlogRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PortfolioBackendApiClient = grpc.makeGenericClientConstructor(PortfolioBackendApiService);
