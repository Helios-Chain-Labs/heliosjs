/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/circuit/v1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../msg/v1/msg";
import * as dependency_2 from "./types";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.circuit.v1 {
    export class MsgAuthorizeCircuitBreaker extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            permissions?: dependency_2.cosmos.circuit.v1.Permissions;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("granter" in data && data.granter != undefined) {
                    this.granter = data.granter;
                }
                if ("grantee" in data && data.grantee != undefined) {
                    this.grantee = data.grantee;
                }
                if ("permissions" in data && data.permissions != undefined) {
                    this.permissions = data.permissions;
                }
            }
        }
        get granter() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set granter(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get grantee() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set grantee(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get permissions() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.circuit.v1.Permissions, 3) as dependency_2.cosmos.circuit.v1.Permissions;
        }
        set permissions(value: dependency_2.cosmos.circuit.v1.Permissions) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_permissions() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            permissions?: ReturnType<typeof dependency_2.cosmos.circuit.v1.Permissions.prototype.toObject>;
        }): MsgAuthorizeCircuitBreaker {
            const message = new MsgAuthorizeCircuitBreaker({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            if (data.permissions != null) {
                message.permissions = dependency_2.cosmos.circuit.v1.Permissions.fromObject(data.permissions);
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                grantee?: string;
                permissions?: ReturnType<typeof dependency_2.cosmos.circuit.v1.Permissions.prototype.toObject>;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
            }
            if (this.grantee != null) {
                data.grantee = this.grantee;
            }
            if (this.permissions != null) {
                data.permissions = this.permissions.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.granter.length)
                writer.writeString(1, this.granter);
            if (this.grantee.length)
                writer.writeString(2, this.grantee);
            if (this.has_permissions)
                writer.writeMessage(3, this.permissions, () => this.permissions.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgAuthorizeCircuitBreaker {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgAuthorizeCircuitBreaker();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.granter = reader.readString();
                        break;
                    case 2:
                        message.grantee = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.permissions, () => message.permissions = dependency_2.cosmos.circuit.v1.Permissions.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgAuthorizeCircuitBreaker {
            return MsgAuthorizeCircuitBreaker.deserialize(bytes);
        }
    }
    export class MsgAuthorizeCircuitBreakerResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            success?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("success" in data && data.success != undefined) {
                    this.success = data.success;
                }
            }
        }
        get success() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set success(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            success?: boolean;
        }): MsgAuthorizeCircuitBreakerResponse {
            const message = new MsgAuthorizeCircuitBreakerResponse({});
            if (data.success != null) {
                message.success = data.success;
            }
            return message;
        }
        toObject() {
            const data: {
                success?: boolean;
            } = {};
            if (this.success != null) {
                data.success = this.success;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.success != false)
                writer.writeBool(1, this.success);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgAuthorizeCircuitBreakerResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgAuthorizeCircuitBreakerResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.success = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgAuthorizeCircuitBreakerResponse {
            return MsgAuthorizeCircuitBreakerResponse.deserialize(bytes);
        }
    }
    export class MsgTripCircuitBreaker extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            authority?: string;
            msg_type_urls?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
                if ("msg_type_urls" in data && data.msg_type_urls != undefined) {
                    this.msg_type_urls = data.msg_type_urls;
                }
            }
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get msg_type_urls() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set msg_type_urls(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            authority?: string;
            msg_type_urls?: string[];
        }): MsgTripCircuitBreaker {
            const message = new MsgTripCircuitBreaker({});
            if (data.authority != null) {
                message.authority = data.authority;
            }
            if (data.msg_type_urls != null) {
                message.msg_type_urls = data.msg_type_urls;
            }
            return message;
        }
        toObject() {
            const data: {
                authority?: string;
                msg_type_urls?: string[];
            } = {};
            if (this.authority != null) {
                data.authority = this.authority;
            }
            if (this.msg_type_urls != null) {
                data.msg_type_urls = this.msg_type_urls;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.authority.length)
                writer.writeString(1, this.authority);
            if (this.msg_type_urls.length)
                writer.writeRepeatedString(2, this.msg_type_urls);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTripCircuitBreaker {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTripCircuitBreaker();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.authority = reader.readString();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgTripCircuitBreaker {
            return MsgTripCircuitBreaker.deserialize(bytes);
        }
    }
    export class MsgTripCircuitBreakerResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            success?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("success" in data && data.success != undefined) {
                    this.success = data.success;
                }
            }
        }
        get success() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set success(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            success?: boolean;
        }): MsgTripCircuitBreakerResponse {
            const message = new MsgTripCircuitBreakerResponse({});
            if (data.success != null) {
                message.success = data.success;
            }
            return message;
        }
        toObject() {
            const data: {
                success?: boolean;
            } = {};
            if (this.success != null) {
                data.success = this.success;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.success != false)
                writer.writeBool(1, this.success);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTripCircuitBreakerResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgTripCircuitBreakerResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.success = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgTripCircuitBreakerResponse {
            return MsgTripCircuitBreakerResponse.deserialize(bytes);
        }
    }
    export class MsgResetCircuitBreaker extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            authority?: string;
            msg_type_urls?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
                if ("msg_type_urls" in data && data.msg_type_urls != undefined) {
                    this.msg_type_urls = data.msg_type_urls;
                }
            }
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get msg_type_urls() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
        }
        set msg_type_urls(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            authority?: string;
            msg_type_urls?: string[];
        }): MsgResetCircuitBreaker {
            const message = new MsgResetCircuitBreaker({});
            if (data.authority != null) {
                message.authority = data.authority;
            }
            if (data.msg_type_urls != null) {
                message.msg_type_urls = data.msg_type_urls;
            }
            return message;
        }
        toObject() {
            const data: {
                authority?: string;
                msg_type_urls?: string[];
            } = {};
            if (this.authority != null) {
                data.authority = this.authority;
            }
            if (this.msg_type_urls != null) {
                data.msg_type_urls = this.msg_type_urls;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.authority.length)
                writer.writeString(1, this.authority);
            if (this.msg_type_urls.length)
                writer.writeRepeatedString(3, this.msg_type_urls);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgResetCircuitBreaker {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgResetCircuitBreaker();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.authority = reader.readString();
                        break;
                    case 3:
                        pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgResetCircuitBreaker {
            return MsgResetCircuitBreaker.deserialize(bytes);
        }
    }
    export class MsgResetCircuitBreakerResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            success?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("success" in data && data.success != undefined) {
                    this.success = data.success;
                }
            }
        }
        get success() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set success(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            success?: boolean;
        }): MsgResetCircuitBreakerResponse {
            const message = new MsgResetCircuitBreakerResponse({});
            if (data.success != null) {
                message.success = data.success;
            }
            return message;
        }
        toObject() {
            const data: {
                success?: boolean;
            } = {};
            if (this.success != null) {
                data.success = this.success;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.success != false)
                writer.writeBool(1, this.success);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgResetCircuitBreakerResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgResetCircuitBreakerResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.success = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgResetCircuitBreakerResponse {
            return MsgResetCircuitBreakerResponse.deserialize(bytes);
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
    export abstract class UnimplementedMsgService {
        static definition = {
            AuthorizeCircuitBreaker: {
                path: "/cosmos.circuit.v1.Msg/AuthorizeCircuitBreaker",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgAuthorizeCircuitBreaker) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgAuthorizeCircuitBreaker.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgAuthorizeCircuitBreakerResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgAuthorizeCircuitBreakerResponse.deserialize(new Uint8Array(bytes))
            },
            TripCircuitBreaker: {
                path: "/cosmos.circuit.v1.Msg/TripCircuitBreaker",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgTripCircuitBreaker) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgTripCircuitBreaker.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgTripCircuitBreakerResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgTripCircuitBreakerResponse.deserialize(new Uint8Array(bytes))
            },
            ResetCircuitBreaker: {
                path: "/cosmos.circuit.v1.Msg/ResetCircuitBreaker",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgResetCircuitBreaker) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgResetCircuitBreaker.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgResetCircuitBreakerResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgResetCircuitBreakerResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract AuthorizeCircuitBreaker(call: grpc_1.ServerUnaryCall<MsgAuthorizeCircuitBreaker, MsgAuthorizeCircuitBreakerResponse>, callback: grpc_1.sendUnaryData<MsgAuthorizeCircuitBreakerResponse>): void;
        abstract TripCircuitBreaker(call: grpc_1.ServerUnaryCall<MsgTripCircuitBreaker, MsgTripCircuitBreakerResponse>, callback: grpc_1.sendUnaryData<MsgTripCircuitBreakerResponse>): void;
        abstract ResetCircuitBreaker(call: grpc_1.ServerUnaryCall<MsgResetCircuitBreaker, MsgResetCircuitBreakerResponse>, callback: grpc_1.sendUnaryData<MsgResetCircuitBreakerResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        AuthorizeCircuitBreaker: GrpcUnaryServiceInterface<MsgAuthorizeCircuitBreaker, MsgAuthorizeCircuitBreakerResponse> = (message: MsgAuthorizeCircuitBreaker, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgAuthorizeCircuitBreakerResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgAuthorizeCircuitBreakerResponse>, callback?: grpc_1.requestCallback<MsgAuthorizeCircuitBreakerResponse>): grpc_1.ClientUnaryCall => {
            return super.AuthorizeCircuitBreaker(message, metadata, options, callback);
        };
        TripCircuitBreaker: GrpcUnaryServiceInterface<MsgTripCircuitBreaker, MsgTripCircuitBreakerResponse> = (message: MsgTripCircuitBreaker, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgTripCircuitBreakerResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgTripCircuitBreakerResponse>, callback?: grpc_1.requestCallback<MsgTripCircuitBreakerResponse>): grpc_1.ClientUnaryCall => {
            return super.TripCircuitBreaker(message, metadata, options, callback);
        };
        ResetCircuitBreaker: GrpcUnaryServiceInterface<MsgResetCircuitBreaker, MsgResetCircuitBreakerResponse> = (message: MsgResetCircuitBreaker, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgResetCircuitBreakerResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgResetCircuitBreakerResponse>, callback?: grpc_1.requestCallback<MsgResetCircuitBreakerResponse>): grpc_1.ClientUnaryCall => {
            return super.ResetCircuitBreaker(message, metadata, options, callback);
        };
    }
}