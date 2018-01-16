declare type EventType = (...args: any[]) => void;
declare type EventsTableType = {
    [key: string]: EventType[];
};
declare type SubscriberType = (entry: any) => void;
declare function emitter(events: EventsTableType, eventName: string, args?: any[], subscribers?: SubscriberType[]): Promise<void>;
export { EventType, EventsTableType, SubscriberType, emitter as default };
