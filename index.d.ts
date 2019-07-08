import * as child from 'child_process';
import { Duplex } from "stream";
import { EventEmitter } from "events";
import * as stream from 'stream';

declare namespace AsyncDone {
    type ErrorFirstCallback = (err?:Error) => void;

    interface DoneBase {
        (done: (error?: any) => void): void | Duplex | NodeJS.Process | Promise<never> | any;
    }
    function asyncDone(f:AsyncDone.DoneBase, cb: ErrorFirstCallback) : void;
}

export default AsyncDone.asyncDone;