import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export let isDebugMode = environment.isDebugMode;
const noop = (): any => undefined;

export abstract class Logger {
  info: any;
  warn: any;
  log: any;
  table: any;
  error: any;
}

@Injectable()
export class DcpLoggerService implements Logger {
  get info() {
    if (isDebugMode) {
      return console.info.bind.call(console.info, console, `%c%s`, `color: white; background-color: green; padding: 2px 5px; border-radius: 2px`);
    } else {
      return noop;
    }
  }

  get warn() {
    if (isDebugMode) {
      return console.warn.bind.call(console.warn, console, `%c%s`, 'color: white; background-color: orange; padding: 2px 5px; border-radius: 2px');
    } else {
      return noop;
    }
  }

  get log() {
    if (isDebugMode) {
      return console.log.bind.call(console.log, console, `%c%s`, 'color: white; background-color: blue; padding: 2px 5px; border-radius: 2px');
    } else {
      return noop;
    }
  }

  get table() {
    if (isDebugMode) {
      return console.table.bind.call(console.table, console, `%c%s`, 'color: white; background-color: purple; padding: 2px 5px; border-radius: 2px');
    } else {
      return noop;
    }
  }

  get error() {
    if (isDebugMode) {
      return console.error.bind.call(console.error, console, `%c%s`, 'color: white; background-color: red; padding: 2px 5px; border-radius: 2px');
    } else {
      return noop;
    }
  }

  invokeConsoleMethod(type: string, args?: any): void {
    // tslint:disable-next-line: ban-types
    const logFn: Function = console[type] || console.log || noop;
    logFn.apply(console, [args]);
  }
}

export const DCP_LOGGING_PROVIDERS = { provide: DcpLoggerService, useClass: DcpLoggerService };
