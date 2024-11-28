/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/app/v1alpha1/config.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace cosmos.app.v1alpha1 {
    export class Config extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            modules?: ModuleConfig[];
            golang_bindings?: GolangBinding[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("modules" in data && data.modules != undefined) {
                    this.modules = data.modules;
                }
                if ("golang_bindings" in data && data.golang_bindings != undefined) {
                    this.golang_bindings = data.golang_bindings;
                }
            }
        }
        get modules() {
            return pb_1.Message.getRepeatedWrapperField(this, ModuleConfig, 1) as ModuleConfig[];
        }
        set modules(value: ModuleConfig[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get golang_bindings() {
            return pb_1.Message.getRepeatedWrapperField(this, GolangBinding, 2) as GolangBinding[];
        }
        set golang_bindings(value: GolangBinding[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            modules?: ReturnType<typeof ModuleConfig.prototype.toObject>[];
            golang_bindings?: ReturnType<typeof GolangBinding.prototype.toObject>[];
        }): Config {
            const message = new Config({});
            if (data.modules != null) {
                message.modules = data.modules.map(item => ModuleConfig.fromObject(item));
            }
            if (data.golang_bindings != null) {
                message.golang_bindings = data.golang_bindings.map(item => GolangBinding.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                modules?: ReturnType<typeof ModuleConfig.prototype.toObject>[];
                golang_bindings?: ReturnType<typeof GolangBinding.prototype.toObject>[];
            } = {};
            if (this.modules != null) {
                data.modules = this.modules.map((item: ModuleConfig) => item.toObject());
            }
            if (this.golang_bindings != null) {
                data.golang_bindings = this.golang_bindings.map((item: GolangBinding) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.modules.length)
                writer.writeRepeatedMessage(1, this.modules, (item: ModuleConfig) => item.serialize(writer));
            if (this.golang_bindings.length)
                writer.writeRepeatedMessage(2, this.golang_bindings, (item: GolangBinding) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Config {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Config();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.modules, () => pb_1.Message.addToRepeatedWrapperField(message, 1, ModuleConfig.deserialize(reader), ModuleConfig));
                        break;
                    case 2:
                        reader.readMessage(message.golang_bindings, () => pb_1.Message.addToRepeatedWrapperField(message, 2, GolangBinding.deserialize(reader), GolangBinding));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Config {
            return Config.deserialize(bytes);
        }
    }
    export class ModuleConfig extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            config?: dependency_1.google.protobuf.Any;
            golang_bindings?: GolangBinding[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("config" in data && data.config != undefined) {
                    this.config = data.config;
                }
                if ("golang_bindings" in data && data.golang_bindings != undefined) {
                    this.golang_bindings = data.golang_bindings;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get config() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Any, 2) as dependency_1.google.protobuf.Any;
        }
        set config(value: dependency_1.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_config() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get golang_bindings() {
            return pb_1.Message.getRepeatedWrapperField(this, GolangBinding, 3) as GolangBinding[];
        }
        set golang_bindings(value: GolangBinding[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            name?: string;
            config?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            golang_bindings?: ReturnType<typeof GolangBinding.prototype.toObject>[];
        }): ModuleConfig {
            const message = new ModuleConfig({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.config != null) {
                message.config = dependency_1.google.protobuf.Any.fromObject(data.config);
            }
            if (data.golang_bindings != null) {
                message.golang_bindings = data.golang_bindings.map(item => GolangBinding.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                config?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
                golang_bindings?: ReturnType<typeof GolangBinding.prototype.toObject>[];
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.config != null) {
                data.config = this.config.toObject();
            }
            if (this.golang_bindings != null) {
                data.golang_bindings = this.golang_bindings.map((item: GolangBinding) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.has_config)
                writer.writeMessage(2, this.config, () => this.config.serialize(writer));
            if (this.golang_bindings.length)
                writer.writeRepeatedMessage(3, this.golang_bindings, (item: GolangBinding) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModuleConfig {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModuleConfig();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.config, () => message.config = dependency_1.google.protobuf.Any.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.golang_bindings, () => pb_1.Message.addToRepeatedWrapperField(message, 3, GolangBinding.deserialize(reader), GolangBinding));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ModuleConfig {
            return ModuleConfig.deserialize(bytes);
        }
    }
    export class GolangBinding extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            interface_type?: string;
            implementation?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("interface_type" in data && data.interface_type != undefined) {
                    this.interface_type = data.interface_type;
                }
                if ("implementation" in data && data.implementation != undefined) {
                    this.implementation = data.implementation;
                }
            }
        }
        get interface_type() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set interface_type(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get implementation() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set implementation(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            interface_type?: string;
            implementation?: string;
        }): GolangBinding {
            const message = new GolangBinding({});
            if (data.interface_type != null) {
                message.interface_type = data.interface_type;
            }
            if (data.implementation != null) {
                message.implementation = data.implementation;
            }
            return message;
        }
        toObject() {
            const data: {
                interface_type?: string;
                implementation?: string;
            } = {};
            if (this.interface_type != null) {
                data.interface_type = this.interface_type;
            }
            if (this.implementation != null) {
                data.implementation = this.implementation;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.interface_type.length)
                writer.writeString(1, this.interface_type);
            if (this.implementation.length)
                writer.writeString(2, this.implementation);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GolangBinding {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GolangBinding();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.interface_type = reader.readString();
                        break;
                    case 2:
                        message.implementation = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GolangBinding {
            return GolangBinding.deserialize(bytes);
        }
    }
}