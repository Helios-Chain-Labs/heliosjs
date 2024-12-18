// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.1
//   protoc               v5.29.1
// source: helios/epochs/v1/query.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";

export const protobufPackage = "helios.epochs.v1";

export interface QueryEpochsInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryEpochsInfoResponse {
  epochs: EpochInfo[];
  pagination: PageResponse | undefined;
}

export interface QueryCurrentEpochRequest {
  identifier: string;
}

export interface QueryCurrentEpochResponse {
  currentEpoch: number;
}

function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return { pagination: undefined };
}

export const QueryEpochsInfoRequest: MessageFns<QueryEpochsInfoRequest> = {
  encode(message: QueryEpochsInfoRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryEpochsInfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryEpochsInfoRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochsInfoRequest>, I>>(base?: I): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryEpochsInfoRequest>, I>>(object: I): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryEpochsInfoResponse(): QueryEpochsInfoResponse {
  return { epochs: [], pagination: undefined };
}

export const QueryEpochsInfoResponse: MessageFns<QueryEpochsInfoResponse> = {
  encode(message: QueryEpochsInfoResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryEpochsInfoResponse {
    return {
      epochs: globalThis.Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryEpochsInfoResponse): unknown {
    const obj: any = {};
    if (message.epochs?.length) {
      obj.epochs = message.epochs.map((e) => EpochInfo.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochsInfoResponse>, I>>(base?: I): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryEpochsInfoResponse>, I>>(object: I): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return { identifier: "" };
}

export const QueryCurrentEpochRequest: MessageFns<QueryCurrentEpochRequest> = {
  encode(message: QueryCurrentEpochRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
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

  fromJSON(object: any): QueryCurrentEpochRequest {
    return { identifier: isSet(object.identifier) ? globalThis.String(object.identifier) : "" };
  },

  toJSON(message: QueryCurrentEpochRequest): unknown {
    const obj: any = {};
    if (message.identifier !== "") {
      obj.identifier = message.identifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentEpochRequest>, I>>(base?: I): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCurrentEpochRequest>, I>>(object: I): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return { currentEpoch: 0 };
}

export const QueryCurrentEpochResponse: MessageFns<QueryCurrentEpochResponse> = {
  encode(message: QueryCurrentEpochResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.currentEpoch !== 0) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.currentEpoch = longToNumber(reader.int64());
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

  fromJSON(object: any): QueryCurrentEpochResponse {
    return { currentEpoch: isSet(object.currentEpoch) ? globalThis.Number(object.currentEpoch) : 0 };
  },

  toJSON(message: QueryCurrentEpochResponse): unknown {
    const obj: any = {};
    if (message.currentEpoch !== 0) {
      obj.currentEpoch = Math.round(message.currentEpoch);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentEpochResponse>, I>>(base?: I): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCurrentEpochResponse>, I>>(object: I): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = object.currentEpoch ?? 0;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  EpochInfos(request: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}

export const QueryServiceName = "helios.epochs.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.EpochInfos = this.EpochInfos.bind(this);
    this.CurrentEpoch = this.CurrentEpoch.bind(this);
  }
  EpochInfos(request: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse> {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EpochInfos", data);
    return promise.then((data) => QueryEpochsInfoResponse.decode(new BinaryReader(data)));
  }

  CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentEpoch", data);
    return promise.then((data) => QueryCurrentEpochResponse.decode(new BinaryReader(data)));
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
