/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/feegrant/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/protobuf/any";
import * as dependency_3 from "./../../../cosmos_proto/cosmos";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.feegrant.v1beta1 {
    export class MsgGrantAllowance extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            allowance?: dependency_2.google.protobuf.Any;
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
                if ("allowance" in data && data.allowance != undefined) {
                    this.allowance = data.allowance;
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
        get allowance() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3) as dependency_2.google.protobuf.Any;
        }
        set allowance(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_allowance() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            allowance?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): MsgGrantAllowance {
            const message = new MsgGrantAllowance({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            if (data.allowance != null) {
                message.allowance = dependency_2.google.protobuf.Any.fromObject(data.allowance);
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                grantee?: string;
                allowance?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
            }
            if (this.grantee != null) {
                data.grantee = this.grantee;
            }
            if (this.allowance != null) {
                data.allowance = this.allowance.toObject();
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
            if (this.has_allowance)
                writer.writeMessage(3, this.allowance, () => this.allowance.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgGrantAllowance {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgGrantAllowance();
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
                        reader.readMessage(message.allowance, () => message.allowance = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgGrantAllowance {
            return MsgGrantAllowance.deserialize(bytes);
        }
    }
    export class MsgGrantAllowanceResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgGrantAllowanceResponse {
            const message = new MsgGrantAllowanceResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgGrantAllowanceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgGrantAllowanceResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgGrantAllowanceResponse {
            return MsgGrantAllowanceResponse.deserialize(bytes);
        }
    }
    export class MsgRevokeAllowance extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
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
        static fromObject(data: {
            granter?: string;
            grantee?: string;
        }): MsgRevokeAllowance {
            const message = new MsgRevokeAllowance({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                grantee?: string;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
            }
            if (this.grantee != null) {
                data.grantee = this.grantee;
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
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevokeAllowance {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevokeAllowance();
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
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRevokeAllowance {
            return MsgRevokeAllowance.deserialize(bytes);
        }
    }
    export class MsgRevokeAllowanceResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgRevokeAllowanceResponse {
            const message = new MsgRevokeAllowanceResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevokeAllowanceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRevokeAllowanceResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgRevokeAllowanceResponse {
            return MsgRevokeAllowanceResponse.deserialize(bytes);
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
            GrantAllowance: {
                path: "/cosmos.feegrant.v1beta1.Msg/GrantAllowance",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgGrantAllowance) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgGrantAllowance.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgGrantAllowanceResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgGrantAllowanceResponse.deserialize(new Uint8Array(bytes))
            },
            RevokeAllowance: {
                path: "/cosmos.feegrant.v1beta1.Msg/RevokeAllowance",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgRevokeAllowance) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgRevokeAllowance.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgRevokeAllowanceResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgRevokeAllowanceResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GrantAllowance(call: grpc_1.ServerUnaryCall<MsgGrantAllowance, MsgGrantAllowanceResponse>, callback: grpc_1.sendUnaryData<MsgGrantAllowanceResponse>): void;
        abstract RevokeAllowance(call: grpc_1.ServerUnaryCall<MsgRevokeAllowance, MsgRevokeAllowanceResponse>, callback: grpc_1.sendUnaryData<MsgRevokeAllowanceResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        GrantAllowance: GrpcUnaryServiceInterface<MsgGrantAllowance, MsgGrantAllowanceResponse> = (message: MsgGrantAllowance, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgGrantAllowanceResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgGrantAllowanceResponse>, callback?: grpc_1.requestCallback<MsgGrantAllowanceResponse>): grpc_1.ClientUnaryCall => {
            return super.GrantAllowance(message, metadata, options, callback);
        };
        RevokeAllowance: GrpcUnaryServiceInterface<MsgRevokeAllowance, MsgRevokeAllowanceResponse> = (message: MsgRevokeAllowance, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgRevokeAllowanceResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgRevokeAllowanceResponse>, callback?: grpc_1.requestCallback<MsgRevokeAllowanceResponse>): grpc_1.ClientUnaryCall => {
            return super.RevokeAllowance(message, metadata, options, callback);
        };
    }
}
