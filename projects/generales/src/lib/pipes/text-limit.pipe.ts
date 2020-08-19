import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "textLimit",
})
export class TextLimitPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let limitStr: number = args[0] as any;
    if (limitStr < value.length && limitStr != -1) {
      return value.substring(0, limitStr).concat("...");
    }
    return value;
  }
}
