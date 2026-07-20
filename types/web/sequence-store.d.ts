import type { MemoryMode, MemorySettings } from "./memory-store";
export type SequenceMode = Exclude<MemoryMode, "stopped">;
export interface SequenceStep {
    id: string;
    sourceMemoryId?: string;
    name: string;
    mode: SequenceMode;
    settings: MemorySettings;
    durationMs: number;
}
export type SequenceRepeat = {
    mode: "forever";
} | {
    mode: "count";
    rounds: number;
};
export interface SequenceRecord {
    id: string;
    name: string;
    steps: SequenceStep[];
    repeat: SequenceRepeat;
    createdAt: string;
    updatedAt: string;
}
export type SequenceDraft = Omit<SequenceRecord, "id" | "createdAt" | "updatedAt"> & {
    id?: string;
    createdAt?: string;
};
export interface SequenceExport {
    schema: "milk-sequence-export/v3";
    exportedAt: string;
    sequence: SequenceDraft;
}
export declare function normalizeSequence(value: SequenceDraft, legacyTiming?: boolean): SequenceDraft;
export declare function listSequences(): Promise<SequenceRecord[]>;
export declare function saveSequence(value: SequenceDraft): Promise<SequenceRecord>;
export declare function deleteSequence(id: string): Promise<void>;
export declare function createSequenceExport(value: SequenceDraft): SequenceExport;
export declare function importSequenceFile(contents: string): SequenceDraft;
//# sourceMappingURL=sequence-store.d.ts.map