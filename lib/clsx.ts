type ClsxObject = { [key: string]: boolean };
type ClsxArray = (string | ClsxObject)[];
type ClsxArg = string | boolean | ClsxObject | ClsxArray | undefined;

const clsx = (...args: ClsxArg[]) => {
  let cls = "";

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string") {
      cls = (cls ? cls + " " + args[i] : args[i]) as string;
    } else if (Array.isArray(args[i])) {
      cls = cls
        ? cls + " " + clsx(...(args[i] as ClsxArray))
        : clsx(...(args[i] as ClsxArray));
    } else if (typeof args[i] === "object") {
      const obj = args[i] as ClsxObject;
      for (const key in obj) {
        if (obj[key]) {
          cls = cls ? cls + " " + key : key;
        }
      }
    }
  }

  return cls;
};

export default clsx;
