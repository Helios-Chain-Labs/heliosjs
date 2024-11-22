/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos_proto/cosmos.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../google/protobuf/descriptor";
import * as pb_1 from "google-protobuf";
export namespace cosmos_proto {
    export enum ScalarType {
        SCALAR_TYPE_UNSPECIFIED = 0,
        SCALAR_TYPE_STRING = 1,
        SCALAR_TYPE_BYTES = 2
    }
    export class InterfaceDescriptor extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            description?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            name?: string;
            description?: string;
        }): InterfaceDescriptor {
            const message = new InterfaceDescriptor({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                description?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InterfaceDescriptor {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InterfaceDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): InterfaceDescriptor {
            return InterfaceDescriptor.deserialize(bytes);
        }
    }
    export class ScalarDescriptor extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            description?: string;
            field_type?: ScalarType[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("field_type" in data && data.field_type != undefined) {
                    this.field_type = data.field_type;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get field_type() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as ScalarType[];
        }
        set field_type(value: ScalarType[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            name?: string;
            description?: string;
            field_type?: ScalarType[];
        }): ScalarDescriptor {
            const message = new ScalarDescriptor({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.field_type != null) {
                message.field_type = data.field_type;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                description?: string;
                field_type?: ScalarType[];
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.field_type != null) {
                data.field_type = this.field_type;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.field_type.length)
                writer.writePackedEnum(3, this.field_type);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ScalarDescriptor {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScalarDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        message.field_type = reader.readPackedEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ScalarDescriptor {
            return ScalarDescriptor.deserialize(bytes);
        }
    }
}
