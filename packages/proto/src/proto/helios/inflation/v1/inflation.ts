// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.1
//   protoc               v5.29.1
// source: helios/inflation/v1/inflation.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "helios.inflation.v1";

/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmvos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistribution {
  /**
   * staking_rewards defines the proportion of the minted minted_denom that is
   * to be allocated as staking rewards
   */
  stakingRewards: string;
  /**
   * usage_incentives defines the proportion of the minted minted_denom that is
   * to be allocated to the incentives module address
   */
  usageIncentives: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is to
   * be allocated to the community pool
   */
  communityPool: string;
}

/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculation {
  /** initial value */
  a: string;
  /** reduction factor */
  r: string;
  /** long term inflation */
  c: string;
  /** bonding target */
  bondingTarget: string;
  /** max variance */
  maxVariance: string;
}

function createBaseInflationDistribution(): InflationDistribution {
  return { stakingRewards: "", usageIncentives: "", communityPool: "" };
}

export const InflationDistribution: MessageFns<InflationDistribution> = {
  encode(message: InflationDistribution, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(message.stakingRewards);
    }
    if (message.usageIncentives !== "") {
      writer.uint32(18).string(message.usageIncentives);
    }
    if (message.communityPool !== "") {
      writer.uint32(26).string(message.communityPool);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InflationDistribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.stakingRewards = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.usageIncentives = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.communityPool = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InflationDistribution {
    return {
      stakingRewards: isSet(object.stakingRewards) ? globalThis.String(object.stakingRewards) : "",
      usageIncentives: isSet(object.usageIncentives) ? globalThis.String(object.usageIncentives) : "",
      communityPool: isSet(object.communityPool) ? globalThis.String(object.communityPool) : "",
    };
  },

  toJSON(message: InflationDistribution): unknown {
    const obj: any = {};
    if (message.stakingRewards !== "") {
      obj.stakingRewards = message.stakingRewards;
    }
    if (message.usageIncentives !== "") {
      obj.usageIncentives = message.usageIncentives;
    }
    if (message.communityPool !== "") {
      obj.communityPool = message.communityPool;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InflationDistribution>, I>>(base?: I): InflationDistribution {
    return InflationDistribution.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InflationDistribution>, I>>(object: I): InflationDistribution {
    const message = createBaseInflationDistribution();
    message.stakingRewards = object.stakingRewards ?? "";
    message.usageIncentives = object.usageIncentives ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
};

function createBaseExponentialCalculation(): ExponentialCalculation {
  return { a: "", r: "", c: "", bondingTarget: "", maxVariance: "" };
}

export const ExponentialCalculation: MessageFns<ExponentialCalculation> = {
  encode(message: ExponentialCalculation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.a !== "") {
      writer.uint32(10).string(message.a);
    }
    if (message.r !== "") {
      writer.uint32(18).string(message.r);
    }
    if (message.c !== "") {
      writer.uint32(26).string(message.c);
    }
    if (message.bondingTarget !== "") {
      writer.uint32(34).string(message.bondingTarget);
    }
    if (message.maxVariance !== "") {
      writer.uint32(42).string(message.maxVariance);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExponentialCalculation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialCalculation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.a = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.r = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.c = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.bondingTarget = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.maxVariance = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExponentialCalculation {
    return {
      a: isSet(object.a) ? globalThis.String(object.a) : "",
      r: isSet(object.r) ? globalThis.String(object.r) : "",
      c: isSet(object.c) ? globalThis.String(object.c) : "",
      bondingTarget: isSet(object.bondingTarget) ? globalThis.String(object.bondingTarget) : "",
      maxVariance: isSet(object.maxVariance) ? globalThis.String(object.maxVariance) : "",
    };
  },

  toJSON(message: ExponentialCalculation): unknown {
    const obj: any = {};
    if (message.a !== "") {
      obj.a = message.a;
    }
    if (message.r !== "") {
      obj.r = message.r;
    }
    if (message.c !== "") {
      obj.c = message.c;
    }
    if (message.bondingTarget !== "") {
      obj.bondingTarget = message.bondingTarget;
    }
    if (message.maxVariance !== "") {
      obj.maxVariance = message.maxVariance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExponentialCalculation>, I>>(base?: I): ExponentialCalculation {
    return ExponentialCalculation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExponentialCalculation>, I>>(object: I): ExponentialCalculation {
    const message = createBaseExponentialCalculation();
    message.a = object.a ?? "";
    message.r = object.r ?? "";
    message.c = object.c ?? "";
    message.bondingTarget = object.bondingTarget ?? "";
    message.maxVariance = object.maxVariance ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
