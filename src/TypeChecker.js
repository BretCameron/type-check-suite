function TypeChecker() {

  const isType = (o, type) => o && Object.prototype.toString.call(o) === `[object ${type}]`;

  /** Checks to see if an object is the arguments object, accessible inside functions that are defined using the functions keyword. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is the arguments object (or false if it isn't). */
  this.isArguments = o => {
    if (this.isFunction(o.callee)) {
      return true;
    } else {
      return false;
    };
  };

  /** Checks to see if an object is an Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an Array (or false if it isn't). */
  this.isArray = o => {
    if (Array.isArray) {
      return Array.isArray(o);
    } else {
      return isType(o, 'Array');
    };
  }

  /** Checks to see if an object is an ArrayBuffer. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an ArrayBuffer (or false if it isn't). */
  this.isArrayBuffer = o => isType(o, 'ArrayBuffer');

  /** Checks to see if an object is an AsyncFunction. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an AsyncFunction (or false if it isn't). */
  this.isAsyncFunction = o => isType(o, 'AsyncFunction');

  /** Checks to see if an object is a BigInt. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a BigInt (or false if it isn't). */
  this.isBigInt = o => isType(o, 'BigInt');

  /** Checks to see if an object is a BigInt64Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a BigInt64Array (or false if it isn't). */
  this.isBigInt64Array = o => isType(o, 'BigInt64Array');

  /** Checks to see if an object is a BigUint64Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a BigUint64Array (or false if it isn't). */
  this.isBigUint64Array = o => isType(o, 'BigUint64Array');

  /** Checks to see if an object is a Boolean. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Boolean (or false if it isn't). */
  this.isBoolean = o => isType(o, 'Boolean');

  /** Checks to see if an object is a class. isClass should only be used in a development environment. In production, use isFunction instead.
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Class (or false if it isn't). */
  this.isClass = o => {
    if (this.isFunction(o) && /^class\b/.test(o.toString())) {
      return true;
    } else {
      return false;
    };
  };

  /** Checks to see if an object is a DataView. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a DataView (or false if it isn't). */
  this.isDataView = o => isType(o, 'DataView');

  /** Checks to see if an object is a Date. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Date (or false if it isn't). */
  this.isDate = o => isType(o, 'Date');

  /** Checks to see if an object is an Error. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an Error (or false if it isn't). */
  this.isError = o => isType(o, 'Error');

  /** Checks to see if an object is a float.
* @function
* @param {*} o - An object
* @returns {Boolean} true if the object is a float (or false if it isn't). */
  this.isFloat = o => this.isNumber(o) && !this.isInteger(o);

  /** Checks to see if an object is a Float32Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Float32Array (or false if it isn't). */
  this.isFloat32Array = o => isType(o, 'Float32Array');

  /** Checks to see if an object is a Float64Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Float64Array (or false if it isn't). */
  this.isFloat64Array = o => isType(o, 'Float64Array');

  /** Checks to see if an object is a Function. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Function (or false if it isn't). */
  this.isFunction = o => isType(o, 'Function');

  /** Checks to see if an object is a Generator. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Generator (or false if it isn't). */
  this.isGenerator = o => isType(o, 'Generator');

  /** Checks to see if an object is a GeneratorFunction. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a GeneratorFunction (or false if it isn't). */
  this.isGeneratorFunction = o => isType(o, 'GeneratorFunction');

  /** Checks to see if an object is globalThis. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is globalThis (or false if it isn't). */
  this.isGlobalThis = o => {
    if (globalThis && o === globalThis) {
      return true;
    } else {
      return false;
    };
  };

  /** Checks to see if an object is infinite (either Infinity or -Infinity). 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is infinite (either Infinity or -Infinity) (or false if it isn't). */
  this.isInfinite = o => this.isNumber(o) && !Number.isFinite(o);

  /** Checks to see if an object is an Int8Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an Int8Array (or false if it isn't). */
  this.isInt8Array = o => isType(o, 'Int8Array');

  /** Checks to see if an object is an Int16Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an Int16Array (or false if it isn't). */
  this.isInt16Array = o => isType(o, 'Int16Array');

  /** Checks to see if an object is an Int32Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an Int32Array (or false if it isn't). */
  this.isInt32Array = o => isType(o, 'Int32Array');

  /** Checks to see if an object is an integer.
* @function
* @param {*} o - An object
* @returns {Boolean} true if the object is an integer (or false if it isn't). */
  this.isInteger = o => {
    return Number.isInteger(o) || typeof o === 'number' &&
      isFinite(o) && Math.floor(o) === o;
  };

  /** Checks to see if an object is an instance of Intl.
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an instance of Intl (or false if it isn't). */
  this.isIntl = o => {
    if (this.isFunction(o.getCanonicalLocales)) {
      return true;
    } else {
      return false;
    };
  };

  /** Checks to see if an object is JSON.
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is JSON (or false if it isn't). */
  this.isJSON = o => {
    try {
      JSON.parse(o);
      return true;
    } catch {
      return false;
    };
  };

  /** Checks to see if an object is a Map. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Map (or false if it isn't). */
  this.isMap = o => isType(o, 'Map');

  /** Checks to see if an object is Math. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is Math (or false if it isn't). */
  this.isMath = o => isType(o, 'Math');

  /** Checks to see if an object is NaN (not a number). 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is NaN (or false if it isn't). */
  this.isNaN = o => Number.isNaN(o);

  /** Checks to see if an object is null. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is null (or false if it isn't). */
  this.isNull = o => o === null;

  /** Checks to see if an object is a Number. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Number (or false if it isn't). */
  this.isNumber = o => isType(o, 'Number');

  /** Checks to see if an object is an Object. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is an Object (or false if it isn't). */
  this.isObject = o => isType(o, 'Object');

  /** Checks to see if an object is a Primitive (a boolean, numbner, string, sumbol or undefined). 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Primitive (or false if it isn't). */
  this.isPrimitive = o => {
    if (
      this.isBoolean(o) ||
      this.isString(o) ||
      this.isNumber(o) ||
      this.isSymbol(o) ||
      this.isUndefined(o)
    ) {
      return true;
    } else {
      return false;
    }
  }
  /** Checks to see if an object is a Promise. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Promise (or false if it isn't). */
  this.isPromise = o => isType(o, 'Promise');

  /** Checks to see if an object is Proxy. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is Proxy (or false if it isn't). */
  this.isProxy = o => {
    if (this.isFunction(o.revocable)) {
      return true;
    } else {
      return false;
    };
  };

  /** Checks to see if an object is Reflect. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is Reflect (or false if it isn't). */
  this.isReflect = o => {
    if (
      this.isFunction(o.apply) &&
      this.isFunction(o.construct) &&
      this.isFunction(o.defineProperty) &&
      this.isFunction(o.deleteProperty) &&
      this.isFunction(o.get) &&
      this.isFunction(o.getOwnPropertyDescriptor) &&
      this.isFunction(o.getPrototypeOf) &&
      this.isFunction(o.has) &&
      this.isFunction(o.isExtensible) &&
      this.isFunction(o.ownKeys) &&
      this.isFunction(o.preventExtensions) &&
      this.isFunction(o.set) &&
      this.isFunction(o.setPrototypeOf)
    ) {
      return true;
    } else {
      return false;
    };
  };

  /** Checks to see if an object is a RegExp. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a RegExp (or false if it isn't). */
  this.isRegExp = o => isType(o, 'RegExp');

  /** Checks to see if an object is a safe float.
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a safe float (or false if it isn't). */
  this.isSafeFloat = o => this.isNumber(o) && !this.isSafeInteger(o);

  /** Checks to see if an object is a safe integer.
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a safe integer (or false if it isn't). */
  this.isSafeInteger = o => {
    if (Number.isSafeInteger) return Number.isSafeInteger(o);
    if (!Number.MAX_SAFE_INTEGER) {
      Number.MAX_SAFE_INTEGER = 9007199254740991;
    };
    return this.isInteger(o) && Math.abs(o) <= Number.MAX_SAFE_INTEGER;
  };

  /** Checks to see if an object is a Set. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Set (or false if it isn't). */
  this.isSet = o => isType(o, 'Set');

  /** Checks to see if an object is a SharedArrayBuffer. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a SharedArrayBuffer (or false if it isn't). */
  this.isSharedArrayBuffer = o => isType(o, 'SharedArrayBuffer');

  /** Checks to see if an object is a String. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a String (or false if it isn't). */
  this.isString = o => isType(o, 'String');

  /** Checks to see if an object is a Symbol. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Symbol (or false if it isn't). */
  this.isSymbol = o => isType(o, 'Symbol');

  /** Checks to see if an object is a Typed Array. 
* @function
* @param {*} o - An object
* @returns {Boolean} true if the object is a Typed Array (or false if it isn't). */
  this.isTypedArray = o => {
    if (this.isArrayBuffer(o.buffer)) {
      return true;
    } else {
      return false;
    };
  };

  /** Checks to see if an object is a Uint8Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Uint8Array (or false if it isn't). */
  this.isUint8Array = o => isType(o, 'Uint8Array');

  /** Checks to see if an object is a Uint8ClampedArray. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Uint8ClampedArray (or false if it isn't). */
  this.isUint8ClampedArray = o => isType(o, 'Uint8ClampedArray');

  /** Checks to see if an object is a Uint16Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Uint16Array (or false if it isn't). */
  this.isUint16Array = o => isType(o, 'Uint16Array');

  /** Checks to see if an object is a Uint32Array. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Uint32Array (or false if it isn't). */
  this.isUint32Array = o => isType(o, 'Uint32Array');

  /** Checks to see if an object is a Undefined. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a Undefined (or false if it isn't). */
  this.isUndefined = o => o === undefined;

  /** Checks to see if an object is a WeakMap. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a WeakMap (or false if it isn't). */
  this.isWeakMap = o => isType(o, 'WeakMap');

  /** Checks to see if an object is a WeakSet. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a WeakSet (or false if it isn't). */
  this.isWeakSet = o => isType(o, 'WeakSet');

  /** Checks to see if an object is a WebAssembly. 
  * @function
  * @param {*} o - An object
  * @returns {Boolean} true if the object is a WebAssembly (or false if it isn't). */
  this.isWebAssembly = o => isType(o, 'WebAssembly');
};

module.exports = TypeChecker;