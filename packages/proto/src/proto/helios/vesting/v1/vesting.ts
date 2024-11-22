/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: helios/vesting/v1/vesting.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../cosmos/vesting/v1beta1/vesting";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export namespace helios.vesting.v1 {
    export class ClawbackVestingAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base_vesting_account?: dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount;
            funder_address?: string;
            start_time?: dependency_3.google.protobuf.Timestamp;
            lockup_periods?: dependency_2.cosmos.vesting.v1beta1.Period[];
            vesting_periods?: dependency_2.cosmos.vesting.v1beta1.Period[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4, 5], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
                    this.base_vesting_account = data.base_vesting_account;
                }
                if ("funder_address" in data && data.funder_address != undefined) {
                    this.funder_address = data.funder_address;
                }
                if ("start_time" in data && data.start_time != undefined) {
                    this.start_time = data.start_time;
                }
                if ("lockup_periods" in data && data.lockup_periods != undefined) {
                    this.lockup_periods = data.lockup_periods;
                }
                if ("vesting_periods" in data && data.vesting_periods != undefined) {
                    this.vesting_periods = data.vesting_periods;
                }
            }
        }
        get base_vesting_account() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount, 1) as dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount;
        }
        set base_vesting_account(value: dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_base_vesting_account() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get funder_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set funder_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get start_time() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 3) as dependency_3.google.protobuf.Timestamp;
        }
        set start_time(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_start_time() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get lockup_periods() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.vesting.v1beta1.Period, 4) as dependency_2.cosmos.vesting.v1beta1.Period[];
        }
        set lockup_periods(value: dependency_2.cosmos.vesting.v1beta1.Period[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        get vesting_periods() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.vesting.v1beta1.Period, 5) as dependency_2.cosmos.vesting.v1beta1.Period[];
        }
        set vesting_periods(value: dependency_2.cosmos.vesting.v1beta1.Period[]) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
        }
        static fromObject(data: {
            base_vesting_account?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount.prototype.toObject>;
            funder_address?: string;
            start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            lockup_periods?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            vesting_periods?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
        }): ClawbackVestingAccount {
            const message = new ClawbackVestingAccount({});
            if (data.base_vesting_account != null) {
                message.base_vesting_account = dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount.fromObject(data.base_vesting_account);
            }
            if (data.funder_address != null) {
                message.funder_address = data.funder_address;
            }
            if (data.start_time != null) {
                message.start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.start_time);
            }
            if (data.lockup_periods != null) {
                message.lockup_periods = data.lockup_periods.map(item => dependency_2.cosmos.vesting.v1beta1.Period.fromObject(item));
            }
            if (data.vesting_periods != null) {
                message.vesting_periods = data.vesting_periods.map(item => dependency_2.cosmos.vesting.v1beta1.Period.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                base_vesting_account?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount.prototype.toObject>;
                funder_address?: string;
                start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
                lockup_periods?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
                vesting_periods?: ReturnType<typeof dependency_2.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            } = {};
            if (this.base_vesting_account != null) {
                data.base_vesting_account = this.base_vesting_account.toObject();
            }
            if (this.funder_address != null) {
                data.funder_address = this.funder_address;
            }
            if (this.start_time != null) {
                data.start_time = this.start_time.toObject();
            }
            if (this.lockup_periods != null) {
                data.lockup_periods = this.lockup_periods.map((item: dependency_2.cosmos.vesting.v1beta1.Period) => item.toObject());
            }
            if (this.vesting_periods != null) {
                data.vesting_periods = this.vesting_periods.map((item: dependency_2.cosmos.vesting.v1beta1.Period) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_base_vesting_account)
                writer.writeMessage(1, this.base_vesting_account, () => this.base_vesting_account.serialize(writer));
            if (this.funder_address.length)
                writer.writeString(2, this.funder_address);
            if (this.has_start_time)
                writer.writeMessage(3, this.start_time, () => this.start_time.serialize(writer));
            if (this.lockup_periods.length)
                writer.writeRepeatedMessage(4, this.lockup_periods, (item: dependency_2.cosmos.vesting.v1beta1.Period) => item.serialize(writer));
            if (this.vesting_periods.length)
                writer.writeRepeatedMessage(5, this.vesting_periods, (item: dependency_2.cosmos.vesting.v1beta1.Period) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClawbackVestingAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClawbackVestingAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_vesting_account, () => message.base_vesting_account = dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount.deserialize(reader));
                        break;
                    case 2:
                        message.funder_address = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.start_time, () => message.start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.lockup_periods, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_2.cosmos.vesting.v1beta1.Period));
                        break;
                    case 5:
                        reader.readMessage(message.vesting_periods, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_2.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_2.cosmos.vesting.v1beta1.Period));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ClawbackVestingAccount {
            return ClawbackVestingAccount.deserialize(bytes);
        }
    }
}
