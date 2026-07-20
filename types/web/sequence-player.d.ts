import type { SequenceRecord, SequenceStep } from "./sequence-store";
export type SequencePlayerState = "idle" | "starting" | "transitioning" | "dwelling" | "holding";
export interface SequencePlayerSnapshot {
    state: SequencePlayerState;
    sequenceName: string | null;
    stepIndex: number;
    stepCount: number;
    stepName: string | null;
    round: number;
    totalRounds: number | null;
    remainingMs: number;
    currentStep: SequenceStep | null;
}
interface SequencePlayerDependencies {
    prepare(): Promise<void>;
    applyStep(step: SequenceStep, assertActive: () => void): Promise<void>;
    finished(reason: string, error?: unknown): void;
    changed(): void;
}
export declare class SequencePlayer {
    private readonly dependencies;
    private state;
    private sequence;
    private stepIndex;
    private round;
    private remainingMs;
    private deadline;
    private generation;
    private holdRequested;
    private rescheduleRequested;
    private timer;
    private interruptWait;
    private resumeWait;
    constructor(dependencies: SequencePlayerDependencies);
    get active(): boolean;
    get holding(): boolean;
    get snapshot(): SequencePlayerSnapshot;
    start(sequence: SequenceRecord): void;
    updateSequence(sequence: SequenceRecord): void;
    hold(): void;
    resume(): void;
    cancel(): boolean;
    private run;
    private dwell;
    private assertActive;
    private clearTimer;
    private setState;
}
export {};
//# sourceMappingURL=sequence-player.d.ts.map