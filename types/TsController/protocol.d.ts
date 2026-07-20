export declare function clampInteger(value: number, minimum: number, maximum: number, name: string): number;
export declare function assertInteger(value: number, minimum: number, maximum: number, name: string): void;
export declare function encodeUint16BE(value: number): [number, number];
export declare function encodeInt16BE(value: number): [number, number];
export declare function decodeInt16BE(high: number, low: number): number;
export declare function bytesToHex(bytes: readonly number[]): string;
//# sourceMappingURL=protocol.d.ts.map