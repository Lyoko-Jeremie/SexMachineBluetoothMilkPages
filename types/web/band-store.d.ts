import type { MemorySettings } from "./memory-store";
export type BandMode = "extract" | "edge";
export type BandTransitionType = "ramp" | "hold" | "jump";
export interface BandTransition {
    type: BandTransitionType;
    durationMs: number;
}
export interface BandPoint {
    id: string;
    sourceMemoryId?: string;
    name: string;
    mode: BandMode;
    settings: MemorySettings;
    toNext: BandTransition;
}
export type BandRepeat = {
    mode: "forever";
} | {
    mode: "count";
    rounds: number;
};
export interface BandRecord {
    id: string;
    name: string;
    points: BandPoint[];
    repeat: BandRepeat;
    createdAt: string;
    updatedAt: string;
}
export type BandDraft = Omit<BandRecord, "id" | "createdAt" | "updatedAt"> & {
    id?: string;
    createdAt?: string;
};
export interface BandExport {
    schema: "milk-band-export/v1";
    exportedAt: string;
    band: BandDraft;
}
export declare function normalizeBand(value: BandDraft): BandDraft;
export declare function listBands(): Promise<BandRecord[]>;
export declare function saveBand(value: BandDraft): Promise<BandRecord>;
export declare function deleteBand(id: string): Promise<void>;
export declare function createBandExport(value: BandDraft): BandExport;
export declare function importBandFile(contents: string): BandDraft;
//# sourceMappingURL=band-store.d.ts.map