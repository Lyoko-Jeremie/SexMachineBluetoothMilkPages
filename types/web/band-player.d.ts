import type { MemorySettings } from "./memory-store";
import type { BandPoint, BandRecord, BandTransitionType } from "./band-store";
export type BandPlayerState = "idle" | "starting" | "ramping" | "dwelling" | "jumping" | "paused";
export interface BandFrame {
    mode: BandPoint["mode"];
    settings: MemorySettings;
}
export interface BandPlayerSnapshot {
    state: BandPlayerState;
    bandName: string | null;
    pointIndex: number;
    pointCount: number;
    pointName: string | null;
    targetName: string | null;
    transitionType: BandTransitionType | null;
    round: number;
    totalRounds: number | null;
    remainingMs: number;
    progress: number;
    currentFrame: BandFrame | null;
    targetPoint: BandPoint | null;
}
interface BandPlayerDependencies {
    prepare(): Promise<void>;
    applyFrame(frame: BandFrame, complete: boolean, assertActive: () => void): Promise<void>;
    finished(reason: string, error?: unknown): void;
    changed(): void;
}
export declare class BandPlayer {
    private readonly dependencies;
    private state;
    private band;
    private pointId;
    private pointIndex;
    private round;
    private remainingMs;
    private progress;
    private currentFrame;
    private generation;
    private revision;
    private observedRevision;
    private pauseRequested;
    private skipRequested;
    private interruptWait;
    private resumeWait;
    constructor(dependencies: BandPlayerDependencies);
    get active(): boolean;
    get paused(): boolean;
    get snapshot(): BandPlayerSnapshot;
    start(band: BandRecord): void;
    updateBand(band: BandRecord): void;
    hold(): void;
    resume(): void;
    skip(): void;
    cancel(): boolean;
    private run;
    private runSegment;
    private wait;
    private currentSource;
    private currentTarget;
    private assertActive;
    private setState;
}
export {};
//# sourceMappingURL=band-player.d.ts.map