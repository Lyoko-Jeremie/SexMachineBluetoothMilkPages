export interface NativeUpdateController {
    checkForUpdate(): Promise<NativeUpdateCheckResult>;
}
export type NativeUpdateCheckResult = {
    status: "up-to-date";
} | {
    status: "not-applicable";
} | {
    status: "ready";
    version: string;
    downloaded: boolean;
};
interface NativeUpdaterOptions {
    onCurrentVersion(version: string): void;
    onDownloaded(version: string): void;
    onError(error: unknown): void;
    onRollback(version: string): void;
}
export declare function registerNativeUpdater(options: NativeUpdaterOptions): Promise<NativeUpdateController | null>;
export {};
//# sourceMappingURL=native-updater.d.ts.map