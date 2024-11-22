/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/staking/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./staking";
import * as pb_1 from "google-protobuf";
export namespace cosmos.staking.v1beta1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            params?: dependency_2.cosmos.staking.v1beta1.Params;
            last_total_power?: Uint8Array;
            last_validator_powers?: LastValidatorPower[];
            validators?: dependency_2.cosmos.staking.v1beta1.Validator[];
            delegations?: dependency_2.cosmos.staking.v1beta1.Delegation[];
            unbonding_delegations?: dependency_2.cosmos.staking.v1beta1.UnbondingDelegation[];
            redelegations?: dependency_2.cosmos.staking.v1beta1.Redelegation[];
            exported?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 4, 5, 6, 7], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("last_total_power" in data && data.last_total_power != undefined) {
                    this.last_total_power = data.last_total_power;
                }
                if ("last_validator_powers" in data && data.last_validator_powers != undefined) {
                    this.last_validator_powers = data.last_validator_powers;
                }
                if ("validators" in data && data.validators != undefined) {
                    this.validators = data.validators;
                }
                if ("delegations" in data && data.delegations != undefined) {
                    this.delegations = data.delegations;
                }
                if ("unbonding_delegations" in data && data.unbonding_delegations != undefined) {
                    this.unbonding_delegations = data.unbonding_delegations;
                }
                if ("redelegations" in data && data.redelegations != undefined) {
                    this.redelegations = data.redelegations;
                }
                if ("exported" in data && data.exported != undefined) {
                    this.exported = data.exported;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.staking.v1beta1.Params, 1) as dependency_2.cosmos.staking.v1beta1.Params;
        }
        set params(value: dependency_2.cosmos.staking.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get last_total_power() {
            return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0)) as Uint8Array;
        }
        set last_total_power(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        get last_validator_powers() {
            return pb_1.Message.getRepeatedWrapperField(this, LastValidatorPower, 3) as LastValidatorPower[];
        }
        set last_validator_powers(value: LastValidatorPower[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get validators() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.staking.v1beta1.Validator, 4) as dependency_2.cosmos.staking.v1beta1.Validator[];
        }
        set validators(value: dependency_2.cosmos.staking.v1beta1.Validator[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        get delegations() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.staking.v1beta1.Delegation, 5) as dependency_2.cosmos.staking.v1beta1.Delegation[];
        }
        set delegations(value: dependency_2.cosmos.staking.v1beta1.Delegation[]) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
        }
        get unbonding_delegations() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.staking.v1beta1.UnbondingDelegation, 6) as dependency_2.cosmos.staking.v1beta1.UnbondingDelegation[];
        }
        set unbonding_delegations(value: dependency_2.cosmos.staking.v1beta1.UnbondingDelegation[]) {
            pb_1.Message.setRepeatedWrapperField(this, 6, value);
        }
        get redelegations() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.staking.v1beta1.Redelegation, 7) as dependency_2.cosmos.staking.v1beta1.Redelegation[];
        }
        set redelegations(value: dependency_2.cosmos.staking.v1beta1.Redelegation[]) {
            pb_1.Message.setRepeatedWrapperField(this, 7, value);
        }
        get exported() {
            return pb_1.Message.getFieldWithDefault(this, 8, false) as boolean;
        }
        set exported(value: boolean) {
            pb_1.Message.setField(this, 8, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Params.prototype.toObject>;
            last_total_power?: Uint8Array;
            last_validator_powers?: ReturnType<typeof LastValidatorPower.prototype.toObject>[];
            validators?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Validator.prototype.toObject>[];
            delegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Delegation.prototype.toObject>[];
            unbonding_delegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>[];
            redelegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Redelegation.prototype.toObject>[];
            exported?: boolean;
        }): GenesisState {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = dependency_2.cosmos.staking.v1beta1.Params.fromObject(data.params);
            }
            if (data.last_total_power != null) {
                message.last_total_power = data.last_total_power;
            }
            if (data.last_validator_powers != null) {
                message.last_validator_powers = data.last_validator_powers.map(item => LastValidatorPower.fromObject(item));
            }
            if (data.validators != null) {
                message.validators = data.validators.map(item => dependency_2.cosmos.staking.v1beta1.Validator.fromObject(item));
            }
            if (data.delegations != null) {
                message.delegations = data.delegations.map(item => dependency_2.cosmos.staking.v1beta1.Delegation.fromObject(item));
            }
            if (data.unbonding_delegations != null) {
                message.unbonding_delegations = data.unbonding_delegations.map(item => dependency_2.cosmos.staking.v1beta1.UnbondingDelegation.fromObject(item));
            }
            if (data.redelegations != null) {
                message.redelegations = data.redelegations.map(item => dependency_2.cosmos.staking.v1beta1.Redelegation.fromObject(item));
            }
            if (data.exported != null) {
                message.exported = data.exported;
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Params.prototype.toObject>;
                last_total_power?: Uint8Array;
                last_validator_powers?: ReturnType<typeof LastValidatorPower.prototype.toObject>[];
                validators?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Validator.prototype.toObject>[];
                delegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Delegation.prototype.toObject>[];
                unbonding_delegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.UnbondingDelegation.prototype.toObject>[];
                redelegations?: ReturnType<typeof dependency_2.cosmos.staking.v1beta1.Redelegation.prototype.toObject>[];
                exported?: boolean;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.last_total_power != null) {
                data.last_total_power = this.last_total_power;
            }
            if (this.last_validator_powers != null) {
                data.last_validator_powers = this.last_validator_powers.map((item: LastValidatorPower) => item.toObject());
            }
            if (this.validators != null) {
                data.validators = this.validators.map((item: dependency_2.cosmos.staking.v1beta1.Validator) => item.toObject());
            }
            if (this.delegations != null) {
                data.delegations = this.delegations.map((item: dependency_2.cosmos.staking.v1beta1.Delegation) => item.toObject());
            }
            if (this.unbonding_delegations != null) {
                data.unbonding_delegations = this.unbonding_delegations.map((item: dependency_2.cosmos.staking.v1beta1.UnbondingDelegation) => item.toObject());
            }
            if (this.redelegations != null) {
                data.redelegations = this.redelegations.map((item: dependency_2.cosmos.staking.v1beta1.Redelegation) => item.toObject());
            }
            if (this.exported != null) {
                data.exported = this.exported;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_params)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.last_total_power.length)
                writer.writeBytes(2, this.last_total_power);
            if (this.last_validator_powers.length)
                writer.writeRepeatedMessage(3, this.last_validator_powers, (item: LastValidatorPower) => item.serialize(writer));
            if (this.validators.length)
                writer.writeRepeatedMessage(4, this.validators, (item: dependency_2.cosmos.staking.v1beta1.Validator) => item.serialize(writer));
            if (this.delegations.length)
                writer.writeRepeatedMessage(5, this.delegations, (item: dependency_2.cosmos.staking.v1beta1.Delegation) => item.serialize(writer));
            if (this.unbonding_delegations.length)
                writer.writeRepeatedMessage(6, this.unbonding_delegations, (item: dependency_2.cosmos.staking.v1beta1.UnbondingDelegation) => item.serialize(writer));
            if (this.redelegations.length)
                writer.writeRepeatedMessage(7, this.redelegations, (item: dependency_2.cosmos.staking.v1beta1.Redelegation) => item.serialize(writer));
            if (this.exported != false)
                writer.writeBool(8, this.exported);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_2.cosmos.staking.v1beta1.Params.deserialize(reader));
                        break;
                    case 2:
                        message.last_total_power = reader.readBytes();
                        break;
                    case 3:
                        reader.readMessage(message.last_validator_powers, () => pb_1.Message.addToRepeatedWrapperField(message, 3, LastValidatorPower.deserialize(reader), LastValidatorPower));
                        break;
                    case 4:
                        reader.readMessage(message.validators, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.cosmos.staking.v1beta1.Validator.deserialize(reader), dependency_2.cosmos.staking.v1beta1.Validator));
                        break;
                    case 5:
                        reader.readMessage(message.delegations, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_2.cosmos.staking.v1beta1.Delegation.deserialize(reader), dependency_2.cosmos.staking.v1beta1.Delegation));
                        break;
                    case 6:
                        reader.readMessage(message.unbonding_delegations, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_2.cosmos.staking.v1beta1.UnbondingDelegation.deserialize(reader), dependency_2.cosmos.staking.v1beta1.UnbondingDelegation));
                        break;
                    case 7:
                        reader.readMessage(message.redelegations, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_2.cosmos.staking.v1beta1.Redelegation.deserialize(reader), dependency_2.cosmos.staking.v1beta1.Redelegation));
                        break;
                    case 8:
                        message.exported = reader.readBool();
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
    export class LastValidatorPower extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            address?: string;
            power?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("power" in data && data.power != undefined) {
                    this.power = data.power;
                }
            }
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get power() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set power(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            address?: string;
            power?: number;
        }): LastValidatorPower {
            const message = new LastValidatorPower({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.power != null) {
                message.power = data.power;
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                power?: number;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.power != null) {
                data.power = this.power;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.address.length)
                writer.writeString(1, this.address);
            if (this.power != 0)
                writer.writeInt64(2, this.power);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LastValidatorPower {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LastValidatorPower();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        message.power = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LastValidatorPower {
            return LastValidatorPower.deserialize(bytes);
        }
    }
}
