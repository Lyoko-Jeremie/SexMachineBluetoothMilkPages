export type MemoryMode = "stopped" | "extract" | "edge";
export interface MemorySettings {
    suctionPressure: number;
    blowPower: number;
    suctionMs: number;
    secondPhaseMs: number;
}
export interface MemoryRecord {
    id: string;
    name: string;
    mode: MemoryMode;
    settings: MemorySettings;
    createdAt: string;
    updatedAt: string;
    system?: boolean;
}
export interface MemoryExport {
    schema: "milk-memory-export/v3";
    exportedAt: string;
    records: MemoryRecord[];
}
export declare const DEFAULT_MEMORY: MemoryRecord;
export declare function listMemories(): Promise<MemoryRecord[]>;
export declare function saveMemory(record: Omit<MemoryRecord, "id" | "createdAt" | "updatedAt">): Promise<MemoryRecord>;
export declare function deleteMemory(id: string): Promise<void>;
export declare function createMemoryExport(records: MemoryRecord[]): MemoryExport;
export declare function importMemoryFile(contents: string): Promise<number>;
//# sourceMappingURL=memory-store.d.ts.map