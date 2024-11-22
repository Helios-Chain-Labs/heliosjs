/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: ibc/core/channel/v1/channel.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as dependency_2 from "./../../client/v1/client";
import * as pb_1 from "google-protobuf";
export namespace ibc.core.channel.v1 {
    export enum State {
        STATE_UNINITIALIZED_UNSPECIFIED = 0,
        STATE_INIT = 1,
        STATE_TRYOPEN = 2,
        STATE_OPEN = 3,
        STATE_CLOSED = 4
    }
    export enum Order {
        ORDER_NONE_UNSPECIFIED = 0,
        ORDER_UNORDERED = 1,
        ORDER_ORDERED = 2
    }
    export class Channel extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            state?: State;
            ordering?: Order;
            counterparty?: Counterparty;
            connection_hops?: string[];
            version?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("state" in data && data.state != undefined) {
                    this.state = data.state;
                }
                if ("ordering" in data && data.ordering != undefined) {
                    this.ordering = data.ordering;
                }
                if ("counterparty" in data && data.counterparty != undefined) {
                    this.counterparty = data.counterparty;
                }
                if ("connection_hops" in data && data.connection_hops != undefined) {
                    this.connection_hops = data.connection_hops;
                }
                if ("version" in data && data.version != undefined) {
                    this.version = data.version;
                }
            }
        }
        get state() {
            return pb_1.Message.getFieldWithDefault(this, 1, State.STATE_UNINITIALIZED_UNSPECIFIED) as State;
        }
        set state(value: State) {
            pb_1.Message.setField(this, 1, value);
        }
        get ordering() {
            return pb_1.Message.getFieldWithDefault(this, 2, Order.ORDER_NONE_UNSPECIFIED) as Order;
        }
        set ordering(value: Order) {
            pb_1.Message.setField(this, 2, value);
        }
        get counterparty() {
            return pb_1.Message.getWrapperField(this, Counterparty, 3) as Counterparty;
        }
        set counterparty(value: Counterparty) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_counterparty() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get connection_hops() {
            return pb_1.Message.getFieldWithDefault(this, 4, []) as string[];
        }
        set connection_hops(value: string[]) {
            pb_1.Message.setField(this, 4, value);
        }
        get version() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set version(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            state?: State;
            ordering?: Order;
            counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
            connection_hops?: string[];
            version?: string;
        }): Channel {
            const message = new Channel({});
            if (data.state != null) {
                message.state = data.state;
            }
            if (data.ordering != null) {
                message.ordering = data.ordering;
            }
            if (data.counterparty != null) {
                message.counterparty = Counterparty.fromObject(data.counterparty);
            }
            if (data.connection_hops != null) {
                message.connection_hops = data.connection_hops;
            }
            if (data.version != null) {
                message.version = data.version;
            }
            return message;
        }
        toObject() {
            const data: {
                state?: State;
                ordering?: Order;
                counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
                connection_hops?: string[];
                version?: string;
            } = {};
            if (this.state != null) {
                data.state = this.state;
            }
            if (this.ordering != null) {
                data.ordering = this.ordering;
            }
            if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
            }
            if (this.connection_hops != null) {
                data.connection_hops = this.connection_hops;
            }
            if (this.version != null) {
                data.version = this.version;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.state != State.STATE_UNINITIALIZED_UNSPECIFIED)
                writer.writeEnum(1, this.state);
            if (this.ordering != Order.ORDER_NONE_UNSPECIFIED)
                writer.writeEnum(2, this.ordering);
            if (this.has_counterparty)
                writer.writeMessage(3, this.counterparty, () => this.counterparty.serialize(writer));
            if (this.connection_hops.length)
                writer.writeRepeatedString(4, this.connection_hops);
            if (this.version.length)
                writer.writeString(5, this.version);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Channel {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Channel();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.state = reader.readEnum();
                        break;
                    case 2:
                        message.ordering = reader.readEnum();
                        break;
                    case 3:
                        reader.readMessage(message.counterparty, () => message.counterparty = Counterparty.deserialize(reader));
                        break;
                    case 4:
                        pb_1.Message.addToRepeatedField(message, 4, reader.readString());
                        break;
                    case 5:
                        message.version = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Channel {
            return Channel.deserialize(bytes);
        }
    }
    export class IdentifiedChannel extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            state?: State;
            ordering?: Order;
            counterparty?: Counterparty;
            connection_hops?: string[];
            version?: string;
            port_id?: string;
            channel_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("state" in data && data.state != undefined) {
                    this.state = data.state;
                }
                if ("ordering" in data && data.ordering != undefined) {
                    this.ordering = data.ordering;
                }
                if ("counterparty" in data && data.counterparty != undefined) {
                    this.counterparty = data.counterparty;
                }
                if ("connection_hops" in data && data.connection_hops != undefined) {
                    this.connection_hops = data.connection_hops;
                }
                if ("version" in data && data.version != undefined) {
                    this.version = data.version;
                }
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
            }
        }
        get state() {
            return pb_1.Message.getFieldWithDefault(this, 1, State.STATE_UNINITIALIZED_UNSPECIFIED) as State;
        }
        set state(value: State) {
            pb_1.Message.setField(this, 1, value);
        }
        get ordering() {
            return pb_1.Message.getFieldWithDefault(this, 2, Order.ORDER_NONE_UNSPECIFIED) as Order;
        }
        set ordering(value: Order) {
            pb_1.Message.setField(this, 2, value);
        }
        get counterparty() {
            return pb_1.Message.getWrapperField(this, Counterparty, 3) as Counterparty;
        }
        set counterparty(value: Counterparty) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_counterparty() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get connection_hops() {
            return pb_1.Message.getFieldWithDefault(this, 4, []) as string[];
        }
        set connection_hops(value: string[]) {
            pb_1.Message.setField(this, 4, value);
        }
        get version() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set version(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        static fromObject(data: {
            state?: State;
            ordering?: Order;
            counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
            connection_hops?: string[];
            version?: string;
            port_id?: string;
            channel_id?: string;
        }): IdentifiedChannel {
            const message = new IdentifiedChannel({});
            if (data.state != null) {
                message.state = data.state;
            }
            if (data.ordering != null) {
                message.ordering = data.ordering;
            }
            if (data.counterparty != null) {
                message.counterparty = Counterparty.fromObject(data.counterparty);
            }
            if (data.connection_hops != null) {
                message.connection_hops = data.connection_hops;
            }
            if (data.version != null) {
                message.version = data.version;
            }
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            return message;
        }
        toObject() {
            const data: {
                state?: State;
                ordering?: Order;
                counterparty?: ReturnType<typeof Counterparty.prototype.toObject>;
                connection_hops?: string[];
                version?: string;
                port_id?: string;
                channel_id?: string;
            } = {};
            if (this.state != null) {
                data.state = this.state;
            }
            if (this.ordering != null) {
                data.ordering = this.ordering;
            }
            if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
            }
            if (this.connection_hops != null) {
                data.connection_hops = this.connection_hops;
            }
            if (this.version != null) {
                data.version = this.version;
            }
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.state != State.STATE_UNINITIALIZED_UNSPECIFIED)
                writer.writeEnum(1, this.state);
            if (this.ordering != Order.ORDER_NONE_UNSPECIFIED)
                writer.writeEnum(2, this.ordering);
            if (this.has_counterparty)
                writer.writeMessage(3, this.counterparty, () => this.counterparty.serialize(writer));
            if (this.connection_hops.length)
                writer.writeRepeatedString(4, this.connection_hops);
            if (this.version.length)
                writer.writeString(5, this.version);
            if (this.port_id.length)
                writer.writeString(6, this.port_id);
            if (this.channel_id.length)
                writer.writeString(7, this.channel_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IdentifiedChannel {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IdentifiedChannel();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.state = reader.readEnum();
                        break;
                    case 2:
                        message.ordering = reader.readEnum();
                        break;
                    case 3:
                        reader.readMessage(message.counterparty, () => message.counterparty = Counterparty.deserialize(reader));
                        break;
                    case 4:
                        pb_1.Message.addToRepeatedField(message, 4, reader.readString());
                        break;
                    case 5:
                        message.version = reader.readString();
                        break;
                    case 6:
                        message.port_id = reader.readString();
                        break;
                    case 7:
                        message.channel_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): IdentifiedChannel {
            return IdentifiedChannel.deserialize(bytes);
        }
    }
    export class Counterparty extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
            }
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
        }): Counterparty {
            const message = new Counterparty({});
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            return message;
        }
        toObject() {
            const data: {
                port_id?: string;
                channel_id?: string;
            } = {};
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.port_id.length)
                writer.writeString(1, this.port_id);
            if (this.channel_id.length)
                writer.writeString(2, this.channel_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Counterparty {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Counterparty();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.port_id = reader.readString();
                        break;
                    case 2:
                        message.channel_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Counterparty {
            return Counterparty.deserialize(bytes);
        }
    }
    export class Packet extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sequence?: number;
            source_port?: string;
            source_channel?: string;
            destination_port?: string;
            destination_channel?: string;
            data?: Uint8Array;
            timeout_height?: dependency_2.ibc.core.client.v1.Height;
            timeout_timestamp?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sequence" in data && data.sequence != undefined) {
                    this.sequence = data.sequence;
                }
                if ("source_port" in data && data.source_port != undefined) {
                    this.source_port = data.source_port;
                }
                if ("source_channel" in data && data.source_channel != undefined) {
                    this.source_channel = data.source_channel;
                }
                if ("destination_port" in data && data.destination_port != undefined) {
                    this.destination_port = data.destination_port;
                }
                if ("destination_channel" in data && data.destination_channel != undefined) {
                    this.destination_channel = data.destination_channel;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("timeout_height" in data && data.timeout_height != undefined) {
                    this.timeout_height = data.timeout_height;
                }
                if ("timeout_timestamp" in data && data.timeout_timestamp != undefined) {
                    this.timeout_timestamp = data.timeout_timestamp;
                }
            }
        }
        get sequence() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set sequence(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get source_port() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set source_port(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get source_channel() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set source_channel(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get destination_port() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set destination_port(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get destination_channel() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set destination_channel(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 6, new Uint8Array(0)) as Uint8Array;
        }
        set data(value: Uint8Array) {
            pb_1.Message.setField(this, 6, value);
        }
        get timeout_height() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 7) as dependency_2.ibc.core.client.v1.Height;
        }
        set timeout_height(value: dependency_2.ibc.core.client.v1.Height) {
            pb_1.Message.setWrapperField(this, 7, value);
        }
        get has_timeout_height() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get timeout_timestamp() {
            return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
        }
        set timeout_timestamp(value: number) {
            pb_1.Message.setField(this, 8, value);
        }
        static fromObject(data: {
            sequence?: number;
            source_port?: string;
            source_channel?: string;
            destination_port?: string;
            destination_channel?: string;
            data?: Uint8Array;
            timeout_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            timeout_timestamp?: number;
        }): Packet {
            const message = new Packet({});
            if (data.sequence != null) {
                message.sequence = data.sequence;
            }
            if (data.source_port != null) {
                message.source_port = data.source_port;
            }
            if (data.source_channel != null) {
                message.source_channel = data.source_channel;
            }
            if (data.destination_port != null) {
                message.destination_port = data.destination_port;
            }
            if (data.destination_channel != null) {
                message.destination_channel = data.destination_channel;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            if (data.timeout_height != null) {
                message.timeout_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.timeout_height);
            }
            if (data.timeout_timestamp != null) {
                message.timeout_timestamp = data.timeout_timestamp;
            }
            return message;
        }
        toObject() {
            const data: {
                sequence?: number;
                source_port?: string;
                source_channel?: string;
                destination_port?: string;
                destination_channel?: string;
                data?: Uint8Array;
                timeout_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
                timeout_timestamp?: number;
            } = {};
            if (this.sequence != null) {
                data.sequence = this.sequence;
            }
            if (this.source_port != null) {
                data.source_port = this.source_port;
            }
            if (this.source_channel != null) {
                data.source_channel = this.source_channel;
            }
            if (this.destination_port != null) {
                data.destination_port = this.destination_port;
            }
            if (this.destination_channel != null) {
                data.destination_channel = this.destination_channel;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            if (this.timeout_height != null) {
                data.timeout_height = this.timeout_height.toObject();
            }
            if (this.timeout_timestamp != null) {
                data.timeout_timestamp = this.timeout_timestamp;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sequence != 0)
                writer.writeUint64(1, this.sequence);
            if (this.source_port.length)
                writer.writeString(2, this.source_port);
            if (this.source_channel.length)
                writer.writeString(3, this.source_channel);
            if (this.destination_port.length)
                writer.writeString(4, this.destination_port);
            if (this.destination_channel.length)
                writer.writeString(5, this.destination_channel);
            if (this.data.length)
                writer.writeBytes(6, this.data);
            if (this.has_timeout_height)
                writer.writeMessage(7, this.timeout_height, () => this.timeout_height.serialize(writer));
            if (this.timeout_timestamp != 0)
                writer.writeUint64(8, this.timeout_timestamp);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Packet {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Packet();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sequence = reader.readUint64();
                        break;
                    case 2:
                        message.source_port = reader.readString();
                        break;
                    case 3:
                        message.source_channel = reader.readString();
                        break;
                    case 4:
                        message.destination_port = reader.readString();
                        break;
                    case 5:
                        message.destination_channel = reader.readString();
                        break;
                    case 6:
                        message.data = reader.readBytes();
                        break;
                    case 7:
                        reader.readMessage(message.timeout_height, () => message.timeout_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                        break;
                    case 8:
                        message.timeout_timestamp = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Packet {
            return Packet.deserialize(bytes);
        }
    }
    export class PacketState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
            data?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
                if ("sequence" in data && data.sequence != undefined) {
                    this.sequence = data.sequence;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get sequence() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set sequence(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0)) as Uint8Array;
        }
        set data(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            sequence?: number;
            data?: Uint8Array;
        }): PacketState {
            const message = new PacketState({});
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            if (data.sequence != null) {
                message.sequence = data.sequence;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        }
        toObject() {
            const data: {
                port_id?: string;
                channel_id?: string;
                sequence?: number;
                data?: Uint8Array;
            } = {};
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            if (this.sequence != null) {
                data.sequence = this.sequence;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.port_id.length)
                writer.writeString(1, this.port_id);
            if (this.channel_id.length)
                writer.writeString(2, this.channel_id);
            if (this.sequence != 0)
                writer.writeUint64(3, this.sequence);
            if (this.data.length)
                writer.writeBytes(4, this.data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PacketState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PacketState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.port_id = reader.readString();
                        break;
                    case 2:
                        message.channel_id = reader.readString();
                        break;
                    case 3:
                        message.sequence = reader.readUint64();
                        break;
                    case 4:
                        message.data = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PacketState {
            return PacketState.deserialize(bytes);
        }
    }
    export class Acknowledgement extends pb_1.Message {
        #one_of_decls: number[][] = [[21, 22]];
        constructor(data?: any[] | ({} & (({
            result?: Uint8Array;
            error?: never;
        } | {
            result?: never;
            error?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("result" in data && data.result != undefined) {
                    this.result = data.result;
                }
                if ("error" in data && data.error != undefined) {
                    this.error = data.error;
                }
            }
        }
        get result() {
            return pb_1.Message.getFieldWithDefault(this, 21, new Uint8Array(0)) as Uint8Array;
        }
        set result(value: Uint8Array) {
            pb_1.Message.setOneofField(this, 21, this.#one_of_decls[0], value);
        }
        get has_result() {
            return pb_1.Message.getField(this, 21) != null;
        }
        get error() {
            return pb_1.Message.getFieldWithDefault(this, 22, "") as string;
        }
        set error(value: string) {
            pb_1.Message.setOneofField(this, 22, this.#one_of_decls[0], value);
        }
        get has_error() {
            return pb_1.Message.getField(this, 22) != null;
        }
        get response() {
            const cases: {
                [index: number]: "none" | "result" | "error";
            } = {
                0: "none",
                21: "result",
                22: "error"
            };
            return cases[pb_1.Message.computeOneofCase(this, [21, 22])];
        }
        static fromObject(data: {
            result?: Uint8Array;
            error?: string;
        }): Acknowledgement {
            const message = new Acknowledgement({});
            if (data.result != null) {
                message.result = data.result;
            }
            if (data.error != null) {
                message.error = data.error;
            }
            return message;
        }
        toObject() {
            const data: {
                result?: Uint8Array;
                error?: string;
            } = {};
            if (this.result != null) {
                data.result = this.result;
            }
            if (this.error != null) {
                data.error = this.error;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_result)
                writer.writeBytes(21, this.result);
            if (this.has_error)
                writer.writeString(22, this.error);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Acknowledgement {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Acknowledgement();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 21:
                        message.result = reader.readBytes();
                        break;
                    case 22:
                        message.error = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Acknowledgement {
            return Acknowledgement.deserialize(bytes);
        }
    }
}
