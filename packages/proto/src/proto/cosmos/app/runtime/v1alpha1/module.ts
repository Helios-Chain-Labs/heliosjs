/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/app/runtime/v1alpha1/module.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../v1alpha1/module";
import * as pb_1 from "google-protobuf";
export namespace cosmos.app.runtime.v1alpha1 {
    export class Module extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            app_name?: string;
            begin_blockers?: string[];
            end_blockers?: string[];
            init_genesis?: string[];
            export_genesis?: string[];
            override_store_keys?: StoreKeyConfig[];
            order_migrations?: string[];
            precommiters?: string[];
            prepare_check_staters?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4, 5, 6, 7, 8, 9], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("app_name" in data && data.app_name != undefined) {
                    this.app_name = data.app_name;
                }
                if ("begin_blockers" in data && data.begin_blockers != undefined) {
                    this.begin_blockers = data.begin_blockers;
                }
                if ("end_blockers" in data && data.end_blockers != undefined) {
                    this.end_blockers = data.end_blockers;
                }
                if ("init_genesis" in data && data.init_genesis != undefined) {
                    this.init_genesis = data.init_genesis;
                }
                if ("export_genesis" in data && data.export_genesis != undefined) {
                    this.export_genesis = data.export_genesis;
                }
                if ("override_store_keys" in data && data.override_store_keys != undefined) {
                    this.override_store_keys = data.override_store_keys;
                }
                if ("order_migrations" in data && data.order_migrations != undefined) {
                    this.order_migrations = data.order_migrations;
                }
                if ("precommiters" in data && data.precommiters != undefined) {
                    this.precommiters = data.precommiters;
                }
                if ("prepare_check_staters" in data && data.prepare_check_staters != undefined) {
                    this.prepare_check_staters = data.prepare_check_staters;
                }
            }
        }
        get app_name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set app_name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get begin_blockers() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set begin_blockers(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        get end_blockers() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
        }
        set end_blockers(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        get init_genesis() {
            return pb_1.Message.getFieldWithDefault(this, 4, []) as string[];
        }
        set init_genesis(value: string[]) {
            pb_1.Message.setField(this, 4, value);
        }
        get export_genesis() {
            return pb_1.Message.getFieldWithDefault(this, 5, []) as string[];
        }
        set export_genesis(value: string[]) {
            pb_1.Message.setField(this, 5, value);
        }
        get override_store_keys() {
            return pb_1.Message.getRepeatedWrapperField(this, StoreKeyConfig, 6) as StoreKeyConfig[];
        }
        set override_store_keys(value: StoreKeyConfig[]) {
            pb_1.Message.setRepeatedWrapperField(this, 6, value);
        }
        get order_migrations() {
            return pb_1.Message.getFieldWithDefault(this, 7, []) as string[];
        }
        set order_migrations(value: string[]) {
            pb_1.Message.setField(this, 7, value);
        }
        get precommiters() {
            return pb_1.Message.getFieldWithDefault(this, 8, []) as string[];
        }
        set precommiters(value: string[]) {
            pb_1.Message.setField(this, 8, value);
        }
        get prepare_check_staters() {
            return pb_1.Message.getFieldWithDefault(this, 9, []) as string[];
        }
        set prepare_check_staters(value: string[]) {
            pb_1.Message.setField(this, 9, value);
        }
        static fromObject(data: {
            app_name?: string;
            begin_blockers?: string[];
            end_blockers?: string[];
            init_genesis?: string[];
            export_genesis?: string[];
            override_store_keys?: ReturnType<typeof StoreKeyConfig.prototype.toObject>[];
            order_migrations?: string[];
            precommiters?: string[];
            prepare_check_staters?: string[];
        }): Module {
            const message = new Module({});
            if (data.app_name != null) {
                message.app_name = data.app_name;
            }
            if (data.begin_blockers != null) {
                message.begin_blockers = data.begin_blockers;
            }
            if (data.end_blockers != null) {
                message.end_blockers = data.end_blockers;
            }
            if (data.init_genesis != null) {
                message.init_genesis = data.init_genesis;
            }
            if (data.export_genesis != null) {
                message.export_genesis = data.export_genesis;
            }
            if (data.override_store_keys != null) {
                message.override_store_keys = data.override_store_keys.map(item => StoreKeyConfig.fromObject(item));
            }
            if (data.order_migrations != null) {
                message.order_migrations = data.order_migrations;
            }
            if (data.precommiters != null) {
                message.precommiters = data.precommiters;
            }
            if (data.prepare_check_staters != null) {
                message.prepare_check_staters = data.prepare_check_staters;
            }
            return message;
        }
        toObject() {
            const data: {
                app_name?: string;
                begin_blockers?: string[];
                end_blockers?: string[];
                init_genesis?: string[];
                export_genesis?: string[];
                override_store_keys?: ReturnType<typeof StoreKeyConfig.prototype.toObject>[];
                order_migrations?: string[];
                precommiters?: string[];
                prepare_check_staters?: string[];
            } = {};
            if (this.app_name != null) {
                data.app_name = this.app_name;
            }
            if (this.begin_blockers != null) {
                data.begin_blockers = this.begin_blockers;
            }
            if (this.end_blockers != null) {
                data.end_blockers = this.end_blockers;
            }
            if (this.init_genesis != null) {
                data.init_genesis = this.init_genesis;
            }
            if (this.export_genesis != null) {
                data.export_genesis = this.export_genesis;
            }
            if (this.override_store_keys != null) {
                data.override_store_keys = this.override_store_keys.map((item: StoreKeyConfig) => item.toObject());
            }
            if (this.order_migrations != null) {
                data.order_migrations = this.order_migrations;
            }
            if (this.precommiters != null) {
                data.precommiters = this.precommiters;
            }
            if (this.prepare_check_staters != null) {
                data.prepare_check_staters = this.prepare_check_staters;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.app_name.length)
                writer.writeString(1, this.app_name);
            if (this.begin_blockers.length)
                writer.writeRepeatedString(2, this.begin_blockers);
            if (this.end_blockers.length)
                writer.writeRepeatedString(3, this.end_blockers);
            if (this.init_genesis.length)
                writer.writeRepeatedString(4, this.init_genesis);
            if (this.export_genesis.length)
                writer.writeRepeatedString(5, this.export_genesis);
            if (this.override_store_keys.length)
                writer.writeRepeatedMessage(6, this.override_store_keys, (item: StoreKeyConfig) => item.serialize(writer));
            if (this.order_migrations.length)
                writer.writeRepeatedString(7, this.order_migrations);
            if (this.precommiters.length)
                writer.writeRepeatedString(8, this.precommiters);
            if (this.prepare_check_staters.length)
                writer.writeRepeatedString(9, this.prepare_check_staters);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Module {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Module();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.app_name = reader.readString();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    case 3:
                        pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                        break;
                    case 4:
                        pb_1.Message.addToRepeatedField(message, 4, reader.readString());
                        break;
                    case 5:
                        pb_1.Message.addToRepeatedField(message, 5, reader.readString());
                        break;
                    case 6:
                        reader.readMessage(message.override_store_keys, () => pb_1.Message.addToRepeatedWrapperField(message, 6, StoreKeyConfig.deserialize(reader), StoreKeyConfig));
                        break;
                    case 7:
                        pb_1.Message.addToRepeatedField(message, 7, reader.readString());
                        break;
                    case 8:
                        pb_1.Message.addToRepeatedField(message, 8, reader.readString());
                        break;
                    case 9:
                        pb_1.Message.addToRepeatedField(message, 9, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Module {
            return Module.deserialize(bytes);
        }
    }
    export class StoreKeyConfig extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            module_name?: string;
            kv_store_key?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("module_name" in data && data.module_name != undefined) {
                    this.module_name = data.module_name;
                }
                if ("kv_store_key" in data && data.kv_store_key != undefined) {
                    this.kv_store_key = data.kv_store_key;
                }
            }
        }
        get module_name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set module_name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get kv_store_key() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set kv_store_key(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            module_name?: string;
            kv_store_key?: string;
        }): StoreKeyConfig {
            const message = new StoreKeyConfig({});
            if (data.module_name != null) {
                message.module_name = data.module_name;
            }
            if (data.kv_store_key != null) {
                message.kv_store_key = data.kv_store_key;
            }
            return message;
        }
        toObject() {
            const data: {
                module_name?: string;
                kv_store_key?: string;
            } = {};
            if (this.module_name != null) {
                data.module_name = this.module_name;
            }
            if (this.kv_store_key != null) {
                data.kv_store_key = this.kv_store_key;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.module_name.length)
                writer.writeString(1, this.module_name);
            if (this.kv_store_key.length)
                writer.writeString(2, this.kv_store_key);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StoreKeyConfig {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StoreKeyConfig();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.module_name = reader.readString();
                        break;
                    case 2:
                        message.kv_store_key = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): StoreKeyConfig {
            return StoreKeyConfig.deserialize(bytes);
        }
    }
}
