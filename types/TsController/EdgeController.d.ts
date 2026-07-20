import { BaseController } from "./BaseController";
export interface EdgeConfig {
    pwm: number;
    speed: number;
    stroke: number;
    mode: number;
    value: number;
}
export interface EdgeStatus {
    raw: number[];
    marker: number;
    type: number;
    value: number;
}
export declare class EdgeController extends BaseController {
    private config;
    private paused;
    private runFlag;
    private readonly statusListeners;
    onStatus(listener: (status: EdgeStatus) => void): () => void;
    setIntensity(value: number): Promise<void>;
    setSpeed(value: number): Promise<void>;
    setStroke(value: number): Promise<void>;
    setMode(mode: number, value: number): Promise<void>;
    setPaused(paused: boolean): Promise<void>;
    applyConfig(config: EdgeConfig): Promise<void>;
    setRunFlag(runFlag: 0 | 1): void;
    start(): Promise<void>;
    emergencyStop(reason?: string): Promise<void>;
    protected handleNotify(data: DataView): void;
    protected beforeDisconnect(): Promise<void>;
    protected onConnectionClosed(): void;
    private validateConfig;
    private requireConnected;
}
//# sourceMappingURL=EdgeController.d.ts.map