import { SerializeFunctionArgs, SerializedFunction } from '@pulumi/pulumi/runtime/closure/serializeClosure';
type SerializeFunction = (func: Function, args?: SerializeFunctionArgs) => Promise<SerializedFunction>;
export default function applySerialzier(): void;
export declare const newSerializer: SerializeFunction;
export {};
