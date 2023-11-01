import { InjectionToken } from "@angular/core";

export const LocalStorageToken = new InjectionToken('localStorage', {
    providedIn: 'root',
    factory: () => localStorage,
});