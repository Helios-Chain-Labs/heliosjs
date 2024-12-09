// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.1
//   protoc               v5.29.1
// source: helios/inflation/v1/query.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";

export const protobufPackage = "helios.inflation.v1";

/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {
}

/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
  /** period is the current minting per epoch provision value. */
  period: number;
}

/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {
}

/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
  /** epoch_mint_provision is the current minting per epoch provision value. */
  epochMintProvision: DecCoin | undefined;
}

/** QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC method. */
export interface QuerySkippedEpochsRequest {
}

/** QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs RPC method. */
export interface QuerySkippedEpochsResponse {
  /** number of epochs that the inflation module has been disabled. */
  skippedEpochs: number;
}

/** QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC method. */
export interface QueryTotalSupplyRequest {
}

/** QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC method. */
export interface QueryTotalSupplyResponse {
  /** total amount of coins in circulation */
  totalSupply: DecCoin | undefined;
}

/** QueryInflationRateRequest is the request type for the Query/InflationRate RPC method. */
export interface QueryInflationRateRequest {
}

/** QueryInflationRateResponse is the response type for the Query/InflationRate RPC method. */
export interface QueryInflationRateResponse {
  /** rate by which the total supply increases within one period */
  inflationRate: string;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}

function createBaseQueryPeriodRequest(): QueryPeriodRequest {
  return {};
}

export const QueryPeriodRequest: MessageFns<QueryPeriodRequest> = {
  encode(_: QueryPeriodRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryPeriodRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPeriodRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryPeriodRequest {
    return {};
  },

  toJSON(_: QueryPeriodRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPeriodRequest>, I>>(base?: I): QueryPeriodRequest {
    return QueryPeriodRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPeriodRequest>, I>>(_: I): QueryPeriodRequest {
    const message = createBaseQueryPeriodRequest();
    return message;
  },
};

function createBaseQueryPeriodResponse(): QueryPeriodResponse {
  return { period: 0 };
}

export const QueryPeriodResponse: MessageFns<QueryPeriodResponse> = {
  encode(message: QueryPeriodResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.period !== 0) {
      writer.uint32(8).uint64(message.period);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryPeriodResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPeriodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.period = longToNumber(reader.uint64());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPeriodResponse {
    return { period: isSet(object.period) ? globalThis.Number(object.period) : 0 };
  },

  toJSON(message: QueryPeriodResponse): unknown {
    const obj: any = {};
    if (message.period !== 0) {
      obj.period = Math.round(message.period);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPeriodResponse>, I>>(base?: I): QueryPeriodResponse {
    return QueryPeriodResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPeriodResponse>, I>>(object: I): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse();
    message.period = object.period ?? 0;
    return message;
  },
};

function createBaseQueryEpochMintProvisionRequest(): QueryEpochMintProvisionRequest {
  return {};
}

export const QueryEpochMintProvisionRequest: MessageFns<QueryEpochMintProvisionRequest> = {
  encode(_: QueryEpochMintProvisionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochMintProvisionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochMintProvisionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryEpochMintProvisionRequest {
    return {};
  },

  toJSON(_: QueryEpochMintProvisionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochMintProvisionRequest>, I>>(base?: I): QueryEpochMintProvisionRequest {
    return QueryEpochMintProvisionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryEpochMintProvisionRequest>, I>>(_: I): QueryEpochMintProvisionRequest {
    const message = createBaseQueryEpochMintProvisionRequest();
    return message;
  },
};

function createBaseQueryEpochMintProvisionResponse(): QueryEpochMintProvisionResponse {
  return { epochMintProvision: undefined };
}

export const QueryEpochMintProvisionResponse: MessageFns<QueryEpochMintProvisionResponse> = {
  encode(message: QueryEpochMintProvisionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.epochMintProvision !== undefined) {
      DecCoin.encode(message.epochMintProvision, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochMintProvisionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochMintProvisionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.epochMintProvision = DecCoin.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEpochMintProvisionResponse {
    return {
      epochMintProvision: isSet(object.epochMintProvision) ? DecCoin.fromJSON(object.epochMintProvision) : undefined,
    };
  },

  toJSON(message: QueryEpochMintProvisionResponse): unknown {
    const obj: any = {};
    if (message.epochMintProvision !== undefined) {
      obj.epochMintProvision = DecCoin.toJSON(message.epochMintProvision);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochMintProvisionResponse>, I>>(base?: I): QueryEpochMintProvisionResponse {
    return QueryEpochMintProvisionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryEpochMintProvisionResponse>, I>>(
    object: I,
  ): QueryEpochMintProvisionResponse {
    const message = createBaseQueryEpochMintProvisionResponse();
    message.epochMintProvision = (object.epochMintProvision !== undefined && object.epochMintProvision !== null)
      ? DecCoin.fromPartial(object.epochMintProvision)
      : undefined;
    return message;
  },
};

function createBaseQuerySkippedEpochsRequest(): QuerySkippedEpochsRequest {
  return {};
}

export const QuerySkippedEpochsRequest: MessageFns<QuerySkippedEpochsRequest> = {
  encode(_: QuerySkippedEpochsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuerySkippedEpochsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySkippedEpochsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QuerySkippedEpochsRequest {
    return {};
  },

  toJSON(_: QuerySkippedEpochsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySkippedEpochsRequest>, I>>(base?: I): QuerySkippedEpochsRequest {
    return QuerySkippedEpochsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySkippedEpochsRequest>, I>>(_: I): QuerySkippedEpochsRequest {
    const message = createBaseQuerySkippedEpochsRequest();
    return message;
  },
};

function createBaseQuerySkippedEpochsResponse(): QuerySkippedEpochsResponse {
  return { skippedEpochs: 0 };
}

export const QuerySkippedEpochsResponse: MessageFns<QuerySkippedEpochsResponse> = {
  encode(message: QuerySkippedEpochsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.skippedEpochs !== 0) {
      writer.uint32(8).uint64(message.skippedEpochs);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuerySkippedEpochsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySkippedEpochsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.skippedEpochs = longToNumber(reader.uint64());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySkippedEpochsResponse {
    return { skippedEpochs: isSet(object.skippedEpochs) ? globalThis.Number(object.skippedEpochs) : 0 };
  },

  toJSON(message: QuerySkippedEpochsResponse): unknown {
    const obj: any = {};
    if (message.skippedEpochs !== 0) {
      obj.skippedEpochs = Math.round(message.skippedEpochs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySkippedEpochsResponse>, I>>(base?: I): QuerySkippedEpochsResponse {
    return QuerySkippedEpochsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySkippedEpochsResponse>, I>>(object: I): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse();
    message.skippedEpochs = object.skippedEpochs ?? 0;
    return message;
  },
};

function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {};
}

export const QueryTotalSupplyRequest: MessageFns<QueryTotalSupplyRequest> = {
  encode(_: QueryTotalSupplyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryTotalSupplyRequest {
    return {};
  },

  toJSON(_: QueryTotalSupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(base?: I): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(_: I): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
};

function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return { totalSupply: undefined };
}

export const QueryTotalSupplyResponse: MessageFns<QueryTotalSupplyResponse> = {
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.totalSupply !== undefined) {
      DecCoin.encode(message.totalSupply, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.totalSupply = DecCoin.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSupplyResponse {
    return { totalSupply: isSet(object.totalSupply) ? DecCoin.fromJSON(object.totalSupply) : undefined };
  },

  toJSON(message: QueryTotalSupplyResponse): unknown {
    const obj: any = {};
    if (message.totalSupply !== undefined) {
      obj.totalSupply = DecCoin.toJSON(message.totalSupply);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(base?: I): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(object: I): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.totalSupply = (object.totalSupply !== undefined && object.totalSupply !== null)
      ? DecCoin.fromPartial(object.totalSupply)
      : undefined;
    return message;
  },
};

function createBaseQueryInflationRateRequest(): QueryInflationRateRequest {
  return {};
}

export const QueryInflationRateRequest: MessageFns<QueryInflationRateRequest> = {
  encode(_: QueryInflationRateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryInflationRateRequest {
    return {};
  },

  toJSON(_: QueryInflationRateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInflationRateRequest>, I>>(base?: I): QueryInflationRateRequest {
    return QueryInflationRateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryInflationRateRequest>, I>>(_: I): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
  },
};

function createBaseQueryInflationRateResponse(): QueryInflationRateResponse {
  return { inflationRate: "" };
}

export const QueryInflationRateResponse: MessageFns<QueryInflationRateResponse> = {
  encode(message: QueryInflationRateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.inflationRate !== "") {
      writer.uint32(10).string(message.inflationRate);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.inflationRate = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryInflationRateResponse {
    return { inflationRate: isSet(object.inflationRate) ? globalThis.String(object.inflationRate) : "" };
  },

  toJSON(message: QueryInflationRateResponse): unknown {
    const obj: any = {};
    if (message.inflationRate !== "") {
      obj.inflationRate = message.inflationRate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInflationRateResponse>, I>>(base?: I): QueryInflationRateResponse {
    return QueryInflationRateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryInflationRateResponse>, I>>(object: I): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    message.inflationRate = object.inflationRate ?? "";
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest: MessageFns<QueryParamsRequest> = {
  encode(_: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse: MessageFns<QueryParamsResponse> = {
  encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Period retrieves current period. */
  Period(request: QueryPeriodRequest): Promise<QueryPeriodResponse>;
  /** EpochMintProvision retrieves current minting epoch provision value. */
  EpochMintProvision(request: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse>;
  /** SkippedEpochs retrieves the total number of skipped epochs. */
  SkippedEpochs(request: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>;
  /** TotalSupply retrieves the total number of skipped epochs. */
  TotalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /** InflationRate retrieves the inflation rate of the current period. */
  InflationRate(request: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
  /** Params retrieves the total set of minting parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceName = "helios.inflation.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Period = this.Period.bind(this);
    this.EpochMintProvision = this.EpochMintProvision.bind(this);
    this.SkippedEpochs = this.SkippedEpochs.bind(this);
    this.TotalSupply = this.TotalSupply.bind(this);
    this.InflationRate = this.InflationRate.bind(this);
    this.Params = this.Params.bind(this);
  }
  Period(request: QueryPeriodRequest): Promise<QueryPeriodResponse> {
    const data = QueryPeriodRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Period", data);
    return promise.then((data) => QueryPeriodResponse.decode(new BinaryReader(data)));
  }

  EpochMintProvision(request: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse> {
    const data = QueryEpochMintProvisionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EpochMintProvision", data);
    return promise.then((data) => QueryEpochMintProvisionResponse.decode(new BinaryReader(data)));
  }

  SkippedEpochs(request: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse> {
    const data = QuerySkippedEpochsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SkippedEpochs", data);
    return promise.then((data) => QuerySkippedEpochsResponse.decode(new BinaryReader(data)));
  }

  TotalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TotalSupply", data);
    return promise.then((data) => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }

  InflationRate(request: QueryInflationRateRequest): Promise<QueryInflationRateResponse> {
    const data = QueryInflationRateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InflationRate", data);
    return promise.then((data) => QueryInflationRateResponse.decode(new BinaryReader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
