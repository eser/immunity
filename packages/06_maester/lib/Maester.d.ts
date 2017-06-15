export declare class Maester {
    constructor();
    setSeverities(severities: any): void;
    resume(): void;
    pause(): void;
    log(severity: any, message: any): void;
    logAsync(severity: any, message: any): Promise<void>;
}
export default Maester;
