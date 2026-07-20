import type { PluginListenerHandle } from "@capacitor/core";
export declare function isNativeBackgroundModeAvailable(): boolean;
export declare function startNativeBackgroundMode(): Promise<void>;
export declare function stopNativeBackgroundMode(): Promise<void>;
export declare function nativeBackgroundModeIsRunning(): Promise<boolean>;
export declare function onNativeTaskRemoved(listener: () => void): Promise<PluginListenerHandle | null>;
//# sourceMappingURL=native-background.d.ts.map