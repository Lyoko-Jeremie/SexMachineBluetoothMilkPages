import { BaseController } from "./BaseController";
export declare const MILK_DEVICE_NAME = "\u541B\u7BAB\u65E8\u5584-S";
export declare enum MilkOperation {
    SelectEdgeCycle = 0,
    SelectExtractCycle = 1,
    HoldSuction = 4,
    RunPulse = 5,
    SetPressureY = 9
}
export type MilkPauseFlag = 0 | 1;
export declare const MILK_PAUSE_FLAG: MilkPauseFlag;
export declare const MILK_RUN_FLAG: MilkPauseFlag;
export interface MilkCycleConfig {
    suctionPressure: number;
    blowPower: number;
    suctionMs: number;
    secondPhaseMs: number;
}
export interface MilkStatus {
    raw: number[];
    type: number;
    suctionPressure: number;
    label: "榨取" | "边缘" | "持续只吸" | "脉冲" | "未知";
}
export type MilkPressureChannel = "suction" | "blow";
export type MilkCycleMode = "extract" | "edge";
export type MilkMotionMode = "pulse" | "hold-suction";
export interface MilkSuctionHoldOptions {
    useFixedPressure: boolean;
    fixedPressure: number;
}
export interface MilkPressureState {
    suctionPressure: number;
    blowPower: number;
    activeChannel: MilkPressureChannel | null;
    deflection: number;
    ratePerSecond: number;
    step: number;
}
export declare const MILK_SUCTION_MAX_MS = 999;
export declare class MilkController extends BaseController {
    private cycle;
    private running;
    private paused;
    private cycleMode;
    private motionMode;
    private suctionHoldActive;
    private suctionHoldUsesFixedPressure;
    private suctionHoldRestoreConfig;
    private statusListeners;
    private pressureListeners;
    private pressureState;
    private pressureGeneration;
    private pressureLoop;
    constructor(demoMode?: boolean);
    get isRunning(): boolean;
    get isPaused(): boolean;
    get currentCycleMode(): MilkCycleMode;
    get currentMotionMode(): MilkMotionMode;
    get isSuctionHoldActive(): boolean;
    get isSuctionHoldUsingFixedPressure(): boolean;
    get currentCycle(): Readonly<MilkCycleConfig>;
    get currentPressure(): Readonly<MilkPressureState>;
    onStatus(listener: (status: MilkStatus) => void): () => void;
    onPressureChange(listener: (state: MilkPressureState) => void): () => void;
    configureCycle(config: MilkCycleConfig): Promise<void>;
    configureRunningCycle(config: MilkCycleConfig): Promise<void>;
    applyRunningPreset(config: MilkCycleConfig, mode: MilkCycleMode, assertActive?: () => void): Promise<void>;
    applyRunningWaveFrame(config: MilkCycleConfig, mode: MilkCycleMode, complete: boolean, assertActive?: () => void): Promise<void>;
    beginPressureRamp(channel: MilkPressureChannel, deflection: number): void;
    updatePressureRamp(channel: MilkPressureChannel, deflection: number): void;
    stopPressureRamp(): void;
    reducePressure(channel: MilkPressureChannel, amount: number): Promise<void>;
    zeroPressure(channel: MilkPressureChannel): Promise<void>;
    holdSuction(options?: MilkSuctionHoldOptions): Promise<void>;
    releaseSuctionHold(): Promise<void>;
    setSuctionHoldFixedPressure(pressure: number): Promise<void>;
    resumePulse(): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    resumeWithCycleSync(config: MilkCycleConfig): Promise<void>;
    selectEdgeCycle(): Promise<void>;
    selectExtractCycle(): Promise<void>;
    emergencyStop(reason?: string): Promise<void>;
    setPressureTargets(suctionPressure: number, blowPower: number): Promise<void>;
    sendManualFrame(id: number, high: number, low: number): Promise<void>;
    protected handleNotify(data: DataView): void;
    protected afterConnect(): Promise<void>;
    protected beforeDisconnect(): Promise<void>;
    protected onConnectionClosed(): void;
    protected onHeartbeatFailure(): void;
    private setSuctionDuration;
    private setPhaseDelta;
    private runPressureRamp;
    private getRampProfile;
    private writeChannelPressure;
    private emitDemoStatus;
    private getChannelPressure;
    private setPressureValues;
    private emitPressureState;
    private assertDeflection;
    private requireSuctionHoldReleased;
    private requirePressureAdjustmentAllowed;
    private sendOperation;
    private restoreAfterSuctionHold;
    private selectCycle;
    private synchronizeCycleState;
    private validateCycle;
    private requireReady;
    private requireConnected;
    private requireStarted;
    private requireRunning;
}
//# sourceMappingURL=MilkController.d.ts.map