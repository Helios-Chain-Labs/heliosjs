/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/orm/v1/orm.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/protobuf/descriptor";
import * as pb_1 from "google-protobuf";
export namespace cosmos.orm.v1 {
    export class TableDescriptor extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            primary_key?: PrimaryKeyDescriptor;
            index?: SecondaryIndexDescriptor[];
            id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("primary_key" in data && data.primary_key != undefined) {
                    this.primary_key = data.primary_key;
                }
                if ("index" in data && data.index != undefined) {
                    this.index = data.index;
                }
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get primary_key() {
            return pb_1.Message.getWrapperField(this, PrimaryKeyDescriptor, 1) as PrimaryKeyDescriptor;
        }
        set primary_key(value: PrimaryKeyDescriptor) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_primary_key() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get index() {
            return pb_1.Message.getRepeatedWrapperField(this, SecondaryIndexDescriptor, 2) as SecondaryIndexDescriptor[];
        }
        set index(value: SecondaryIndexDescriptor[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            primary_key?: ReturnType<typeof PrimaryKeyDescriptor.prototype.toObject>;
            index?: ReturnType<typeof SecondaryIndexDescriptor.prototype.toObject>[];
            id?: number;
        }): TableDescriptor {
            const message = new TableDescriptor({});
            if (data.primary_key != null) {
                message.primary_key = PrimaryKeyDescriptor.fromObject(data.primary_key);
            }
            if (data.index != null) {
                message.index = data.index.map(item => SecondaryIndexDescriptor.fromObject(item));
            }
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                primary_key?: ReturnType<typeof PrimaryKeyDescriptor.prototype.toObject>;
                index?: ReturnType<typeof SecondaryIndexDescriptor.prototype.toObject>[];
                id?: number;
            } = {};
            if (this.primary_key != null) {
                data.primary_key = this.primary_key.toObject();
            }
            if (this.index != null) {
                data.index = this.index.map((item: SecondaryIndexDescriptor) => item.toObject());
            }
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_primary_key)
                writer.writeMessage(1, this.primary_key, () => this.primary_key.serialize(writer));
            if (this.index.length)
                writer.writeRepeatedMessage(2, this.index, (item: SecondaryIndexDescriptor) => item.serialize(writer));
            if (this.id != 0)
                writer.writeUint32(3, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TableDescriptor {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TableDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.primary_key, () => message.primary_key = PrimaryKeyDescriptor.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.index, () => pb_1.Message.addToRepeatedWrapperField(message, 2, SecondaryIndexDescriptor.deserialize(reader), SecondaryIndexDescriptor));
                        break;
                    case 3:
                        message.id = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TableDescriptor {
            return TableDescriptor.deserialize(bytes);
        }
    }
    export class PrimaryKeyDescriptor extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            fields?: string;
            auto_increment?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("fields" in data && data.fields != undefined) {
                    this.fields = data.fields;
                }
                if ("auto_increment" in data && data.auto_increment != undefined) {
                    this.auto_increment = data.auto_increment;
                }
            }
        }
        get fields() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set fields(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get auto_increment() {
            return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
        }
        set auto_increment(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            fields?: string;
            auto_increment?: boolean;
        }): PrimaryKeyDescriptor {
            const message = new PrimaryKeyDescriptor({});
            if (data.fields != null) {
                message.fields = data.fields;
            }
            if (data.auto_increment != null) {
                message.auto_increment = data.auto_increment;
            }
            return message;
        }
        toObject() {
            const data: {
                fields?: string;
                auto_increment?: boolean;
            } = {};
            if (this.fields != null) {
                data.fields = this.fields;
            }
            if (this.auto_increment != null) {
                data.auto_increment = this.auto_increment;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.fields.length)
                writer.writeString(1, this.fields);
            if (this.auto_increment != false)
                writer.writeBool(2, this.auto_increment);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PrimaryKeyDescriptor {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PrimaryKeyDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.fields = reader.readString();
                        break;
                    case 2:
                        message.auto_increment = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PrimaryKeyDescriptor {
            return PrimaryKeyDescriptor.deserialize(bytes);
        }
    }
    export class SecondaryIndexDescriptor extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            fields?: string;
            id?: number;
            unique?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("fields" in data && data.fields != undefined) {
                    this.fields = data.fields;
                }
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("unique" in data && data.unique != undefined) {
                    this.unique = data.unique;
                }
            }
        }
        get fields() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set fields(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get unique() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set unique(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            fields?: string;
            id?: number;
            unique?: boolean;
        }): SecondaryIndexDescriptor {
            const message = new SecondaryIndexDescriptor({});
            if (data.fields != null) {
                message.fields = data.fields;
            }
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.unique != null) {
                message.unique = data.unique;
            }
            return message;
        }
        toObject() {
            const data: {
                fields?: string;
                id?: number;
                unique?: boolean;
            } = {};
            if (this.fields != null) {
                data.fields = this.fields;
            }
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.unique != null) {
                data.unique = this.unique;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.fields.length)
                writer.writeString(1, this.fields);
            if (this.id != 0)
                writer.writeUint32(2, this.id);
            if (this.unique != false)
                writer.writeBool(3, this.unique);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SecondaryIndexDescriptor {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SecondaryIndexDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.fields = reader.readString();
                        break;
                    case 2:
                        message.id = reader.readUint32();
                        break;
                    case 3:
                        message.unique = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SecondaryIndexDescriptor {
            return SecondaryIndexDescriptor.deserialize(bytes);
        }
    }
    export class SingletonDescriptor extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: number;
        }): SingletonDescriptor {
            const message = new SingletonDescriptor({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeUint32(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SingletonDescriptor {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SingletonDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SingletonDescriptor {
            return SingletonDescriptor.deserialize(bytes);
        }
    }
}
