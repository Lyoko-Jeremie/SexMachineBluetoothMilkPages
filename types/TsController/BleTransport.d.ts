export interface BleTransportOptions {
    serviceUuid: string;
    writeUuid: string;
    notifyUuid: string;
    onDisconnect(): void;
    onNotification(value: DataView): void;
}
export interface BleConnectOptions {
    deviceName?: string;
}
/**
 * Cross-platform BLE central transport. BleClient uses native BLE in Capacitor
 * and falls back to Web Bluetooth in supported browsers.
 */
export declare class BleTransport {
    private readonly options;
    private device;
    private initialized;
    private isConnected;
    private disconnecting;
    private connectGeneration;
    constructor(options: BleTransportOptions);
    static isSupported(): boolean;
    static isNative(): boolean;
    get connected(): boolean;
    get deviceName(): string | null;
    connect(options: BleConnectOptions): Promise<void>;
    disconnect(): Promise<void>;
    write(data: Uint8Array): Promise<void>;
    private initialize;
    private readonly handleDisconnect;
    private releaseDevice;
}
//# sourceMappingURL=BleTransport.d.ts.map