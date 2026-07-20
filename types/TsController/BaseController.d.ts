export type ConnectionState = "disconnected" | "connecting" | "connected" | "disconnecting";
export interface ControllerLogEntry {
    timestamp: string;
    direction: "TX" | "RX" | "INFO" | "ERROR";
    label: string;
    bytes?: number[];
    detail?: string;
}
export interface ControllerEventMap {
    connection: {
        state: ConnectionState;
        deviceName: string | null;
    };
    log: ControllerLogEntry;
    notification: {
        bytes: number[];
    };
    fault: {
        message: string;
        cause?: unknown;
    };
}
type ControllerEventName = keyof ControllerEventMap;
type ControllerListener<K extends ControllerEventName> = (detail: ControllerEventMap[K]) => void;
export interface ConnectOptions {
    deviceName?: string;
    requestTimeoutMs?: number;
}
export declare abstract class BaseController {
    private readonly demoMode;
    static readonly SERVICE_UUID = "0000fff0-0000-1000-8000-00805f9b34fb";
    static readonly WRITE_UUID = "0000fff2-0000-1000-8000-00805f9b34fb";
    static readonly NOTIFY_UUID = "0000fff1-0000-1000-8000-00805f9b34fb";
    private state;
    private readonly transport;
    private heartbeatTimer;
    private writeQueue;
    private lastWriteAt;
    private readonly listeners;
    private readonly minimumWriteGapMs;
    private readonly heartbeatMs;
    private readonly demoDeviceName;
    constructor(demoMode?: boolean);
    private handleNotification;
    get connectionState(): ConnectionState;
    get connected(): boolean;
    get deviceName(): string | null;
    get isDemoMode(): boolean;
    static isBluetoothSupported(): boolean;
    static isNativeBluetooth(): boolean;
    on<K extends ControllerEventName>(event: K, listener: ControllerListener<K>): () => void;
    connect(options?: ConnectOptions): Promise<void>;
    disconnect(): Promise<void>;
    flushWrites(): Promise<void>;
    protected abstract handleNotify(data: DataView): void;
    protected afterConnect(): Promise<void>;
    protected beforeDisconnect(): Promise<void>;
    protected onConnectionClosed(): void;
    protected onHeartbeatFailure(): void;
    protected sendFrame(id: number, high: number, low: number, label: string): Promise<void>;
    protected sendRaw(data: Uint8Array, label: string): Promise<void>;
    protected emitLog(direction: ControllerLogEntry["direction"], label: string, bytes?: number[], detail?: string): void;
    protected reportFault(message: string, cause?: unknown): void;
    protected delay(milliseconds: number): Promise<void>;
    private emit;
    private setConnectionState;
    private scheduleHeartbeat;
    private stopHeartbeat;
    private cleanupConnection;
    private withTimeout;
}
export {};
//# sourceMappingURL=BaseController.d.ts.map