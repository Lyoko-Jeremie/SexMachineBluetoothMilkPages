export interface PwaUpdateController {
    applyUpdate(): boolean;
    checkForUpdate(): Promise<void>;
}
interface RegisterPwaOptions {
    canReload(): boolean;
    onUpdateDeferred(): void;
}
export declare function registerPwa(options: RegisterPwaOptions): Promise<PwaUpdateController | null>;
export {};
//# sourceMappingURL=pwa.d.ts.map