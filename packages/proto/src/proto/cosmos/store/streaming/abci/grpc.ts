/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/store/streaming/abci/grpc.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../tendermint/abci/types";
import * as dependency_2 from "./../../v1beta1/listening";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.store.streaming.abci {
    export class ListenFinalizeBlockRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            req?: dependency_1.tendermint.abci.RequestFinalizeBlock;
            res?: dependency_1.tendermint.abci.ResponseFinalizeBlock;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("req" in data && data.req != undefined) {
                    this.req = data.req;
                }
                if ("res" in data && data.res != undefined) {
                    this.res = data.res;
                }
            }
        }
        get req() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.RequestFinalizeBlock, 1) as dependency_1.tendermint.abci.RequestFinalizeBlock;
        }
        set req(value: dependency_1.tendermint.abci.RequestFinalizeBlock) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_req() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get res() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.ResponseFinalizeBlock, 2) as dependency_1.tendermint.abci.ResponseFinalizeBlock;
        }
        set res(value: dependency_1.tendermint.abci.ResponseFinalizeBlock) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_res() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            req?: ReturnType<typeof dependency_1.tendermint.abci.RequestFinalizeBlock.prototype.toObject>;
            res?: ReturnType<typeof dependency_1.tendermint.abci.ResponseFinalizeBlock.prototype.toObject>;
        }): ListenFinalizeBlockRequest {
            const message = new ListenFinalizeBlockRequest({});
            if (data.req != null) {
                message.req = dependency_1.tendermint.abci.RequestFinalizeBlock.fromObject(data.req);
            }
            if (data.res != null) {
                message.res = dependency_1.tendermint.abci.ResponseFinalizeBlock.fromObject(data.res);
            }
            return message;
        }
        toObject() {
            const data: {
                req?: ReturnType<typeof dependency_1.tendermint.abci.RequestFinalizeBlock.prototype.toObject>;
                res?: ReturnType<typeof dependency_1.tendermint.abci.ResponseFinalizeBlock.prototype.toObject>;
            } = {};
            if (this.req != null) {
                data.req = this.req.toObject();
            }
            if (this.res != null) {
                data.res = this.res.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_req)
                writer.writeMessage(1, this.req, () => this.req.serialize(writer));
            if (this.has_res)
                writer.writeMessage(2, this.res, () => this.res.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListenFinalizeBlockRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListenFinalizeBlockRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.req, () => message.req = dependency_1.tendermint.abci.RequestFinalizeBlock.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.res, () => message.res = dependency_1.tendermint.abci.ResponseFinalizeBlock.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListenFinalizeBlockRequest {
            return ListenFinalizeBlockRequest.deserialize(bytes);
        }
    }
    export class ListenFinalizeBlockResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): ListenFinalizeBlockResponse {
            const message = new ListenFinalizeBlockResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListenFinalizeBlockResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListenFinalizeBlockResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListenFinalizeBlockResponse {
            return ListenFinalizeBlockResponse.deserialize(bytes);
        }
    }
    export class ListenCommitRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            block_height?: number;
            res?: dependency_1.tendermint.abci.ResponseCommit;
            change_set?: dependency_2.cosmos.store.v1beta1.StoreKVPair[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("block_height" in data && data.block_height != undefined) {
                    this.block_height = data.block_height;
                }
                if ("res" in data && data.res != undefined) {
                    this.res = data.res;
                }
                if ("change_set" in data && data.change_set != undefined) {
                    this.change_set = data.change_set;
                }
            }
        }
        get block_height() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set block_height(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get res() {
            return pb_1.Message.getWrapperField(this, dependency_1.tendermint.abci.ResponseCommit, 2) as dependency_1.tendermint.abci.ResponseCommit;
        }
        set res(value: dependency_1.tendermint.abci.ResponseCommit) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_res() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get change_set() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.store.v1beta1.StoreKVPair, 3) as dependency_2.cosmos.store.v1beta1.StoreKVPair[];
        }
        set change_set(value: dependency_2.cosmos.store.v1beta1.StoreKVPair[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            block_height?: number;
            res?: ReturnType<typeof dependency_1.tendermint.abci.ResponseCommit.prototype.toObject>;
            change_set?: ReturnType<typeof dependency_2.cosmos.store.v1beta1.StoreKVPair.prototype.toObject>[];
        }): ListenCommitRequest {
            const message = new ListenCommitRequest({});
            if (data.block_height != null) {
                message.block_height = data.block_height;
            }
            if (data.res != null) {
                message.res = dependency_1.tendermint.abci.ResponseCommit.fromObject(data.res);
            }
            if (data.change_set != null) {
                message.change_set = data.change_set.map(item => dependency_2.cosmos.store.v1beta1.StoreKVPair.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                block_height?: number;
                res?: ReturnType<typeof dependency_1.tendermint.abci.ResponseCommit.prototype.toObject>;
                change_set?: ReturnType<typeof dependency_2.cosmos.store.v1beta1.StoreKVPair.prototype.toObject>[];
            } = {};
            if (this.block_height != null) {
                data.block_height = this.block_height;
            }
            if (this.res != null) {
                data.res = this.res.toObject();
            }
            if (this.change_set != null) {
                data.change_set = this.change_set.map((item: dependency_2.cosmos.store.v1beta1.StoreKVPair) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.block_height != 0)
                writer.writeInt64(1, this.block_height);
            if (this.has_res)
                writer.writeMessage(2, this.res, () => this.res.serialize(writer));
            if (this.change_set.length)
                writer.writeRepeatedMessage(3, this.change_set, (item: dependency_2.cosmos.store.v1beta1.StoreKVPair) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListenCommitRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListenCommitRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.block_height = reader.readInt64();
                        break;
                    case 2:
                        reader.readMessage(message.res, () => message.res = dependency_1.tendermint.abci.ResponseCommit.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.change_set, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.store.v1beta1.StoreKVPair.deserialize(reader), dependency_2.cosmos.store.v1beta1.StoreKVPair));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListenCommitRequest {
            return ListenCommitRequest.deserialize(bytes);
        }
    }
    export class ListenCommitResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): ListenCommitResponse {
            const message = new ListenCommitResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListenCommitResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListenCommitResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListenCommitResponse {
            return ListenCommitResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedABCIListenerServiceService {
        static definition = {
            ListenFinalizeBlock: {
                path: "/cosmos.store.streaming.abci.ABCIListenerService/ListenFinalizeBlock",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: ListenFinalizeBlockRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => ListenFinalizeBlockRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: ListenFinalizeBlockResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => ListenFinalizeBlockResponse.deserialize(new Uint8Array(bytes))
            },
            ListenCommit: {
                path: "/cosmos.store.streaming.abci.ABCIListenerService/ListenCommit",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: ListenCommitRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => ListenCommitRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: ListenCommitResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => ListenCommitResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ListenFinalizeBlock(call: grpc_1.ServerUnaryCall<ListenFinalizeBlockRequest, ListenFinalizeBlockResponse>, callback: grpc_1.sendUnaryData<ListenFinalizeBlockResponse>): void;
        abstract ListenCommit(call: grpc_1.ServerUnaryCall<ListenCommitRequest, ListenCommitResponse>, callback: grpc_1.sendUnaryData<ListenCommitResponse>): void;
    }
    export class ABCIListenerServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedABCIListenerServiceService.definition, "ABCIListenerService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        ListenFinalizeBlock: GrpcUnaryServiceInterface<ListenFinalizeBlockRequest, ListenFinalizeBlockResponse> = (message: ListenFinalizeBlockRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<ListenFinalizeBlockResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<ListenFinalizeBlockResponse>, callback?: grpc_1.requestCallback<ListenFinalizeBlockResponse>): grpc_1.ClientUnaryCall => {
            return super.ListenFinalizeBlock(message, metadata, options, callback);
        };
        ListenCommit: GrpcUnaryServiceInterface<ListenCommitRequest, ListenCommitResponse> = (message: ListenCommitRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<ListenCommitResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<ListenCommitResponse>, callback?: grpc_1.requestCallback<ListenCommitResponse>): grpc_1.ClientUnaryCall => {
            return super.ListenCommit(message, metadata, options, callback);
        };
    }
}
