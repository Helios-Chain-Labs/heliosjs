/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: google/api/httpbody.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class HttpBody extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            content_type?: string;
            data?: Uint8Array;
            extensions?: dependency_1.google.protobuf.Any[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("content_type" in data && data.content_type != undefined) {
                    this.content_type = data.content_type;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("extensions" in data && data.extensions != undefined) {
                    this.extensions = data.extensions;
                }
            }
        }
        get content_type() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set content_type(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0)) as Uint8Array;
        }
        set data(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        get extensions() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.google.protobuf.Any, 3) as dependency_1.google.protobuf.Any[];
        }
        set extensions(value: dependency_1.google.protobuf.Any[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            content_type?: string;
            data?: Uint8Array;
            extensions?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
        }): HttpBody {
            const message = new HttpBody({});
            if (data.content_type != null) {
                message.content_type = data.content_type;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            if (data.extensions != null) {
                message.extensions = data.extensions.map(item => dependency_1.google.protobuf.Any.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                content_type?: string;
                data?: Uint8Array;
                extensions?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
            } = {};
            if (this.content_type != null) {
                data.content_type = this.content_type;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            if (this.extensions != null) {
                data.extensions = this.extensions.map((item: dependency_1.google.protobuf.Any) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.content_type.length)
                writer.writeString(1, this.content_type);
            if (this.data.length)
                writer.writeBytes(2, this.data);
            if (this.extensions.length)
                writer.writeRepeatedMessage(3, this.extensions, (item: dependency_1.google.protobuf.Any) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HttpBody {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HttpBody();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.content_type = reader.readString();
                        break;
                    case 2:
                        message.data = reader.readBytes();
                        break;
                    case 3:
                        reader.readMessage(message.extensions, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.google.protobuf.Any.deserialize(reader), dependency_1.google.protobuf.Any));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): HttpBody {
            return HttpBody.deserialize(bytes);
        }
    }
}
