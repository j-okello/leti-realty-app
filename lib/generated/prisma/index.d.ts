
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ContactForm
 * 
 */
export type ContactForm = $Result.DefaultSelection<Prisma.$ContactFormPayload>
/**
 * Model PhoneNumber
 * 
 */
export type PhoneNumber = $Result.DefaultSelection<Prisma.$PhoneNumberPayload>
/**
 * Model PropertySaleRequest
 * 
 */
export type PropertySaleRequest = $Result.DefaultSelection<Prisma.$PropertySaleRequestPayload>
/**
 * Model SaleRequestFormPhone
 * 
 */
export type SaleRequestFormPhone = $Result.DefaultSelection<Prisma.$SaleRequestFormPhonePayload>
/**
 * Model BookingForm
 * 
 */
export type BookingForm = $Result.DefaultSelection<Prisma.$BookingFormPayload>
/**
 * Model BookingFormPhone
 * 
 */
export type BookingFormPhone = $Result.DefaultSelection<Prisma.$BookingFormPhonePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model NotIncludedItem
 * 
 */
export type NotIncludedItem = $Result.DefaultSelection<Prisma.$NotIncludedItemPayload>
/**
 * Model Visitor
 * 
 */
export type Visitor = $Result.DefaultSelection<Prisma.$VisitorPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  RENT: 'RENT',
  SALE: 'SALE'
};

export type Category = (typeof Category)[keyof typeof Category]


export const ReasonForSelling: {
  INVESTMENT_SALE: 'INVESTMENT_SALE',
  UPGRADING: 'UPGRADING',
  RELOCATION: 'RELOCATION',
  DOWNSIZING: 'DOWNSIZING',
  OTHER: 'OTHER'
};

export type ReasonForSelling = (typeof ReasonForSelling)[keyof typeof ReasonForSelling]


export const Timeline: {
  ASAP: 'ASAP',
  ONE_TO_THREE_MONTHS: 'ONE_TO_THREE_MONTHS',
  THREE_TO_SIX_MONTHS: 'THREE_TO_SIX_MONTHS',
  FLEXIBLE: 'FLEXIBLE'
};

export type Timeline = (typeof Timeline)[keyof typeof Timeline]


export const PropertyType: {
  APARTMENT: 'APARTMENT',
  BUNGALOW: 'BUNGALOW',
  MAISONETTE: 'MAISONETTE',
  STUDIO_APARTMENT: 'STUDIO_APARTMENT',
  SERVICED_APARTMENT: 'SERVICED_APARTMENT',
  PENTHOUSE: 'PENTHOUSE',
  TOWNHOUSE: 'TOWNHOUSE',
  VILLA: 'VILLA',
  MANSION: 'MANSION',
  DUPLEX: 'DUPLEX',
  SINGLE_FAMILY_HOME: 'SINGLE_FAMILY_HOME',
  MULTI_FAMILY_HOME: 'MULTI_FAMILY_HOME',
  OTHER: 'OTHER'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const UserRole: {
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type ReasonForSelling = $Enums.ReasonForSelling

export const ReasonForSelling: typeof $Enums.ReasonForSelling

export type Timeline = $Enums.Timeline

export const Timeline: typeof $Enums.Timeline

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ContactForms
 * const contactForms = await prisma.contactForm.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ContactForms
   * const contactForms = await prisma.contactForm.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contactForm`: Exposes CRUD operations for the **ContactForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactForms
    * const contactForms = await prisma.contactForm.findMany()
    * ```
    */
  get contactForm(): Prisma.ContactFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phoneNumber`: Exposes CRUD operations for the **PhoneNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneNumbers
    * const phoneNumbers = await prisma.phoneNumber.findMany()
    * ```
    */
  get phoneNumber(): Prisma.PhoneNumberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertySaleRequest`: Exposes CRUD operations for the **PropertySaleRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertySaleRequests
    * const propertySaleRequests = await prisma.propertySaleRequest.findMany()
    * ```
    */
  get propertySaleRequest(): Prisma.PropertySaleRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleRequestFormPhone`: Exposes CRUD operations for the **SaleRequestFormPhone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleRequestFormPhones
    * const saleRequestFormPhones = await prisma.saleRequestFormPhone.findMany()
    * ```
    */
  get saleRequestFormPhone(): Prisma.SaleRequestFormPhoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingForm`: Exposes CRUD operations for the **BookingForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingForms
    * const bookingForms = await prisma.bookingForm.findMany()
    * ```
    */
  get bookingForm(): Prisma.BookingFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingFormPhone`: Exposes CRUD operations for the **BookingFormPhone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingFormPhones
    * const bookingFormPhones = await prisma.bookingFormPhone.findMany()
    * ```
    */
  get bookingFormPhone(): Prisma.BookingFormPhoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notIncludedItem`: Exposes CRUD operations for the **NotIncludedItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotIncludedItems
    * const notIncludedItems = await prisma.notIncludedItem.findMany()
    * ```
    */
  get notIncludedItem(): Prisma.NotIncludedItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ContactForm: 'ContactForm',
    PhoneNumber: 'PhoneNumber',
    PropertySaleRequest: 'PropertySaleRequest',
    SaleRequestFormPhone: 'SaleRequestFormPhone',
    BookingForm: 'BookingForm',
    BookingFormPhone: 'BookingFormPhone',
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    Amenity: 'Amenity',
    NotIncludedItem: 'NotIncludedItem',
    Visitor: 'Visitor',
    User: 'User',
    Account: 'Account',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contactForm" | "phoneNumber" | "propertySaleRequest" | "saleRequestFormPhone" | "bookingForm" | "bookingFormPhone" | "property" | "propertyImage" | "amenity" | "notIncludedItem" | "visitor" | "user" | "account" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ContactForm: {
        payload: Prisma.$ContactFormPayload<ExtArgs>
        fields: Prisma.ContactFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>
          }
          findFirst: {
            args: Prisma.ContactFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>
          }
          findMany: {
            args: Prisma.ContactFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>[]
          }
          create: {
            args: Prisma.ContactFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>
          }
          createMany: {
            args: Prisma.ContactFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>[]
          }
          delete: {
            args: Prisma.ContactFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>
          }
          update: {
            args: Prisma.ContactFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>
          }
          deleteMany: {
            args: Prisma.ContactFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>[]
          }
          upsert: {
            args: Prisma.ContactFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFormPayload>
          }
          aggregate: {
            args: Prisma.ContactFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactForm>
          }
          groupBy: {
            args: Prisma.ContactFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactFormCountArgs<ExtArgs>
            result: $Utils.Optional<ContactFormCountAggregateOutputType> | number
          }
        }
      }
      PhoneNumber: {
        payload: Prisma.$PhoneNumberPayload<ExtArgs>
        fields: Prisma.PhoneNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneNumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneNumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          findFirst: {
            args: Prisma.PhoneNumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneNumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          findMany: {
            args: Prisma.PhoneNumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>[]
          }
          create: {
            args: Prisma.PhoneNumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          createMany: {
            args: Prisma.PhoneNumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneNumberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>[]
          }
          delete: {
            args: Prisma.PhoneNumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          update: {
            args: Prisma.PhoneNumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          deleteMany: {
            args: Prisma.PhoneNumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneNumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneNumberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>[]
          }
          upsert: {
            args: Prisma.PhoneNumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneNumberPayload>
          }
          aggregate: {
            args: Prisma.PhoneNumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneNumber>
          }
          groupBy: {
            args: Prisma.PhoneNumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneNumberCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneNumberCountAggregateOutputType> | number
          }
        }
      }
      PropertySaleRequest: {
        payload: Prisma.$PropertySaleRequestPayload<ExtArgs>
        fields: Prisma.PropertySaleRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertySaleRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertySaleRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>
          }
          findFirst: {
            args: Prisma.PropertySaleRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertySaleRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>
          }
          findMany: {
            args: Prisma.PropertySaleRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>[]
          }
          create: {
            args: Prisma.PropertySaleRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>
          }
          createMany: {
            args: Prisma.PropertySaleRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertySaleRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>[]
          }
          delete: {
            args: Prisma.PropertySaleRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>
          }
          update: {
            args: Prisma.PropertySaleRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>
          }
          deleteMany: {
            args: Prisma.PropertySaleRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertySaleRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertySaleRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>[]
          }
          upsert: {
            args: Prisma.PropertySaleRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySaleRequestPayload>
          }
          aggregate: {
            args: Prisma.PropertySaleRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertySaleRequest>
          }
          groupBy: {
            args: Prisma.PropertySaleRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertySaleRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertySaleRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PropertySaleRequestCountAggregateOutputType> | number
          }
        }
      }
      SaleRequestFormPhone: {
        payload: Prisma.$SaleRequestFormPhonePayload<ExtArgs>
        fields: Prisma.SaleRequestFormPhoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleRequestFormPhoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleRequestFormPhoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>
          }
          findFirst: {
            args: Prisma.SaleRequestFormPhoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleRequestFormPhoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>
          }
          findMany: {
            args: Prisma.SaleRequestFormPhoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>[]
          }
          create: {
            args: Prisma.SaleRequestFormPhoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>
          }
          createMany: {
            args: Prisma.SaleRequestFormPhoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleRequestFormPhoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>[]
          }
          delete: {
            args: Prisma.SaleRequestFormPhoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>
          }
          update: {
            args: Prisma.SaleRequestFormPhoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>
          }
          deleteMany: {
            args: Prisma.SaleRequestFormPhoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleRequestFormPhoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleRequestFormPhoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>[]
          }
          upsert: {
            args: Prisma.SaleRequestFormPhoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleRequestFormPhonePayload>
          }
          aggregate: {
            args: Prisma.SaleRequestFormPhoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleRequestFormPhone>
          }
          groupBy: {
            args: Prisma.SaleRequestFormPhoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleRequestFormPhoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleRequestFormPhoneCountArgs<ExtArgs>
            result: $Utils.Optional<SaleRequestFormPhoneCountAggregateOutputType> | number
          }
        }
      }
      BookingForm: {
        payload: Prisma.$BookingFormPayload<ExtArgs>
        fields: Prisma.BookingFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>
          }
          findFirst: {
            args: Prisma.BookingFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>
          }
          findMany: {
            args: Prisma.BookingFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>[]
          }
          create: {
            args: Prisma.BookingFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>
          }
          createMany: {
            args: Prisma.BookingFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>[]
          }
          delete: {
            args: Prisma.BookingFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>
          }
          update: {
            args: Prisma.BookingFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>
          }
          deleteMany: {
            args: Prisma.BookingFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>[]
          }
          upsert: {
            args: Prisma.BookingFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPayload>
          }
          aggregate: {
            args: Prisma.BookingFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingForm>
          }
          groupBy: {
            args: Prisma.BookingFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingFormCountArgs<ExtArgs>
            result: $Utils.Optional<BookingFormCountAggregateOutputType> | number
          }
        }
      }
      BookingFormPhone: {
        payload: Prisma.$BookingFormPhonePayload<ExtArgs>
        fields: Prisma.BookingFormPhoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFormPhoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFormPhoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>
          }
          findFirst: {
            args: Prisma.BookingFormPhoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFormPhoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>
          }
          findMany: {
            args: Prisma.BookingFormPhoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>[]
          }
          create: {
            args: Prisma.BookingFormPhoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>
          }
          createMany: {
            args: Prisma.BookingFormPhoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingFormPhoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>[]
          }
          delete: {
            args: Prisma.BookingFormPhoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>
          }
          update: {
            args: Prisma.BookingFormPhoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>
          }
          deleteMany: {
            args: Prisma.BookingFormPhoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingFormPhoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingFormPhoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>[]
          }
          upsert: {
            args: Prisma.BookingFormPhoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingFormPhonePayload>
          }
          aggregate: {
            args: Prisma.BookingFormPhoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingFormPhone>
          }
          groupBy: {
            args: Prisma.BookingFormPhoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingFormPhoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingFormPhoneCountArgs<ExtArgs>
            result: $Utils.Optional<BookingFormPhoneCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      NotIncludedItem: {
        payload: Prisma.$NotIncludedItemPayload<ExtArgs>
        fields: Prisma.NotIncludedItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotIncludedItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotIncludedItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>
          }
          findFirst: {
            args: Prisma.NotIncludedItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotIncludedItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>
          }
          findMany: {
            args: Prisma.NotIncludedItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>[]
          }
          create: {
            args: Prisma.NotIncludedItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>
          }
          createMany: {
            args: Prisma.NotIncludedItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotIncludedItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>[]
          }
          delete: {
            args: Prisma.NotIncludedItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>
          }
          update: {
            args: Prisma.NotIncludedItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>
          }
          deleteMany: {
            args: Prisma.NotIncludedItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotIncludedItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotIncludedItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>[]
          }
          upsert: {
            args: Prisma.NotIncludedItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotIncludedItemPayload>
          }
          aggregate: {
            args: Prisma.NotIncludedItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotIncludedItem>
          }
          groupBy: {
            args: Prisma.NotIncludedItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotIncludedItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotIncludedItemCountArgs<ExtArgs>
            result: $Utils.Optional<NotIncludedItemCountAggregateOutputType> | number
          }
        }
      }
      Visitor: {
        payload: Prisma.$VisitorPayload<ExtArgs>
        fields: Prisma.VisitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findFirst: {
            args: Prisma.VisitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findMany: {
            args: Prisma.VisitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          create: {
            args: Prisma.VisitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          createMany: {
            args: Prisma.VisitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          delete: {
            args: Prisma.VisitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          update: {
            args: Prisma.VisitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          deleteMany: {
            args: Prisma.VisitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          upsert: {
            args: Prisma.VisitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.VisitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contactForm?: ContactFormOmit
    phoneNumber?: PhoneNumberOmit
    propertySaleRequest?: PropertySaleRequestOmit
    saleRequestFormPhone?: SaleRequestFormPhoneOmit
    bookingForm?: BookingFormOmit
    bookingFormPhone?: BookingFormPhoneOmit
    property?: PropertyOmit
    propertyImage?: PropertyImageOmit
    amenity?: AmenityOmit
    notIncludedItem?: NotIncludedItemOmit
    visitor?: VisitorOmit
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    images: number
    amenities: number
    notIncluded: number
    visitors: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | PropertyCountOutputTypeCountImagesArgs
    amenities?: boolean | PropertyCountOutputTypeCountAmenitiesArgs
    notIncluded?: boolean | PropertyCountOutputTypeCountNotIncludedArgs
    visitors?: boolean | PropertyCountOutputTypeCountVisitorsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountNotIncludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotIncludedItemWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountVisitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    properties: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ContactForm
   */

  export type AggregateContactForm = {
    _count: ContactFormCountAggregateOutputType | null
    _min: ContactFormMinAggregateOutputType | null
    _max: ContactFormMaxAggregateOutputType | null
  }

  export type ContactFormMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
    agreeToPolicy: boolean | null
    phoneId: string | null
  }

  export type ContactFormMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
    agreeToPolicy: boolean | null
    phoneId: string | null
  }

  export type ContactFormCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    firstName: number
    lastName: number
    email: number
    message: number
    agreeToPolicy: number
    phoneId: number
    _all: number
  }


  export type ContactFormMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    agreeToPolicy?: true
    phoneId?: true
  }

  export type ContactFormMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    agreeToPolicy?: true
    phoneId?: true
  }

  export type ContactFormCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    agreeToPolicy?: true
    phoneId?: true
    _all?: true
  }

  export type ContactFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactForm to aggregate.
     */
    where?: ContactFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactForms to fetch.
     */
    orderBy?: ContactFormOrderByWithRelationInput | ContactFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactForms
    **/
    _count?: true | ContactFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactFormMaxAggregateInputType
  }

  export type GetContactFormAggregateType<T extends ContactFormAggregateArgs> = {
        [P in keyof T & keyof AggregateContactForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactForm[P]>
      : GetScalarType<T[P], AggregateContactForm[P]>
  }




  export type ContactFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactFormWhereInput
    orderBy?: ContactFormOrderByWithAggregationInput | ContactFormOrderByWithAggregationInput[]
    by: ContactFormScalarFieldEnum[] | ContactFormScalarFieldEnum
    having?: ContactFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactFormCountAggregateInputType | true
    _min?: ContactFormMinAggregateInputType
    _max?: ContactFormMaxAggregateInputType
  }

  export type ContactFormGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    email: string
    message: string
    agreeToPolicy: boolean
    phoneId: string | null
    _count: ContactFormCountAggregateOutputType | null
    _min: ContactFormMinAggregateOutputType | null
    _max: ContactFormMaxAggregateOutputType | null
  }

  type GetContactFormGroupByPayload<T extends ContactFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactFormGroupByOutputType[P]>
            : GetScalarType<T[P], ContactFormGroupByOutputType[P]>
        }
      >
    >


  export type ContactFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    agreeToPolicy?: boolean
    phoneId?: boolean
    phone?: boolean | ContactForm$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["contactForm"]>

  export type ContactFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    agreeToPolicy?: boolean
    phoneId?: boolean
    phone?: boolean | ContactForm$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["contactForm"]>

  export type ContactFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    agreeToPolicy?: boolean
    phoneId?: boolean
    phone?: boolean | ContactForm$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["contactForm"]>

  export type ContactFormSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    agreeToPolicy?: boolean
    phoneId?: boolean
  }

  export type ContactFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "firstName" | "lastName" | "email" | "message" | "agreeToPolicy" | "phoneId", ExtArgs["result"]["contactForm"]>
  export type ContactFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | ContactForm$phoneArgs<ExtArgs>
  }
  export type ContactFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | ContactForm$phoneArgs<ExtArgs>
  }
  export type ContactFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | ContactForm$phoneArgs<ExtArgs>
  }

  export type $ContactFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactForm"
    objects: {
      phone: Prisma.$PhoneNumberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      firstName: string
      lastName: string
      email: string
      message: string
      agreeToPolicy: boolean
      phoneId: string | null
    }, ExtArgs["result"]["contactForm"]>
    composites: {}
  }

  type ContactFormGetPayload<S extends boolean | null | undefined | ContactFormDefaultArgs> = $Result.GetResult<Prisma.$ContactFormPayload, S>

  type ContactFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactFormCountAggregateInputType | true
    }

  export interface ContactFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactForm'], meta: { name: 'ContactForm' } }
    /**
     * Find zero or one ContactForm that matches the filter.
     * @param {ContactFormFindUniqueArgs} args - Arguments to find a ContactForm
     * @example
     * // Get one ContactForm
     * const contactForm = await prisma.contactForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFormFindUniqueArgs>(args: SelectSubset<T, ContactFormFindUniqueArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFormFindUniqueOrThrowArgs} args - Arguments to find a ContactForm
     * @example
     * // Get one ContactForm
     * const contactForm = await prisma.contactForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFormFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormFindFirstArgs} args - Arguments to find a ContactForm
     * @example
     * // Get one ContactForm
     * const contactForm = await prisma.contactForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFormFindFirstArgs>(args?: SelectSubset<T, ContactFormFindFirstArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormFindFirstOrThrowArgs} args - Arguments to find a ContactForm
     * @example
     * // Get one ContactForm
     * const contactForm = await prisma.contactForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFormFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactForms
     * const contactForms = await prisma.contactForm.findMany()
     * 
     * // Get first 10 ContactForms
     * const contactForms = await prisma.contactForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactFormWithIdOnly = await prisma.contactForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFormFindManyArgs>(args?: SelectSubset<T, ContactFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactForm.
     * @param {ContactFormCreateArgs} args - Arguments to create a ContactForm.
     * @example
     * // Create one ContactForm
     * const ContactForm = await prisma.contactForm.create({
     *   data: {
     *     // ... data to create a ContactForm
     *   }
     * })
     * 
     */
    create<T extends ContactFormCreateArgs>(args: SelectSubset<T, ContactFormCreateArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactForms.
     * @param {ContactFormCreateManyArgs} args - Arguments to create many ContactForms.
     * @example
     * // Create many ContactForms
     * const contactForm = await prisma.contactForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactFormCreateManyArgs>(args?: SelectSubset<T, ContactFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactForms and returns the data saved in the database.
     * @param {ContactFormCreateManyAndReturnArgs} args - Arguments to create many ContactForms.
     * @example
     * // Create many ContactForms
     * const contactForm = await prisma.contactForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactForms and only return the `id`
     * const contactFormWithIdOnly = await prisma.contactForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactFormCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactForm.
     * @param {ContactFormDeleteArgs} args - Arguments to delete one ContactForm.
     * @example
     * // Delete one ContactForm
     * const ContactForm = await prisma.contactForm.delete({
     *   where: {
     *     // ... filter to delete one ContactForm
     *   }
     * })
     * 
     */
    delete<T extends ContactFormDeleteArgs>(args: SelectSubset<T, ContactFormDeleteArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactForm.
     * @param {ContactFormUpdateArgs} args - Arguments to update one ContactForm.
     * @example
     * // Update one ContactForm
     * const contactForm = await prisma.contactForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactFormUpdateArgs>(args: SelectSubset<T, ContactFormUpdateArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactForms.
     * @param {ContactFormDeleteManyArgs} args - Arguments to filter ContactForms to delete.
     * @example
     * // Delete a few ContactForms
     * const { count } = await prisma.contactForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactFormDeleteManyArgs>(args?: SelectSubset<T, ContactFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactForms
     * const contactForm = await prisma.contactForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactFormUpdateManyArgs>(args: SelectSubset<T, ContactFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactForms and returns the data updated in the database.
     * @param {ContactFormUpdateManyAndReturnArgs} args - Arguments to update many ContactForms.
     * @example
     * // Update many ContactForms
     * const contactForm = await prisma.contactForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactForms and only return the `id`
     * const contactFormWithIdOnly = await prisma.contactForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactFormUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactForm.
     * @param {ContactFormUpsertArgs} args - Arguments to update or create a ContactForm.
     * @example
     * // Update or create a ContactForm
     * const contactForm = await prisma.contactForm.upsert({
     *   create: {
     *     // ... data to create a ContactForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactForm we want to update
     *   }
     * })
     */
    upsert<T extends ContactFormUpsertArgs>(args: SelectSubset<T, ContactFormUpsertArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormCountArgs} args - Arguments to filter ContactForms to count.
     * @example
     * // Count the number of ContactForms
     * const count = await prisma.contactForm.count({
     *   where: {
     *     // ... the filter for the ContactForms we want to count
     *   }
     * })
    **/
    count<T extends ContactFormCountArgs>(
      args?: Subset<T, ContactFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactFormAggregateArgs>(args: Subset<T, ContactFormAggregateArgs>): Prisma.PrismaPromise<GetContactFormAggregateType<T>>

    /**
     * Group by ContactForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactFormGroupByArgs['orderBy'] }
        : { orderBy?: ContactFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactForm model
   */
  readonly fields: ContactFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phone<T extends ContactForm$phoneArgs<ExtArgs> = {}>(args?: Subset<T, ContactForm$phoneArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactForm model
   */
  interface ContactFormFieldRefs {
    readonly id: FieldRef<"ContactForm", 'String'>
    readonly createdAt: FieldRef<"ContactForm", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactForm", 'DateTime'>
    readonly firstName: FieldRef<"ContactForm", 'String'>
    readonly lastName: FieldRef<"ContactForm", 'String'>
    readonly email: FieldRef<"ContactForm", 'String'>
    readonly message: FieldRef<"ContactForm", 'String'>
    readonly agreeToPolicy: FieldRef<"ContactForm", 'Boolean'>
    readonly phoneId: FieldRef<"ContactForm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactForm findUnique
   */
  export type ContactFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * Filter, which ContactForm to fetch.
     */
    where: ContactFormWhereUniqueInput
  }

  /**
   * ContactForm findUniqueOrThrow
   */
  export type ContactFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * Filter, which ContactForm to fetch.
     */
    where: ContactFormWhereUniqueInput
  }

  /**
   * ContactForm findFirst
   */
  export type ContactFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * Filter, which ContactForm to fetch.
     */
    where?: ContactFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactForms to fetch.
     */
    orderBy?: ContactFormOrderByWithRelationInput | ContactFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactForms.
     */
    cursor?: ContactFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactForms.
     */
    distinct?: ContactFormScalarFieldEnum | ContactFormScalarFieldEnum[]
  }

  /**
   * ContactForm findFirstOrThrow
   */
  export type ContactFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * Filter, which ContactForm to fetch.
     */
    where?: ContactFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactForms to fetch.
     */
    orderBy?: ContactFormOrderByWithRelationInput | ContactFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactForms.
     */
    cursor?: ContactFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactForms.
     */
    distinct?: ContactFormScalarFieldEnum | ContactFormScalarFieldEnum[]
  }

  /**
   * ContactForm findMany
   */
  export type ContactFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * Filter, which ContactForms to fetch.
     */
    where?: ContactFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactForms to fetch.
     */
    orderBy?: ContactFormOrderByWithRelationInput | ContactFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactForms.
     */
    cursor?: ContactFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactForms.
     */
    skip?: number
    distinct?: ContactFormScalarFieldEnum | ContactFormScalarFieldEnum[]
  }

  /**
   * ContactForm create
   */
  export type ContactFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactForm.
     */
    data: XOR<ContactFormCreateInput, ContactFormUncheckedCreateInput>
  }

  /**
   * ContactForm createMany
   */
  export type ContactFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactForms.
     */
    data: ContactFormCreateManyInput | ContactFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactForm createManyAndReturn
   */
  export type ContactFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * The data used to create many ContactForms.
     */
    data: ContactFormCreateManyInput | ContactFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactForm update
   */
  export type ContactFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactForm.
     */
    data: XOR<ContactFormUpdateInput, ContactFormUncheckedUpdateInput>
    /**
     * Choose, which ContactForm to update.
     */
    where: ContactFormWhereUniqueInput
  }

  /**
   * ContactForm updateMany
   */
  export type ContactFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactForms.
     */
    data: XOR<ContactFormUpdateManyMutationInput, ContactFormUncheckedUpdateManyInput>
    /**
     * Filter which ContactForms to update
     */
    where?: ContactFormWhereInput
    /**
     * Limit how many ContactForms to update.
     */
    limit?: number
  }

  /**
   * ContactForm updateManyAndReturn
   */
  export type ContactFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * The data used to update ContactForms.
     */
    data: XOR<ContactFormUpdateManyMutationInput, ContactFormUncheckedUpdateManyInput>
    /**
     * Filter which ContactForms to update
     */
    where?: ContactFormWhereInput
    /**
     * Limit how many ContactForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactForm upsert
   */
  export type ContactFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactForm to update in case it exists.
     */
    where: ContactFormWhereUniqueInput
    /**
     * In case the ContactForm found by the `where` argument doesn't exist, create a new ContactForm with this data.
     */
    create: XOR<ContactFormCreateInput, ContactFormUncheckedCreateInput>
    /**
     * In case the ContactForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactFormUpdateInput, ContactFormUncheckedUpdateInput>
  }

  /**
   * ContactForm delete
   */
  export type ContactFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    /**
     * Filter which ContactForm to delete.
     */
    where: ContactFormWhereUniqueInput
  }

  /**
   * ContactForm deleteMany
   */
  export type ContactFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactForms to delete
     */
    where?: ContactFormWhereInput
    /**
     * Limit how many ContactForms to delete.
     */
    limit?: number
  }

  /**
   * ContactForm.phone
   */
  export type ContactForm$phoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    where?: PhoneNumberWhereInput
  }

  /**
   * ContactForm without action
   */
  export type ContactFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
  }


  /**
   * Model PhoneNumber
   */

  export type AggregatePhoneNumber = {
    _count: PhoneNumberCountAggregateOutputType | null
    _min: PhoneNumberMinAggregateOutputType | null
    _max: PhoneNumberMaxAggregateOutputType | null
  }

  export type PhoneNumberMinAggregateOutputType = {
    id: string | null
    code: string | null
    phoneCode: string | null
    number: string | null
    fullNumber: string | null
  }

  export type PhoneNumberMaxAggregateOutputType = {
    id: string | null
    code: string | null
    phoneCode: string | null
    number: string | null
    fullNumber: string | null
  }

  export type PhoneNumberCountAggregateOutputType = {
    id: number
    code: number
    phoneCode: number
    number: number
    fullNumber: number
    _all: number
  }


  export type PhoneNumberMinAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
  }

  export type PhoneNumberMaxAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
  }

  export type PhoneNumberCountAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
    _all?: true
  }

  export type PhoneNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneNumber to aggregate.
     */
    where?: PhoneNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneNumbers
    **/
    _count?: true | PhoneNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneNumberMaxAggregateInputType
  }

  export type GetPhoneNumberAggregateType<T extends PhoneNumberAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneNumber[P]>
      : GetScalarType<T[P], AggregatePhoneNumber[P]>
  }




  export type PhoneNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneNumberWhereInput
    orderBy?: PhoneNumberOrderByWithAggregationInput | PhoneNumberOrderByWithAggregationInput[]
    by: PhoneNumberScalarFieldEnum[] | PhoneNumberScalarFieldEnum
    having?: PhoneNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneNumberCountAggregateInputType | true
    _min?: PhoneNumberMinAggregateInputType
    _max?: PhoneNumberMaxAggregateInputType
  }

  export type PhoneNumberGroupByOutputType = {
    id: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    _count: PhoneNumberCountAggregateOutputType | null
    _min: PhoneNumberMinAggregateOutputType | null
    _max: PhoneNumberMaxAggregateOutputType | null
  }

  type GetPhoneNumberGroupByPayload<T extends PhoneNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneNumberGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneNumberGroupByOutputType[P]>
        }
      >
    >


  export type PhoneNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
    contact?: boolean | PhoneNumber$contactArgs<ExtArgs>
  }, ExtArgs["result"]["phoneNumber"]>

  export type PhoneNumberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }, ExtArgs["result"]["phoneNumber"]>

  export type PhoneNumberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }, ExtArgs["result"]["phoneNumber"]>

  export type PhoneNumberSelectScalar = {
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }

  export type PhoneNumberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "phoneCode" | "number" | "fullNumber", ExtArgs["result"]["phoneNumber"]>
  export type PhoneNumberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | PhoneNumber$contactArgs<ExtArgs>
  }
  export type PhoneNumberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PhoneNumberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PhoneNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneNumber"
    objects: {
      contact: Prisma.$ContactFormPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      phoneCode: string
      number: string
      fullNumber: string
    }, ExtArgs["result"]["phoneNumber"]>
    composites: {}
  }

  type PhoneNumberGetPayload<S extends boolean | null | undefined | PhoneNumberDefaultArgs> = $Result.GetResult<Prisma.$PhoneNumberPayload, S>

  type PhoneNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneNumberCountAggregateInputType | true
    }

  export interface PhoneNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneNumber'], meta: { name: 'PhoneNumber' } }
    /**
     * Find zero or one PhoneNumber that matches the filter.
     * @param {PhoneNumberFindUniqueArgs} args - Arguments to find a PhoneNumber
     * @example
     * // Get one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneNumberFindUniqueArgs>(args: SelectSubset<T, PhoneNumberFindUniqueArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhoneNumber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneNumberFindUniqueOrThrowArgs} args - Arguments to find a PhoneNumber
     * @example
     * // Get one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneNumberFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberFindFirstArgs} args - Arguments to find a PhoneNumber
     * @example
     * // Get one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneNumberFindFirstArgs>(args?: SelectSubset<T, PhoneNumberFindFirstArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberFindFirstOrThrowArgs} args - Arguments to find a PhoneNumber
     * @example
     * // Get one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneNumberFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhoneNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumber.findMany()
     * 
     * // Get first 10 PhoneNumbers
     * const phoneNumbers = await prisma.phoneNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneNumberWithIdOnly = await prisma.phoneNumber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneNumberFindManyArgs>(args?: SelectSubset<T, PhoneNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhoneNumber.
     * @param {PhoneNumberCreateArgs} args - Arguments to create a PhoneNumber.
     * @example
     * // Create one PhoneNumber
     * const PhoneNumber = await prisma.phoneNumber.create({
     *   data: {
     *     // ... data to create a PhoneNumber
     *   }
     * })
     * 
     */
    create<T extends PhoneNumberCreateArgs>(args: SelectSubset<T, PhoneNumberCreateArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhoneNumbers.
     * @param {PhoneNumberCreateManyArgs} args - Arguments to create many PhoneNumbers.
     * @example
     * // Create many PhoneNumbers
     * const phoneNumber = await prisma.phoneNumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneNumberCreateManyArgs>(args?: SelectSubset<T, PhoneNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneNumbers and returns the data saved in the database.
     * @param {PhoneNumberCreateManyAndReturnArgs} args - Arguments to create many PhoneNumbers.
     * @example
     * // Create many PhoneNumbers
     * const phoneNumber = await prisma.phoneNumber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneNumbers and only return the `id`
     * const phoneNumberWithIdOnly = await prisma.phoneNumber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneNumberCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneNumberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhoneNumber.
     * @param {PhoneNumberDeleteArgs} args - Arguments to delete one PhoneNumber.
     * @example
     * // Delete one PhoneNumber
     * const PhoneNumber = await prisma.phoneNumber.delete({
     *   where: {
     *     // ... filter to delete one PhoneNumber
     *   }
     * })
     * 
     */
    delete<T extends PhoneNumberDeleteArgs>(args: SelectSubset<T, PhoneNumberDeleteArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhoneNumber.
     * @param {PhoneNumberUpdateArgs} args - Arguments to update one PhoneNumber.
     * @example
     * // Update one PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneNumberUpdateArgs>(args: SelectSubset<T, PhoneNumberUpdateArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhoneNumbers.
     * @param {PhoneNumberDeleteManyArgs} args - Arguments to filter PhoneNumbers to delete.
     * @example
     * // Delete a few PhoneNumbers
     * const { count } = await prisma.phoneNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneNumberDeleteManyArgs>(args?: SelectSubset<T, PhoneNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneNumbers
     * const phoneNumber = await prisma.phoneNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneNumberUpdateManyArgs>(args: SelectSubset<T, PhoneNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneNumbers and returns the data updated in the database.
     * @param {PhoneNumberUpdateManyAndReturnArgs} args - Arguments to update many PhoneNumbers.
     * @example
     * // Update many PhoneNumbers
     * const phoneNumber = await prisma.phoneNumber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhoneNumbers and only return the `id`
     * const phoneNumberWithIdOnly = await prisma.phoneNumber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhoneNumberUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneNumberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhoneNumber.
     * @param {PhoneNumberUpsertArgs} args - Arguments to update or create a PhoneNumber.
     * @example
     * // Update or create a PhoneNumber
     * const phoneNumber = await prisma.phoneNumber.upsert({
     *   create: {
     *     // ... data to create a PhoneNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneNumber we want to update
     *   }
     * })
     */
    upsert<T extends PhoneNumberUpsertArgs>(args: SelectSubset<T, PhoneNumberUpsertArgs<ExtArgs>>): Prisma__PhoneNumberClient<$Result.GetResult<Prisma.$PhoneNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhoneNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberCountArgs} args - Arguments to filter PhoneNumbers to count.
     * @example
     * // Count the number of PhoneNumbers
     * const count = await prisma.phoneNumber.count({
     *   where: {
     *     // ... the filter for the PhoneNumbers we want to count
     *   }
     * })
    **/
    count<T extends PhoneNumberCountArgs>(
      args?: Subset<T, PhoneNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhoneNumberAggregateArgs>(args: Subset<T, PhoneNumberAggregateArgs>): Prisma.PrismaPromise<GetPhoneNumberAggregateType<T>>

    /**
     * Group by PhoneNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneNumberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhoneNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneNumberGroupByArgs['orderBy'] }
        : { orderBy?: PhoneNumberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhoneNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneNumber model
   */
  readonly fields: PhoneNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends PhoneNumber$contactArgs<ExtArgs> = {}>(args?: Subset<T, PhoneNumber$contactArgs<ExtArgs>>): Prisma__ContactFormClient<$Result.GetResult<Prisma.$ContactFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneNumber model
   */
  interface PhoneNumberFieldRefs {
    readonly id: FieldRef<"PhoneNumber", 'String'>
    readonly code: FieldRef<"PhoneNumber", 'String'>
    readonly phoneCode: FieldRef<"PhoneNumber", 'String'>
    readonly number: FieldRef<"PhoneNumber", 'String'>
    readonly fullNumber: FieldRef<"PhoneNumber", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PhoneNumber findUnique
   */
  export type PhoneNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumber to fetch.
     */
    where: PhoneNumberWhereUniqueInput
  }

  /**
   * PhoneNumber findUniqueOrThrow
   */
  export type PhoneNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumber to fetch.
     */
    where: PhoneNumberWhereUniqueInput
  }

  /**
   * PhoneNumber findFirst
   */
  export type PhoneNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumber to fetch.
     */
    where?: PhoneNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneNumbers.
     */
    cursor?: PhoneNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneNumbers.
     */
    distinct?: PhoneNumberScalarFieldEnum | PhoneNumberScalarFieldEnum[]
  }

  /**
   * PhoneNumber findFirstOrThrow
   */
  export type PhoneNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumber to fetch.
     */
    where?: PhoneNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneNumbers.
     */
    cursor?: PhoneNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneNumbers.
     */
    distinct?: PhoneNumberScalarFieldEnum | PhoneNumberScalarFieldEnum[]
  }

  /**
   * PhoneNumber findMany
   */
  export type PhoneNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter, which PhoneNumbers to fetch.
     */
    where?: PhoneNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneNumbers to fetch.
     */
    orderBy?: PhoneNumberOrderByWithRelationInput | PhoneNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneNumbers.
     */
    cursor?: PhoneNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneNumbers.
     */
    skip?: number
    distinct?: PhoneNumberScalarFieldEnum | PhoneNumberScalarFieldEnum[]
  }

  /**
   * PhoneNumber create
   */
  export type PhoneNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneNumber.
     */
    data: XOR<PhoneNumberCreateInput, PhoneNumberUncheckedCreateInput>
  }

  /**
   * PhoneNumber createMany
   */
  export type PhoneNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneNumbers.
     */
    data: PhoneNumberCreateManyInput | PhoneNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneNumber createManyAndReturn
   */
  export type PhoneNumberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * The data used to create many PhoneNumbers.
     */
    data: PhoneNumberCreateManyInput | PhoneNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneNumber update
   */
  export type PhoneNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneNumber.
     */
    data: XOR<PhoneNumberUpdateInput, PhoneNumberUncheckedUpdateInput>
    /**
     * Choose, which PhoneNumber to update.
     */
    where: PhoneNumberWhereUniqueInput
  }

  /**
   * PhoneNumber updateMany
   */
  export type PhoneNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneNumbers.
     */
    data: XOR<PhoneNumberUpdateManyMutationInput, PhoneNumberUncheckedUpdateManyInput>
    /**
     * Filter which PhoneNumbers to update
     */
    where?: PhoneNumberWhereInput
    /**
     * Limit how many PhoneNumbers to update.
     */
    limit?: number
  }

  /**
   * PhoneNumber updateManyAndReturn
   */
  export type PhoneNumberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * The data used to update PhoneNumbers.
     */
    data: XOR<PhoneNumberUpdateManyMutationInput, PhoneNumberUncheckedUpdateManyInput>
    /**
     * Filter which PhoneNumbers to update
     */
    where?: PhoneNumberWhereInput
    /**
     * Limit how many PhoneNumbers to update.
     */
    limit?: number
  }

  /**
   * PhoneNumber upsert
   */
  export type PhoneNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneNumber to update in case it exists.
     */
    where: PhoneNumberWhereUniqueInput
    /**
     * In case the PhoneNumber found by the `where` argument doesn't exist, create a new PhoneNumber with this data.
     */
    create: XOR<PhoneNumberCreateInput, PhoneNumberUncheckedCreateInput>
    /**
     * In case the PhoneNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneNumberUpdateInput, PhoneNumberUncheckedUpdateInput>
  }

  /**
   * PhoneNumber delete
   */
  export type PhoneNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
    /**
     * Filter which PhoneNumber to delete.
     */
    where: PhoneNumberWhereUniqueInput
  }

  /**
   * PhoneNumber deleteMany
   */
  export type PhoneNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneNumbers to delete
     */
    where?: PhoneNumberWhereInput
    /**
     * Limit how many PhoneNumbers to delete.
     */
    limit?: number
  }

  /**
   * PhoneNumber.contact
   */
  export type PhoneNumber$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForm
     */
    select?: ContactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactForm
     */
    omit?: ContactFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactFormInclude<ExtArgs> | null
    where?: ContactFormWhereInput
  }

  /**
   * PhoneNumber without action
   */
  export type PhoneNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneNumber
     */
    select?: PhoneNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneNumber
     */
    omit?: PhoneNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneNumberInclude<ExtArgs> | null
  }


  /**
   * Model PropertySaleRequest
   */

  export type AggregatePropertySaleRequest = {
    _count: PropertySaleRequestCountAggregateOutputType | null
    _avg: PropertySaleRequestAvgAggregateOutputType | null
    _sum: PropertySaleRequestSumAggregateOutputType | null
    _min: PropertySaleRequestMinAggregateOutputType | null
    _max: PropertySaleRequestMaxAggregateOutputType | null
  }

  export type PropertySaleRequestAvgAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    squareFootage: number | null
  }

  export type PropertySaleRequestSumAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    squareFootage: number | null
  }

  export type PropertySaleRequestMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fullName: string | null
    email: string | null
    propertyAddress: string | null
    propertyType: $Enums.PropertyType | null
    other: string | null
    bedrooms: number | null
    bathrooms: number | null
    squareFootage: number | null
    reasonForSelling: $Enums.ReasonForSelling | null
    timeline: $Enums.Timeline | null
    additionalInfo: string | null
    agreeToPolicy: boolean | null
    phoneId: string | null
  }

  export type PropertySaleRequestMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fullName: string | null
    email: string | null
    propertyAddress: string | null
    propertyType: $Enums.PropertyType | null
    other: string | null
    bedrooms: number | null
    bathrooms: number | null
    squareFootage: number | null
    reasonForSelling: $Enums.ReasonForSelling | null
    timeline: $Enums.Timeline | null
    additionalInfo: string | null
    agreeToPolicy: boolean | null
    phoneId: string | null
  }

  export type PropertySaleRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    fullName: number
    email: number
    propertyAddress: number
    propertyType: number
    other: number
    bedrooms: number
    bathrooms: number
    squareFootage: number
    reasonForSelling: number
    timeline: number
    additionalInfo: number
    agreeToPolicy: number
    phoneId: number
    _all: number
  }


  export type PropertySaleRequestAvgAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    squareFootage?: true
  }

  export type PropertySaleRequestSumAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    squareFootage?: true
  }

  export type PropertySaleRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fullName?: true
    email?: true
    propertyAddress?: true
    propertyType?: true
    other?: true
    bedrooms?: true
    bathrooms?: true
    squareFootage?: true
    reasonForSelling?: true
    timeline?: true
    additionalInfo?: true
    agreeToPolicy?: true
    phoneId?: true
  }

  export type PropertySaleRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fullName?: true
    email?: true
    propertyAddress?: true
    propertyType?: true
    other?: true
    bedrooms?: true
    bathrooms?: true
    squareFootage?: true
    reasonForSelling?: true
    timeline?: true
    additionalInfo?: true
    agreeToPolicy?: true
    phoneId?: true
  }

  export type PropertySaleRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fullName?: true
    email?: true
    propertyAddress?: true
    propertyType?: true
    other?: true
    bedrooms?: true
    bathrooms?: true
    squareFootage?: true
    reasonForSelling?: true
    timeline?: true
    additionalInfo?: true
    agreeToPolicy?: true
    phoneId?: true
    _all?: true
  }

  export type PropertySaleRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertySaleRequest to aggregate.
     */
    where?: PropertySaleRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertySaleRequests to fetch.
     */
    orderBy?: PropertySaleRequestOrderByWithRelationInput | PropertySaleRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertySaleRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertySaleRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertySaleRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertySaleRequests
    **/
    _count?: true | PropertySaleRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertySaleRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySaleRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertySaleRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertySaleRequestMaxAggregateInputType
  }

  export type GetPropertySaleRequestAggregateType<T extends PropertySaleRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertySaleRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertySaleRequest[P]>
      : GetScalarType<T[P], AggregatePropertySaleRequest[P]>
  }




  export type PropertySaleRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertySaleRequestWhereInput
    orderBy?: PropertySaleRequestOrderByWithAggregationInput | PropertySaleRequestOrderByWithAggregationInput[]
    by: PropertySaleRequestScalarFieldEnum[] | PropertySaleRequestScalarFieldEnum
    having?: PropertySaleRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertySaleRequestCountAggregateInputType | true
    _avg?: PropertySaleRequestAvgAggregateInputType
    _sum?: PropertySaleRequestSumAggregateInputType
    _min?: PropertySaleRequestMinAggregateInputType
    _max?: PropertySaleRequestMaxAggregateInputType
  }

  export type PropertySaleRequestGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    fullName: string
    email: string
    propertyAddress: string
    propertyType: $Enums.PropertyType
    other: string | null
    bedrooms: number
    bathrooms: number
    squareFootage: number
    reasonForSelling: $Enums.ReasonForSelling
    timeline: $Enums.Timeline
    additionalInfo: string | null
    agreeToPolicy: boolean
    phoneId: string
    _count: PropertySaleRequestCountAggregateOutputType | null
    _avg: PropertySaleRequestAvgAggregateOutputType | null
    _sum: PropertySaleRequestSumAggregateOutputType | null
    _min: PropertySaleRequestMinAggregateOutputType | null
    _max: PropertySaleRequestMaxAggregateOutputType | null
  }

  type GetPropertySaleRequestGroupByPayload<T extends PropertySaleRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertySaleRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertySaleRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertySaleRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PropertySaleRequestGroupByOutputType[P]>
        }
      >
    >


  export type PropertySaleRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullName?: boolean
    email?: boolean
    propertyAddress?: boolean
    propertyType?: boolean
    other?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFootage?: boolean
    reasonForSelling?: boolean
    timeline?: boolean
    additionalInfo?: boolean
    agreeToPolicy?: boolean
    phoneId?: boolean
    phone?: boolean | PropertySaleRequest$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["propertySaleRequest"]>

  export type PropertySaleRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullName?: boolean
    email?: boolean
    propertyAddress?: boolean
    propertyType?: boolean
    other?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFootage?: boolean
    reasonForSelling?: boolean
    timeline?: boolean
    additionalInfo?: boolean
    agreeToPolicy?: boolean
    phoneId?: boolean
    phone?: boolean | PropertySaleRequest$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["propertySaleRequest"]>

  export type PropertySaleRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullName?: boolean
    email?: boolean
    propertyAddress?: boolean
    propertyType?: boolean
    other?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFootage?: boolean
    reasonForSelling?: boolean
    timeline?: boolean
    additionalInfo?: boolean
    agreeToPolicy?: boolean
    phoneId?: boolean
    phone?: boolean | PropertySaleRequest$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["propertySaleRequest"]>

  export type PropertySaleRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullName?: boolean
    email?: boolean
    propertyAddress?: boolean
    propertyType?: boolean
    other?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFootage?: boolean
    reasonForSelling?: boolean
    timeline?: boolean
    additionalInfo?: boolean
    agreeToPolicy?: boolean
    phoneId?: boolean
  }

  export type PropertySaleRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "fullName" | "email" | "propertyAddress" | "propertyType" | "other" | "bedrooms" | "bathrooms" | "squareFootage" | "reasonForSelling" | "timeline" | "additionalInfo" | "agreeToPolicy" | "phoneId", ExtArgs["result"]["propertySaleRequest"]>
  export type PropertySaleRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | PropertySaleRequest$phoneArgs<ExtArgs>
  }
  export type PropertySaleRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | PropertySaleRequest$phoneArgs<ExtArgs>
  }
  export type PropertySaleRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | PropertySaleRequest$phoneArgs<ExtArgs>
  }

  export type $PropertySaleRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertySaleRequest"
    objects: {
      phone: Prisma.$SaleRequestFormPhonePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      fullName: string
      email: string
      propertyAddress: string
      propertyType: $Enums.PropertyType
      other: string | null
      bedrooms: number
      bathrooms: number
      squareFootage: number
      reasonForSelling: $Enums.ReasonForSelling
      timeline: $Enums.Timeline
      additionalInfo: string | null
      agreeToPolicy: boolean
      phoneId: string
    }, ExtArgs["result"]["propertySaleRequest"]>
    composites: {}
  }

  type PropertySaleRequestGetPayload<S extends boolean | null | undefined | PropertySaleRequestDefaultArgs> = $Result.GetResult<Prisma.$PropertySaleRequestPayload, S>

  type PropertySaleRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertySaleRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertySaleRequestCountAggregateInputType | true
    }

  export interface PropertySaleRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertySaleRequest'], meta: { name: 'PropertySaleRequest' } }
    /**
     * Find zero or one PropertySaleRequest that matches the filter.
     * @param {PropertySaleRequestFindUniqueArgs} args - Arguments to find a PropertySaleRequest
     * @example
     * // Get one PropertySaleRequest
     * const propertySaleRequest = await prisma.propertySaleRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertySaleRequestFindUniqueArgs>(args: SelectSubset<T, PropertySaleRequestFindUniqueArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertySaleRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertySaleRequestFindUniqueOrThrowArgs} args - Arguments to find a PropertySaleRequest
     * @example
     * // Get one PropertySaleRequest
     * const propertySaleRequest = await prisma.propertySaleRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertySaleRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertySaleRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertySaleRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySaleRequestFindFirstArgs} args - Arguments to find a PropertySaleRequest
     * @example
     * // Get one PropertySaleRequest
     * const propertySaleRequest = await prisma.propertySaleRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertySaleRequestFindFirstArgs>(args?: SelectSubset<T, PropertySaleRequestFindFirstArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertySaleRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySaleRequestFindFirstOrThrowArgs} args - Arguments to find a PropertySaleRequest
     * @example
     * // Get one PropertySaleRequest
     * const propertySaleRequest = await prisma.propertySaleRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertySaleRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertySaleRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertySaleRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySaleRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertySaleRequests
     * const propertySaleRequests = await prisma.propertySaleRequest.findMany()
     * 
     * // Get first 10 PropertySaleRequests
     * const propertySaleRequests = await prisma.propertySaleRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertySaleRequestWithIdOnly = await prisma.propertySaleRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertySaleRequestFindManyArgs>(args?: SelectSubset<T, PropertySaleRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertySaleRequest.
     * @param {PropertySaleRequestCreateArgs} args - Arguments to create a PropertySaleRequest.
     * @example
     * // Create one PropertySaleRequest
     * const PropertySaleRequest = await prisma.propertySaleRequest.create({
     *   data: {
     *     // ... data to create a PropertySaleRequest
     *   }
     * })
     * 
     */
    create<T extends PropertySaleRequestCreateArgs>(args: SelectSubset<T, PropertySaleRequestCreateArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertySaleRequests.
     * @param {PropertySaleRequestCreateManyArgs} args - Arguments to create many PropertySaleRequests.
     * @example
     * // Create many PropertySaleRequests
     * const propertySaleRequest = await prisma.propertySaleRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertySaleRequestCreateManyArgs>(args?: SelectSubset<T, PropertySaleRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertySaleRequests and returns the data saved in the database.
     * @param {PropertySaleRequestCreateManyAndReturnArgs} args - Arguments to create many PropertySaleRequests.
     * @example
     * // Create many PropertySaleRequests
     * const propertySaleRequest = await prisma.propertySaleRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertySaleRequests and only return the `id`
     * const propertySaleRequestWithIdOnly = await prisma.propertySaleRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertySaleRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertySaleRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertySaleRequest.
     * @param {PropertySaleRequestDeleteArgs} args - Arguments to delete one PropertySaleRequest.
     * @example
     * // Delete one PropertySaleRequest
     * const PropertySaleRequest = await prisma.propertySaleRequest.delete({
     *   where: {
     *     // ... filter to delete one PropertySaleRequest
     *   }
     * })
     * 
     */
    delete<T extends PropertySaleRequestDeleteArgs>(args: SelectSubset<T, PropertySaleRequestDeleteArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertySaleRequest.
     * @param {PropertySaleRequestUpdateArgs} args - Arguments to update one PropertySaleRequest.
     * @example
     * // Update one PropertySaleRequest
     * const propertySaleRequest = await prisma.propertySaleRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertySaleRequestUpdateArgs>(args: SelectSubset<T, PropertySaleRequestUpdateArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertySaleRequests.
     * @param {PropertySaleRequestDeleteManyArgs} args - Arguments to filter PropertySaleRequests to delete.
     * @example
     * // Delete a few PropertySaleRequests
     * const { count } = await prisma.propertySaleRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertySaleRequestDeleteManyArgs>(args?: SelectSubset<T, PropertySaleRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertySaleRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySaleRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertySaleRequests
     * const propertySaleRequest = await prisma.propertySaleRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertySaleRequestUpdateManyArgs>(args: SelectSubset<T, PropertySaleRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertySaleRequests and returns the data updated in the database.
     * @param {PropertySaleRequestUpdateManyAndReturnArgs} args - Arguments to update many PropertySaleRequests.
     * @example
     * // Update many PropertySaleRequests
     * const propertySaleRequest = await prisma.propertySaleRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertySaleRequests and only return the `id`
     * const propertySaleRequestWithIdOnly = await prisma.propertySaleRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertySaleRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertySaleRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertySaleRequest.
     * @param {PropertySaleRequestUpsertArgs} args - Arguments to update or create a PropertySaleRequest.
     * @example
     * // Update or create a PropertySaleRequest
     * const propertySaleRequest = await prisma.propertySaleRequest.upsert({
     *   create: {
     *     // ... data to create a PropertySaleRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertySaleRequest we want to update
     *   }
     * })
     */
    upsert<T extends PropertySaleRequestUpsertArgs>(args: SelectSubset<T, PropertySaleRequestUpsertArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertySaleRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySaleRequestCountArgs} args - Arguments to filter PropertySaleRequests to count.
     * @example
     * // Count the number of PropertySaleRequests
     * const count = await prisma.propertySaleRequest.count({
     *   where: {
     *     // ... the filter for the PropertySaleRequests we want to count
     *   }
     * })
    **/
    count<T extends PropertySaleRequestCountArgs>(
      args?: Subset<T, PropertySaleRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertySaleRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertySaleRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySaleRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertySaleRequestAggregateArgs>(args: Subset<T, PropertySaleRequestAggregateArgs>): Prisma.PrismaPromise<GetPropertySaleRequestAggregateType<T>>

    /**
     * Group by PropertySaleRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySaleRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertySaleRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertySaleRequestGroupByArgs['orderBy'] }
        : { orderBy?: PropertySaleRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertySaleRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertySaleRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertySaleRequest model
   */
  readonly fields: PropertySaleRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertySaleRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertySaleRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phone<T extends PropertySaleRequest$phoneArgs<ExtArgs> = {}>(args?: Subset<T, PropertySaleRequest$phoneArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertySaleRequest model
   */
  interface PropertySaleRequestFieldRefs {
    readonly id: FieldRef<"PropertySaleRequest", 'String'>
    readonly createdAt: FieldRef<"PropertySaleRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertySaleRequest", 'DateTime'>
    readonly fullName: FieldRef<"PropertySaleRequest", 'String'>
    readonly email: FieldRef<"PropertySaleRequest", 'String'>
    readonly propertyAddress: FieldRef<"PropertySaleRequest", 'String'>
    readonly propertyType: FieldRef<"PropertySaleRequest", 'PropertyType'>
    readonly other: FieldRef<"PropertySaleRequest", 'String'>
    readonly bedrooms: FieldRef<"PropertySaleRequest", 'Int'>
    readonly bathrooms: FieldRef<"PropertySaleRequest", 'Int'>
    readonly squareFootage: FieldRef<"PropertySaleRequest", 'Int'>
    readonly reasonForSelling: FieldRef<"PropertySaleRequest", 'ReasonForSelling'>
    readonly timeline: FieldRef<"PropertySaleRequest", 'Timeline'>
    readonly additionalInfo: FieldRef<"PropertySaleRequest", 'String'>
    readonly agreeToPolicy: FieldRef<"PropertySaleRequest", 'Boolean'>
    readonly phoneId: FieldRef<"PropertySaleRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropertySaleRequest findUnique
   */
  export type PropertySaleRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * Filter, which PropertySaleRequest to fetch.
     */
    where: PropertySaleRequestWhereUniqueInput
  }

  /**
   * PropertySaleRequest findUniqueOrThrow
   */
  export type PropertySaleRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * Filter, which PropertySaleRequest to fetch.
     */
    where: PropertySaleRequestWhereUniqueInput
  }

  /**
   * PropertySaleRequest findFirst
   */
  export type PropertySaleRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * Filter, which PropertySaleRequest to fetch.
     */
    where?: PropertySaleRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertySaleRequests to fetch.
     */
    orderBy?: PropertySaleRequestOrderByWithRelationInput | PropertySaleRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertySaleRequests.
     */
    cursor?: PropertySaleRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertySaleRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertySaleRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertySaleRequests.
     */
    distinct?: PropertySaleRequestScalarFieldEnum | PropertySaleRequestScalarFieldEnum[]
  }

  /**
   * PropertySaleRequest findFirstOrThrow
   */
  export type PropertySaleRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * Filter, which PropertySaleRequest to fetch.
     */
    where?: PropertySaleRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertySaleRequests to fetch.
     */
    orderBy?: PropertySaleRequestOrderByWithRelationInput | PropertySaleRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertySaleRequests.
     */
    cursor?: PropertySaleRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertySaleRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertySaleRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertySaleRequests.
     */
    distinct?: PropertySaleRequestScalarFieldEnum | PropertySaleRequestScalarFieldEnum[]
  }

  /**
   * PropertySaleRequest findMany
   */
  export type PropertySaleRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * Filter, which PropertySaleRequests to fetch.
     */
    where?: PropertySaleRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertySaleRequests to fetch.
     */
    orderBy?: PropertySaleRequestOrderByWithRelationInput | PropertySaleRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertySaleRequests.
     */
    cursor?: PropertySaleRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertySaleRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertySaleRequests.
     */
    skip?: number
    distinct?: PropertySaleRequestScalarFieldEnum | PropertySaleRequestScalarFieldEnum[]
  }

  /**
   * PropertySaleRequest create
   */
  export type PropertySaleRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertySaleRequest.
     */
    data: XOR<PropertySaleRequestCreateInput, PropertySaleRequestUncheckedCreateInput>
  }

  /**
   * PropertySaleRequest createMany
   */
  export type PropertySaleRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertySaleRequests.
     */
    data: PropertySaleRequestCreateManyInput | PropertySaleRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertySaleRequest createManyAndReturn
   */
  export type PropertySaleRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PropertySaleRequests.
     */
    data: PropertySaleRequestCreateManyInput | PropertySaleRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertySaleRequest update
   */
  export type PropertySaleRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertySaleRequest.
     */
    data: XOR<PropertySaleRequestUpdateInput, PropertySaleRequestUncheckedUpdateInput>
    /**
     * Choose, which PropertySaleRequest to update.
     */
    where: PropertySaleRequestWhereUniqueInput
  }

  /**
   * PropertySaleRequest updateMany
   */
  export type PropertySaleRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertySaleRequests.
     */
    data: XOR<PropertySaleRequestUpdateManyMutationInput, PropertySaleRequestUncheckedUpdateManyInput>
    /**
     * Filter which PropertySaleRequests to update
     */
    where?: PropertySaleRequestWhereInput
    /**
     * Limit how many PropertySaleRequests to update.
     */
    limit?: number
  }

  /**
   * PropertySaleRequest updateManyAndReturn
   */
  export type PropertySaleRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * The data used to update PropertySaleRequests.
     */
    data: XOR<PropertySaleRequestUpdateManyMutationInput, PropertySaleRequestUncheckedUpdateManyInput>
    /**
     * Filter which PropertySaleRequests to update
     */
    where?: PropertySaleRequestWhereInput
    /**
     * Limit how many PropertySaleRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertySaleRequest upsert
   */
  export type PropertySaleRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertySaleRequest to update in case it exists.
     */
    where: PropertySaleRequestWhereUniqueInput
    /**
     * In case the PropertySaleRequest found by the `where` argument doesn't exist, create a new PropertySaleRequest with this data.
     */
    create: XOR<PropertySaleRequestCreateInput, PropertySaleRequestUncheckedCreateInput>
    /**
     * In case the PropertySaleRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertySaleRequestUpdateInput, PropertySaleRequestUncheckedUpdateInput>
  }

  /**
   * PropertySaleRequest delete
   */
  export type PropertySaleRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    /**
     * Filter which PropertySaleRequest to delete.
     */
    where: PropertySaleRequestWhereUniqueInput
  }

  /**
   * PropertySaleRequest deleteMany
   */
  export type PropertySaleRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertySaleRequests to delete
     */
    where?: PropertySaleRequestWhereInput
    /**
     * Limit how many PropertySaleRequests to delete.
     */
    limit?: number
  }

  /**
   * PropertySaleRequest.phone
   */
  export type PropertySaleRequest$phoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    where?: SaleRequestFormPhoneWhereInput
  }

  /**
   * PropertySaleRequest without action
   */
  export type PropertySaleRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
  }


  /**
   * Model SaleRequestFormPhone
   */

  export type AggregateSaleRequestFormPhone = {
    _count: SaleRequestFormPhoneCountAggregateOutputType | null
    _min: SaleRequestFormPhoneMinAggregateOutputType | null
    _max: SaleRequestFormPhoneMaxAggregateOutputType | null
  }

  export type SaleRequestFormPhoneMinAggregateOutputType = {
    id: string | null
    code: string | null
    phoneCode: string | null
    number: string | null
    fullNumber: string | null
  }

  export type SaleRequestFormPhoneMaxAggregateOutputType = {
    id: string | null
    code: string | null
    phoneCode: string | null
    number: string | null
    fullNumber: string | null
  }

  export type SaleRequestFormPhoneCountAggregateOutputType = {
    id: number
    code: number
    phoneCode: number
    number: number
    fullNumber: number
    _all: number
  }


  export type SaleRequestFormPhoneMinAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
  }

  export type SaleRequestFormPhoneMaxAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
  }

  export type SaleRequestFormPhoneCountAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
    _all?: true
  }

  export type SaleRequestFormPhoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleRequestFormPhone to aggregate.
     */
    where?: SaleRequestFormPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleRequestFormPhones to fetch.
     */
    orderBy?: SaleRequestFormPhoneOrderByWithRelationInput | SaleRequestFormPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleRequestFormPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleRequestFormPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleRequestFormPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleRequestFormPhones
    **/
    _count?: true | SaleRequestFormPhoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleRequestFormPhoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleRequestFormPhoneMaxAggregateInputType
  }

  export type GetSaleRequestFormPhoneAggregateType<T extends SaleRequestFormPhoneAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleRequestFormPhone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleRequestFormPhone[P]>
      : GetScalarType<T[P], AggregateSaleRequestFormPhone[P]>
  }




  export type SaleRequestFormPhoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleRequestFormPhoneWhereInput
    orderBy?: SaleRequestFormPhoneOrderByWithAggregationInput | SaleRequestFormPhoneOrderByWithAggregationInput[]
    by: SaleRequestFormPhoneScalarFieldEnum[] | SaleRequestFormPhoneScalarFieldEnum
    having?: SaleRequestFormPhoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleRequestFormPhoneCountAggregateInputType | true
    _min?: SaleRequestFormPhoneMinAggregateInputType
    _max?: SaleRequestFormPhoneMaxAggregateInputType
  }

  export type SaleRequestFormPhoneGroupByOutputType = {
    id: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    _count: SaleRequestFormPhoneCountAggregateOutputType | null
    _min: SaleRequestFormPhoneMinAggregateOutputType | null
    _max: SaleRequestFormPhoneMaxAggregateOutputType | null
  }

  type GetSaleRequestFormPhoneGroupByPayload<T extends SaleRequestFormPhoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleRequestFormPhoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleRequestFormPhoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleRequestFormPhoneGroupByOutputType[P]>
            : GetScalarType<T[P], SaleRequestFormPhoneGroupByOutputType[P]>
        }
      >
    >


  export type SaleRequestFormPhoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
    contact?: boolean | SaleRequestFormPhone$contactArgs<ExtArgs>
  }, ExtArgs["result"]["saleRequestFormPhone"]>

  export type SaleRequestFormPhoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }, ExtArgs["result"]["saleRequestFormPhone"]>

  export type SaleRequestFormPhoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }, ExtArgs["result"]["saleRequestFormPhone"]>

  export type SaleRequestFormPhoneSelectScalar = {
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }

  export type SaleRequestFormPhoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "phoneCode" | "number" | "fullNumber", ExtArgs["result"]["saleRequestFormPhone"]>
  export type SaleRequestFormPhoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | SaleRequestFormPhone$contactArgs<ExtArgs>
  }
  export type SaleRequestFormPhoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SaleRequestFormPhoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SaleRequestFormPhonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleRequestFormPhone"
    objects: {
      contact: Prisma.$PropertySaleRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      phoneCode: string
      number: string
      fullNumber: string
    }, ExtArgs["result"]["saleRequestFormPhone"]>
    composites: {}
  }

  type SaleRequestFormPhoneGetPayload<S extends boolean | null | undefined | SaleRequestFormPhoneDefaultArgs> = $Result.GetResult<Prisma.$SaleRequestFormPhonePayload, S>

  type SaleRequestFormPhoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleRequestFormPhoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleRequestFormPhoneCountAggregateInputType | true
    }

  export interface SaleRequestFormPhoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleRequestFormPhone'], meta: { name: 'SaleRequestFormPhone' } }
    /**
     * Find zero or one SaleRequestFormPhone that matches the filter.
     * @param {SaleRequestFormPhoneFindUniqueArgs} args - Arguments to find a SaleRequestFormPhone
     * @example
     * // Get one SaleRequestFormPhone
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleRequestFormPhoneFindUniqueArgs>(args: SelectSubset<T, SaleRequestFormPhoneFindUniqueArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleRequestFormPhone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleRequestFormPhoneFindUniqueOrThrowArgs} args - Arguments to find a SaleRequestFormPhone
     * @example
     * // Get one SaleRequestFormPhone
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleRequestFormPhoneFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleRequestFormPhoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleRequestFormPhone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleRequestFormPhoneFindFirstArgs} args - Arguments to find a SaleRequestFormPhone
     * @example
     * // Get one SaleRequestFormPhone
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleRequestFormPhoneFindFirstArgs>(args?: SelectSubset<T, SaleRequestFormPhoneFindFirstArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleRequestFormPhone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleRequestFormPhoneFindFirstOrThrowArgs} args - Arguments to find a SaleRequestFormPhone
     * @example
     * // Get one SaleRequestFormPhone
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleRequestFormPhoneFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleRequestFormPhoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleRequestFormPhones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleRequestFormPhoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleRequestFormPhones
     * const saleRequestFormPhones = await prisma.saleRequestFormPhone.findMany()
     * 
     * // Get first 10 SaleRequestFormPhones
     * const saleRequestFormPhones = await prisma.saleRequestFormPhone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleRequestFormPhoneWithIdOnly = await prisma.saleRequestFormPhone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleRequestFormPhoneFindManyArgs>(args?: SelectSubset<T, SaleRequestFormPhoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleRequestFormPhone.
     * @param {SaleRequestFormPhoneCreateArgs} args - Arguments to create a SaleRequestFormPhone.
     * @example
     * // Create one SaleRequestFormPhone
     * const SaleRequestFormPhone = await prisma.saleRequestFormPhone.create({
     *   data: {
     *     // ... data to create a SaleRequestFormPhone
     *   }
     * })
     * 
     */
    create<T extends SaleRequestFormPhoneCreateArgs>(args: SelectSubset<T, SaleRequestFormPhoneCreateArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleRequestFormPhones.
     * @param {SaleRequestFormPhoneCreateManyArgs} args - Arguments to create many SaleRequestFormPhones.
     * @example
     * // Create many SaleRequestFormPhones
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleRequestFormPhoneCreateManyArgs>(args?: SelectSubset<T, SaleRequestFormPhoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleRequestFormPhones and returns the data saved in the database.
     * @param {SaleRequestFormPhoneCreateManyAndReturnArgs} args - Arguments to create many SaleRequestFormPhones.
     * @example
     * // Create many SaleRequestFormPhones
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleRequestFormPhones and only return the `id`
     * const saleRequestFormPhoneWithIdOnly = await prisma.saleRequestFormPhone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleRequestFormPhoneCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleRequestFormPhoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleRequestFormPhone.
     * @param {SaleRequestFormPhoneDeleteArgs} args - Arguments to delete one SaleRequestFormPhone.
     * @example
     * // Delete one SaleRequestFormPhone
     * const SaleRequestFormPhone = await prisma.saleRequestFormPhone.delete({
     *   where: {
     *     // ... filter to delete one SaleRequestFormPhone
     *   }
     * })
     * 
     */
    delete<T extends SaleRequestFormPhoneDeleteArgs>(args: SelectSubset<T, SaleRequestFormPhoneDeleteArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleRequestFormPhone.
     * @param {SaleRequestFormPhoneUpdateArgs} args - Arguments to update one SaleRequestFormPhone.
     * @example
     * // Update one SaleRequestFormPhone
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleRequestFormPhoneUpdateArgs>(args: SelectSubset<T, SaleRequestFormPhoneUpdateArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleRequestFormPhones.
     * @param {SaleRequestFormPhoneDeleteManyArgs} args - Arguments to filter SaleRequestFormPhones to delete.
     * @example
     * // Delete a few SaleRequestFormPhones
     * const { count } = await prisma.saleRequestFormPhone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleRequestFormPhoneDeleteManyArgs>(args?: SelectSubset<T, SaleRequestFormPhoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleRequestFormPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleRequestFormPhoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleRequestFormPhones
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleRequestFormPhoneUpdateManyArgs>(args: SelectSubset<T, SaleRequestFormPhoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleRequestFormPhones and returns the data updated in the database.
     * @param {SaleRequestFormPhoneUpdateManyAndReturnArgs} args - Arguments to update many SaleRequestFormPhones.
     * @example
     * // Update many SaleRequestFormPhones
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleRequestFormPhones and only return the `id`
     * const saleRequestFormPhoneWithIdOnly = await prisma.saleRequestFormPhone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleRequestFormPhoneUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleRequestFormPhoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleRequestFormPhone.
     * @param {SaleRequestFormPhoneUpsertArgs} args - Arguments to update or create a SaleRequestFormPhone.
     * @example
     * // Update or create a SaleRequestFormPhone
     * const saleRequestFormPhone = await prisma.saleRequestFormPhone.upsert({
     *   create: {
     *     // ... data to create a SaleRequestFormPhone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleRequestFormPhone we want to update
     *   }
     * })
     */
    upsert<T extends SaleRequestFormPhoneUpsertArgs>(args: SelectSubset<T, SaleRequestFormPhoneUpsertArgs<ExtArgs>>): Prisma__SaleRequestFormPhoneClient<$Result.GetResult<Prisma.$SaleRequestFormPhonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleRequestFormPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleRequestFormPhoneCountArgs} args - Arguments to filter SaleRequestFormPhones to count.
     * @example
     * // Count the number of SaleRequestFormPhones
     * const count = await prisma.saleRequestFormPhone.count({
     *   where: {
     *     // ... the filter for the SaleRequestFormPhones we want to count
     *   }
     * })
    **/
    count<T extends SaleRequestFormPhoneCountArgs>(
      args?: Subset<T, SaleRequestFormPhoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleRequestFormPhoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleRequestFormPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleRequestFormPhoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleRequestFormPhoneAggregateArgs>(args: Subset<T, SaleRequestFormPhoneAggregateArgs>): Prisma.PrismaPromise<GetSaleRequestFormPhoneAggregateType<T>>

    /**
     * Group by SaleRequestFormPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleRequestFormPhoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleRequestFormPhoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleRequestFormPhoneGroupByArgs['orderBy'] }
        : { orderBy?: SaleRequestFormPhoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleRequestFormPhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleRequestFormPhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleRequestFormPhone model
   */
  readonly fields: SaleRequestFormPhoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleRequestFormPhone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleRequestFormPhoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends SaleRequestFormPhone$contactArgs<ExtArgs> = {}>(args?: Subset<T, SaleRequestFormPhone$contactArgs<ExtArgs>>): Prisma__PropertySaleRequestClient<$Result.GetResult<Prisma.$PropertySaleRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaleRequestFormPhone model
   */
  interface SaleRequestFormPhoneFieldRefs {
    readonly id: FieldRef<"SaleRequestFormPhone", 'String'>
    readonly code: FieldRef<"SaleRequestFormPhone", 'String'>
    readonly phoneCode: FieldRef<"SaleRequestFormPhone", 'String'>
    readonly number: FieldRef<"SaleRequestFormPhone", 'String'>
    readonly fullNumber: FieldRef<"SaleRequestFormPhone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SaleRequestFormPhone findUnique
   */
  export type SaleRequestFormPhoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which SaleRequestFormPhone to fetch.
     */
    where: SaleRequestFormPhoneWhereUniqueInput
  }

  /**
   * SaleRequestFormPhone findUniqueOrThrow
   */
  export type SaleRequestFormPhoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which SaleRequestFormPhone to fetch.
     */
    where: SaleRequestFormPhoneWhereUniqueInput
  }

  /**
   * SaleRequestFormPhone findFirst
   */
  export type SaleRequestFormPhoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which SaleRequestFormPhone to fetch.
     */
    where?: SaleRequestFormPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleRequestFormPhones to fetch.
     */
    orderBy?: SaleRequestFormPhoneOrderByWithRelationInput | SaleRequestFormPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleRequestFormPhones.
     */
    cursor?: SaleRequestFormPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleRequestFormPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleRequestFormPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleRequestFormPhones.
     */
    distinct?: SaleRequestFormPhoneScalarFieldEnum | SaleRequestFormPhoneScalarFieldEnum[]
  }

  /**
   * SaleRequestFormPhone findFirstOrThrow
   */
  export type SaleRequestFormPhoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which SaleRequestFormPhone to fetch.
     */
    where?: SaleRequestFormPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleRequestFormPhones to fetch.
     */
    orderBy?: SaleRequestFormPhoneOrderByWithRelationInput | SaleRequestFormPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleRequestFormPhones.
     */
    cursor?: SaleRequestFormPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleRequestFormPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleRequestFormPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleRequestFormPhones.
     */
    distinct?: SaleRequestFormPhoneScalarFieldEnum | SaleRequestFormPhoneScalarFieldEnum[]
  }

  /**
   * SaleRequestFormPhone findMany
   */
  export type SaleRequestFormPhoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which SaleRequestFormPhones to fetch.
     */
    where?: SaleRequestFormPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleRequestFormPhones to fetch.
     */
    orderBy?: SaleRequestFormPhoneOrderByWithRelationInput | SaleRequestFormPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleRequestFormPhones.
     */
    cursor?: SaleRequestFormPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleRequestFormPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleRequestFormPhones.
     */
    skip?: number
    distinct?: SaleRequestFormPhoneScalarFieldEnum | SaleRequestFormPhoneScalarFieldEnum[]
  }

  /**
   * SaleRequestFormPhone create
   */
  export type SaleRequestFormPhoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleRequestFormPhone.
     */
    data: XOR<SaleRequestFormPhoneCreateInput, SaleRequestFormPhoneUncheckedCreateInput>
  }

  /**
   * SaleRequestFormPhone createMany
   */
  export type SaleRequestFormPhoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleRequestFormPhones.
     */
    data: SaleRequestFormPhoneCreateManyInput | SaleRequestFormPhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleRequestFormPhone createManyAndReturn
   */
  export type SaleRequestFormPhoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * The data used to create many SaleRequestFormPhones.
     */
    data: SaleRequestFormPhoneCreateManyInput | SaleRequestFormPhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleRequestFormPhone update
   */
  export type SaleRequestFormPhoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleRequestFormPhone.
     */
    data: XOR<SaleRequestFormPhoneUpdateInput, SaleRequestFormPhoneUncheckedUpdateInput>
    /**
     * Choose, which SaleRequestFormPhone to update.
     */
    where: SaleRequestFormPhoneWhereUniqueInput
  }

  /**
   * SaleRequestFormPhone updateMany
   */
  export type SaleRequestFormPhoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleRequestFormPhones.
     */
    data: XOR<SaleRequestFormPhoneUpdateManyMutationInput, SaleRequestFormPhoneUncheckedUpdateManyInput>
    /**
     * Filter which SaleRequestFormPhones to update
     */
    where?: SaleRequestFormPhoneWhereInput
    /**
     * Limit how many SaleRequestFormPhones to update.
     */
    limit?: number
  }

  /**
   * SaleRequestFormPhone updateManyAndReturn
   */
  export type SaleRequestFormPhoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * The data used to update SaleRequestFormPhones.
     */
    data: XOR<SaleRequestFormPhoneUpdateManyMutationInput, SaleRequestFormPhoneUncheckedUpdateManyInput>
    /**
     * Filter which SaleRequestFormPhones to update
     */
    where?: SaleRequestFormPhoneWhereInput
    /**
     * Limit how many SaleRequestFormPhones to update.
     */
    limit?: number
  }

  /**
   * SaleRequestFormPhone upsert
   */
  export type SaleRequestFormPhoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleRequestFormPhone to update in case it exists.
     */
    where: SaleRequestFormPhoneWhereUniqueInput
    /**
     * In case the SaleRequestFormPhone found by the `where` argument doesn't exist, create a new SaleRequestFormPhone with this data.
     */
    create: XOR<SaleRequestFormPhoneCreateInput, SaleRequestFormPhoneUncheckedCreateInput>
    /**
     * In case the SaleRequestFormPhone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleRequestFormPhoneUpdateInput, SaleRequestFormPhoneUncheckedUpdateInput>
  }

  /**
   * SaleRequestFormPhone delete
   */
  export type SaleRequestFormPhoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
    /**
     * Filter which SaleRequestFormPhone to delete.
     */
    where: SaleRequestFormPhoneWhereUniqueInput
  }

  /**
   * SaleRequestFormPhone deleteMany
   */
  export type SaleRequestFormPhoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleRequestFormPhones to delete
     */
    where?: SaleRequestFormPhoneWhereInput
    /**
     * Limit how many SaleRequestFormPhones to delete.
     */
    limit?: number
  }

  /**
   * SaleRequestFormPhone.contact
   */
  export type SaleRequestFormPhone$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySaleRequest
     */
    select?: PropertySaleRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySaleRequest
     */
    omit?: PropertySaleRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySaleRequestInclude<ExtArgs> | null
    where?: PropertySaleRequestWhereInput
  }

  /**
   * SaleRequestFormPhone without action
   */
  export type SaleRequestFormPhoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleRequestFormPhone
     */
    select?: SaleRequestFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleRequestFormPhone
     */
    omit?: SaleRequestFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleRequestFormPhoneInclude<ExtArgs> | null
  }


  /**
   * Model BookingForm
   */

  export type AggregateBookingForm = {
    _count: BookingFormCountAggregateOutputType | null
    _min: BookingFormMinAggregateOutputType | null
    _max: BookingFormMaxAggregateOutputType | null
  }

  export type BookingFormMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    property: string | null
    bookingDate: Date | null
    bookingTime: Date | null
    agreeToPolicy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    phoneId: string | null
  }

  export type BookingFormMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    property: string | null
    bookingDate: Date | null
    bookingTime: Date | null
    agreeToPolicy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    phoneId: string | null
  }

  export type BookingFormCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    property: number
    bookingDate: number
    bookingTime: number
    agreeToPolicy: number
    createdAt: number
    updatedAt: number
    phoneId: number
    _all: number
  }


  export type BookingFormMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    property?: true
    bookingDate?: true
    bookingTime?: true
    agreeToPolicy?: true
    createdAt?: true
    updatedAt?: true
    phoneId?: true
  }

  export type BookingFormMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    property?: true
    bookingDate?: true
    bookingTime?: true
    agreeToPolicy?: true
    createdAt?: true
    updatedAt?: true
    phoneId?: true
  }

  export type BookingFormCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    property?: true
    bookingDate?: true
    bookingTime?: true
    agreeToPolicy?: true
    createdAt?: true
    updatedAt?: true
    phoneId?: true
    _all?: true
  }

  export type BookingFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingForm to aggregate.
     */
    where?: BookingFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingForms to fetch.
     */
    orderBy?: BookingFormOrderByWithRelationInput | BookingFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingForms
    **/
    _count?: true | BookingFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingFormMaxAggregateInputType
  }

  export type GetBookingFormAggregateType<T extends BookingFormAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingForm[P]>
      : GetScalarType<T[P], AggregateBookingForm[P]>
  }




  export type BookingFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingFormWhereInput
    orderBy?: BookingFormOrderByWithAggregationInput | BookingFormOrderByWithAggregationInput[]
    by: BookingFormScalarFieldEnum[] | BookingFormScalarFieldEnum
    having?: BookingFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingFormCountAggregateInputType | true
    _min?: BookingFormMinAggregateInputType
    _max?: BookingFormMaxAggregateInputType
  }

  export type BookingFormGroupByOutputType = {
    id: string
    fullName: string
    email: string
    property: string
    bookingDate: Date
    bookingTime: Date
    agreeToPolicy: boolean
    createdAt: Date
    updatedAt: Date
    phoneId: string | null
    _count: BookingFormCountAggregateOutputType | null
    _min: BookingFormMinAggregateOutputType | null
    _max: BookingFormMaxAggregateOutputType | null
  }

  type GetBookingFormGroupByPayload<T extends BookingFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingFormGroupByOutputType[P]>
            : GetScalarType<T[P], BookingFormGroupByOutputType[P]>
        }
      >
    >


  export type BookingFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    property?: boolean
    bookingDate?: boolean
    bookingTime?: boolean
    agreeToPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phoneId?: boolean
    phone?: boolean | BookingForm$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["bookingForm"]>

  export type BookingFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    property?: boolean
    bookingDate?: boolean
    bookingTime?: boolean
    agreeToPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phoneId?: boolean
    phone?: boolean | BookingForm$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["bookingForm"]>

  export type BookingFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    property?: boolean
    bookingDate?: boolean
    bookingTime?: boolean
    agreeToPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phoneId?: boolean
    phone?: boolean | BookingForm$phoneArgs<ExtArgs>
  }, ExtArgs["result"]["bookingForm"]>

  export type BookingFormSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    property?: boolean
    bookingDate?: boolean
    bookingTime?: boolean
    agreeToPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phoneId?: boolean
  }

  export type BookingFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "property" | "bookingDate" | "bookingTime" | "agreeToPolicy" | "createdAt" | "updatedAt" | "phoneId", ExtArgs["result"]["bookingForm"]>
  export type BookingFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | BookingForm$phoneArgs<ExtArgs>
  }
  export type BookingFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | BookingForm$phoneArgs<ExtArgs>
  }
  export type BookingFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phone?: boolean | BookingForm$phoneArgs<ExtArgs>
  }

  export type $BookingFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingForm"
    objects: {
      phone: Prisma.$BookingFormPhonePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      property: string
      bookingDate: Date
      bookingTime: Date
      agreeToPolicy: boolean
      createdAt: Date
      updatedAt: Date
      phoneId: string | null
    }, ExtArgs["result"]["bookingForm"]>
    composites: {}
  }

  type BookingFormGetPayload<S extends boolean | null | undefined | BookingFormDefaultArgs> = $Result.GetResult<Prisma.$BookingFormPayload, S>

  type BookingFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingFormCountAggregateInputType | true
    }

  export interface BookingFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingForm'], meta: { name: 'BookingForm' } }
    /**
     * Find zero or one BookingForm that matches the filter.
     * @param {BookingFormFindUniqueArgs} args - Arguments to find a BookingForm
     * @example
     * // Get one BookingForm
     * const bookingForm = await prisma.bookingForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFormFindUniqueArgs>(args: SelectSubset<T, BookingFormFindUniqueArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFormFindUniqueOrThrowArgs} args - Arguments to find a BookingForm
     * @example
     * // Get one BookingForm
     * const bookingForm = await prisma.bookingForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFormFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormFindFirstArgs} args - Arguments to find a BookingForm
     * @example
     * // Get one BookingForm
     * const bookingForm = await prisma.bookingForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFormFindFirstArgs>(args?: SelectSubset<T, BookingFormFindFirstArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormFindFirstOrThrowArgs} args - Arguments to find a BookingForm
     * @example
     * // Get one BookingForm
     * const bookingForm = await prisma.bookingForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFormFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingForms
     * const bookingForms = await prisma.bookingForm.findMany()
     * 
     * // Get first 10 BookingForms
     * const bookingForms = await prisma.bookingForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingFormWithIdOnly = await prisma.bookingForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFormFindManyArgs>(args?: SelectSubset<T, BookingFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingForm.
     * @param {BookingFormCreateArgs} args - Arguments to create a BookingForm.
     * @example
     * // Create one BookingForm
     * const BookingForm = await prisma.bookingForm.create({
     *   data: {
     *     // ... data to create a BookingForm
     *   }
     * })
     * 
     */
    create<T extends BookingFormCreateArgs>(args: SelectSubset<T, BookingFormCreateArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingForms.
     * @param {BookingFormCreateManyArgs} args - Arguments to create many BookingForms.
     * @example
     * // Create many BookingForms
     * const bookingForm = await prisma.bookingForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingFormCreateManyArgs>(args?: SelectSubset<T, BookingFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingForms and returns the data saved in the database.
     * @param {BookingFormCreateManyAndReturnArgs} args - Arguments to create many BookingForms.
     * @example
     * // Create many BookingForms
     * const bookingForm = await prisma.bookingForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingForms and only return the `id`
     * const bookingFormWithIdOnly = await prisma.bookingForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingFormCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingForm.
     * @param {BookingFormDeleteArgs} args - Arguments to delete one BookingForm.
     * @example
     * // Delete one BookingForm
     * const BookingForm = await prisma.bookingForm.delete({
     *   where: {
     *     // ... filter to delete one BookingForm
     *   }
     * })
     * 
     */
    delete<T extends BookingFormDeleteArgs>(args: SelectSubset<T, BookingFormDeleteArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingForm.
     * @param {BookingFormUpdateArgs} args - Arguments to update one BookingForm.
     * @example
     * // Update one BookingForm
     * const bookingForm = await prisma.bookingForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingFormUpdateArgs>(args: SelectSubset<T, BookingFormUpdateArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingForms.
     * @param {BookingFormDeleteManyArgs} args - Arguments to filter BookingForms to delete.
     * @example
     * // Delete a few BookingForms
     * const { count } = await prisma.bookingForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingFormDeleteManyArgs>(args?: SelectSubset<T, BookingFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingForms
     * const bookingForm = await prisma.bookingForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingFormUpdateManyArgs>(args: SelectSubset<T, BookingFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingForms and returns the data updated in the database.
     * @param {BookingFormUpdateManyAndReturnArgs} args - Arguments to update many BookingForms.
     * @example
     * // Update many BookingForms
     * const bookingForm = await prisma.bookingForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingForms and only return the `id`
     * const bookingFormWithIdOnly = await prisma.bookingForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingFormUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingForm.
     * @param {BookingFormUpsertArgs} args - Arguments to update or create a BookingForm.
     * @example
     * // Update or create a BookingForm
     * const bookingForm = await prisma.bookingForm.upsert({
     *   create: {
     *     // ... data to create a BookingForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingForm we want to update
     *   }
     * })
     */
    upsert<T extends BookingFormUpsertArgs>(args: SelectSubset<T, BookingFormUpsertArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormCountArgs} args - Arguments to filter BookingForms to count.
     * @example
     * // Count the number of BookingForms
     * const count = await prisma.bookingForm.count({
     *   where: {
     *     // ... the filter for the BookingForms we want to count
     *   }
     * })
    **/
    count<T extends BookingFormCountArgs>(
      args?: Subset<T, BookingFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingFormAggregateArgs>(args: Subset<T, BookingFormAggregateArgs>): Prisma.PrismaPromise<GetBookingFormAggregateType<T>>

    /**
     * Group by BookingForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingFormGroupByArgs['orderBy'] }
        : { orderBy?: BookingFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingForm model
   */
  readonly fields: BookingFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phone<T extends BookingForm$phoneArgs<ExtArgs> = {}>(args?: Subset<T, BookingForm$phoneArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingForm model
   */
  interface BookingFormFieldRefs {
    readonly id: FieldRef<"BookingForm", 'String'>
    readonly fullName: FieldRef<"BookingForm", 'String'>
    readonly email: FieldRef<"BookingForm", 'String'>
    readonly property: FieldRef<"BookingForm", 'String'>
    readonly bookingDate: FieldRef<"BookingForm", 'DateTime'>
    readonly bookingTime: FieldRef<"BookingForm", 'DateTime'>
    readonly agreeToPolicy: FieldRef<"BookingForm", 'Boolean'>
    readonly createdAt: FieldRef<"BookingForm", 'DateTime'>
    readonly updatedAt: FieldRef<"BookingForm", 'DateTime'>
    readonly phoneId: FieldRef<"BookingForm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookingForm findUnique
   */
  export type BookingFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * Filter, which BookingForm to fetch.
     */
    where: BookingFormWhereUniqueInput
  }

  /**
   * BookingForm findUniqueOrThrow
   */
  export type BookingFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * Filter, which BookingForm to fetch.
     */
    where: BookingFormWhereUniqueInput
  }

  /**
   * BookingForm findFirst
   */
  export type BookingFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * Filter, which BookingForm to fetch.
     */
    where?: BookingFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingForms to fetch.
     */
    orderBy?: BookingFormOrderByWithRelationInput | BookingFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingForms.
     */
    cursor?: BookingFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingForms.
     */
    distinct?: BookingFormScalarFieldEnum | BookingFormScalarFieldEnum[]
  }

  /**
   * BookingForm findFirstOrThrow
   */
  export type BookingFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * Filter, which BookingForm to fetch.
     */
    where?: BookingFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingForms to fetch.
     */
    orderBy?: BookingFormOrderByWithRelationInput | BookingFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingForms.
     */
    cursor?: BookingFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingForms.
     */
    distinct?: BookingFormScalarFieldEnum | BookingFormScalarFieldEnum[]
  }

  /**
   * BookingForm findMany
   */
  export type BookingFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * Filter, which BookingForms to fetch.
     */
    where?: BookingFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingForms to fetch.
     */
    orderBy?: BookingFormOrderByWithRelationInput | BookingFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingForms.
     */
    cursor?: BookingFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingForms.
     */
    skip?: number
    distinct?: BookingFormScalarFieldEnum | BookingFormScalarFieldEnum[]
  }

  /**
   * BookingForm create
   */
  export type BookingFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingForm.
     */
    data: XOR<BookingFormCreateInput, BookingFormUncheckedCreateInput>
  }

  /**
   * BookingForm createMany
   */
  export type BookingFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingForms.
     */
    data: BookingFormCreateManyInput | BookingFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingForm createManyAndReturn
   */
  export type BookingFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * The data used to create many BookingForms.
     */
    data: BookingFormCreateManyInput | BookingFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingForm update
   */
  export type BookingFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingForm.
     */
    data: XOR<BookingFormUpdateInput, BookingFormUncheckedUpdateInput>
    /**
     * Choose, which BookingForm to update.
     */
    where: BookingFormWhereUniqueInput
  }

  /**
   * BookingForm updateMany
   */
  export type BookingFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingForms.
     */
    data: XOR<BookingFormUpdateManyMutationInput, BookingFormUncheckedUpdateManyInput>
    /**
     * Filter which BookingForms to update
     */
    where?: BookingFormWhereInput
    /**
     * Limit how many BookingForms to update.
     */
    limit?: number
  }

  /**
   * BookingForm updateManyAndReturn
   */
  export type BookingFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * The data used to update BookingForms.
     */
    data: XOR<BookingFormUpdateManyMutationInput, BookingFormUncheckedUpdateManyInput>
    /**
     * Filter which BookingForms to update
     */
    where?: BookingFormWhereInput
    /**
     * Limit how many BookingForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingForm upsert
   */
  export type BookingFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingForm to update in case it exists.
     */
    where: BookingFormWhereUniqueInput
    /**
     * In case the BookingForm found by the `where` argument doesn't exist, create a new BookingForm with this data.
     */
    create: XOR<BookingFormCreateInput, BookingFormUncheckedCreateInput>
    /**
     * In case the BookingForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingFormUpdateInput, BookingFormUncheckedUpdateInput>
  }

  /**
   * BookingForm delete
   */
  export type BookingFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    /**
     * Filter which BookingForm to delete.
     */
    where: BookingFormWhereUniqueInput
  }

  /**
   * BookingForm deleteMany
   */
  export type BookingFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingForms to delete
     */
    where?: BookingFormWhereInput
    /**
     * Limit how many BookingForms to delete.
     */
    limit?: number
  }

  /**
   * BookingForm.phone
   */
  export type BookingForm$phoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    where?: BookingFormPhoneWhereInput
  }

  /**
   * BookingForm without action
   */
  export type BookingFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
  }


  /**
   * Model BookingFormPhone
   */

  export type AggregateBookingFormPhone = {
    _count: BookingFormPhoneCountAggregateOutputType | null
    _min: BookingFormPhoneMinAggregateOutputType | null
    _max: BookingFormPhoneMaxAggregateOutputType | null
  }

  export type BookingFormPhoneMinAggregateOutputType = {
    id: string | null
    code: string | null
    phoneCode: string | null
    number: string | null
    fullNumber: string | null
  }

  export type BookingFormPhoneMaxAggregateOutputType = {
    id: string | null
    code: string | null
    phoneCode: string | null
    number: string | null
    fullNumber: string | null
  }

  export type BookingFormPhoneCountAggregateOutputType = {
    id: number
    code: number
    phoneCode: number
    number: number
    fullNumber: number
    _all: number
  }


  export type BookingFormPhoneMinAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
  }

  export type BookingFormPhoneMaxAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
  }

  export type BookingFormPhoneCountAggregateInputType = {
    id?: true
    code?: true
    phoneCode?: true
    number?: true
    fullNumber?: true
    _all?: true
  }

  export type BookingFormPhoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingFormPhone to aggregate.
     */
    where?: BookingFormPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingFormPhones to fetch.
     */
    orderBy?: BookingFormPhoneOrderByWithRelationInput | BookingFormPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingFormPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingFormPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingFormPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingFormPhones
    **/
    _count?: true | BookingFormPhoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingFormPhoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingFormPhoneMaxAggregateInputType
  }

  export type GetBookingFormPhoneAggregateType<T extends BookingFormPhoneAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingFormPhone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingFormPhone[P]>
      : GetScalarType<T[P], AggregateBookingFormPhone[P]>
  }




  export type BookingFormPhoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingFormPhoneWhereInput
    orderBy?: BookingFormPhoneOrderByWithAggregationInput | BookingFormPhoneOrderByWithAggregationInput[]
    by: BookingFormPhoneScalarFieldEnum[] | BookingFormPhoneScalarFieldEnum
    having?: BookingFormPhoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingFormPhoneCountAggregateInputType | true
    _min?: BookingFormPhoneMinAggregateInputType
    _max?: BookingFormPhoneMaxAggregateInputType
  }

  export type BookingFormPhoneGroupByOutputType = {
    id: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    _count: BookingFormPhoneCountAggregateOutputType | null
    _min: BookingFormPhoneMinAggregateOutputType | null
    _max: BookingFormPhoneMaxAggregateOutputType | null
  }

  type GetBookingFormPhoneGroupByPayload<T extends BookingFormPhoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingFormPhoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingFormPhoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingFormPhoneGroupByOutputType[P]>
            : GetScalarType<T[P], BookingFormPhoneGroupByOutputType[P]>
        }
      >
    >


  export type BookingFormPhoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
    contact?: boolean | BookingFormPhone$contactArgs<ExtArgs>
  }, ExtArgs["result"]["bookingFormPhone"]>

  export type BookingFormPhoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }, ExtArgs["result"]["bookingFormPhone"]>

  export type BookingFormPhoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }, ExtArgs["result"]["bookingFormPhone"]>

  export type BookingFormPhoneSelectScalar = {
    id?: boolean
    code?: boolean
    phoneCode?: boolean
    number?: boolean
    fullNumber?: boolean
  }

  export type BookingFormPhoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "phoneCode" | "number" | "fullNumber", ExtArgs["result"]["bookingFormPhone"]>
  export type BookingFormPhoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | BookingFormPhone$contactArgs<ExtArgs>
  }
  export type BookingFormPhoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookingFormPhoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookingFormPhonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingFormPhone"
    objects: {
      contact: Prisma.$BookingFormPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      phoneCode: string
      number: string
      fullNumber: string
    }, ExtArgs["result"]["bookingFormPhone"]>
    composites: {}
  }

  type BookingFormPhoneGetPayload<S extends boolean | null | undefined | BookingFormPhoneDefaultArgs> = $Result.GetResult<Prisma.$BookingFormPhonePayload, S>

  type BookingFormPhoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFormPhoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingFormPhoneCountAggregateInputType | true
    }

  export interface BookingFormPhoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingFormPhone'], meta: { name: 'BookingFormPhone' } }
    /**
     * Find zero or one BookingFormPhone that matches the filter.
     * @param {BookingFormPhoneFindUniqueArgs} args - Arguments to find a BookingFormPhone
     * @example
     * // Get one BookingFormPhone
     * const bookingFormPhone = await prisma.bookingFormPhone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFormPhoneFindUniqueArgs>(args: SelectSubset<T, BookingFormPhoneFindUniqueArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingFormPhone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFormPhoneFindUniqueOrThrowArgs} args - Arguments to find a BookingFormPhone
     * @example
     * // Get one BookingFormPhone
     * const bookingFormPhone = await prisma.bookingFormPhone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFormPhoneFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFormPhoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingFormPhone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormPhoneFindFirstArgs} args - Arguments to find a BookingFormPhone
     * @example
     * // Get one BookingFormPhone
     * const bookingFormPhone = await prisma.bookingFormPhone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFormPhoneFindFirstArgs>(args?: SelectSubset<T, BookingFormPhoneFindFirstArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingFormPhone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormPhoneFindFirstOrThrowArgs} args - Arguments to find a BookingFormPhone
     * @example
     * // Get one BookingFormPhone
     * const bookingFormPhone = await prisma.bookingFormPhone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFormPhoneFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFormPhoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingFormPhones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormPhoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingFormPhones
     * const bookingFormPhones = await prisma.bookingFormPhone.findMany()
     * 
     * // Get first 10 BookingFormPhones
     * const bookingFormPhones = await prisma.bookingFormPhone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingFormPhoneWithIdOnly = await prisma.bookingFormPhone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFormPhoneFindManyArgs>(args?: SelectSubset<T, BookingFormPhoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingFormPhone.
     * @param {BookingFormPhoneCreateArgs} args - Arguments to create a BookingFormPhone.
     * @example
     * // Create one BookingFormPhone
     * const BookingFormPhone = await prisma.bookingFormPhone.create({
     *   data: {
     *     // ... data to create a BookingFormPhone
     *   }
     * })
     * 
     */
    create<T extends BookingFormPhoneCreateArgs>(args: SelectSubset<T, BookingFormPhoneCreateArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingFormPhones.
     * @param {BookingFormPhoneCreateManyArgs} args - Arguments to create many BookingFormPhones.
     * @example
     * // Create many BookingFormPhones
     * const bookingFormPhone = await prisma.bookingFormPhone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingFormPhoneCreateManyArgs>(args?: SelectSubset<T, BookingFormPhoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingFormPhones and returns the data saved in the database.
     * @param {BookingFormPhoneCreateManyAndReturnArgs} args - Arguments to create many BookingFormPhones.
     * @example
     * // Create many BookingFormPhones
     * const bookingFormPhone = await prisma.bookingFormPhone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingFormPhones and only return the `id`
     * const bookingFormPhoneWithIdOnly = await prisma.bookingFormPhone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingFormPhoneCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingFormPhoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingFormPhone.
     * @param {BookingFormPhoneDeleteArgs} args - Arguments to delete one BookingFormPhone.
     * @example
     * // Delete one BookingFormPhone
     * const BookingFormPhone = await prisma.bookingFormPhone.delete({
     *   where: {
     *     // ... filter to delete one BookingFormPhone
     *   }
     * })
     * 
     */
    delete<T extends BookingFormPhoneDeleteArgs>(args: SelectSubset<T, BookingFormPhoneDeleteArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingFormPhone.
     * @param {BookingFormPhoneUpdateArgs} args - Arguments to update one BookingFormPhone.
     * @example
     * // Update one BookingFormPhone
     * const bookingFormPhone = await prisma.bookingFormPhone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingFormPhoneUpdateArgs>(args: SelectSubset<T, BookingFormPhoneUpdateArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingFormPhones.
     * @param {BookingFormPhoneDeleteManyArgs} args - Arguments to filter BookingFormPhones to delete.
     * @example
     * // Delete a few BookingFormPhones
     * const { count } = await prisma.bookingFormPhone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingFormPhoneDeleteManyArgs>(args?: SelectSubset<T, BookingFormPhoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingFormPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormPhoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingFormPhones
     * const bookingFormPhone = await prisma.bookingFormPhone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingFormPhoneUpdateManyArgs>(args: SelectSubset<T, BookingFormPhoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingFormPhones and returns the data updated in the database.
     * @param {BookingFormPhoneUpdateManyAndReturnArgs} args - Arguments to update many BookingFormPhones.
     * @example
     * // Update many BookingFormPhones
     * const bookingFormPhone = await prisma.bookingFormPhone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingFormPhones and only return the `id`
     * const bookingFormPhoneWithIdOnly = await prisma.bookingFormPhone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingFormPhoneUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingFormPhoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingFormPhone.
     * @param {BookingFormPhoneUpsertArgs} args - Arguments to update or create a BookingFormPhone.
     * @example
     * // Update or create a BookingFormPhone
     * const bookingFormPhone = await prisma.bookingFormPhone.upsert({
     *   create: {
     *     // ... data to create a BookingFormPhone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingFormPhone we want to update
     *   }
     * })
     */
    upsert<T extends BookingFormPhoneUpsertArgs>(args: SelectSubset<T, BookingFormPhoneUpsertArgs<ExtArgs>>): Prisma__BookingFormPhoneClient<$Result.GetResult<Prisma.$BookingFormPhonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingFormPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormPhoneCountArgs} args - Arguments to filter BookingFormPhones to count.
     * @example
     * // Count the number of BookingFormPhones
     * const count = await prisma.bookingFormPhone.count({
     *   where: {
     *     // ... the filter for the BookingFormPhones we want to count
     *   }
     * })
    **/
    count<T extends BookingFormPhoneCountArgs>(
      args?: Subset<T, BookingFormPhoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingFormPhoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingFormPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormPhoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingFormPhoneAggregateArgs>(args: Subset<T, BookingFormPhoneAggregateArgs>): Prisma.PrismaPromise<GetBookingFormPhoneAggregateType<T>>

    /**
     * Group by BookingFormPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFormPhoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingFormPhoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingFormPhoneGroupByArgs['orderBy'] }
        : { orderBy?: BookingFormPhoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingFormPhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingFormPhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingFormPhone model
   */
  readonly fields: BookingFormPhoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingFormPhone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingFormPhoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends BookingFormPhone$contactArgs<ExtArgs> = {}>(args?: Subset<T, BookingFormPhone$contactArgs<ExtArgs>>): Prisma__BookingFormClient<$Result.GetResult<Prisma.$BookingFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingFormPhone model
   */
  interface BookingFormPhoneFieldRefs {
    readonly id: FieldRef<"BookingFormPhone", 'String'>
    readonly code: FieldRef<"BookingFormPhone", 'String'>
    readonly phoneCode: FieldRef<"BookingFormPhone", 'String'>
    readonly number: FieldRef<"BookingFormPhone", 'String'>
    readonly fullNumber: FieldRef<"BookingFormPhone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookingFormPhone findUnique
   */
  export type BookingFormPhoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which BookingFormPhone to fetch.
     */
    where: BookingFormPhoneWhereUniqueInput
  }

  /**
   * BookingFormPhone findUniqueOrThrow
   */
  export type BookingFormPhoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which BookingFormPhone to fetch.
     */
    where: BookingFormPhoneWhereUniqueInput
  }

  /**
   * BookingFormPhone findFirst
   */
  export type BookingFormPhoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which BookingFormPhone to fetch.
     */
    where?: BookingFormPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingFormPhones to fetch.
     */
    orderBy?: BookingFormPhoneOrderByWithRelationInput | BookingFormPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingFormPhones.
     */
    cursor?: BookingFormPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingFormPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingFormPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingFormPhones.
     */
    distinct?: BookingFormPhoneScalarFieldEnum | BookingFormPhoneScalarFieldEnum[]
  }

  /**
   * BookingFormPhone findFirstOrThrow
   */
  export type BookingFormPhoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which BookingFormPhone to fetch.
     */
    where?: BookingFormPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingFormPhones to fetch.
     */
    orderBy?: BookingFormPhoneOrderByWithRelationInput | BookingFormPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingFormPhones.
     */
    cursor?: BookingFormPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingFormPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingFormPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingFormPhones.
     */
    distinct?: BookingFormPhoneScalarFieldEnum | BookingFormPhoneScalarFieldEnum[]
  }

  /**
   * BookingFormPhone findMany
   */
  export type BookingFormPhoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * Filter, which BookingFormPhones to fetch.
     */
    where?: BookingFormPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingFormPhones to fetch.
     */
    orderBy?: BookingFormPhoneOrderByWithRelationInput | BookingFormPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingFormPhones.
     */
    cursor?: BookingFormPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingFormPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingFormPhones.
     */
    skip?: number
    distinct?: BookingFormPhoneScalarFieldEnum | BookingFormPhoneScalarFieldEnum[]
  }

  /**
   * BookingFormPhone create
   */
  export type BookingFormPhoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingFormPhone.
     */
    data: XOR<BookingFormPhoneCreateInput, BookingFormPhoneUncheckedCreateInput>
  }

  /**
   * BookingFormPhone createMany
   */
  export type BookingFormPhoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingFormPhones.
     */
    data: BookingFormPhoneCreateManyInput | BookingFormPhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingFormPhone createManyAndReturn
   */
  export type BookingFormPhoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * The data used to create many BookingFormPhones.
     */
    data: BookingFormPhoneCreateManyInput | BookingFormPhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingFormPhone update
   */
  export type BookingFormPhoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingFormPhone.
     */
    data: XOR<BookingFormPhoneUpdateInput, BookingFormPhoneUncheckedUpdateInput>
    /**
     * Choose, which BookingFormPhone to update.
     */
    where: BookingFormPhoneWhereUniqueInput
  }

  /**
   * BookingFormPhone updateMany
   */
  export type BookingFormPhoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingFormPhones.
     */
    data: XOR<BookingFormPhoneUpdateManyMutationInput, BookingFormPhoneUncheckedUpdateManyInput>
    /**
     * Filter which BookingFormPhones to update
     */
    where?: BookingFormPhoneWhereInput
    /**
     * Limit how many BookingFormPhones to update.
     */
    limit?: number
  }

  /**
   * BookingFormPhone updateManyAndReturn
   */
  export type BookingFormPhoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * The data used to update BookingFormPhones.
     */
    data: XOR<BookingFormPhoneUpdateManyMutationInput, BookingFormPhoneUncheckedUpdateManyInput>
    /**
     * Filter which BookingFormPhones to update
     */
    where?: BookingFormPhoneWhereInput
    /**
     * Limit how many BookingFormPhones to update.
     */
    limit?: number
  }

  /**
   * BookingFormPhone upsert
   */
  export type BookingFormPhoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingFormPhone to update in case it exists.
     */
    where: BookingFormPhoneWhereUniqueInput
    /**
     * In case the BookingFormPhone found by the `where` argument doesn't exist, create a new BookingFormPhone with this data.
     */
    create: XOR<BookingFormPhoneCreateInput, BookingFormPhoneUncheckedCreateInput>
    /**
     * In case the BookingFormPhone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingFormPhoneUpdateInput, BookingFormPhoneUncheckedUpdateInput>
  }

  /**
   * BookingFormPhone delete
   */
  export type BookingFormPhoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
    /**
     * Filter which BookingFormPhone to delete.
     */
    where: BookingFormPhoneWhereUniqueInput
  }

  /**
   * BookingFormPhone deleteMany
   */
  export type BookingFormPhoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingFormPhones to delete
     */
    where?: BookingFormPhoneWhereInput
    /**
     * Limit how many BookingFormPhones to delete.
     */
    limit?: number
  }

  /**
   * BookingFormPhone.contact
   */
  export type BookingFormPhone$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingForm
     */
    select?: BookingFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingForm
     */
    omit?: BookingFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormInclude<ExtArgs> | null
    where?: BookingFormWhereInput
  }

  /**
   * BookingFormPhone without action
   */
  export type BookingFormPhoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingFormPhone
     */
    select?: BookingFormPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingFormPhone
     */
    omit?: BookingFormPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingFormPhoneInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    size: number | null
    parkingSpace: number | null
    views: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    size: number | null
    parkingSpace: number | null
    views: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    location: string | null
    bedrooms: number | null
    bathrooms: number | null
    size: number | null
    category: $Enums.Category | null
    propertyType: $Enums.PropertyType | null
    parkingSpace: number | null
    petsAllowed: boolean | null
    verified: boolean | null
    isNew: boolean | null
    featured: boolean | null
    hasVideo: boolean | null
    views: number | null
    publishedDate: Date | null
    createdAt: Date | null
    adminUserId: string | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    location: string | null
    bedrooms: number | null
    bathrooms: number | null
    size: number | null
    category: $Enums.Category | null
    propertyType: $Enums.PropertyType | null
    parkingSpace: number | null
    petsAllowed: boolean | null
    verified: boolean | null
    isNew: boolean | null
    featured: boolean | null
    hasVideo: boolean | null
    views: number | null
    publishedDate: Date | null
    createdAt: Date | null
    adminUserId: string | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    location: number
    bedrooms: number
    bathrooms: number
    size: number
    category: number
    propertyType: number
    parkingSpace: number
    petsAllowed: number
    verified: number
    isNew: number
    featured: number
    hasVideo: number
    views: number
    publishedDate: number
    createdAt: number
    adminUserId: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    size?: true
    parkingSpace?: true
    views?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    size?: true
    parkingSpace?: true
    views?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    location?: true
    bedrooms?: true
    bathrooms?: true
    size?: true
    category?: true
    propertyType?: true
    parkingSpace?: true
    petsAllowed?: true
    verified?: true
    isNew?: true
    featured?: true
    hasVideo?: true
    views?: true
    publishedDate?: true
    createdAt?: true
    adminUserId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    location?: true
    bedrooms?: true
    bathrooms?: true
    size?: true
    category?: true
    propertyType?: true
    parkingSpace?: true
    petsAllowed?: true
    verified?: true
    isNew?: true
    featured?: true
    hasVideo?: true
    views?: true
    publishedDate?: true
    createdAt?: true
    adminUserId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    location?: true
    bedrooms?: true
    bathrooms?: true
    size?: true
    category?: true
    propertyType?: true
    parkingSpace?: true
    petsAllowed?: true
    verified?: true
    isNew?: true
    featured?: true
    hasVideo?: true
    views?: true
    publishedDate?: true
    createdAt?: true
    adminUserId?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views: number
    publishedDate: Date
    createdAt: Date
    adminUserId: string
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    size?: boolean
    category?: boolean
    propertyType?: boolean
    parkingSpace?: boolean
    petsAllowed?: boolean
    verified?: boolean
    isNew?: boolean
    featured?: boolean
    hasVideo?: boolean
    views?: boolean
    publishedDate?: boolean
    createdAt?: boolean
    adminUserId?: boolean
    images?: boolean | Property$imagesArgs<ExtArgs>
    amenities?: boolean | Property$amenitiesArgs<ExtArgs>
    notIncluded?: boolean | Property$notIncludedArgs<ExtArgs>
    visitors?: boolean | Property$visitorsArgs<ExtArgs>
    adminUser?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    size?: boolean
    category?: boolean
    propertyType?: boolean
    parkingSpace?: boolean
    petsAllowed?: boolean
    verified?: boolean
    isNew?: boolean
    featured?: boolean
    hasVideo?: boolean
    views?: boolean
    publishedDate?: boolean
    createdAt?: boolean
    adminUserId?: boolean
    adminUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    size?: boolean
    category?: boolean
    propertyType?: boolean
    parkingSpace?: boolean
    petsAllowed?: boolean
    verified?: boolean
    isNew?: boolean
    featured?: boolean
    hasVideo?: boolean
    views?: boolean
    publishedDate?: boolean
    createdAt?: boolean
    adminUserId?: boolean
    adminUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    size?: boolean
    category?: boolean
    propertyType?: boolean
    parkingSpace?: boolean
    petsAllowed?: boolean
    verified?: boolean
    isNew?: boolean
    featured?: boolean
    hasVideo?: boolean
    views?: boolean
    publishedDate?: boolean
    createdAt?: boolean
    adminUserId?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "location" | "bedrooms" | "bathrooms" | "size" | "category" | "propertyType" | "parkingSpace" | "petsAllowed" | "verified" | "isNew" | "featured" | "hasVideo" | "views" | "publishedDate" | "createdAt" | "adminUserId", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Property$imagesArgs<ExtArgs>
    amenities?: boolean | Property$amenitiesArgs<ExtArgs>
    notIncluded?: boolean | Property$notIncludedArgs<ExtArgs>
    visitors?: boolean | Property$visitorsArgs<ExtArgs>
    adminUser?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      images: Prisma.$PropertyImagePayload<ExtArgs>[]
      amenities: Prisma.$AmenityPayload<ExtArgs>[]
      notIncluded: Prisma.$NotIncludedItemPayload<ExtArgs>[]
      visitors: Prisma.$VisitorPayload<ExtArgs>[]
      adminUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      price: number
      location: string
      bedrooms: number
      bathrooms: number
      size: number
      category: $Enums.Category
      propertyType: $Enums.PropertyType
      parkingSpace: number
      petsAllowed: boolean
      verified: boolean
      isNew: boolean
      featured: boolean
      hasVideo: boolean
      views: number
      publishedDate: Date
      createdAt: Date
      adminUserId: string
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Property$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenities<T extends Property$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Property$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notIncluded<T extends Property$notIncludedArgs<ExtArgs> = {}>(args?: Subset<T, Property$notIncludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitors<T extends Property$visitorsArgs<ExtArgs> = {}>(args?: Subset<T, Property$visitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Float'>
    readonly location: FieldRef<"Property", 'String'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Int'>
    readonly size: FieldRef<"Property", 'Int'>
    readonly category: FieldRef<"Property", 'Category'>
    readonly propertyType: FieldRef<"Property", 'PropertyType'>
    readonly parkingSpace: FieldRef<"Property", 'Int'>
    readonly petsAllowed: FieldRef<"Property", 'Boolean'>
    readonly verified: FieldRef<"Property", 'Boolean'>
    readonly isNew: FieldRef<"Property", 'Boolean'>
    readonly featured: FieldRef<"Property", 'Boolean'>
    readonly hasVideo: FieldRef<"Property", 'Boolean'>
    readonly views: FieldRef<"Property", 'Int'>
    readonly publishedDate: FieldRef<"Property", 'DateTime'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly adminUserId: FieldRef<"Property", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.images
   */
  export type Property$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property.amenities
   */
  export type Property$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    cursor?: AmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Property.notIncluded
   */
  export type Property$notIncludedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    where?: NotIncludedItemWhereInput
    orderBy?: NotIncludedItemOrderByWithRelationInput | NotIncludedItemOrderByWithRelationInput[]
    cursor?: NotIncludedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotIncludedItemScalarFieldEnum | NotIncludedItemScalarFieldEnum[]
  }

  /**
   * Property.visitors
   */
  export type Property$visitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    cursor?: VisitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    alt: string | null
    isMain: boolean | null
    propertyId: number | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    alt: string | null
    isMain: boolean | null
    propertyId: number | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    url: number
    alt: number
    isMain: number
    propertyId: number
    _all: number
  }


  export type PropertyImageAvgAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageSumAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    isMain?: true
    propertyId?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    isMain?: true
    propertyId?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    isMain?: true
    propertyId?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _avg?: PropertyImageAvgAggregateInputType
    _sum?: PropertyImageSumAggregateInputType
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: number
    url: string
    alt: string
    isMain: boolean
    propertyId: number
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    isMain?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    isMain?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    isMain?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectScalar = {
    id?: boolean
    url?: boolean
    alt?: boolean
    isMain?: boolean
    propertyId?: boolean
  }

  export type PropertyImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt" | "isMain" | "propertyId", ExtArgs["result"]["propertyImage"]>
  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      alt: string
      isMain: boolean
      propertyId: number
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImageCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages and returns the data updated in the database.
     * @param {PropertyImageUpdateManyAndReturnArgs} args - Arguments to update many PropertyImages.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyImage model
   */
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'Int'>
    readonly url: FieldRef<"PropertyImage", 'String'>
    readonly alt: FieldRef<"PropertyImage", 'String'>
    readonly isMain: FieldRef<"PropertyImage", 'Boolean'>
    readonly propertyId: FieldRef<"PropertyImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage createManyAndReturn
   */
  export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
  }

  /**
   * PropertyImage updateManyAndReturn
   */
  export type PropertyImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to delete.
     */
    limit?: number
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type AmenitySumAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type AmenityMinAggregateOutputType = {
    id: number | null
    name: string | null
    propertyId: number | null
  }

  export type AmenityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    propertyId: number | null
  }

  export type AmenityCountAggregateOutputType = {
    id: number
    name: number
    propertyId: number
    _all: number
  }


  export type AmenityAvgAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type AmenitySumAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type AmenityMinAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
  }

  export type AmenityMaxAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
  }

  export type AmenityCountAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _avg?: AmenityAvgAggregateInputType
    _sum?: AmenitySumAggregateInputType
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    id: number
    name: string
    propertyId: number
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectScalar = {
    id?: boolean
    name?: boolean
    propertyId?: boolean
  }

  export type AmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "propertyId", ExtArgs["result"]["amenity"]>
  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      propertyId: number
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenityWithIdOnly = await prisma.amenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amenities and returns the data saved in the database.
     * @param {AmenityCreateManyAndReturnArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities and returns the data updated in the database.
     * @param {AmenityUpdateManyAndReturnArgs} args - Arguments to update many Amenities.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, AmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Amenity model
   */
  interface AmenityFieldRefs {
    readonly id: FieldRef<"Amenity", 'Int'>
    readonly name: FieldRef<"Amenity", 'String'>
    readonly propertyId: FieldRef<"Amenity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity createManyAndReturn
   */
  export type AmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity updateManyAndReturn
   */
  export type AmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model NotIncludedItem
   */

  export type AggregateNotIncludedItem = {
    _count: NotIncludedItemCountAggregateOutputType | null
    _avg: NotIncludedItemAvgAggregateOutputType | null
    _sum: NotIncludedItemSumAggregateOutputType | null
    _min: NotIncludedItemMinAggregateOutputType | null
    _max: NotIncludedItemMaxAggregateOutputType | null
  }

  export type NotIncludedItemAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type NotIncludedItemSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type NotIncludedItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    propertyId: number | null
  }

  export type NotIncludedItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    propertyId: number | null
  }

  export type NotIncludedItemCountAggregateOutputType = {
    id: number
    name: number
    propertyId: number
    _all: number
  }


  export type NotIncludedItemAvgAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type NotIncludedItemSumAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type NotIncludedItemMinAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
  }

  export type NotIncludedItemMaxAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
  }

  export type NotIncludedItemCountAggregateInputType = {
    id?: true
    name?: true
    propertyId?: true
    _all?: true
  }

  export type NotIncludedItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotIncludedItem to aggregate.
     */
    where?: NotIncludedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotIncludedItems to fetch.
     */
    orderBy?: NotIncludedItemOrderByWithRelationInput | NotIncludedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotIncludedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotIncludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotIncludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotIncludedItems
    **/
    _count?: true | NotIncludedItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotIncludedItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotIncludedItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotIncludedItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotIncludedItemMaxAggregateInputType
  }

  export type GetNotIncludedItemAggregateType<T extends NotIncludedItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNotIncludedItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotIncludedItem[P]>
      : GetScalarType<T[P], AggregateNotIncludedItem[P]>
  }




  export type NotIncludedItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotIncludedItemWhereInput
    orderBy?: NotIncludedItemOrderByWithAggregationInput | NotIncludedItemOrderByWithAggregationInput[]
    by: NotIncludedItemScalarFieldEnum[] | NotIncludedItemScalarFieldEnum
    having?: NotIncludedItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotIncludedItemCountAggregateInputType | true
    _avg?: NotIncludedItemAvgAggregateInputType
    _sum?: NotIncludedItemSumAggregateInputType
    _min?: NotIncludedItemMinAggregateInputType
    _max?: NotIncludedItemMaxAggregateInputType
  }

  export type NotIncludedItemGroupByOutputType = {
    id: number
    name: string
    propertyId: number
    _count: NotIncludedItemCountAggregateOutputType | null
    _avg: NotIncludedItemAvgAggregateOutputType | null
    _sum: NotIncludedItemSumAggregateOutputType | null
    _min: NotIncludedItemMinAggregateOutputType | null
    _max: NotIncludedItemMaxAggregateOutputType | null
  }

  type GetNotIncludedItemGroupByPayload<T extends NotIncludedItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotIncludedItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotIncludedItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotIncludedItemGroupByOutputType[P]>
            : GetScalarType<T[P], NotIncludedItemGroupByOutputType[P]>
        }
      >
    >


  export type NotIncludedItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notIncludedItem"]>

  export type NotIncludedItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notIncludedItem"]>

  export type NotIncludedItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notIncludedItem"]>

  export type NotIncludedItemSelectScalar = {
    id?: boolean
    name?: boolean
    propertyId?: boolean
  }

  export type NotIncludedItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "propertyId", ExtArgs["result"]["notIncludedItem"]>
  export type NotIncludedItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type NotIncludedItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type NotIncludedItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $NotIncludedItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotIncludedItem"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      propertyId: number
    }, ExtArgs["result"]["notIncludedItem"]>
    composites: {}
  }

  type NotIncludedItemGetPayload<S extends boolean | null | undefined | NotIncludedItemDefaultArgs> = $Result.GetResult<Prisma.$NotIncludedItemPayload, S>

  type NotIncludedItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotIncludedItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotIncludedItemCountAggregateInputType | true
    }

  export interface NotIncludedItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotIncludedItem'], meta: { name: 'NotIncludedItem' } }
    /**
     * Find zero or one NotIncludedItem that matches the filter.
     * @param {NotIncludedItemFindUniqueArgs} args - Arguments to find a NotIncludedItem
     * @example
     * // Get one NotIncludedItem
     * const notIncludedItem = await prisma.notIncludedItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotIncludedItemFindUniqueArgs>(args: SelectSubset<T, NotIncludedItemFindUniqueArgs<ExtArgs>>): Prisma__NotIncludedItemClient<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotIncludedItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotIncludedItemFindUniqueOrThrowArgs} args - Arguments to find a NotIncludedItem
     * @example
     * // Get one NotIncludedItem
     * const notIncludedItem = await prisma.notIncludedItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotIncludedItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NotIncludedItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotIncludedItemClient<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotIncludedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotIncludedItemFindFirstArgs} args - Arguments to find a NotIncludedItem
     * @example
     * // Get one NotIncludedItem
     * const notIncludedItem = await prisma.notIncludedItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotIncludedItemFindFirstArgs>(args?: SelectSubset<T, NotIncludedItemFindFirstArgs<ExtArgs>>): Prisma__NotIncludedItemClient<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotIncludedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotIncludedItemFindFirstOrThrowArgs} args - Arguments to find a NotIncludedItem
     * @example
     * // Get one NotIncludedItem
     * const notIncludedItem = await prisma.notIncludedItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotIncludedItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NotIncludedItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotIncludedItemClient<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotIncludedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotIncludedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotIncludedItems
     * const notIncludedItems = await prisma.notIncludedItem.findMany()
     * 
     * // Get first 10 NotIncludedItems
     * const notIncludedItems = await prisma.notIncludedItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notIncludedItemWithIdOnly = await prisma.notIncludedItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotIncludedItemFindManyArgs>(args?: SelectSubset<T, NotIncludedItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotIncludedItem.
     * @param {NotIncludedItemCreateArgs} args - Arguments to create a NotIncludedItem.
     * @example
     * // Create one NotIncludedItem
     * const NotIncludedItem = await prisma.notIncludedItem.create({
     *   data: {
     *     // ... data to create a NotIncludedItem
     *   }
     * })
     * 
     */
    create<T extends NotIncludedItemCreateArgs>(args: SelectSubset<T, NotIncludedItemCreateArgs<ExtArgs>>): Prisma__NotIncludedItemClient<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotIncludedItems.
     * @param {NotIncludedItemCreateManyArgs} args - Arguments to create many NotIncludedItems.
     * @example
     * // Create many NotIncludedItems
     * const notIncludedItem = await prisma.notIncludedItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotIncludedItemCreateManyArgs>(args?: SelectSubset<T, NotIncludedItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotIncludedItems and returns the data saved in the database.
     * @param {NotIncludedItemCreateManyAndReturnArgs} args - Arguments to create many NotIncludedItems.
     * @example
     * // Create many NotIncludedItems
     * const notIncludedItem = await prisma.notIncludedItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotIncludedItems and only return the `id`
     * const notIncludedItemWithIdOnly = await prisma.notIncludedItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotIncludedItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NotIncludedItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotIncludedItem.
     * @param {NotIncludedItemDeleteArgs} args - Arguments to delete one NotIncludedItem.
     * @example
     * // Delete one NotIncludedItem
     * const NotIncludedItem = await prisma.notIncludedItem.delete({
     *   where: {
     *     // ... filter to delete one NotIncludedItem
     *   }
     * })
     * 
     */
    delete<T extends NotIncludedItemDeleteArgs>(args: SelectSubset<T, NotIncludedItemDeleteArgs<ExtArgs>>): Prisma__NotIncludedItemClient<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotIncludedItem.
     * @param {NotIncludedItemUpdateArgs} args - Arguments to update one NotIncludedItem.
     * @example
     * // Update one NotIncludedItem
     * const notIncludedItem = await prisma.notIncludedItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotIncludedItemUpdateArgs>(args: SelectSubset<T, NotIncludedItemUpdateArgs<ExtArgs>>): Prisma__NotIncludedItemClient<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotIncludedItems.
     * @param {NotIncludedItemDeleteManyArgs} args - Arguments to filter NotIncludedItems to delete.
     * @example
     * // Delete a few NotIncludedItems
     * const { count } = await prisma.notIncludedItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotIncludedItemDeleteManyArgs>(args?: SelectSubset<T, NotIncludedItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotIncludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotIncludedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotIncludedItems
     * const notIncludedItem = await prisma.notIncludedItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotIncludedItemUpdateManyArgs>(args: SelectSubset<T, NotIncludedItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotIncludedItems and returns the data updated in the database.
     * @param {NotIncludedItemUpdateManyAndReturnArgs} args - Arguments to update many NotIncludedItems.
     * @example
     * // Update many NotIncludedItems
     * const notIncludedItem = await prisma.notIncludedItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotIncludedItems and only return the `id`
     * const notIncludedItemWithIdOnly = await prisma.notIncludedItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotIncludedItemUpdateManyAndReturnArgs>(args: SelectSubset<T, NotIncludedItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotIncludedItem.
     * @param {NotIncludedItemUpsertArgs} args - Arguments to update or create a NotIncludedItem.
     * @example
     * // Update or create a NotIncludedItem
     * const notIncludedItem = await prisma.notIncludedItem.upsert({
     *   create: {
     *     // ... data to create a NotIncludedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotIncludedItem we want to update
     *   }
     * })
     */
    upsert<T extends NotIncludedItemUpsertArgs>(args: SelectSubset<T, NotIncludedItemUpsertArgs<ExtArgs>>): Prisma__NotIncludedItemClient<$Result.GetResult<Prisma.$NotIncludedItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotIncludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotIncludedItemCountArgs} args - Arguments to filter NotIncludedItems to count.
     * @example
     * // Count the number of NotIncludedItems
     * const count = await prisma.notIncludedItem.count({
     *   where: {
     *     // ... the filter for the NotIncludedItems we want to count
     *   }
     * })
    **/
    count<T extends NotIncludedItemCountArgs>(
      args?: Subset<T, NotIncludedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotIncludedItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotIncludedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotIncludedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotIncludedItemAggregateArgs>(args: Subset<T, NotIncludedItemAggregateArgs>): Prisma.PrismaPromise<GetNotIncludedItemAggregateType<T>>

    /**
     * Group by NotIncludedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotIncludedItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotIncludedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotIncludedItemGroupByArgs['orderBy'] }
        : { orderBy?: NotIncludedItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotIncludedItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotIncludedItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotIncludedItem model
   */
  readonly fields: NotIncludedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotIncludedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotIncludedItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotIncludedItem model
   */
  interface NotIncludedItemFieldRefs {
    readonly id: FieldRef<"NotIncludedItem", 'Int'>
    readonly name: FieldRef<"NotIncludedItem", 'String'>
    readonly propertyId: FieldRef<"NotIncludedItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NotIncludedItem findUnique
   */
  export type NotIncludedItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * Filter, which NotIncludedItem to fetch.
     */
    where: NotIncludedItemWhereUniqueInput
  }

  /**
   * NotIncludedItem findUniqueOrThrow
   */
  export type NotIncludedItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * Filter, which NotIncludedItem to fetch.
     */
    where: NotIncludedItemWhereUniqueInput
  }

  /**
   * NotIncludedItem findFirst
   */
  export type NotIncludedItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * Filter, which NotIncludedItem to fetch.
     */
    where?: NotIncludedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotIncludedItems to fetch.
     */
    orderBy?: NotIncludedItemOrderByWithRelationInput | NotIncludedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotIncludedItems.
     */
    cursor?: NotIncludedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotIncludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotIncludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotIncludedItems.
     */
    distinct?: NotIncludedItemScalarFieldEnum | NotIncludedItemScalarFieldEnum[]
  }

  /**
   * NotIncludedItem findFirstOrThrow
   */
  export type NotIncludedItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * Filter, which NotIncludedItem to fetch.
     */
    where?: NotIncludedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotIncludedItems to fetch.
     */
    orderBy?: NotIncludedItemOrderByWithRelationInput | NotIncludedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotIncludedItems.
     */
    cursor?: NotIncludedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotIncludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotIncludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotIncludedItems.
     */
    distinct?: NotIncludedItemScalarFieldEnum | NotIncludedItemScalarFieldEnum[]
  }

  /**
   * NotIncludedItem findMany
   */
  export type NotIncludedItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * Filter, which NotIncludedItems to fetch.
     */
    where?: NotIncludedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotIncludedItems to fetch.
     */
    orderBy?: NotIncludedItemOrderByWithRelationInput | NotIncludedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotIncludedItems.
     */
    cursor?: NotIncludedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotIncludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotIncludedItems.
     */
    skip?: number
    distinct?: NotIncludedItemScalarFieldEnum | NotIncludedItemScalarFieldEnum[]
  }

  /**
   * NotIncludedItem create
   */
  export type NotIncludedItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * The data needed to create a NotIncludedItem.
     */
    data: XOR<NotIncludedItemCreateInput, NotIncludedItemUncheckedCreateInput>
  }

  /**
   * NotIncludedItem createMany
   */
  export type NotIncludedItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotIncludedItems.
     */
    data: NotIncludedItemCreateManyInput | NotIncludedItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotIncludedItem createManyAndReturn
   */
  export type NotIncludedItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * The data used to create many NotIncludedItems.
     */
    data: NotIncludedItemCreateManyInput | NotIncludedItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotIncludedItem update
   */
  export type NotIncludedItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * The data needed to update a NotIncludedItem.
     */
    data: XOR<NotIncludedItemUpdateInput, NotIncludedItemUncheckedUpdateInput>
    /**
     * Choose, which NotIncludedItem to update.
     */
    where: NotIncludedItemWhereUniqueInput
  }

  /**
   * NotIncludedItem updateMany
   */
  export type NotIncludedItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotIncludedItems.
     */
    data: XOR<NotIncludedItemUpdateManyMutationInput, NotIncludedItemUncheckedUpdateManyInput>
    /**
     * Filter which NotIncludedItems to update
     */
    where?: NotIncludedItemWhereInput
    /**
     * Limit how many NotIncludedItems to update.
     */
    limit?: number
  }

  /**
   * NotIncludedItem updateManyAndReturn
   */
  export type NotIncludedItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * The data used to update NotIncludedItems.
     */
    data: XOR<NotIncludedItemUpdateManyMutationInput, NotIncludedItemUncheckedUpdateManyInput>
    /**
     * Filter which NotIncludedItems to update
     */
    where?: NotIncludedItemWhereInput
    /**
     * Limit how many NotIncludedItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotIncludedItem upsert
   */
  export type NotIncludedItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * The filter to search for the NotIncludedItem to update in case it exists.
     */
    where: NotIncludedItemWhereUniqueInput
    /**
     * In case the NotIncludedItem found by the `where` argument doesn't exist, create a new NotIncludedItem with this data.
     */
    create: XOR<NotIncludedItemCreateInput, NotIncludedItemUncheckedCreateInput>
    /**
     * In case the NotIncludedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotIncludedItemUpdateInput, NotIncludedItemUncheckedUpdateInput>
  }

  /**
   * NotIncludedItem delete
   */
  export type NotIncludedItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
    /**
     * Filter which NotIncludedItem to delete.
     */
    where: NotIncludedItemWhereUniqueInput
  }

  /**
   * NotIncludedItem deleteMany
   */
  export type NotIncludedItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotIncludedItems to delete
     */
    where?: NotIncludedItemWhereInput
    /**
     * Limit how many NotIncludedItems to delete.
     */
    limit?: number
  }

  /**
   * NotIncludedItem without action
   */
  export type NotIncludedItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotIncludedItem
     */
    select?: NotIncludedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotIncludedItem
     */
    omit?: NotIncludedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotIncludedItemInclude<ExtArgs> | null
  }


  /**
   * Model Visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorAvgAggregateOutputType = {
    propertyId: number | null
  }

  export type VisitorSumAggregateOutputType = {
    propertyId: number | null
  }

  export type VisitorMinAggregateOutputType = {
    id: string | null
    email: string | null
    favorite: boolean | null
    createdAt: Date | null
    upDatedAt: Date | null
    propertyId: number | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: string | null
    email: string | null
    favorite: boolean | null
    createdAt: Date | null
    upDatedAt: Date | null
    propertyId: number | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    email: number
    favorite: number
    createdAt: number
    upDatedAt: number
    propertyId: number
    _all: number
  }


  export type VisitorAvgAggregateInputType = {
    propertyId?: true
  }

  export type VisitorSumAggregateInputType = {
    propertyId?: true
  }

  export type VisitorMinAggregateInputType = {
    id?: true
    email?: true
    favorite?: true
    createdAt?: true
    upDatedAt?: true
    propertyId?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    email?: true
    favorite?: true
    createdAt?: true
    upDatedAt?: true
    propertyId?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    email?: true
    favorite?: true
    createdAt?: true
    upDatedAt?: true
    propertyId?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithAggregationInput | VisitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _avg?: VisitorAvgAggregateInputType
    _sum?: VisitorSumAggregateInputType
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    id: string
    email: string
    favorite: boolean
    createdAt: Date
    upDatedAt: Date
    propertyId: number
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    favorite?: boolean
    createdAt?: boolean
    upDatedAt?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    favorite?: boolean
    createdAt?: boolean
    upDatedAt?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    favorite?: boolean
    createdAt?: boolean
    upDatedAt?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectScalar = {
    id?: boolean
    email?: boolean
    favorite?: boolean
    createdAt?: boolean
    upDatedAt?: boolean
    propertyId?: boolean
  }

  export type VisitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "favorite" | "createdAt" | "upDatedAt" | "propertyId", ExtArgs["result"]["visitor"]>
  export type VisitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $VisitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitor"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      favorite: boolean
      createdAt: Date
      upDatedAt: Date
      propertyId: number
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }

  type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = $Result.GetResult<Prisma.$VisitorPayload, S>

  type VisitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitor'], meta: { name: 'Visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorFindUniqueArgs>(args: SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorFindFirstArgs>(args?: SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorFindManyArgs>(args?: SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
     */
    create<T extends VisitorCreateArgs>(args: SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorCreateManyArgs>(args?: SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitors and returns the data saved in the database.
     * @param {VisitorCreateManyAndReturnArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
     */
    delete<T extends VisitorDeleteArgs>(args: SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorUpdateArgs>(args: SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorDeleteManyArgs>(args?: SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorUpdateManyArgs>(args: SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors and returns the data updated in the database.
     * @param {VisitorUpdateManyAndReturnArgs} args - Arguments to update many Visitors.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
     */
    upsert<T extends VisitorUpsertArgs>(args: SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitor model
   */
  readonly fields: VisitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visitor model
   */
  interface VisitorFieldRefs {
    readonly id: FieldRef<"Visitor", 'String'>
    readonly email: FieldRef<"Visitor", 'String'>
    readonly favorite: FieldRef<"Visitor", 'Boolean'>
    readonly createdAt: FieldRef<"Visitor", 'DateTime'>
    readonly upDatedAt: FieldRef<"Visitor", 'DateTime'>
    readonly propertyId: FieldRef<"Visitor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Visitor findUnique
   */
  export type VisitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findFirst
   */
  export type VisitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor create
   */
  export type VisitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }

  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor createManyAndReturn
   */
  export type VisitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor update
   */
  export type VisitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor updateManyAndReturn
   */
  export type VisitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }

  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to delete.
     */
    limit?: number
  }

  /**
   * Visitor without action
   */
  export type VisitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    name: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    twoFactorCode: string | null
    twoFactorExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    name: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    twoFactorCode: string | null
    twoFactorExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    image: number
    name: number
    passwordHash: number
    role: number
    twoFactorCode: number
    twoFactorExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    image?: true
    name?: true
    passwordHash?: true
    role?: true
    twoFactorCode?: true
    twoFactorExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    image?: true
    name?: true
    passwordHash?: true
    role?: true
    twoFactorCode?: true
    twoFactorExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    image?: true
    name?: true
    passwordHash?: true
    role?: true
    twoFactorCode?: true
    twoFactorExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    emailVerified: Date | null
    image: string | null
    name: string
    passwordHash: string | null
    role: $Enums.UserRole
    twoFactorCode: string | null
    twoFactorExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    name?: boolean
    passwordHash?: boolean
    role?: boolean
    twoFactorCode?: boolean
    twoFactorExpires?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    properties?: boolean | User$propertiesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    name?: boolean
    passwordHash?: boolean
    role?: boolean
    twoFactorCode?: boolean
    twoFactorExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    name?: boolean
    passwordHash?: boolean
    role?: boolean
    twoFactorCode?: boolean
    twoFactorExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    name?: boolean
    passwordHash?: boolean
    role?: boolean
    twoFactorCode?: boolean
    twoFactorExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailVerified" | "image" | "name" | "passwordHash" | "role" | "twoFactorCode" | "twoFactorExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    properties?: boolean | User$propertiesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: Date | null
      image: string | null
      name: string
      passwordHash: string | null
      role: $Enums.UserRole
      twoFactorCode: string | null
      twoFactorExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly twoFactorCode: FieldRef<"User", 'String'>
    readonly twoFactorExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactFormScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    message: 'message',
    agreeToPolicy: 'agreeToPolicy',
    phoneId: 'phoneId'
  };

  export type ContactFormScalarFieldEnum = (typeof ContactFormScalarFieldEnum)[keyof typeof ContactFormScalarFieldEnum]


  export const PhoneNumberScalarFieldEnum: {
    id: 'id',
    code: 'code',
    phoneCode: 'phoneCode',
    number: 'number',
    fullNumber: 'fullNumber'
  };

  export type PhoneNumberScalarFieldEnum = (typeof PhoneNumberScalarFieldEnum)[keyof typeof PhoneNumberScalarFieldEnum]


  export const PropertySaleRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fullName: 'fullName',
    email: 'email',
    propertyAddress: 'propertyAddress',
    propertyType: 'propertyType',
    other: 'other',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    squareFootage: 'squareFootage',
    reasonForSelling: 'reasonForSelling',
    timeline: 'timeline',
    additionalInfo: 'additionalInfo',
    agreeToPolicy: 'agreeToPolicy',
    phoneId: 'phoneId'
  };

  export type PropertySaleRequestScalarFieldEnum = (typeof PropertySaleRequestScalarFieldEnum)[keyof typeof PropertySaleRequestScalarFieldEnum]


  export const SaleRequestFormPhoneScalarFieldEnum: {
    id: 'id',
    code: 'code',
    phoneCode: 'phoneCode',
    number: 'number',
    fullNumber: 'fullNumber'
  };

  export type SaleRequestFormPhoneScalarFieldEnum = (typeof SaleRequestFormPhoneScalarFieldEnum)[keyof typeof SaleRequestFormPhoneScalarFieldEnum]


  export const BookingFormScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    property: 'property',
    bookingDate: 'bookingDate',
    bookingTime: 'bookingTime',
    agreeToPolicy: 'agreeToPolicy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    phoneId: 'phoneId'
  };

  export type BookingFormScalarFieldEnum = (typeof BookingFormScalarFieldEnum)[keyof typeof BookingFormScalarFieldEnum]


  export const BookingFormPhoneScalarFieldEnum: {
    id: 'id',
    code: 'code',
    phoneCode: 'phoneCode',
    number: 'number',
    fullNumber: 'fullNumber'
  };

  export type BookingFormPhoneScalarFieldEnum = (typeof BookingFormPhoneScalarFieldEnum)[keyof typeof BookingFormPhoneScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    location: 'location',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    size: 'size',
    category: 'category',
    propertyType: 'propertyType',
    parkingSpace: 'parkingSpace',
    petsAllowed: 'petsAllowed',
    verified: 'verified',
    isNew: 'isNew',
    featured: 'featured',
    hasVideo: 'hasVideo',
    views: 'views',
    publishedDate: 'publishedDate',
    createdAt: 'createdAt',
    adminUserId: 'adminUserId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    isMain: 'isMain',
    propertyId: 'propertyId'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    propertyId: 'propertyId'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const NotIncludedItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    propertyId: 'propertyId'
  };

  export type NotIncludedItemScalarFieldEnum = (typeof NotIncludedItemScalarFieldEnum)[keyof typeof NotIncludedItemScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    favorite: 'favorite',
    createdAt: 'createdAt',
    upDatedAt: 'upDatedAt',
    propertyId: 'propertyId'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    name: 'name',
    passwordHash: 'passwordHash',
    role: 'role',
    twoFactorCode: 'twoFactorCode',
    twoFactorExpires: 'twoFactorExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ReasonForSelling'
   */
  export type EnumReasonForSellingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReasonForSelling'>
    


  /**
   * Reference to a field of type 'ReasonForSelling[]'
   */
  export type ListEnumReasonForSellingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReasonForSelling[]'>
    


  /**
   * Reference to a field of type 'Timeline'
   */
  export type EnumTimelineFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Timeline'>
    


  /**
   * Reference to a field of type 'Timeline[]'
   */
  export type ListEnumTimelineFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Timeline[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    
  /**
   * Deep Input Types
   */


  export type ContactFormWhereInput = {
    AND?: ContactFormWhereInput | ContactFormWhereInput[]
    OR?: ContactFormWhereInput[]
    NOT?: ContactFormWhereInput | ContactFormWhereInput[]
    id?: StringFilter<"ContactForm"> | string
    createdAt?: DateTimeFilter<"ContactForm"> | Date | string
    updatedAt?: DateTimeFilter<"ContactForm"> | Date | string
    firstName?: StringFilter<"ContactForm"> | string
    lastName?: StringFilter<"ContactForm"> | string
    email?: StringFilter<"ContactForm"> | string
    message?: StringFilter<"ContactForm"> | string
    agreeToPolicy?: BoolFilter<"ContactForm"> | boolean
    phoneId?: StringNullableFilter<"ContactForm"> | string | null
    phone?: XOR<PhoneNumberNullableScalarRelationFilter, PhoneNumberWhereInput> | null
  }

  export type ContactFormOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrderInput | SortOrder
    phone?: PhoneNumberOrderByWithRelationInput
  }

  export type ContactFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneId?: string
    AND?: ContactFormWhereInput | ContactFormWhereInput[]
    OR?: ContactFormWhereInput[]
    NOT?: ContactFormWhereInput | ContactFormWhereInput[]
    createdAt?: DateTimeFilter<"ContactForm"> | Date | string
    updatedAt?: DateTimeFilter<"ContactForm"> | Date | string
    firstName?: StringFilter<"ContactForm"> | string
    lastName?: StringFilter<"ContactForm"> | string
    email?: StringFilter<"ContactForm"> | string
    message?: StringFilter<"ContactForm"> | string
    agreeToPolicy?: BoolFilter<"ContactForm"> | boolean
    phone?: XOR<PhoneNumberNullableScalarRelationFilter, PhoneNumberWhereInput> | null
  }, "id" | "phoneId">

  export type ContactFormOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrderInput | SortOrder
    _count?: ContactFormCountOrderByAggregateInput
    _max?: ContactFormMaxOrderByAggregateInput
    _min?: ContactFormMinOrderByAggregateInput
  }

  export type ContactFormScalarWhereWithAggregatesInput = {
    AND?: ContactFormScalarWhereWithAggregatesInput | ContactFormScalarWhereWithAggregatesInput[]
    OR?: ContactFormScalarWhereWithAggregatesInput[]
    NOT?: ContactFormScalarWhereWithAggregatesInput | ContactFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactForm"> | Date | string
    firstName?: StringWithAggregatesFilter<"ContactForm"> | string
    lastName?: StringWithAggregatesFilter<"ContactForm"> | string
    email?: StringWithAggregatesFilter<"ContactForm"> | string
    message?: StringWithAggregatesFilter<"ContactForm"> | string
    agreeToPolicy?: BoolWithAggregatesFilter<"ContactForm"> | boolean
    phoneId?: StringNullableWithAggregatesFilter<"ContactForm"> | string | null
  }

  export type PhoneNumberWhereInput = {
    AND?: PhoneNumberWhereInput | PhoneNumberWhereInput[]
    OR?: PhoneNumberWhereInput[]
    NOT?: PhoneNumberWhereInput | PhoneNumberWhereInput[]
    id?: StringFilter<"PhoneNumber"> | string
    code?: StringFilter<"PhoneNumber"> | string
    phoneCode?: StringFilter<"PhoneNumber"> | string
    number?: StringFilter<"PhoneNumber"> | string
    fullNumber?: StringFilter<"PhoneNumber"> | string
    contact?: XOR<ContactFormNullableScalarRelationFilter, ContactFormWhereInput> | null
  }

  export type PhoneNumberOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
    contact?: ContactFormOrderByWithRelationInput
  }

  export type PhoneNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhoneNumberWhereInput | PhoneNumberWhereInput[]
    OR?: PhoneNumberWhereInput[]
    NOT?: PhoneNumberWhereInput | PhoneNumberWhereInput[]
    code?: StringFilter<"PhoneNumber"> | string
    phoneCode?: StringFilter<"PhoneNumber"> | string
    number?: StringFilter<"PhoneNumber"> | string
    fullNumber?: StringFilter<"PhoneNumber"> | string
    contact?: XOR<ContactFormNullableScalarRelationFilter, ContactFormWhereInput> | null
  }, "id">

  export type PhoneNumberOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
    _count?: PhoneNumberCountOrderByAggregateInput
    _max?: PhoneNumberMaxOrderByAggregateInput
    _min?: PhoneNumberMinOrderByAggregateInput
  }

  export type PhoneNumberScalarWhereWithAggregatesInput = {
    AND?: PhoneNumberScalarWhereWithAggregatesInput | PhoneNumberScalarWhereWithAggregatesInput[]
    OR?: PhoneNumberScalarWhereWithAggregatesInput[]
    NOT?: PhoneNumberScalarWhereWithAggregatesInput | PhoneNumberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhoneNumber"> | string
    code?: StringWithAggregatesFilter<"PhoneNumber"> | string
    phoneCode?: StringWithAggregatesFilter<"PhoneNumber"> | string
    number?: StringWithAggregatesFilter<"PhoneNumber"> | string
    fullNumber?: StringWithAggregatesFilter<"PhoneNumber"> | string
  }

  export type PropertySaleRequestWhereInput = {
    AND?: PropertySaleRequestWhereInput | PropertySaleRequestWhereInput[]
    OR?: PropertySaleRequestWhereInput[]
    NOT?: PropertySaleRequestWhereInput | PropertySaleRequestWhereInput[]
    id?: StringFilter<"PropertySaleRequest"> | string
    createdAt?: DateTimeFilter<"PropertySaleRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PropertySaleRequest"> | Date | string
    fullName?: StringFilter<"PropertySaleRequest"> | string
    email?: StringFilter<"PropertySaleRequest"> | string
    propertyAddress?: StringFilter<"PropertySaleRequest"> | string
    propertyType?: EnumPropertyTypeFilter<"PropertySaleRequest"> | $Enums.PropertyType
    other?: StringNullableFilter<"PropertySaleRequest"> | string | null
    bedrooms?: IntFilter<"PropertySaleRequest"> | number
    bathrooms?: IntFilter<"PropertySaleRequest"> | number
    squareFootage?: IntFilter<"PropertySaleRequest"> | number
    reasonForSelling?: EnumReasonForSellingFilter<"PropertySaleRequest"> | $Enums.ReasonForSelling
    timeline?: EnumTimelineFilter<"PropertySaleRequest"> | $Enums.Timeline
    additionalInfo?: StringNullableFilter<"PropertySaleRequest"> | string | null
    agreeToPolicy?: BoolFilter<"PropertySaleRequest"> | boolean
    phoneId?: StringFilter<"PropertySaleRequest"> | string
    phone?: XOR<SaleRequestFormPhoneNullableScalarRelationFilter, SaleRequestFormPhoneWhereInput> | null
  }

  export type PropertySaleRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    propertyAddress?: SortOrder
    propertyType?: SortOrder
    other?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFootage?: SortOrder
    reasonForSelling?: SortOrder
    timeline?: SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrder
    phone?: SaleRequestFormPhoneOrderByWithRelationInput
  }

  export type PropertySaleRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneId?: string
    AND?: PropertySaleRequestWhereInput | PropertySaleRequestWhereInput[]
    OR?: PropertySaleRequestWhereInput[]
    NOT?: PropertySaleRequestWhereInput | PropertySaleRequestWhereInput[]
    createdAt?: DateTimeFilter<"PropertySaleRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PropertySaleRequest"> | Date | string
    fullName?: StringFilter<"PropertySaleRequest"> | string
    email?: StringFilter<"PropertySaleRequest"> | string
    propertyAddress?: StringFilter<"PropertySaleRequest"> | string
    propertyType?: EnumPropertyTypeFilter<"PropertySaleRequest"> | $Enums.PropertyType
    other?: StringNullableFilter<"PropertySaleRequest"> | string | null
    bedrooms?: IntFilter<"PropertySaleRequest"> | number
    bathrooms?: IntFilter<"PropertySaleRequest"> | number
    squareFootage?: IntFilter<"PropertySaleRequest"> | number
    reasonForSelling?: EnumReasonForSellingFilter<"PropertySaleRequest"> | $Enums.ReasonForSelling
    timeline?: EnumTimelineFilter<"PropertySaleRequest"> | $Enums.Timeline
    additionalInfo?: StringNullableFilter<"PropertySaleRequest"> | string | null
    agreeToPolicy?: BoolFilter<"PropertySaleRequest"> | boolean
    phone?: XOR<SaleRequestFormPhoneNullableScalarRelationFilter, SaleRequestFormPhoneWhereInput> | null
  }, "id" | "phoneId">

  export type PropertySaleRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    propertyAddress?: SortOrder
    propertyType?: SortOrder
    other?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFootage?: SortOrder
    reasonForSelling?: SortOrder
    timeline?: SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrder
    _count?: PropertySaleRequestCountOrderByAggregateInput
    _avg?: PropertySaleRequestAvgOrderByAggregateInput
    _max?: PropertySaleRequestMaxOrderByAggregateInput
    _min?: PropertySaleRequestMinOrderByAggregateInput
    _sum?: PropertySaleRequestSumOrderByAggregateInput
  }

  export type PropertySaleRequestScalarWhereWithAggregatesInput = {
    AND?: PropertySaleRequestScalarWhereWithAggregatesInput | PropertySaleRequestScalarWhereWithAggregatesInput[]
    OR?: PropertySaleRequestScalarWhereWithAggregatesInput[]
    NOT?: PropertySaleRequestScalarWhereWithAggregatesInput | PropertySaleRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertySaleRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertySaleRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertySaleRequest"> | Date | string
    fullName?: StringWithAggregatesFilter<"PropertySaleRequest"> | string
    email?: StringWithAggregatesFilter<"PropertySaleRequest"> | string
    propertyAddress?: StringWithAggregatesFilter<"PropertySaleRequest"> | string
    propertyType?: EnumPropertyTypeWithAggregatesFilter<"PropertySaleRequest"> | $Enums.PropertyType
    other?: StringNullableWithAggregatesFilter<"PropertySaleRequest"> | string | null
    bedrooms?: IntWithAggregatesFilter<"PropertySaleRequest"> | number
    bathrooms?: IntWithAggregatesFilter<"PropertySaleRequest"> | number
    squareFootage?: IntWithAggregatesFilter<"PropertySaleRequest"> | number
    reasonForSelling?: EnumReasonForSellingWithAggregatesFilter<"PropertySaleRequest"> | $Enums.ReasonForSelling
    timeline?: EnumTimelineWithAggregatesFilter<"PropertySaleRequest"> | $Enums.Timeline
    additionalInfo?: StringNullableWithAggregatesFilter<"PropertySaleRequest"> | string | null
    agreeToPolicy?: BoolWithAggregatesFilter<"PropertySaleRequest"> | boolean
    phoneId?: StringWithAggregatesFilter<"PropertySaleRequest"> | string
  }

  export type SaleRequestFormPhoneWhereInput = {
    AND?: SaleRequestFormPhoneWhereInput | SaleRequestFormPhoneWhereInput[]
    OR?: SaleRequestFormPhoneWhereInput[]
    NOT?: SaleRequestFormPhoneWhereInput | SaleRequestFormPhoneWhereInput[]
    id?: StringFilter<"SaleRequestFormPhone"> | string
    code?: StringFilter<"SaleRequestFormPhone"> | string
    phoneCode?: StringFilter<"SaleRequestFormPhone"> | string
    number?: StringFilter<"SaleRequestFormPhone"> | string
    fullNumber?: StringFilter<"SaleRequestFormPhone"> | string
    contact?: XOR<PropertySaleRequestNullableScalarRelationFilter, PropertySaleRequestWhereInput> | null
  }

  export type SaleRequestFormPhoneOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
    contact?: PropertySaleRequestOrderByWithRelationInput
  }

  export type SaleRequestFormPhoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleRequestFormPhoneWhereInput | SaleRequestFormPhoneWhereInput[]
    OR?: SaleRequestFormPhoneWhereInput[]
    NOT?: SaleRequestFormPhoneWhereInput | SaleRequestFormPhoneWhereInput[]
    code?: StringFilter<"SaleRequestFormPhone"> | string
    phoneCode?: StringFilter<"SaleRequestFormPhone"> | string
    number?: StringFilter<"SaleRequestFormPhone"> | string
    fullNumber?: StringFilter<"SaleRequestFormPhone"> | string
    contact?: XOR<PropertySaleRequestNullableScalarRelationFilter, PropertySaleRequestWhereInput> | null
  }, "id">

  export type SaleRequestFormPhoneOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
    _count?: SaleRequestFormPhoneCountOrderByAggregateInput
    _max?: SaleRequestFormPhoneMaxOrderByAggregateInput
    _min?: SaleRequestFormPhoneMinOrderByAggregateInput
  }

  export type SaleRequestFormPhoneScalarWhereWithAggregatesInput = {
    AND?: SaleRequestFormPhoneScalarWhereWithAggregatesInput | SaleRequestFormPhoneScalarWhereWithAggregatesInput[]
    OR?: SaleRequestFormPhoneScalarWhereWithAggregatesInput[]
    NOT?: SaleRequestFormPhoneScalarWhereWithAggregatesInput | SaleRequestFormPhoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleRequestFormPhone"> | string
    code?: StringWithAggregatesFilter<"SaleRequestFormPhone"> | string
    phoneCode?: StringWithAggregatesFilter<"SaleRequestFormPhone"> | string
    number?: StringWithAggregatesFilter<"SaleRequestFormPhone"> | string
    fullNumber?: StringWithAggregatesFilter<"SaleRequestFormPhone"> | string
  }

  export type BookingFormWhereInput = {
    AND?: BookingFormWhereInput | BookingFormWhereInput[]
    OR?: BookingFormWhereInput[]
    NOT?: BookingFormWhereInput | BookingFormWhereInput[]
    id?: StringFilter<"BookingForm"> | string
    fullName?: StringFilter<"BookingForm"> | string
    email?: StringFilter<"BookingForm"> | string
    property?: StringFilter<"BookingForm"> | string
    bookingDate?: DateTimeFilter<"BookingForm"> | Date | string
    bookingTime?: DateTimeFilter<"BookingForm"> | Date | string
    agreeToPolicy?: BoolFilter<"BookingForm"> | boolean
    createdAt?: DateTimeFilter<"BookingForm"> | Date | string
    updatedAt?: DateTimeFilter<"BookingForm"> | Date | string
    phoneId?: StringNullableFilter<"BookingForm"> | string | null
    phone?: XOR<BookingFormPhoneNullableScalarRelationFilter, BookingFormPhoneWhereInput> | null
  }

  export type BookingFormOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    property?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    agreeToPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phoneId?: SortOrderInput | SortOrder
    phone?: BookingFormPhoneOrderByWithRelationInput
  }

  export type BookingFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneId?: string
    AND?: BookingFormWhereInput | BookingFormWhereInput[]
    OR?: BookingFormWhereInput[]
    NOT?: BookingFormWhereInput | BookingFormWhereInput[]
    fullName?: StringFilter<"BookingForm"> | string
    email?: StringFilter<"BookingForm"> | string
    property?: StringFilter<"BookingForm"> | string
    bookingDate?: DateTimeFilter<"BookingForm"> | Date | string
    bookingTime?: DateTimeFilter<"BookingForm"> | Date | string
    agreeToPolicy?: BoolFilter<"BookingForm"> | boolean
    createdAt?: DateTimeFilter<"BookingForm"> | Date | string
    updatedAt?: DateTimeFilter<"BookingForm"> | Date | string
    phone?: XOR<BookingFormPhoneNullableScalarRelationFilter, BookingFormPhoneWhereInput> | null
  }, "id" | "phoneId">

  export type BookingFormOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    property?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    agreeToPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phoneId?: SortOrderInput | SortOrder
    _count?: BookingFormCountOrderByAggregateInput
    _max?: BookingFormMaxOrderByAggregateInput
    _min?: BookingFormMinOrderByAggregateInput
  }

  export type BookingFormScalarWhereWithAggregatesInput = {
    AND?: BookingFormScalarWhereWithAggregatesInput | BookingFormScalarWhereWithAggregatesInput[]
    OR?: BookingFormScalarWhereWithAggregatesInput[]
    NOT?: BookingFormScalarWhereWithAggregatesInput | BookingFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingForm"> | string
    fullName?: StringWithAggregatesFilter<"BookingForm"> | string
    email?: StringWithAggregatesFilter<"BookingForm"> | string
    property?: StringWithAggregatesFilter<"BookingForm"> | string
    bookingDate?: DateTimeWithAggregatesFilter<"BookingForm"> | Date | string
    bookingTime?: DateTimeWithAggregatesFilter<"BookingForm"> | Date | string
    agreeToPolicy?: BoolWithAggregatesFilter<"BookingForm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BookingForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookingForm"> | Date | string
    phoneId?: StringNullableWithAggregatesFilter<"BookingForm"> | string | null
  }

  export type BookingFormPhoneWhereInput = {
    AND?: BookingFormPhoneWhereInput | BookingFormPhoneWhereInput[]
    OR?: BookingFormPhoneWhereInput[]
    NOT?: BookingFormPhoneWhereInput | BookingFormPhoneWhereInput[]
    id?: StringFilter<"BookingFormPhone"> | string
    code?: StringFilter<"BookingFormPhone"> | string
    phoneCode?: StringFilter<"BookingFormPhone"> | string
    number?: StringFilter<"BookingFormPhone"> | string
    fullNumber?: StringFilter<"BookingFormPhone"> | string
    contact?: XOR<BookingFormNullableScalarRelationFilter, BookingFormWhereInput> | null
  }

  export type BookingFormPhoneOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
    contact?: BookingFormOrderByWithRelationInput
  }

  export type BookingFormPhoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingFormPhoneWhereInput | BookingFormPhoneWhereInput[]
    OR?: BookingFormPhoneWhereInput[]
    NOT?: BookingFormPhoneWhereInput | BookingFormPhoneWhereInput[]
    code?: StringFilter<"BookingFormPhone"> | string
    phoneCode?: StringFilter<"BookingFormPhone"> | string
    number?: StringFilter<"BookingFormPhone"> | string
    fullNumber?: StringFilter<"BookingFormPhone"> | string
    contact?: XOR<BookingFormNullableScalarRelationFilter, BookingFormWhereInput> | null
  }, "id">

  export type BookingFormPhoneOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
    _count?: BookingFormPhoneCountOrderByAggregateInput
    _max?: BookingFormPhoneMaxOrderByAggregateInput
    _min?: BookingFormPhoneMinOrderByAggregateInput
  }

  export type BookingFormPhoneScalarWhereWithAggregatesInput = {
    AND?: BookingFormPhoneScalarWhereWithAggregatesInput | BookingFormPhoneScalarWhereWithAggregatesInput[]
    OR?: BookingFormPhoneScalarWhereWithAggregatesInput[]
    NOT?: BookingFormPhoneScalarWhereWithAggregatesInput | BookingFormPhoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingFormPhone"> | string
    code?: StringWithAggregatesFilter<"BookingFormPhone"> | string
    phoneCode?: StringWithAggregatesFilter<"BookingFormPhone"> | string
    number?: StringWithAggregatesFilter<"BookingFormPhone"> | string
    fullNumber?: StringWithAggregatesFilter<"BookingFormPhone"> | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    price?: FloatFilter<"Property"> | number
    location?: StringFilter<"Property"> | string
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    size?: IntFilter<"Property"> | number
    category?: EnumCategoryFilter<"Property"> | $Enums.Category
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    parkingSpace?: IntFilter<"Property"> | number
    petsAllowed?: BoolFilter<"Property"> | boolean
    verified?: BoolFilter<"Property"> | boolean
    isNew?: BoolFilter<"Property"> | boolean
    featured?: BoolFilter<"Property"> | boolean
    hasVideo?: BoolFilter<"Property"> | boolean
    views?: IntFilter<"Property"> | number
    publishedDate?: DateTimeFilter<"Property"> | Date | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    adminUserId?: StringFilter<"Property"> | string
    images?: PropertyImageListRelationFilter
    amenities?: AmenityListRelationFilter
    notIncluded?: NotIncludedItemListRelationFilter
    visitors?: VisitorListRelationFilter
    adminUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    size?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    parkingSpace?: SortOrder
    petsAllowed?: SortOrder
    verified?: SortOrder
    isNew?: SortOrder
    featured?: SortOrder
    hasVideo?: SortOrder
    views?: SortOrder
    publishedDate?: SortOrder
    createdAt?: SortOrder
    adminUserId?: SortOrder
    images?: PropertyImageOrderByRelationAggregateInput
    amenities?: AmenityOrderByRelationAggregateInput
    notIncluded?: NotIncludedItemOrderByRelationAggregateInput
    visitors?: VisitorOrderByRelationAggregateInput
    adminUser?: UserOrderByWithRelationInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    price?: FloatFilter<"Property"> | number
    location?: StringFilter<"Property"> | string
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    size?: IntFilter<"Property"> | number
    category?: EnumCategoryFilter<"Property"> | $Enums.Category
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    parkingSpace?: IntFilter<"Property"> | number
    petsAllowed?: BoolFilter<"Property"> | boolean
    verified?: BoolFilter<"Property"> | boolean
    isNew?: BoolFilter<"Property"> | boolean
    featured?: BoolFilter<"Property"> | boolean
    hasVideo?: BoolFilter<"Property"> | boolean
    views?: IntFilter<"Property"> | number
    publishedDate?: DateTimeFilter<"Property"> | Date | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    adminUserId?: StringFilter<"Property"> | string
    images?: PropertyImageListRelationFilter
    amenities?: AmenityListRelationFilter
    notIncluded?: NotIncludedItemListRelationFilter
    visitors?: VisitorListRelationFilter
    adminUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    size?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    parkingSpace?: SortOrder
    petsAllowed?: SortOrder
    verified?: SortOrder
    isNew?: SortOrder
    featured?: SortOrder
    hasVideo?: SortOrder
    views?: SortOrder
    publishedDate?: SortOrder
    createdAt?: SortOrder
    adminUserId?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    price?: FloatWithAggregatesFilter<"Property"> | number
    location?: StringWithAggregatesFilter<"Property"> | string
    bedrooms?: IntWithAggregatesFilter<"Property"> | number
    bathrooms?: IntWithAggregatesFilter<"Property"> | number
    size?: IntWithAggregatesFilter<"Property"> | number
    category?: EnumCategoryWithAggregatesFilter<"Property"> | $Enums.Category
    propertyType?: EnumPropertyTypeWithAggregatesFilter<"Property"> | $Enums.PropertyType
    parkingSpace?: IntWithAggregatesFilter<"Property"> | number
    petsAllowed?: BoolWithAggregatesFilter<"Property"> | boolean
    verified?: BoolWithAggregatesFilter<"Property"> | boolean
    isNew?: BoolWithAggregatesFilter<"Property"> | boolean
    featured?: BoolWithAggregatesFilter<"Property"> | boolean
    hasVideo?: BoolWithAggregatesFilter<"Property"> | boolean
    views?: IntWithAggregatesFilter<"Property"> | number
    publishedDate?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    adminUserId?: StringWithAggregatesFilter<"Property"> | string
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    url?: StringFilter<"PropertyImage"> | string
    alt?: StringFilter<"PropertyImage"> | string
    isMain?: BoolFilter<"PropertyImage"> | boolean
    propertyId?: IntFilter<"PropertyImage"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    isMain?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    url?: StringFilter<"PropertyImage"> | string
    alt?: StringFilter<"PropertyImage"> | string
    isMain?: BoolFilter<"PropertyImage"> | boolean
    propertyId?: IntFilter<"PropertyImage"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    isMain?: SortOrder
    propertyId?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _avg?: PropertyImageAvgOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
    _sum?: PropertyImageSumOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyImage"> | number
    url?: StringWithAggregatesFilter<"PropertyImage"> | string
    alt?: StringWithAggregatesFilter<"PropertyImage"> | string
    isMain?: BoolWithAggregatesFilter<"PropertyImage"> | boolean
    propertyId?: IntWithAggregatesFilter<"PropertyImage"> | number
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    id?: IntFilter<"Amenity"> | number
    name?: StringFilter<"Amenity"> | string
    propertyId?: IntFilter<"Amenity"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type AmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    name?: StringFilter<"Amenity"> | string
    propertyId?: IntFilter<"Amenity"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type AmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _avg?: AmenityAvgOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
    _sum?: AmenitySumOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amenity"> | number
    name?: StringWithAggregatesFilter<"Amenity"> | string
    propertyId?: IntWithAggregatesFilter<"Amenity"> | number
  }

  export type NotIncludedItemWhereInput = {
    AND?: NotIncludedItemWhereInput | NotIncludedItemWhereInput[]
    OR?: NotIncludedItemWhereInput[]
    NOT?: NotIncludedItemWhereInput | NotIncludedItemWhereInput[]
    id?: IntFilter<"NotIncludedItem"> | number
    name?: StringFilter<"NotIncludedItem"> | string
    propertyId?: IntFilter<"NotIncludedItem"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type NotIncludedItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type NotIncludedItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotIncludedItemWhereInput | NotIncludedItemWhereInput[]
    OR?: NotIncludedItemWhereInput[]
    NOT?: NotIncludedItemWhereInput | NotIncludedItemWhereInput[]
    name?: StringFilter<"NotIncludedItem"> | string
    propertyId?: IntFilter<"NotIncludedItem"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type NotIncludedItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
    _count?: NotIncludedItemCountOrderByAggregateInput
    _avg?: NotIncludedItemAvgOrderByAggregateInput
    _max?: NotIncludedItemMaxOrderByAggregateInput
    _min?: NotIncludedItemMinOrderByAggregateInput
    _sum?: NotIncludedItemSumOrderByAggregateInput
  }

  export type NotIncludedItemScalarWhereWithAggregatesInput = {
    AND?: NotIncludedItemScalarWhereWithAggregatesInput | NotIncludedItemScalarWhereWithAggregatesInput[]
    OR?: NotIncludedItemScalarWhereWithAggregatesInput[]
    NOT?: NotIncludedItemScalarWhereWithAggregatesInput | NotIncludedItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotIncludedItem"> | number
    name?: StringWithAggregatesFilter<"NotIncludedItem"> | string
    propertyId?: IntWithAggregatesFilter<"NotIncludedItem"> | number
  }

  export type VisitorWhereInput = {
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    id?: StringFilter<"Visitor"> | string
    email?: StringFilter<"Visitor"> | string
    favorite?: BoolFilter<"Visitor"> | boolean
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    upDatedAt?: DateTimeFilter<"Visitor"> | Date | string
    propertyId?: IntFilter<"Visitor"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type VisitorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    favorite?: SortOrder
    createdAt?: SortOrder
    upDatedAt?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    email?: StringFilter<"Visitor"> | string
    favorite?: BoolFilter<"Visitor"> | boolean
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    upDatedAt?: DateTimeFilter<"Visitor"> | Date | string
    propertyId?: IntFilter<"Visitor"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type VisitorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    favorite?: SortOrder
    createdAt?: SortOrder
    upDatedAt?: SortOrder
    propertyId?: SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _avg?: VisitorAvgOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
    _sum?: VisitorSumOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    OR?: VisitorScalarWhereWithAggregatesInput[]
    NOT?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Visitor"> | string
    email?: StringWithAggregatesFilter<"Visitor"> | string
    favorite?: BoolWithAggregatesFilter<"Visitor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    upDatedAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    propertyId?: IntWithAggregatesFilter<"Visitor"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    twoFactorCode?: StringNullableFilter<"User"> | string | null
    twoFactorExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    properties?: PropertyListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    name?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    twoFactorCode?: SortOrderInput | SortOrder
    twoFactorExpires?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    properties?: PropertyOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    twoFactorCode?: StringNullableFilter<"User"> | string | null
    twoFactorExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    properties?: PropertyListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    name?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    twoFactorCode?: SortOrderInput | SortOrder
    twoFactorExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    twoFactorCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    twoFactorExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ContactFormCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    message: string
    agreeToPolicy: boolean
    phone?: PhoneNumberCreateNestedOneWithoutContactInput
  }

  export type ContactFormUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    message: string
    agreeToPolicy: boolean
    phoneId?: string | null
  }

  export type ContactFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    phone?: PhoneNumberUpdateOneWithoutContactNestedInput
  }

  export type ContactFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    phoneId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactFormCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    message: string
    agreeToPolicy: boolean
    phoneId?: string | null
  }

  export type ContactFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    phoneId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneNumberCreateInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    contact?: ContactFormCreateNestedOneWithoutPhoneInput
  }

  export type PhoneNumberUncheckedCreateInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    contact?: ContactFormUncheckedCreateNestedOneWithoutPhoneInput
  }

  export type PhoneNumberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
    contact?: ContactFormUpdateOneWithoutPhoneNestedInput
  }

  export type PhoneNumberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
    contact?: ContactFormUncheckedUpdateOneWithoutPhoneNestedInput
  }

  export type PhoneNumberCreateManyInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type PhoneNumberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PhoneNumberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PropertySaleRequestCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    email: string
    propertyAddress: string
    propertyType: $Enums.PropertyType
    other?: string | null
    bedrooms: number
    bathrooms: number
    squareFootage: number
    reasonForSelling: $Enums.ReasonForSelling
    timeline: $Enums.Timeline
    additionalInfo?: string | null
    agreeToPolicy: boolean
    phone?: SaleRequestFormPhoneCreateNestedOneWithoutContactInput
  }

  export type PropertySaleRequestUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    email: string
    propertyAddress: string
    propertyType: $Enums.PropertyType
    other?: string | null
    bedrooms: number
    bathrooms: number
    squareFootage: number
    reasonForSelling: $Enums.ReasonForSelling
    timeline: $Enums.Timeline
    additionalInfo?: string | null
    agreeToPolicy: boolean
    phoneId: string
  }

  export type PropertySaleRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    other?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFootage?: IntFieldUpdateOperationsInput | number
    reasonForSelling?: EnumReasonForSellingFieldUpdateOperationsInput | $Enums.ReasonForSelling
    timeline?: EnumTimelineFieldUpdateOperationsInput | $Enums.Timeline
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    phone?: SaleRequestFormPhoneUpdateOneWithoutContactNestedInput
  }

  export type PropertySaleRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    other?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFootage?: IntFieldUpdateOperationsInput | number
    reasonForSelling?: EnumReasonForSellingFieldUpdateOperationsInput | $Enums.ReasonForSelling
    timeline?: EnumTimelineFieldUpdateOperationsInput | $Enums.Timeline
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    phoneId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertySaleRequestCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    email: string
    propertyAddress: string
    propertyType: $Enums.PropertyType
    other?: string | null
    bedrooms: number
    bathrooms: number
    squareFootage: number
    reasonForSelling: $Enums.ReasonForSelling
    timeline: $Enums.Timeline
    additionalInfo?: string | null
    agreeToPolicy: boolean
    phoneId: string
  }

  export type PropertySaleRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    other?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFootage?: IntFieldUpdateOperationsInput | number
    reasonForSelling?: EnumReasonForSellingFieldUpdateOperationsInput | $Enums.ReasonForSelling
    timeline?: EnumTimelineFieldUpdateOperationsInput | $Enums.Timeline
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertySaleRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    other?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFootage?: IntFieldUpdateOperationsInput | number
    reasonForSelling?: EnumReasonForSellingFieldUpdateOperationsInput | $Enums.ReasonForSelling
    timeline?: EnumTimelineFieldUpdateOperationsInput | $Enums.Timeline
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    phoneId?: StringFieldUpdateOperationsInput | string
  }

  export type SaleRequestFormPhoneCreateInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    contact?: PropertySaleRequestCreateNestedOneWithoutPhoneInput
  }

  export type SaleRequestFormPhoneUncheckedCreateInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    contact?: PropertySaleRequestUncheckedCreateNestedOneWithoutPhoneInput
  }

  export type SaleRequestFormPhoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
    contact?: PropertySaleRequestUpdateOneWithoutPhoneNestedInput
  }

  export type SaleRequestFormPhoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
    contact?: PropertySaleRequestUncheckedUpdateOneWithoutPhoneNestedInput
  }

  export type SaleRequestFormPhoneCreateManyInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type SaleRequestFormPhoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type SaleRequestFormPhoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingFormCreateInput = {
    id?: string
    fullName: string
    email: string
    property: string
    bookingDate: Date | string
    bookingTime: Date | string
    agreeToPolicy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: BookingFormPhoneCreateNestedOneWithoutContactInput
  }

  export type BookingFormUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    property: string
    bookingDate: Date | string
    bookingTime: Date | string
    agreeToPolicy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneId?: string | null
  }

  export type BookingFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    property?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: BookingFormPhoneUpdateOneWithoutContactNestedInput
  }

  export type BookingFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    property?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingFormCreateManyInput = {
    id?: string
    fullName: string
    email: string
    property: string
    bookingDate: Date | string
    bookingTime: Date | string
    agreeToPolicy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    phoneId?: string | null
  }

  export type BookingFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    property?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    property?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingFormPhoneCreateInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    contact?: BookingFormCreateNestedOneWithoutPhoneInput
  }

  export type BookingFormPhoneUncheckedCreateInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
    contact?: BookingFormUncheckedCreateNestedOneWithoutPhoneInput
  }

  export type BookingFormPhoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
    contact?: BookingFormUpdateOneWithoutPhoneNestedInput
  }

  export type BookingFormPhoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
    contact?: BookingFormUncheckedUpdateOneWithoutPhoneNestedInput
  }

  export type BookingFormPhoneCreateManyInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type BookingFormPhoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingFormPhoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateInput = {
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemCreateNestedManyWithoutPropertyInput
    visitors?: VisitorCreateNestedManyWithoutPropertyInput
    adminUser: UserCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    adminUserId: string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemUncheckedCreateNestedManyWithoutPropertyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUpdateManyWithoutPropertyNestedInput
    adminUser?: UserUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUncheckedUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    adminUserId: string
  }

  export type PropertyUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUserId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageCreateInput = {
    url: string
    alt: string
    isMain?: boolean
    property: PropertyCreateNestedOneWithoutImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: number
    url: string
    alt: string
    isMain?: boolean
    propertyId: number
  }

  export type PropertyImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    property?: PropertyUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type PropertyImageCreateManyInput = {
    id?: number
    url: string
    alt: string
    isMain?: boolean
    propertyId: number
  }

  export type PropertyImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityCreateInput = {
    name: string
    property: PropertyCreateNestedOneWithoutAmenitiesInput
  }

  export type AmenityUncheckedCreateInput = {
    id?: number
    name: string
    propertyId: number
  }

  export type AmenityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityCreateManyInput = {
    id?: number
    name: string
    propertyId: number
  }

  export type AmenityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type NotIncludedItemCreateInput = {
    name: string
    property: PropertyCreateNestedOneWithoutNotIncludedInput
  }

  export type NotIncludedItemUncheckedCreateInput = {
    id?: number
    name: string
    propertyId: number
  }

  export type NotIncludedItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutNotIncludedNestedInput
  }

  export type NotIncludedItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type NotIncludedItemCreateManyInput = {
    id?: number
    name: string
    propertyId: number
  }

  export type NotIncludedItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NotIncludedItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitorCreateInput = {
    id?: string
    email: string
    favorite?: boolean
    createdAt?: Date | string
    upDatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutVisitorsInput
  }

  export type VisitorUncheckedCreateInput = {
    id?: string
    email: string
    favorite?: boolean
    createdAt?: Date | string
    upDatedAt?: Date | string
    propertyId: number
  }

  export type VisitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upDatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutVisitorsNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upDatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitorCreateManyInput = {
    id?: string
    email: string
    favorite?: boolean
    createdAt?: Date | string
    upDatedAt?: Date | string
    propertyId: number
  }

  export type VisitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upDatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upDatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutAdminUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutAdminUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutAdminUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutAdminUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PhoneNumberNullableScalarRelationFilter = {
    is?: PhoneNumberWhereInput | null
    isNot?: PhoneNumberWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactFormCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrder
  }

  export type ContactFormMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrder
  }

  export type ContactFormMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ContactFormNullableScalarRelationFilter = {
    is?: ContactFormWhereInput | null
    isNot?: ContactFormWhereInput | null
  }

  export type PhoneNumberCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type PhoneNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type PhoneNumberMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumReasonForSellingFilter<$PrismaModel = never> = {
    equals?: $Enums.ReasonForSelling | EnumReasonForSellingFieldRefInput<$PrismaModel>
    in?: $Enums.ReasonForSelling[] | ListEnumReasonForSellingFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReasonForSelling[] | ListEnumReasonForSellingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForSellingFilter<$PrismaModel> | $Enums.ReasonForSelling
  }

  export type EnumTimelineFilter<$PrismaModel = never> = {
    equals?: $Enums.Timeline | EnumTimelineFieldRefInput<$PrismaModel>
    in?: $Enums.Timeline[] | ListEnumTimelineFieldRefInput<$PrismaModel>
    notIn?: $Enums.Timeline[] | ListEnumTimelineFieldRefInput<$PrismaModel>
    not?: NestedEnumTimelineFilter<$PrismaModel> | $Enums.Timeline
  }

  export type SaleRequestFormPhoneNullableScalarRelationFilter = {
    is?: SaleRequestFormPhoneWhereInput | null
    isNot?: SaleRequestFormPhoneWhereInput | null
  }

  export type PropertySaleRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    propertyAddress?: SortOrder
    propertyType?: SortOrder
    other?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFootage?: SortOrder
    reasonForSelling?: SortOrder
    timeline?: SortOrder
    additionalInfo?: SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrder
  }

  export type PropertySaleRequestAvgOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFootage?: SortOrder
  }

  export type PropertySaleRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    propertyAddress?: SortOrder
    propertyType?: SortOrder
    other?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFootage?: SortOrder
    reasonForSelling?: SortOrder
    timeline?: SortOrder
    additionalInfo?: SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrder
  }

  export type PropertySaleRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    propertyAddress?: SortOrder
    propertyType?: SortOrder
    other?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFootage?: SortOrder
    reasonForSelling?: SortOrder
    timeline?: SortOrder
    additionalInfo?: SortOrder
    agreeToPolicy?: SortOrder
    phoneId?: SortOrder
  }

  export type PropertySaleRequestSumOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFootage?: SortOrder
  }

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumReasonForSellingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReasonForSelling | EnumReasonForSellingFieldRefInput<$PrismaModel>
    in?: $Enums.ReasonForSelling[] | ListEnumReasonForSellingFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReasonForSelling[] | ListEnumReasonForSellingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForSellingWithAggregatesFilter<$PrismaModel> | $Enums.ReasonForSelling
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReasonForSellingFilter<$PrismaModel>
    _max?: NestedEnumReasonForSellingFilter<$PrismaModel>
  }

  export type EnumTimelineWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Timeline | EnumTimelineFieldRefInput<$PrismaModel>
    in?: $Enums.Timeline[] | ListEnumTimelineFieldRefInput<$PrismaModel>
    notIn?: $Enums.Timeline[] | ListEnumTimelineFieldRefInput<$PrismaModel>
    not?: NestedEnumTimelineWithAggregatesFilter<$PrismaModel> | $Enums.Timeline
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimelineFilter<$PrismaModel>
    _max?: NestedEnumTimelineFilter<$PrismaModel>
  }

  export type PropertySaleRequestNullableScalarRelationFilter = {
    is?: PropertySaleRequestWhereInput | null
    isNot?: PropertySaleRequestWhereInput | null
  }

  export type SaleRequestFormPhoneCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type SaleRequestFormPhoneMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type SaleRequestFormPhoneMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type BookingFormPhoneNullableScalarRelationFilter = {
    is?: BookingFormPhoneWhereInput | null
    isNot?: BookingFormPhoneWhereInput | null
  }

  export type BookingFormCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    property?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    agreeToPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phoneId?: SortOrder
  }

  export type BookingFormMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    property?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    agreeToPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phoneId?: SortOrder
  }

  export type BookingFormMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    property?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    agreeToPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phoneId?: SortOrder
  }

  export type BookingFormNullableScalarRelationFilter = {
    is?: BookingFormWhereInput | null
    isNot?: BookingFormWhereInput | null
  }

  export type BookingFormPhoneCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type BookingFormPhoneMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type BookingFormPhoneMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phoneCode?: SortOrder
    number?: SortOrder
    fullNumber?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type AmenityListRelationFilter = {
    every?: AmenityWhereInput
    some?: AmenityWhereInput
    none?: AmenityWhereInput
  }

  export type NotIncludedItemListRelationFilter = {
    every?: NotIncludedItemWhereInput
    some?: NotIncludedItemWhereInput
    none?: NotIncludedItemWhereInput
  }

  export type VisitorListRelationFilter = {
    every?: VisitorWhereInput
    some?: VisitorWhereInput
    none?: VisitorWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotIncludedItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    size?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    parkingSpace?: SortOrder
    petsAllowed?: SortOrder
    verified?: SortOrder
    isNew?: SortOrder
    featured?: SortOrder
    hasVideo?: SortOrder
    views?: SortOrder
    publishedDate?: SortOrder
    createdAt?: SortOrder
    adminUserId?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    size?: SortOrder
    parkingSpace?: SortOrder
    views?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    size?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    parkingSpace?: SortOrder
    petsAllowed?: SortOrder
    verified?: SortOrder
    isNew?: SortOrder
    featured?: SortOrder
    hasVideo?: SortOrder
    views?: SortOrder
    publishedDate?: SortOrder
    createdAt?: SortOrder
    adminUserId?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    size?: SortOrder
    category?: SortOrder
    propertyType?: SortOrder
    parkingSpace?: SortOrder
    petsAllowed?: SortOrder
    verified?: SortOrder
    isNew?: SortOrder
    featured?: SortOrder
    hasVideo?: SortOrder
    views?: SortOrder
    publishedDate?: SortOrder
    createdAt?: SortOrder
    adminUserId?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    size?: SortOrder
    parkingSpace?: SortOrder
    views?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    isMain?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyImageAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    isMain?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    isMain?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyImageSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type AmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type AmenityAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type AmenitySumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type NotIncludedItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type NotIncludedItemAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type NotIncludedItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type NotIncludedItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyId?: SortOrder
  }

  export type NotIncludedItemSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type VisitorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    favorite?: SortOrder
    createdAt?: SortOrder
    upDatedAt?: SortOrder
    propertyId?: SortOrder
  }

  export type VisitorAvgOrderByAggregateInput = {
    propertyId?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    favorite?: SortOrder
    createdAt?: SortOrder
    upDatedAt?: SortOrder
    propertyId?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    favorite?: SortOrder
    createdAt?: SortOrder
    upDatedAt?: SortOrder
    propertyId?: SortOrder
  }

  export type VisitorSumOrderByAggregateInput = {
    propertyId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    twoFactorCode?: SortOrder
    twoFactorExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    twoFactorCode?: SortOrder
    twoFactorExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    twoFactorCode?: SortOrder
    twoFactorExpires?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type PhoneNumberCreateNestedOneWithoutContactInput = {
    create?: XOR<PhoneNumberCreateWithoutContactInput, PhoneNumberUncheckedCreateWithoutContactInput>
    connectOrCreate?: PhoneNumberCreateOrConnectWithoutContactInput
    connect?: PhoneNumberWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PhoneNumberUpdateOneWithoutContactNestedInput = {
    create?: XOR<PhoneNumberCreateWithoutContactInput, PhoneNumberUncheckedCreateWithoutContactInput>
    connectOrCreate?: PhoneNumberCreateOrConnectWithoutContactInput
    upsert?: PhoneNumberUpsertWithoutContactInput
    disconnect?: PhoneNumberWhereInput | boolean
    delete?: PhoneNumberWhereInput | boolean
    connect?: PhoneNumberWhereUniqueInput
    update?: XOR<XOR<PhoneNumberUpdateToOneWithWhereWithoutContactInput, PhoneNumberUpdateWithoutContactInput>, PhoneNumberUncheckedUpdateWithoutContactInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContactFormCreateNestedOneWithoutPhoneInput = {
    create?: XOR<ContactFormCreateWithoutPhoneInput, ContactFormUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: ContactFormCreateOrConnectWithoutPhoneInput
    connect?: ContactFormWhereUniqueInput
  }

  export type ContactFormUncheckedCreateNestedOneWithoutPhoneInput = {
    create?: XOR<ContactFormCreateWithoutPhoneInput, ContactFormUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: ContactFormCreateOrConnectWithoutPhoneInput
    connect?: ContactFormWhereUniqueInput
  }

  export type ContactFormUpdateOneWithoutPhoneNestedInput = {
    create?: XOR<ContactFormCreateWithoutPhoneInput, ContactFormUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: ContactFormCreateOrConnectWithoutPhoneInput
    upsert?: ContactFormUpsertWithoutPhoneInput
    disconnect?: ContactFormWhereInput | boolean
    delete?: ContactFormWhereInput | boolean
    connect?: ContactFormWhereUniqueInput
    update?: XOR<XOR<ContactFormUpdateToOneWithWhereWithoutPhoneInput, ContactFormUpdateWithoutPhoneInput>, ContactFormUncheckedUpdateWithoutPhoneInput>
  }

  export type ContactFormUncheckedUpdateOneWithoutPhoneNestedInput = {
    create?: XOR<ContactFormCreateWithoutPhoneInput, ContactFormUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: ContactFormCreateOrConnectWithoutPhoneInput
    upsert?: ContactFormUpsertWithoutPhoneInput
    disconnect?: ContactFormWhereInput | boolean
    delete?: ContactFormWhereInput | boolean
    connect?: ContactFormWhereUniqueInput
    update?: XOR<XOR<ContactFormUpdateToOneWithWhereWithoutPhoneInput, ContactFormUpdateWithoutPhoneInput>, ContactFormUncheckedUpdateWithoutPhoneInput>
  }

  export type SaleRequestFormPhoneCreateNestedOneWithoutContactInput = {
    create?: XOR<SaleRequestFormPhoneCreateWithoutContactInput, SaleRequestFormPhoneUncheckedCreateWithoutContactInput>
    connectOrCreate?: SaleRequestFormPhoneCreateOrConnectWithoutContactInput
    connect?: SaleRequestFormPhoneWhereUniqueInput
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumReasonForSellingFieldUpdateOperationsInput = {
    set?: $Enums.ReasonForSelling
  }

  export type EnumTimelineFieldUpdateOperationsInput = {
    set?: $Enums.Timeline
  }

  export type SaleRequestFormPhoneUpdateOneWithoutContactNestedInput = {
    create?: XOR<SaleRequestFormPhoneCreateWithoutContactInput, SaleRequestFormPhoneUncheckedCreateWithoutContactInput>
    connectOrCreate?: SaleRequestFormPhoneCreateOrConnectWithoutContactInput
    upsert?: SaleRequestFormPhoneUpsertWithoutContactInput
    disconnect?: SaleRequestFormPhoneWhereInput | boolean
    delete?: SaleRequestFormPhoneWhereInput | boolean
    connect?: SaleRequestFormPhoneWhereUniqueInput
    update?: XOR<XOR<SaleRequestFormPhoneUpdateToOneWithWhereWithoutContactInput, SaleRequestFormPhoneUpdateWithoutContactInput>, SaleRequestFormPhoneUncheckedUpdateWithoutContactInput>
  }

  export type PropertySaleRequestCreateNestedOneWithoutPhoneInput = {
    create?: XOR<PropertySaleRequestCreateWithoutPhoneInput, PropertySaleRequestUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: PropertySaleRequestCreateOrConnectWithoutPhoneInput
    connect?: PropertySaleRequestWhereUniqueInput
  }

  export type PropertySaleRequestUncheckedCreateNestedOneWithoutPhoneInput = {
    create?: XOR<PropertySaleRequestCreateWithoutPhoneInput, PropertySaleRequestUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: PropertySaleRequestCreateOrConnectWithoutPhoneInput
    connect?: PropertySaleRequestWhereUniqueInput
  }

  export type PropertySaleRequestUpdateOneWithoutPhoneNestedInput = {
    create?: XOR<PropertySaleRequestCreateWithoutPhoneInput, PropertySaleRequestUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: PropertySaleRequestCreateOrConnectWithoutPhoneInput
    upsert?: PropertySaleRequestUpsertWithoutPhoneInput
    disconnect?: PropertySaleRequestWhereInput | boolean
    delete?: PropertySaleRequestWhereInput | boolean
    connect?: PropertySaleRequestWhereUniqueInput
    update?: XOR<XOR<PropertySaleRequestUpdateToOneWithWhereWithoutPhoneInput, PropertySaleRequestUpdateWithoutPhoneInput>, PropertySaleRequestUncheckedUpdateWithoutPhoneInput>
  }

  export type PropertySaleRequestUncheckedUpdateOneWithoutPhoneNestedInput = {
    create?: XOR<PropertySaleRequestCreateWithoutPhoneInput, PropertySaleRequestUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: PropertySaleRequestCreateOrConnectWithoutPhoneInput
    upsert?: PropertySaleRequestUpsertWithoutPhoneInput
    disconnect?: PropertySaleRequestWhereInput | boolean
    delete?: PropertySaleRequestWhereInput | boolean
    connect?: PropertySaleRequestWhereUniqueInput
    update?: XOR<XOR<PropertySaleRequestUpdateToOneWithWhereWithoutPhoneInput, PropertySaleRequestUpdateWithoutPhoneInput>, PropertySaleRequestUncheckedUpdateWithoutPhoneInput>
  }

  export type BookingFormPhoneCreateNestedOneWithoutContactInput = {
    create?: XOR<BookingFormPhoneCreateWithoutContactInput, BookingFormPhoneUncheckedCreateWithoutContactInput>
    connectOrCreate?: BookingFormPhoneCreateOrConnectWithoutContactInput
    connect?: BookingFormPhoneWhereUniqueInput
  }

  export type BookingFormPhoneUpdateOneWithoutContactNestedInput = {
    create?: XOR<BookingFormPhoneCreateWithoutContactInput, BookingFormPhoneUncheckedCreateWithoutContactInput>
    connectOrCreate?: BookingFormPhoneCreateOrConnectWithoutContactInput
    upsert?: BookingFormPhoneUpsertWithoutContactInput
    disconnect?: BookingFormPhoneWhereInput | boolean
    delete?: BookingFormPhoneWhereInput | boolean
    connect?: BookingFormPhoneWhereUniqueInput
    update?: XOR<XOR<BookingFormPhoneUpdateToOneWithWhereWithoutContactInput, BookingFormPhoneUpdateWithoutContactInput>, BookingFormPhoneUncheckedUpdateWithoutContactInput>
  }

  export type BookingFormCreateNestedOneWithoutPhoneInput = {
    create?: XOR<BookingFormCreateWithoutPhoneInput, BookingFormUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: BookingFormCreateOrConnectWithoutPhoneInput
    connect?: BookingFormWhereUniqueInput
  }

  export type BookingFormUncheckedCreateNestedOneWithoutPhoneInput = {
    create?: XOR<BookingFormCreateWithoutPhoneInput, BookingFormUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: BookingFormCreateOrConnectWithoutPhoneInput
    connect?: BookingFormWhereUniqueInput
  }

  export type BookingFormUpdateOneWithoutPhoneNestedInput = {
    create?: XOR<BookingFormCreateWithoutPhoneInput, BookingFormUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: BookingFormCreateOrConnectWithoutPhoneInput
    upsert?: BookingFormUpsertWithoutPhoneInput
    disconnect?: BookingFormWhereInput | boolean
    delete?: BookingFormWhereInput | boolean
    connect?: BookingFormWhereUniqueInput
    update?: XOR<XOR<BookingFormUpdateToOneWithWhereWithoutPhoneInput, BookingFormUpdateWithoutPhoneInput>, BookingFormUncheckedUpdateWithoutPhoneInput>
  }

  export type BookingFormUncheckedUpdateOneWithoutPhoneNestedInput = {
    create?: XOR<BookingFormCreateWithoutPhoneInput, BookingFormUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: BookingFormCreateOrConnectWithoutPhoneInput
    upsert?: BookingFormUpsertWithoutPhoneInput
    disconnect?: BookingFormWhereInput | boolean
    delete?: BookingFormWhereInput | boolean
    connect?: BookingFormWhereUniqueInput
    update?: XOR<XOR<BookingFormUpdateToOneWithWhereWithoutPhoneInput, BookingFormUpdateWithoutPhoneInput>, BookingFormUncheckedUpdateWithoutPhoneInput>
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type AmenityCreateNestedManyWithoutPropertyInput = {
    create?: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput> | AmenityCreateWithoutPropertyInput[] | AmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyInput | AmenityCreateOrConnectWithoutPropertyInput[]
    createMany?: AmenityCreateManyPropertyInputEnvelope
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type NotIncludedItemCreateNestedManyWithoutPropertyInput = {
    create?: XOR<NotIncludedItemCreateWithoutPropertyInput, NotIncludedItemUncheckedCreateWithoutPropertyInput> | NotIncludedItemCreateWithoutPropertyInput[] | NotIncludedItemUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: NotIncludedItemCreateOrConnectWithoutPropertyInput | NotIncludedItemCreateOrConnectWithoutPropertyInput[]
    createMany?: NotIncludedItemCreateManyPropertyInputEnvelope
    connect?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
  }

  export type VisitorCreateNestedManyWithoutPropertyInput = {
    create?: XOR<VisitorCreateWithoutPropertyInput, VisitorUncheckedCreateWithoutPropertyInput> | VisitorCreateWithoutPropertyInput[] | VisitorUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutPropertyInput | VisitorCreateOrConnectWithoutPropertyInput[]
    createMany?: VisitorCreateManyPropertyInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type AmenityUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput> | AmenityCreateWithoutPropertyInput[] | AmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyInput | AmenityCreateOrConnectWithoutPropertyInput[]
    createMany?: AmenityCreateManyPropertyInputEnvelope
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type NotIncludedItemUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<NotIncludedItemCreateWithoutPropertyInput, NotIncludedItemUncheckedCreateWithoutPropertyInput> | NotIncludedItemCreateWithoutPropertyInput[] | NotIncludedItemUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: NotIncludedItemCreateOrConnectWithoutPropertyInput | NotIncludedItemCreateOrConnectWithoutPropertyInput[]
    createMany?: NotIncludedItemCreateManyPropertyInputEnvelope
    connect?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
  }

  export type VisitorUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<VisitorCreateWithoutPropertyInput, VisitorUncheckedCreateWithoutPropertyInput> | VisitorCreateWithoutPropertyInput[] | VisitorUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutPropertyInput | VisitorCreateOrConnectWithoutPropertyInput[]
    createMany?: VisitorCreateManyPropertyInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type AmenityUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput> | AmenityCreateWithoutPropertyInput[] | AmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyInput | AmenityCreateOrConnectWithoutPropertyInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutPropertyInput | AmenityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: AmenityCreateManyPropertyInputEnvelope
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutPropertyInput | AmenityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutPropertyInput | AmenityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type NotIncludedItemUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<NotIncludedItemCreateWithoutPropertyInput, NotIncludedItemUncheckedCreateWithoutPropertyInput> | NotIncludedItemCreateWithoutPropertyInput[] | NotIncludedItemUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: NotIncludedItemCreateOrConnectWithoutPropertyInput | NotIncludedItemCreateOrConnectWithoutPropertyInput[]
    upsert?: NotIncludedItemUpsertWithWhereUniqueWithoutPropertyInput | NotIncludedItemUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: NotIncludedItemCreateManyPropertyInputEnvelope
    set?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
    disconnect?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
    delete?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
    connect?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
    update?: NotIncludedItemUpdateWithWhereUniqueWithoutPropertyInput | NotIncludedItemUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: NotIncludedItemUpdateManyWithWhereWithoutPropertyInput | NotIncludedItemUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: NotIncludedItemScalarWhereInput | NotIncludedItemScalarWhereInput[]
  }

  export type VisitorUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<VisitorCreateWithoutPropertyInput, VisitorUncheckedCreateWithoutPropertyInput> | VisitorCreateWithoutPropertyInput[] | VisitorUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutPropertyInput | VisitorCreateOrConnectWithoutPropertyInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutPropertyInput | VisitorUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: VisitorCreateManyPropertyInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutPropertyInput | VisitorUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutPropertyInput | VisitorUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type AmenityUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput> | AmenityCreateWithoutPropertyInput[] | AmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyInput | AmenityCreateOrConnectWithoutPropertyInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutPropertyInput | AmenityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: AmenityCreateManyPropertyInputEnvelope
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutPropertyInput | AmenityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutPropertyInput | AmenityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type NotIncludedItemUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<NotIncludedItemCreateWithoutPropertyInput, NotIncludedItemUncheckedCreateWithoutPropertyInput> | NotIncludedItemCreateWithoutPropertyInput[] | NotIncludedItemUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: NotIncludedItemCreateOrConnectWithoutPropertyInput | NotIncludedItemCreateOrConnectWithoutPropertyInput[]
    upsert?: NotIncludedItemUpsertWithWhereUniqueWithoutPropertyInput | NotIncludedItemUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: NotIncludedItemCreateManyPropertyInputEnvelope
    set?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
    disconnect?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
    delete?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
    connect?: NotIncludedItemWhereUniqueInput | NotIncludedItemWhereUniqueInput[]
    update?: NotIncludedItemUpdateWithWhereUniqueWithoutPropertyInput | NotIncludedItemUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: NotIncludedItemUpdateManyWithWhereWithoutPropertyInput | NotIncludedItemUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: NotIncludedItemScalarWhereInput | NotIncludedItemScalarWhereInput[]
  }

  export type VisitorUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<VisitorCreateWithoutPropertyInput, VisitorUncheckedCreateWithoutPropertyInput> | VisitorCreateWithoutPropertyInput[] | VisitorUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutPropertyInput | VisitorCreateOrConnectWithoutPropertyInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutPropertyInput | VisitorUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: VisitorCreateManyPropertyInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutPropertyInput | VisitorUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutPropertyInput | VisitorUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutImagesInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    upsert?: PropertyUpsertWithoutImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutImagesInput, PropertyUpdateWithoutImagesInput>, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAmenitiesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAmenitiesInput
    upsert?: PropertyUpsertWithoutAmenitiesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutAmenitiesInput, PropertyUpdateWithoutAmenitiesInput>, PropertyUncheckedUpdateWithoutAmenitiesInput>
  }

  export type PropertyCreateNestedOneWithoutNotIncludedInput = {
    create?: XOR<PropertyCreateWithoutNotIncludedInput, PropertyUncheckedCreateWithoutNotIncludedInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutNotIncludedInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutNotIncludedNestedInput = {
    create?: XOR<PropertyCreateWithoutNotIncludedInput, PropertyUncheckedCreateWithoutNotIncludedInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutNotIncludedInput
    upsert?: PropertyUpsertWithoutNotIncludedInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutNotIncludedInput, PropertyUpdateWithoutNotIncludedInput>, PropertyUncheckedUpdateWithoutNotIncludedInput>
  }

  export type PropertyCreateNestedOneWithoutVisitorsInput = {
    create?: XOR<PropertyCreateWithoutVisitorsInput, PropertyUncheckedCreateWithoutVisitorsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutVisitorsInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutVisitorsNestedInput = {
    create?: XOR<PropertyCreateWithoutVisitorsInput, PropertyUncheckedCreateWithoutVisitorsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutVisitorsInput
    upsert?: PropertyUpsertWithoutVisitorsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutVisitorsInput, PropertyUpdateWithoutVisitorsInput>, PropertyUncheckedUpdateWithoutVisitorsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<PropertyCreateWithoutAdminUserInput, PropertyUncheckedCreateWithoutAdminUserInput> | PropertyCreateWithoutAdminUserInput[] | PropertyUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAdminUserInput | PropertyCreateOrConnectWithoutAdminUserInput[]
    createMany?: PropertyCreateManyAdminUserInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<PropertyCreateWithoutAdminUserInput, PropertyUncheckedCreateWithoutAdminUserInput> | PropertyCreateWithoutAdminUserInput[] | PropertyUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAdminUserInput | PropertyCreateOrConnectWithoutAdminUserInput[]
    createMany?: PropertyCreateManyAdminUserInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<PropertyCreateWithoutAdminUserInput, PropertyUncheckedCreateWithoutAdminUserInput> | PropertyCreateWithoutAdminUserInput[] | PropertyUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAdminUserInput | PropertyCreateOrConnectWithoutAdminUserInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAdminUserInput | PropertyUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: PropertyCreateManyAdminUserInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAdminUserInput | PropertyUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAdminUserInput | PropertyUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<PropertyCreateWithoutAdminUserInput, PropertyUncheckedCreateWithoutAdminUserInput> | PropertyCreateWithoutAdminUserInput[] | PropertyUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAdminUserInput | PropertyCreateOrConnectWithoutAdminUserInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAdminUserInput | PropertyUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: PropertyCreateManyAdminUserInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAdminUserInput | PropertyUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAdminUserInput | PropertyUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedEnumReasonForSellingFilter<$PrismaModel = never> = {
    equals?: $Enums.ReasonForSelling | EnumReasonForSellingFieldRefInput<$PrismaModel>
    in?: $Enums.ReasonForSelling[] | ListEnumReasonForSellingFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReasonForSelling[] | ListEnumReasonForSellingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForSellingFilter<$PrismaModel> | $Enums.ReasonForSelling
  }

  export type NestedEnumTimelineFilter<$PrismaModel = never> = {
    equals?: $Enums.Timeline | EnumTimelineFieldRefInput<$PrismaModel>
    in?: $Enums.Timeline[] | ListEnumTimelineFieldRefInput<$PrismaModel>
    notIn?: $Enums.Timeline[] | ListEnumTimelineFieldRefInput<$PrismaModel>
    not?: NestedEnumTimelineFilter<$PrismaModel> | $Enums.Timeline
  }

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumReasonForSellingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReasonForSelling | EnumReasonForSellingFieldRefInput<$PrismaModel>
    in?: $Enums.ReasonForSelling[] | ListEnumReasonForSellingFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReasonForSelling[] | ListEnumReasonForSellingFieldRefInput<$PrismaModel>
    not?: NestedEnumReasonForSellingWithAggregatesFilter<$PrismaModel> | $Enums.ReasonForSelling
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReasonForSellingFilter<$PrismaModel>
    _max?: NestedEnumReasonForSellingFilter<$PrismaModel>
  }

  export type NestedEnumTimelineWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Timeline | EnumTimelineFieldRefInput<$PrismaModel>
    in?: $Enums.Timeline[] | ListEnumTimelineFieldRefInput<$PrismaModel>
    notIn?: $Enums.Timeline[] | ListEnumTimelineFieldRefInput<$PrismaModel>
    not?: NestedEnumTimelineWithAggregatesFilter<$PrismaModel> | $Enums.Timeline
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimelineFilter<$PrismaModel>
    _max?: NestedEnumTimelineFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PhoneNumberCreateWithoutContactInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type PhoneNumberUncheckedCreateWithoutContactInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type PhoneNumberCreateOrConnectWithoutContactInput = {
    where: PhoneNumberWhereUniqueInput
    create: XOR<PhoneNumberCreateWithoutContactInput, PhoneNumberUncheckedCreateWithoutContactInput>
  }

  export type PhoneNumberUpsertWithoutContactInput = {
    update: XOR<PhoneNumberUpdateWithoutContactInput, PhoneNumberUncheckedUpdateWithoutContactInput>
    create: XOR<PhoneNumberCreateWithoutContactInput, PhoneNumberUncheckedCreateWithoutContactInput>
    where?: PhoneNumberWhereInput
  }

  export type PhoneNumberUpdateToOneWithWhereWithoutContactInput = {
    where?: PhoneNumberWhereInput
    data: XOR<PhoneNumberUpdateWithoutContactInput, PhoneNumberUncheckedUpdateWithoutContactInput>
  }

  export type PhoneNumberUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PhoneNumberUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ContactFormCreateWithoutPhoneInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    message: string
    agreeToPolicy: boolean
  }

  export type ContactFormUncheckedCreateWithoutPhoneInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    message: string
    agreeToPolicy: boolean
  }

  export type ContactFormCreateOrConnectWithoutPhoneInput = {
    where: ContactFormWhereUniqueInput
    create: XOR<ContactFormCreateWithoutPhoneInput, ContactFormUncheckedCreateWithoutPhoneInput>
  }

  export type ContactFormUpsertWithoutPhoneInput = {
    update: XOR<ContactFormUpdateWithoutPhoneInput, ContactFormUncheckedUpdateWithoutPhoneInput>
    create: XOR<ContactFormCreateWithoutPhoneInput, ContactFormUncheckedCreateWithoutPhoneInput>
    where?: ContactFormWhereInput
  }

  export type ContactFormUpdateToOneWithWhereWithoutPhoneInput = {
    where?: ContactFormWhereInput
    data: XOR<ContactFormUpdateWithoutPhoneInput, ContactFormUncheckedUpdateWithoutPhoneInput>
  }

  export type ContactFormUpdateWithoutPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactFormUncheckedUpdateWithoutPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SaleRequestFormPhoneCreateWithoutContactInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type SaleRequestFormPhoneUncheckedCreateWithoutContactInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type SaleRequestFormPhoneCreateOrConnectWithoutContactInput = {
    where: SaleRequestFormPhoneWhereUniqueInput
    create: XOR<SaleRequestFormPhoneCreateWithoutContactInput, SaleRequestFormPhoneUncheckedCreateWithoutContactInput>
  }

  export type SaleRequestFormPhoneUpsertWithoutContactInput = {
    update: XOR<SaleRequestFormPhoneUpdateWithoutContactInput, SaleRequestFormPhoneUncheckedUpdateWithoutContactInput>
    create: XOR<SaleRequestFormPhoneCreateWithoutContactInput, SaleRequestFormPhoneUncheckedCreateWithoutContactInput>
    where?: SaleRequestFormPhoneWhereInput
  }

  export type SaleRequestFormPhoneUpdateToOneWithWhereWithoutContactInput = {
    where?: SaleRequestFormPhoneWhereInput
    data: XOR<SaleRequestFormPhoneUpdateWithoutContactInput, SaleRequestFormPhoneUncheckedUpdateWithoutContactInput>
  }

  export type SaleRequestFormPhoneUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type SaleRequestFormPhoneUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PropertySaleRequestCreateWithoutPhoneInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    email: string
    propertyAddress: string
    propertyType: $Enums.PropertyType
    other?: string | null
    bedrooms: number
    bathrooms: number
    squareFootage: number
    reasonForSelling: $Enums.ReasonForSelling
    timeline: $Enums.Timeline
    additionalInfo?: string | null
    agreeToPolicy: boolean
  }

  export type PropertySaleRequestUncheckedCreateWithoutPhoneInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    email: string
    propertyAddress: string
    propertyType: $Enums.PropertyType
    other?: string | null
    bedrooms: number
    bathrooms: number
    squareFootage: number
    reasonForSelling: $Enums.ReasonForSelling
    timeline: $Enums.Timeline
    additionalInfo?: string | null
    agreeToPolicy: boolean
  }

  export type PropertySaleRequestCreateOrConnectWithoutPhoneInput = {
    where: PropertySaleRequestWhereUniqueInput
    create: XOR<PropertySaleRequestCreateWithoutPhoneInput, PropertySaleRequestUncheckedCreateWithoutPhoneInput>
  }

  export type PropertySaleRequestUpsertWithoutPhoneInput = {
    update: XOR<PropertySaleRequestUpdateWithoutPhoneInput, PropertySaleRequestUncheckedUpdateWithoutPhoneInput>
    create: XOR<PropertySaleRequestCreateWithoutPhoneInput, PropertySaleRequestUncheckedCreateWithoutPhoneInput>
    where?: PropertySaleRequestWhereInput
  }

  export type PropertySaleRequestUpdateToOneWithWhereWithoutPhoneInput = {
    where?: PropertySaleRequestWhereInput
    data: XOR<PropertySaleRequestUpdateWithoutPhoneInput, PropertySaleRequestUncheckedUpdateWithoutPhoneInput>
  }

  export type PropertySaleRequestUpdateWithoutPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    other?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFootage?: IntFieldUpdateOperationsInput | number
    reasonForSelling?: EnumReasonForSellingFieldUpdateOperationsInput | $Enums.ReasonForSelling
    timeline?: EnumTimelineFieldUpdateOperationsInput | $Enums.Timeline
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertySaleRequestUncheckedUpdateWithoutPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    other?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFootage?: IntFieldUpdateOperationsInput | number
    reasonForSelling?: EnumReasonForSellingFieldUpdateOperationsInput | $Enums.ReasonForSelling
    timeline?: EnumTimelineFieldUpdateOperationsInput | $Enums.Timeline
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingFormPhoneCreateWithoutContactInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type BookingFormPhoneUncheckedCreateWithoutContactInput = {
    id?: string
    code: string
    phoneCode: string
    number: string
    fullNumber: string
  }

  export type BookingFormPhoneCreateOrConnectWithoutContactInput = {
    where: BookingFormPhoneWhereUniqueInput
    create: XOR<BookingFormPhoneCreateWithoutContactInput, BookingFormPhoneUncheckedCreateWithoutContactInput>
  }

  export type BookingFormPhoneUpsertWithoutContactInput = {
    update: XOR<BookingFormPhoneUpdateWithoutContactInput, BookingFormPhoneUncheckedUpdateWithoutContactInput>
    create: XOR<BookingFormPhoneCreateWithoutContactInput, BookingFormPhoneUncheckedCreateWithoutContactInput>
    where?: BookingFormPhoneWhereInput
  }

  export type BookingFormPhoneUpdateToOneWithWhereWithoutContactInput = {
    where?: BookingFormPhoneWhereInput
    data: XOR<BookingFormPhoneUpdateWithoutContactInput, BookingFormPhoneUncheckedUpdateWithoutContactInput>
  }

  export type BookingFormPhoneUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingFormPhoneUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    phoneCode?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    fullNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BookingFormCreateWithoutPhoneInput = {
    id?: string
    fullName: string
    email: string
    property: string
    bookingDate: Date | string
    bookingTime: Date | string
    agreeToPolicy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingFormUncheckedCreateWithoutPhoneInput = {
    id?: string
    fullName: string
    email: string
    property: string
    bookingDate: Date | string
    bookingTime: Date | string
    agreeToPolicy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingFormCreateOrConnectWithoutPhoneInput = {
    where: BookingFormWhereUniqueInput
    create: XOR<BookingFormCreateWithoutPhoneInput, BookingFormUncheckedCreateWithoutPhoneInput>
  }

  export type BookingFormUpsertWithoutPhoneInput = {
    update: XOR<BookingFormUpdateWithoutPhoneInput, BookingFormUncheckedUpdateWithoutPhoneInput>
    create: XOR<BookingFormCreateWithoutPhoneInput, BookingFormUncheckedCreateWithoutPhoneInput>
    where?: BookingFormWhereInput
  }

  export type BookingFormUpdateToOneWithWhereWithoutPhoneInput = {
    where?: BookingFormWhereInput
    data: XOR<BookingFormUpdateWithoutPhoneInput, BookingFormUncheckedUpdateWithoutPhoneInput>
  }

  export type BookingFormUpdateWithoutPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    property?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingFormUncheckedUpdateWithoutPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    property?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    agreeToPolicy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    url: string
    alt: string
    isMain?: boolean
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: number
    url: string
    alt: string
    isMain?: boolean
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type AmenityCreateWithoutPropertyInput = {
    name: string
  }

  export type AmenityUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
  }

  export type AmenityCreateOrConnectWithoutPropertyInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput>
  }

  export type AmenityCreateManyPropertyInputEnvelope = {
    data: AmenityCreateManyPropertyInput | AmenityCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type NotIncludedItemCreateWithoutPropertyInput = {
    name: string
  }

  export type NotIncludedItemUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
  }

  export type NotIncludedItemCreateOrConnectWithoutPropertyInput = {
    where: NotIncludedItemWhereUniqueInput
    create: XOR<NotIncludedItemCreateWithoutPropertyInput, NotIncludedItemUncheckedCreateWithoutPropertyInput>
  }

  export type NotIncludedItemCreateManyPropertyInputEnvelope = {
    data: NotIncludedItemCreateManyPropertyInput | NotIncludedItemCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type VisitorCreateWithoutPropertyInput = {
    id?: string
    email: string
    favorite?: boolean
    createdAt?: Date | string
    upDatedAt?: Date | string
  }

  export type VisitorUncheckedCreateWithoutPropertyInput = {
    id?: string
    email: string
    favorite?: boolean
    createdAt?: Date | string
    upDatedAt?: Date | string
  }

  export type VisitorCreateOrConnectWithoutPropertyInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutPropertyInput, VisitorUncheckedCreateWithoutPropertyInput>
  }

  export type VisitorCreateManyPropertyInputEnvelope = {
    data: VisitorCreateManyPropertyInput | VisitorCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPropertiesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    url?: StringFilter<"PropertyImage"> | string
    alt?: StringFilter<"PropertyImage"> | string
    isMain?: BoolFilter<"PropertyImage"> | boolean
    propertyId?: IntFilter<"PropertyImage"> | number
  }

  export type AmenityUpsertWithWhereUniqueWithoutPropertyInput = {
    where: AmenityWhereUniqueInput
    update: XOR<AmenityUpdateWithoutPropertyInput, AmenityUncheckedUpdateWithoutPropertyInput>
    create: XOR<AmenityCreateWithoutPropertyInput, AmenityUncheckedCreateWithoutPropertyInput>
  }

  export type AmenityUpdateWithWhereUniqueWithoutPropertyInput = {
    where: AmenityWhereUniqueInput
    data: XOR<AmenityUpdateWithoutPropertyInput, AmenityUncheckedUpdateWithoutPropertyInput>
  }

  export type AmenityUpdateManyWithWhereWithoutPropertyInput = {
    where: AmenityScalarWhereInput
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyWithoutPropertyInput>
  }

  export type AmenityScalarWhereInput = {
    AND?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
    OR?: AmenityScalarWhereInput[]
    NOT?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
    id?: IntFilter<"Amenity"> | number
    name?: StringFilter<"Amenity"> | string
    propertyId?: IntFilter<"Amenity"> | number
  }

  export type NotIncludedItemUpsertWithWhereUniqueWithoutPropertyInput = {
    where: NotIncludedItemWhereUniqueInput
    update: XOR<NotIncludedItemUpdateWithoutPropertyInput, NotIncludedItemUncheckedUpdateWithoutPropertyInput>
    create: XOR<NotIncludedItemCreateWithoutPropertyInput, NotIncludedItemUncheckedCreateWithoutPropertyInput>
  }

  export type NotIncludedItemUpdateWithWhereUniqueWithoutPropertyInput = {
    where: NotIncludedItemWhereUniqueInput
    data: XOR<NotIncludedItemUpdateWithoutPropertyInput, NotIncludedItemUncheckedUpdateWithoutPropertyInput>
  }

  export type NotIncludedItemUpdateManyWithWhereWithoutPropertyInput = {
    where: NotIncludedItemScalarWhereInput
    data: XOR<NotIncludedItemUpdateManyMutationInput, NotIncludedItemUncheckedUpdateManyWithoutPropertyInput>
  }

  export type NotIncludedItemScalarWhereInput = {
    AND?: NotIncludedItemScalarWhereInput | NotIncludedItemScalarWhereInput[]
    OR?: NotIncludedItemScalarWhereInput[]
    NOT?: NotIncludedItemScalarWhereInput | NotIncludedItemScalarWhereInput[]
    id?: IntFilter<"NotIncludedItem"> | number
    name?: StringFilter<"NotIncludedItem"> | string
    propertyId?: IntFilter<"NotIncludedItem"> | number
  }

  export type VisitorUpsertWithWhereUniqueWithoutPropertyInput = {
    where: VisitorWhereUniqueInput
    update: XOR<VisitorUpdateWithoutPropertyInput, VisitorUncheckedUpdateWithoutPropertyInput>
    create: XOR<VisitorCreateWithoutPropertyInput, VisitorUncheckedCreateWithoutPropertyInput>
  }

  export type VisitorUpdateWithWhereUniqueWithoutPropertyInput = {
    where: VisitorWhereUniqueInput
    data: XOR<VisitorUpdateWithoutPropertyInput, VisitorUncheckedUpdateWithoutPropertyInput>
  }

  export type VisitorUpdateManyWithWhereWithoutPropertyInput = {
    where: VisitorScalarWhereInput
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyWithoutPropertyInput>
  }

  export type VisitorScalarWhereInput = {
    AND?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    OR?: VisitorScalarWhereInput[]
    NOT?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    id?: StringFilter<"Visitor"> | string
    email?: StringFilter<"Visitor"> | string
    favorite?: BoolFilter<"Visitor"> | boolean
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    upDatedAt?: DateTimeFilter<"Visitor"> | Date | string
    propertyId?: IntFilter<"Visitor"> | number
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyCreateWithoutImagesInput = {
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemCreateNestedManyWithoutPropertyInput
    visitors?: VisitorCreateNestedManyWithoutPropertyInput
    adminUser: UserCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    adminUserId: string
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemUncheckedCreateNestedManyWithoutPropertyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
  }

  export type PropertyUpsertWithoutImagesInput = {
    update: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUpdateManyWithoutPropertyNestedInput
    adminUser?: UserUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUncheckedUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutAmenitiesInput = {
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemCreateNestedManyWithoutPropertyInput
    visitors?: VisitorCreateNestedManyWithoutPropertyInput
    adminUser: UserCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutAmenitiesInput = {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    adminUserId: string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemUncheckedCreateNestedManyWithoutPropertyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAmenitiesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
  }

  export type PropertyUpsertWithoutAmenitiesInput = {
    update: XOR<PropertyUpdateWithoutAmenitiesInput, PropertyUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<PropertyCreateWithoutAmenitiesInput, PropertyUncheckedCreateWithoutAmenitiesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutAmenitiesInput, PropertyUncheckedUpdateWithoutAmenitiesInput>
  }

  export type PropertyUpdateWithoutAmenitiesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUpdateManyWithoutPropertyNestedInput
    adminUser?: UserUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUncheckedUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutNotIncludedInput = {
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    visitors?: VisitorCreateNestedManyWithoutPropertyInput
    adminUser: UserCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutNotIncludedInput = {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    adminUserId: string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutNotIncludedInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutNotIncludedInput, PropertyUncheckedCreateWithoutNotIncludedInput>
  }

  export type PropertyUpsertWithoutNotIncludedInput = {
    update: XOR<PropertyUpdateWithoutNotIncludedInput, PropertyUncheckedUpdateWithoutNotIncludedInput>
    create: XOR<PropertyCreateWithoutNotIncludedInput, PropertyUncheckedCreateWithoutNotIncludedInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutNotIncludedInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutNotIncludedInput, PropertyUncheckedUpdateWithoutNotIncludedInput>
  }

  export type PropertyUpdateWithoutNotIncludedInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUpdateManyWithoutPropertyNestedInput
    adminUser?: UserUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutNotIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutVisitorsInput = {
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemCreateNestedManyWithoutPropertyInput
    adminUser: UserCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutVisitorsInput = {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    adminUserId: string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutVisitorsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutVisitorsInput, PropertyUncheckedCreateWithoutVisitorsInput>
  }

  export type PropertyUpsertWithoutVisitorsInput = {
    update: XOR<PropertyUpdateWithoutVisitorsInput, PropertyUncheckedUpdateWithoutVisitorsInput>
    create: XOR<PropertyCreateWithoutVisitorsInput, PropertyUncheckedCreateWithoutVisitorsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutVisitorsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutVisitorsInput, PropertyUncheckedUpdateWithoutVisitorsInput>
  }

  export type PropertyUpdateWithoutVisitorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUpdateManyWithoutPropertyNestedInput
    adminUser?: UserUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutVisitorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUserId?: StringFieldUpdateOperationsInput | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutAdminUserInput = {
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    amenities?: AmenityCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemCreateNestedManyWithoutPropertyInput
    visitors?: VisitorCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutAdminUserInput = {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    amenities?: AmenityUncheckedCreateNestedManyWithoutPropertyInput
    notIncluded?: NotIncludedItemUncheckedCreateNestedManyWithoutPropertyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAdminUserInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAdminUserInput, PropertyUncheckedCreateWithoutAdminUserInput>
  }

  export type PropertyCreateManyAdminUserInputEnvelope = {
    data: PropertyCreateManyAdminUserInput | PropertyCreateManyAdminUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type PropertyUpsertWithWhereUniqueWithoutAdminUserInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutAdminUserInput, PropertyUncheckedUpdateWithoutAdminUserInput>
    create: XOR<PropertyCreateWithoutAdminUserInput, PropertyUncheckedCreateWithoutAdminUserInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutAdminUserInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutAdminUserInput, PropertyUncheckedUpdateWithoutAdminUserInput>
  }

  export type PropertyUpdateManyWithWhereWithoutAdminUserInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutAdminUserInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    price?: FloatFilter<"Property"> | number
    location?: StringFilter<"Property"> | string
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    size?: IntFilter<"Property"> | number
    category?: EnumCategoryFilter<"Property"> | $Enums.Category
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    parkingSpace?: IntFilter<"Property"> | number
    petsAllowed?: BoolFilter<"Property"> | boolean
    verified?: BoolFilter<"Property"> | boolean
    isNew?: BoolFilter<"Property"> | boolean
    featured?: BoolFilter<"Property"> | boolean
    hasVideo?: BoolFilter<"Property"> | boolean
    views?: IntFilter<"Property"> | number
    publishedDate?: DateTimeFilter<"Property"> | Date | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    adminUserId?: StringFilter<"Property"> | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
    properties?: PropertyCreateNestedManyWithoutAdminUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
    properties?: PropertyUncheckedCreateNestedManyWithoutAdminUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    properties?: PropertyUpdateManyWithoutAdminUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    properties?: PropertyUncheckedUpdateManyWithoutAdminUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutAdminUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    name: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    twoFactorCode?: string | null
    twoFactorExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutAdminUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutAdminUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutAdminUserNestedInput
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: number
    url: string
    alt: string
    isMain?: boolean
  }

  export type AmenityCreateManyPropertyInput = {
    id?: number
    name: string
  }

  export type NotIncludedItemCreateManyPropertyInput = {
    id?: number
    name: string
  }

  export type VisitorCreateManyPropertyInput = {
    id?: string
    email: string
    favorite?: boolean
    createdAt?: Date | string
    upDatedAt?: Date | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AmenityUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NotIncludedItemUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NotIncludedItemUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NotIncludedItemUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upDatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upDatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upDatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type PropertyCreateManyAdminUserInput = {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    size: number
    category: $Enums.Category
    propertyType: $Enums.PropertyType
    parkingSpace: number
    petsAllowed: boolean
    verified: boolean
    isNew: boolean
    featured: boolean
    hasVideo: boolean
    views?: number
    publishedDate: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyUpdateWithoutAdminUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAdminUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    amenities?: AmenityUncheckedUpdateManyWithoutPropertyNestedInput
    notIncluded?: NotIncludedItemUncheckedUpdateManyWithoutPropertyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutAdminUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    parkingSpace?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}