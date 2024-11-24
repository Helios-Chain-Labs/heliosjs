/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/auth/module/v1/module.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../app/v1alpha1/module";
import * as pb_1 from "google-protobuf";
export namespace cosmos.auth.module.v1 {
    export class Module extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            bech32_prefix?: string;
            module_account_permissions?: ModuleAccountPermission[];
            authority?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bech32_prefix" in data && data.bech32_prefix != undefined) {
                    this.bech32_prefix = data.bech32_prefix;
                }
                if ("module_account_permissions" in data && data.module_account_permissions != undefined) {
                    this.module_account_permissions = data.module_account_permissions;
                }
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
            }
        }
        get bech32_prefix() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set bech32_prefix(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get module_account_permissions() {
            return pb_1.Message.getRepeatedWrapperField(this, ModuleAccountPermission, 2) as ModuleAccountPermission[];
        }
        set module_account_permissions(value: ModuleAccountPermission[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            bech32_prefix?: string;
            module_account_permissions?: ReturnType<typeof ModuleAccountPermission.prototype.toObject>[];
            authority?: string;
        }): Module {
            const message = new Module({});
            if (data.bech32_prefix != null) {
                message.bech32_prefix = data.bech32_prefix;
            }
            if (data.module_account_permissions != null) {
                message.module_account_permissions = data.module_account_permissions.map(item => ModuleAccountPermission.fromObject(item));
            }
            if (data.authority != null) {
                message.authority = data.authority;
            }
            return message;
        }
        toObject() {
            const data: {
                bech32_prefix?: string;
                module_account_permissions?: ReturnType<typeof ModuleAccountPermission.prototype.toObject>[];
                authority?: string;
            } = {};
            if (this.bech32_prefix != null) {
                data.bech32_prefix = this.bech32_prefix;
            }
            if (this.module_account_permissions != null) {
                data.module_account_permissions = this.module_account_permissions.map((item: ModuleAccountPermission) => item.toObject());
            }
            if (this.authority != null) {
                data.authority = this.authority;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bech32_prefix.length)
                writer.writeString(1, this.bech32_prefix);
            if (this.module_account_permissions.length)
                writer.writeRepeatedMessage(2, this.module_account_permissions, (item: ModuleAccountPermission) => item.serialize(writer));
            if (this.authority.length)
                writer.writeString(3, this.authority);
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
                        message.bech32_prefix = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.module_account_permissions, () => pb_1.Message.addToRepeatedWrapperField(message, 2, ModuleAccountPermission.deserialize(reader), ModuleAccountPermission));
                        break;
                    case 3:
                        message.authority = reader.readString();
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
    export class ModuleAccountPermission extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            account?: string;
            permissions?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("account" in data && data.account != undefined) {
                    this.account = data.account;
                }
                if ("permissions" in data && data.permissions != undefined) {
                    this.permissions = data.permissions;
                }
            }
        }
        get account() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set account(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get permissions() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set permissions(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            account?: string;
            permissions?: string[];
        }): ModuleAccountPermission {
            const message = new ModuleAccountPermission({});
            if (data.account != null) {
                message.account = data.account;
            }
            if (data.permissions != null) {
                message.permissions = data.permissions;
            }
            return message;
        }
        toObject() {
            const data: {
                account?: string;
                permissions?: string[];
            } = {};
            if (this.account != null) {
                data.account = this.account;
            }
            if (this.permissions != null) {
                data.permissions = this.permissions;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.account.length)
                writer.writeString(1, this.account);
            if (this.permissions.length)
                writer.writeRepeatedString(2, this.permissions);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModuleAccountPermission {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModuleAccountPermission();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.account = reader.readString();
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
        static deserializeBinary(bytes: Uint8Array): ModuleAccountPermission {
            return ModuleAccountPermission.deserialize(bytes);
        }
    }
}
