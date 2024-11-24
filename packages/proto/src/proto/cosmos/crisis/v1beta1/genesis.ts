/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/crisis/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as dependency_3 from "./../../../amino/amino";
import * as pb_1 from "google-protobuf";
export namespace cosmos.crisis.v1beta1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            constant_fee?: dependency_2.cosmos.base.v1beta1.Coin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("constant_fee" in data && data.constant_fee != undefined) {
                    this.constant_fee = data.constant_fee;
                }
            }
        }
        get constant_fee() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3) as dependency_2.cosmos.base.v1beta1.Coin;
        }
        set constant_fee(value: dependency_2.cosmos.base.v1beta1.Coin) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_constant_fee() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            constant_fee?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): GenesisState {
            const message = new GenesisState({});
            if (data.constant_fee != null) {
                message.constant_fee = dependency_2.cosmos.base.v1beta1.Coin.fromObject(data.constant_fee);
            }
            return message;
        }
        toObject() {
            const data: {
                constant_fee?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>;
            } = {};
            if (this.constant_fee != null) {
                data.constant_fee = this.constant_fee.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_constant_fee)
                writer.writeMessage(3, this.constant_fee, () => this.constant_fee.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 3:
                        reader.readMessage(message.constant_fee, () => message.constant_fee = dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
}
