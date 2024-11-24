/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/staking/module/v1/module.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../app/v1alpha1/module";
import * as pb_1 from "google-protobuf";
export namespace cosmos.staking.module.v1 {
    export class Module extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            hooks_order?: string[];
            authority?: string;
            bech32_prefix_validator?: string;
            bech32_prefix_consensus?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("hooks_order" in data && data.hooks_order != undefined) {
                    this.hooks_order = data.hooks_order;
                }
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
                if ("bech32_prefix_validator" in data && data.bech32_prefix_validator != undefined) {
                    this.bech32_prefix_validator = data.bech32_prefix_validator;
                }
                if ("bech32_prefix_consensus" in data && data.bech32_prefix_consensus != undefined) {
                    this.bech32_prefix_consensus = data.bech32_prefix_consensus;
                }
            }
        }
        get hooks_order() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
        }
        set hooks_order(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get bech32_prefix_validator() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set bech32_prefix_validator(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get bech32_prefix_consensus() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set bech32_prefix_consensus(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            hooks_order?: string[];
            authority?: string;
            bech32_prefix_validator?: string;
            bech32_prefix_consensus?: string;
        }): Module {
            const message = new Module({});
            if (data.hooks_order != null) {
                message.hooks_order = data.hooks_order;
            }
            if (data.authority != null) {
                message.authority = data.authority;
            }
            if (data.bech32_prefix_validator != null) {
                message.bech32_prefix_validator = data.bech32_prefix_validator;
            }
            if (data.bech32_prefix_consensus != null) {
                message.bech32_prefix_consensus = data.bech32_prefix_consensus;
            }
            return message;
        }
        toObject() {
            const data: {
                hooks_order?: string[];
                authority?: string;
                bech32_prefix_validator?: string;
                bech32_prefix_consensus?: string;
            } = {};
            if (this.hooks_order != null) {
                data.hooks_order = this.hooks_order;
            }
            if (this.authority != null) {
                data.authority = this.authority;
            }
            if (this.bech32_prefix_validator != null) {
                data.bech32_prefix_validator = this.bech32_prefix_validator;
            }
            if (this.bech32_prefix_consensus != null) {
                data.bech32_prefix_consensus = this.bech32_prefix_consensus;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hooks_order.length)
                writer.writeRepeatedString(1, this.hooks_order);
            if (this.authority.length)
                writer.writeString(2, this.authority);
            if (this.bech32_prefix_validator.length)
                writer.writeString(3, this.bech32_prefix_validator);
            if (this.bech32_prefix_consensus.length)
                writer.writeString(4, this.bech32_prefix_consensus);
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
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    case 2:
                        message.authority = reader.readString();
                        break;
                    case 3:
                        message.bech32_prefix_validator = reader.readString();
                        break;
                    case 4:
                        message.bech32_prefix_consensus = reader.readString();
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
}
