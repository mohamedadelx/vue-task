/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AddAdditionalItemInput = {
  additional_product_id: Scalars["Int"]["input"];
  additional_product_qty: Scalars["Float"]["input"];
  attribute_code?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  substitution_id: Scalars["Int"]["input"];
};

export type AddAdditionalMultipleItemInput = {
  additional_items: Array<InputMaybe<AddAdditionalItemInput>>;
  substitution_id: Scalars["Int"]["input"];
};

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars["String"]["input"];
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

export type AddCommentToAdditionalItemInput = {
  additional_item_id: Scalars["Int"]["input"];
  comment: Scalars["String"]["input"];
  substitution_id: Scalars["Int"]["input"];
};

export type AddCommentToBookedServiceInput = {
  /** The ID of booking to update. */
  booking_uid: Scalars["ID"]["input"];
  /** The comment on a given booked service. */
  comment: Scalars["String"]["input"];
};

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars["String"]["input"];
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars["String"]["input"];
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

export type AddNewAdminUserInput = {
  email: Scalars["String"]["input"];
  firstname: Scalars["String"]["input"];
  lastname: Scalars["String"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  role_id?: InputMaybe<Scalars["Int"]["input"]>;
  store_locator_id?: InputMaybe<Scalars["Int"]["input"]>;
  store_locator_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  username: Scalars["String"]["input"];
};

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars["ID"]["input"]>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars["ID"]["input"];
};

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

export type AddToJumpStartOrderInput = {
  orderNumber: Scalars["String"]["input"];
  sku: Scalars["String"]["input"];
};

export type AddToVanServiceOrderInput = {
  items: Array<InputMaybe<AddableItem>>;
  orderNumber: Scalars["String"]["input"];
};

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

export type AddableItem = {
  productSku: Scalars["String"]["input"];
  qty: Scalars["Int"]["input"];
};

export type AddressFilterInput = {
  is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AdminCustomerOrdersFilterInput = {
  /** Filters by order stock source. */
  source_code?: InputMaybe<FilterStringTypeInput>;
};

export enum AdminFcmChannel {
  /** @deprecated  */
  Android = "ANDROID",
  /** @deprecated  */
  Web = "WEB",
}

export type AdminOrderSourceOnCartInput = {
  cart_id: Scalars["String"]["input"];
  customer_id?: InputMaybe<Scalars["Int"]["input"]>;
  order_source: Scalars["String"]["input"];
};

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: InputMaybe<AggregationsCategoryFilterInput>;
};

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** A valid coupon code. */
  coupon_code: Scalars["String"]["input"];
};

export type ApplyEvouchersToCartInput = {
  cart_id: Scalars["String"]["input"];
  evoucher_codes: Array<InputMaybe<Scalars["String"]["input"]>>;
};

export type ApproveAdditionalItemInput = {
  additional_item_id: Scalars["Int"]["input"];
  substitution_id: Scalars["Int"]["input"];
};

export type ApproveSubstitutionItemInput = {
  substitution_id: Scalars["Int"]["input"];
  substitution_item_id: Scalars["Int"]["input"];
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars["Int"]["input"];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars["String"]["input"];
};

export type AssignJsmRiderInput = {
  bookingUid: Scalars["ID"]["input"];
  riderId: Scalars["Int"]["input"];
};

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars["String"]["input"]>;
  /** The type of entity that defines the attribute. */
  entity_type?: InputMaybe<Scalars["String"]["input"]>;
};

export enum BatchMutationStatus {
  /** @deprecated  */
  Failure = "FAILURE",
  /** @deprecated  */
  MixedResults = "MIXED_RESULTS",
  /** @deprecated  */
  Success = "SUCCESS",
}

/** Defines the billing address. */
export type BillingAddressInput = {
  /** Defines a billing address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BookAdditionalServiceInput = {
  attribute_code?: InputMaybe<Scalars["String"]["input"]>;
  /** The ID of the choosen service on the store to book at. */
  bookable_service_uid: Scalars["ID"]["input"];
  /** The day to book at in the format `YYYY-MM-DD`. */
  booking_day?: InputMaybe<Scalars["String"]["input"]>;
  /** The time to book at in the format `HH:MM`. */
  booking_time?: InputMaybe<Scalars["String"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  substitution_id: Scalars["Int"]["input"];
};

export type BookAllCartServicesInput = {
  cart_id: Scalars["String"]["input"];
  /** The chosen day formatted as `YYYY-MM-DD`. */
  day: Scalars["String"]["input"];
  /** The chosen start time formatted as `HH:MM`. */
  start_time: Scalars["String"]["input"];
  store_locator_id: Scalars["Int"]["input"];
};

export type BookableCartServiceInput = {
  /** The ID of the choosen service on the store to book at. */
  bookable_service_uid: Scalars["ID"]["input"];
  /** The day to book at in the format `YYYY-MM-DD`. By default it's today if left empty. */
  booking_day?: InputMaybe<Scalars["String"]["input"]>;
  /** The time to book at in the format `HH:MM`. If left empty it's set to the first available slot in the given day. */
  booking_time?: InputMaybe<Scalars["String"]["input"]>;
  cart_item_uid: Scalars["ID"]["input"];
};

export type BookableServiceImportInput = {
  is_enabled_in_store?: InputMaybe<Scalars["Int"]["input"]>;
  lead_time?: InputMaybe<Scalars["Int"]["input"]>;
  sku: Scalars["String"]["input"];
  store_capacity?: InputMaybe<Scalars["Int"]["input"]>;
  store_duration_slots?: InputMaybe<Scalars["Int"]["input"]>;
  working_from?: InputMaybe<Scalars["Int"]["input"]>;
  working_to?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BookableServiceInput = {
  /** By default any new added service is enabled. */
  is_enabled_in_store?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Number of minutes before the booking time to allow booking. */
  lead_time?: InputMaybe<Scalars["Int"]["input"]>;
  /** Set the service timings the same as store working hours. */
  same_as_store_times?: InputMaybe<Scalars["Boolean"]["input"]>;
  sku: Scalars["String"]["input"];
  /** Number of cars the store can serve for this service at a time. */
  store_capacity?: InputMaybe<Scalars["Int"]["input"]>;
  /** Number of slot durations the store takes. To calculate total duration check the one slot duration from `StoreConfig`. */
  store_duration_slots?: InputMaybe<Scalars["Int"]["input"]>;
  working_times?: InputMaybe<WorkingTimesInput>;
};

export enum BookingStatus {
  /** @deprecated  */
  Canceled = "CANCELED",
  /** @deprecated  */
  Completed = "COMPLETED",
  /** @deprecated  */
  Confirmed = "CONFIRMED",
  /** @deprecated  */
  Dummy = "DUMMY",
  /** @deprecated  */
  Missed = "MISSED",
  /** @deprecated  */
  Pending = "PENDING",
  /** @deprecated  */
  PendingCheckout = "PENDING_CHECKOUT",
}

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars["Int"]["input"];
  /** The number of the selected item to add to the cart. */
  quantity: Scalars["Float"]["input"];
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars["String"]["input"]>>;
};

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput;
};

export enum CancellationType {
  /** @deprecated  */
  Booking = "BOOKING",
  /** @deprecated  */
  Order = "ORDER",
  /** @deprecated  */
  Ride = "RIDE",
  /** @deprecated  */
  Store = "STORE",
  /** @deprecated  */
  VanRide = "VAN_RIDE",
}

/** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars["String"]["input"];
  /** The company specified for the billing or shipping address. */
  company?: InputMaybe<Scalars["String"]["input"]>;
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars["String"]["input"];
  /** The first name of the customer or guest. */
  firstname: Scalars["String"]["input"];
  /** The last name of the customer or guest. */
  lastname: Scalars["String"]["input"];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: InputMaybe<Scalars["String"]["input"]>;
  /** A string that defines the state or province of the billing or shipping address. */
  region?: InputMaybe<Scalars["String"]["input"]>;
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<InputMaybe<Scalars["String"]["input"]>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: InputMaybe<Scalars["String"]["input"]>;
  /** The VAT company number for billing or shipping address. */
  vat_id?: InputMaybe<Scalars["String"]["input"]>;
};

export enum CartItemErrorType {
  /** @deprecated  */
  ItemIncrements = "ITEM_INCREMENTS",
  /** @deprecated  */
  ItemQty = "ITEM_QTY",
  /** @deprecated  */
  Undefined = "UNDEFINED",
}

/** Defines an item to be added to the cart. */
export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For a child product, the SKU of its parent product. */
  parent_sku?: InputMaybe<Scalars["String"]["input"]>;
  /** The amount or number of an item to add. */
  quantity: Scalars["Float"]["input"];
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** The SKU of the product. */
  sku: Scalars["String"]["input"];
};

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars["ID"]["input"]>;
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The new quantity of the item. */
  quantity?: InputMaybe<Scalars["Float"]["input"]>;
};

export enum CartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = "INSUFFICIENT_STOCK",
  /** @deprecated  */
  NotSalable = "NOT_SALABLE",
  /** @deprecated  */
  ProductNotFound = "PRODUCT_NOT_FOUND",
  /** @deprecated  */
  Undefined = "UNDEFINED",
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** Indicates how agreements are accepted. */
export enum CheckoutAgreementMode {
  /**
   * Conditions are automatically accepted upon checkout.
   * @deprecated
   */
  Auto = "AUTO",
  /**
   * Shoppers must manually accept the conditions to place an order.
   * @deprecated
   */
  Manual = "MANUAL",
}

export type CheckoutJumpStartAddonsInput = {
  methodCode: Scalars["String"]["input"];
  orderNumber: Scalars["String"]["input"];
};

export enum CheckoutUserInputErrorCodes {
  /** @deprecated  */
  InsufficientStock = "INSUFFICIENT_STOCK",
  /** @deprecated  */
  NotSalable = "NOT_SALABLE",
  /** @deprecated  */
  ProductNotFound = "PRODUCT_NOT_FOUND",
  /** @deprecated  */
  ReorderNotAvailable = "REORDER_NOT_AVAILABLE",
  /** @deprecated  */
  Undefined = "UNDEFINED",
}

export type CloseStoreLocatorInput = {
  /** The start time of this period formatted as `YYYY-MM-DD HH:MM`. */
  from: Scalars["String"]["input"];
  /** The reason why the store will be closed at this time. */
  reason?: InputMaybe<Scalars["String"]["input"]>;
  /** The unique Id of the store locator. */
  store_locator_id: Scalars["Int"]["input"];
  /** The end time of this period formatted as `YYYY-MM-DD HH:MM`. */
  to: Scalars["String"]["input"];
};

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput;
  /** The SKU of the parent configurable product. */
  parent_sku?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: InputMaybe<Scalars["String"]["input"]>;
};

export type ContactFormInput = {
  attachment?: InputMaybe<Scalars["String"]["input"]>;
  description: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  phone_number: Scalars["String"]["input"];
  preferred_contact_method?: InputMaybe<Scalars["String"]["input"]>;
  reason_of_contact: Scalars["String"]["input"];
};

/** The list of country codes. */
export enum CountryCodeEnum {
  /**
   * Andorra
   * @deprecated
   */
  Ad = "AD",
  /**
   * United Arab Emirates
   * @deprecated
   */
  Ae = "AE",
  /**
   * Afghanistan
   * @deprecated
   */
  Af = "AF",
  /**
   * Antigua & Barbuda
   * @deprecated
   */
  Ag = "AG",
  /**
   * Anguilla
   * @deprecated
   */
  Ai = "AI",
  /**
   * Albania
   * @deprecated
   */
  Al = "AL",
  /**
   * Armenia
   * @deprecated
   */
  Am = "AM",
  /**
   * Netherlands Antilles
   * @deprecated
   */
  An = "AN",
  /**
   * Angola
   * @deprecated
   */
  Ao = "AO",
  /**
   * Antarctica
   * @deprecated
   */
  Aq = "AQ",
  /**
   * Argentina
   * @deprecated
   */
  Ar = "AR",
  /**
   * American Samoa
   * @deprecated
   */
  As = "AS",
  /**
   * Austria
   * @deprecated
   */
  At = "AT",
  /**
   * Australia
   * @deprecated
   */
  Au = "AU",
  /**
   * Aruba
   * @deprecated
   */
  Aw = "AW",
  /**
   * Åland Islands
   * @deprecated
   */
  Ax = "AX",
  /**
   * Azerbaijan
   * @deprecated
   */
  Az = "AZ",
  /**
   * Bosnia & Herzegovina
   * @deprecated
   */
  Ba = "BA",
  /**
   * Barbados
   * @deprecated
   */
  Bb = "BB",
  /**
   * Bangladesh
   * @deprecated
   */
  Bd = "BD",
  /**
   * Belgium
   * @deprecated
   */
  Be = "BE",
  /**
   * Burkina Faso
   * @deprecated
   */
  Bf = "BF",
  /**
   * Bulgaria
   * @deprecated
   */
  Bg = "BG",
  /**
   * Bahrain
   * @deprecated
   */
  Bh = "BH",
  /**
   * Burundi
   * @deprecated
   */
  Bi = "BI",
  /**
   * Benin
   * @deprecated
   */
  Bj = "BJ",
  /**
   * St. Barthélemy
   * @deprecated
   */
  Bl = "BL",
  /**
   * Bermuda
   * @deprecated
   */
  Bm = "BM",
  /**
   * Brunei
   * @deprecated
   */
  Bn = "BN",
  /**
   * Bolivia
   * @deprecated
   */
  Bo = "BO",
  /**
   * Brazil
   * @deprecated
   */
  Br = "BR",
  /**
   * Bahamas
   * @deprecated
   */
  Bs = "BS",
  /**
   * Bhutan
   * @deprecated
   */
  Bt = "BT",
  /**
   * Bouvet Island
   * @deprecated
   */
  Bv = "BV",
  /**
   * Botswana
   * @deprecated
   */
  Bw = "BW",
  /**
   * Belarus
   * @deprecated
   */
  By = "BY",
  /**
   * Belize
   * @deprecated
   */
  Bz = "BZ",
  /**
   * Canada
   * @deprecated
   */
  Ca = "CA",
  /**
   * Cocos (Keeling) Islands
   * @deprecated
   */
  Cc = "CC",
  /**
   * Congo-Kinshasa
   * @deprecated
   */
  Cd = "CD",
  /**
   * Central African Republic
   * @deprecated
   */
  Cf = "CF",
  /**
   * Congo-Brazzaville
   * @deprecated
   */
  Cg = "CG",
  /**
   * Switzerland
   * @deprecated
   */
  Ch = "CH",
  /**
   * Côte d’Ivoire
   * @deprecated
   */
  Ci = "CI",
  /**
   * Cook Islands
   * @deprecated
   */
  Ck = "CK",
  /**
   * Chile
   * @deprecated
   */
  Cl = "CL",
  /**
   * Cameroon
   * @deprecated
   */
  Cm = "CM",
  /**
   * China
   * @deprecated
   */
  Cn = "CN",
  /**
   * Colombia
   * @deprecated
   */
  Co = "CO",
  /**
   * Costa Rica
   * @deprecated
   */
  Cr = "CR",
  /**
   * Cuba
   * @deprecated
   */
  Cu = "CU",
  /**
   * Cape Verde
   * @deprecated
   */
  Cv = "CV",
  /**
   * Christmas Island
   * @deprecated
   */
  Cx = "CX",
  /**
   * Cyprus
   * @deprecated
   */
  Cy = "CY",
  /**
   * Czech Republic
   * @deprecated
   */
  Cz = "CZ",
  /**
   * Germany
   * @deprecated
   */
  De = "DE",
  /**
   * Djibouti
   * @deprecated
   */
  Dj = "DJ",
  /**
   * Denmark
   * @deprecated
   */
  Dk = "DK",
  /**
   * Dominica
   * @deprecated
   */
  Dm = "DM",
  /**
   * Dominican Republic
   * @deprecated
   */
  Do = "DO",
  /**
   * Algeria
   * @deprecated
   */
  Dz = "DZ",
  /**
   * Ecuador
   * @deprecated
   */
  Ec = "EC",
  /**
   * Estonia
   * @deprecated
   */
  Ee = "EE",
  /**
   * Egypt
   * @deprecated
   */
  Eg = "EG",
  /**
   * Western Sahara
   * @deprecated
   */
  Eh = "EH",
  /**
   * Eritrea
   * @deprecated
   */
  Er = "ER",
  /**
   * Spain
   * @deprecated
   */
  Es = "ES",
  /**
   * Ethiopia
   * @deprecated
   */
  Et = "ET",
  /**
   * Finland
   * @deprecated
   */
  Fi = "FI",
  /**
   * Fiji
   * @deprecated
   */
  Fj = "FJ",
  /**
   * Falkland Islands
   * @deprecated
   */
  Fk = "FK",
  /**
   * Micronesia
   * @deprecated
   */
  Fm = "FM",
  /**
   * Faroe Islands
   * @deprecated
   */
  Fo = "FO",
  /**
   * France
   * @deprecated
   */
  Fr = "FR",
  /**
   * Gabon
   * @deprecated
   */
  Ga = "GA",
  /**
   * United Kingdom
   * @deprecated
   */
  Gb = "GB",
  /**
   * Grenada
   * @deprecated
   */
  Gd = "GD",
  /**
   * Georgia
   * @deprecated
   */
  Ge = "GE",
  /**
   * French Guiana
   * @deprecated
   */
  Gf = "GF",
  /**
   * Guernsey
   * @deprecated
   */
  Gg = "GG",
  /**
   * Ghana
   * @deprecated
   */
  Gh = "GH",
  /**
   * Gibraltar
   * @deprecated
   */
  Gi = "GI",
  /**
   * Greenland
   * @deprecated
   */
  Gl = "GL",
  /**
   * Gambia
   * @deprecated
   */
  Gm = "GM",
  /**
   * Guinea
   * @deprecated
   */
  Gn = "GN",
  /**
   * Guadeloupe
   * @deprecated
   */
  Gp = "GP",
  /**
   * Equatorial Guinea
   * @deprecated
   */
  Gq = "GQ",
  /**
   * Greece
   * @deprecated
   */
  Gr = "GR",
  /**
   * South Georgia & South Sandwich Islands
   * @deprecated
   */
  Gs = "GS",
  /**
   * Guatemala
   * @deprecated
   */
  Gt = "GT",
  /**
   * Guam
   * @deprecated
   */
  Gu = "GU",
  /**
   * Guinea-Bissau
   * @deprecated
   */
  Gw = "GW",
  /**
   * Guyana
   * @deprecated
   */
  Gy = "GY",
  /**
   * Hong Kong SAR China
   * @deprecated
   */
  Hk = "HK",
  /**
   * Heard &amp; McDonald Islands
   * @deprecated
   */
  Hm = "HM",
  /**
   * Honduras
   * @deprecated
   */
  Hn = "HN",
  /**
   * Croatia
   * @deprecated
   */
  Hr = "HR",
  /**
   * Haiti
   * @deprecated
   */
  Ht = "HT",
  /**
   * Hungary
   * @deprecated
   */
  Hu = "HU",
  /**
   * Indonesia
   * @deprecated
   */
  Id = "ID",
  /**
   * Ireland
   * @deprecated
   */
  Ie = "IE",
  /**
   * Israel
   * @deprecated
   */
  Il = "IL",
  /**
   * Isle of Man
   * @deprecated
   */
  Im = "IM",
  /**
   * India
   * @deprecated
   */
  In = "IN",
  /**
   * British Indian Ocean Territory
   * @deprecated
   */
  Io = "IO",
  /**
   * Iraq
   * @deprecated
   */
  Iq = "IQ",
  /**
   * Iran
   * @deprecated
   */
  Ir = "IR",
  /**
   * Iceland
   * @deprecated
   */
  Is = "IS",
  /**
   * Italy
   * @deprecated
   */
  It = "IT",
  /**
   * Jersey
   * @deprecated
   */
  Je = "JE",
  /**
   * Jamaica
   * @deprecated
   */
  Jm = "JM",
  /**
   * Jordan
   * @deprecated
   */
  Jo = "JO",
  /**
   * Japan
   * @deprecated
   */
  Jp = "JP",
  /**
   * Kenya
   * @deprecated
   */
  Ke = "KE",
  /**
   * Kyrgyzstan
   * @deprecated
   */
  Kg = "KG",
  /**
   * Cambodia
   * @deprecated
   */
  Kh = "KH",
  /**
   * Kiribati
   * @deprecated
   */
  Ki = "KI",
  /**
   * Comoros
   * @deprecated
   */
  Km = "KM",
  /**
   * St. Kitts & Nevis
   * @deprecated
   */
  Kn = "KN",
  /**
   * North Korea
   * @deprecated
   */
  Kp = "KP",
  /**
   * South Korea
   * @deprecated
   */
  Kr = "KR",
  /**
   * Kuwait
   * @deprecated
   */
  Kw = "KW",
  /**
   * Cayman Islands
   * @deprecated
   */
  Ky = "KY",
  /**
   * Kazakhstan
   * @deprecated
   */
  Kz = "KZ",
  /**
   * Laos
   * @deprecated
   */
  La = "LA",
  /**
   * Lebanon
   * @deprecated
   */
  Lb = "LB",
  /**
   * St. Lucia
   * @deprecated
   */
  Lc = "LC",
  /**
   * Liechtenstein
   * @deprecated
   */
  Li = "LI",
  /**
   * Sri Lanka
   * @deprecated
   */
  Lk = "LK",
  /**
   * Liberia
   * @deprecated
   */
  Lr = "LR",
  /**
   * Lesotho
   * @deprecated
   */
  Ls = "LS",
  /**
   * Lithuania
   * @deprecated
   */
  Lt = "LT",
  /**
   * Luxembourg
   * @deprecated
   */
  Lu = "LU",
  /**
   * Latvia
   * @deprecated
   */
  Lv = "LV",
  /**
   * Libya
   * @deprecated
   */
  Ly = "LY",
  /**
   * Morocco
   * @deprecated
   */
  Ma = "MA",
  /**
   * Monaco
   * @deprecated
   */
  Mc = "MC",
  /**
   * Moldova
   * @deprecated
   */
  Md = "MD",
  /**
   * Montenegro
   * @deprecated
   */
  Me = "ME",
  /**
   * St. Martin
   * @deprecated
   */
  Mf = "MF",
  /**
   * Madagascar
   * @deprecated
   */
  Mg = "MG",
  /**
   * Marshall Islands
   * @deprecated
   */
  Mh = "MH",
  /**
   * Macedonia
   * @deprecated
   */
  Mk = "MK",
  /**
   * Mali
   * @deprecated
   */
  Ml = "ML",
  /**
   * Myanmar (Burma)
   * @deprecated
   */
  Mm = "MM",
  /**
   * Mongolia
   * @deprecated
   */
  Mn = "MN",
  /**
   * Macau SAR China
   * @deprecated
   */
  Mo = "MO",
  /**
   * Northern Mariana Islands
   * @deprecated
   */
  Mp = "MP",
  /**
   * Martinique
   * @deprecated
   */
  Mq = "MQ",
  /**
   * Mauritania
   * @deprecated
   */
  Mr = "MR",
  /**
   * Montserrat
   * @deprecated
   */
  Ms = "MS",
  /**
   * Malta
   * @deprecated
   */
  Mt = "MT",
  /**
   * Mauritius
   * @deprecated
   */
  Mu = "MU",
  /**
   * Maldives
   * @deprecated
   */
  Mv = "MV",
  /**
   * Malawi
   * @deprecated
   */
  Mw = "MW",
  /**
   * Mexico
   * @deprecated
   */
  Mx = "MX",
  /**
   * Malaysia
   * @deprecated
   */
  My = "MY",
  /**
   * Mozambique
   * @deprecated
   */
  Mz = "MZ",
  /**
   * Namibia
   * @deprecated
   */
  Na = "NA",
  /**
   * New Caledonia
   * @deprecated
   */
  Nc = "NC",
  /**
   * Niger
   * @deprecated
   */
  Ne = "NE",
  /**
   * Norfolk Island
   * @deprecated
   */
  Nf = "NF",
  /**
   * Nigeria
   * @deprecated
   */
  Ng = "NG",
  /**
   * Nicaragua
   * @deprecated
   */
  Ni = "NI",
  /**
   * Netherlands
   * @deprecated
   */
  Nl = "NL",
  /**
   * Norway
   * @deprecated
   */
  No = "NO",
  /**
   * Nepal
   * @deprecated
   */
  Np = "NP",
  /**
   * Nauru
   * @deprecated
   */
  Nr = "NR",
  /**
   * Niue
   * @deprecated
   */
  Nu = "NU",
  /**
   * New Zealand
   * @deprecated
   */
  Nz = "NZ",
  /**
   * Oman
   * @deprecated
   */
  Om = "OM",
  /**
   * Panama
   * @deprecated
   */
  Pa = "PA",
  /**
   * Peru
   * @deprecated
   */
  Pe = "PE",
  /**
   * French Polynesia
   * @deprecated
   */
  Pf = "PF",
  /**
   * Papua New Guinea
   * @deprecated
   */
  Pg = "PG",
  /**
   * Philippines
   * @deprecated
   */
  Ph = "PH",
  /**
   * Pakistan
   * @deprecated
   */
  Pk = "PK",
  /**
   * Poland
   * @deprecated
   */
  Pl = "PL",
  /**
   * St. Pierre & Miquelon
   * @deprecated
   */
  Pm = "PM",
  /**
   * Pitcairn Islands
   * @deprecated
   */
  Pn = "PN",
  /**
   * Palestinian Territories
   * @deprecated
   */
  Ps = "PS",
  /**
   * Portugal
   * @deprecated
   */
  Pt = "PT",
  /**
   * Palau
   * @deprecated
   */
  Pw = "PW",
  /**
   * Paraguay
   * @deprecated
   */
  Py = "PY",
  /**
   * Qatar
   * @deprecated
   */
  Qa = "QA",
  /**
   * Réunion
   * @deprecated
   */
  Re = "RE",
  /**
   * Romania
   * @deprecated
   */
  Ro = "RO",
  /**
   * Serbia
   * @deprecated
   */
  Rs = "RS",
  /**
   * Russia
   * @deprecated
   */
  Ru = "RU",
  /**
   * Rwanda
   * @deprecated
   */
  Rw = "RW",
  /**
   * Saudi Arabia
   * @deprecated
   */
  Sa = "SA",
  /**
   * Solomon Islands
   * @deprecated
   */
  Sb = "SB",
  /**
   * Seychelles
   * @deprecated
   */
  Sc = "SC",
  /**
   * Sudan
   * @deprecated
   */
  Sd = "SD",
  /**
   * Sweden
   * @deprecated
   */
  Se = "SE",
  /**
   * Singapore
   * @deprecated
   */
  Sg = "SG",
  /**
   * St. Helena
   * @deprecated
   */
  Sh = "SH",
  /**
   * Slovenia
   * @deprecated
   */
  Si = "SI",
  /**
   * Svalbard & Jan Mayen
   * @deprecated
   */
  Sj = "SJ",
  /**
   * Slovakia
   * @deprecated
   */
  Sk = "SK",
  /**
   * Sierra Leone
   * @deprecated
   */
  Sl = "SL",
  /**
   * San Marino
   * @deprecated
   */
  Sm = "SM",
  /**
   * Senegal
   * @deprecated
   */
  Sn = "SN",
  /**
   * Somalia
   * @deprecated
   */
  So = "SO",
  /**
   * Suriname
   * @deprecated
   */
  Sr = "SR",
  /**
   * São Tomé & Príncipe
   * @deprecated
   */
  St = "ST",
  /**
   * El Salvador
   * @deprecated
   */
  Sv = "SV",
  /**
   * Syria
   * @deprecated
   */
  Sy = "SY",
  /**
   * Swaziland
   * @deprecated
   */
  Sz = "SZ",
  /**
   * Turks & Caicos Islands
   * @deprecated
   */
  Tc = "TC",
  /**
   * Chad
   * @deprecated
   */
  Td = "TD",
  /**
   * French Southern Territories
   * @deprecated
   */
  Tf = "TF",
  /**
   * Togo
   * @deprecated
   */
  Tg = "TG",
  /**
   * Thailand
   * @deprecated
   */
  Th = "TH",
  /**
   * Tajikistan
   * @deprecated
   */
  Tj = "TJ",
  /**
   * Tokelau
   * @deprecated
   */
  Tk = "TK",
  /**
   * Timor-Leste
   * @deprecated
   */
  Tl = "TL",
  /**
   * Turkmenistan
   * @deprecated
   */
  Tm = "TM",
  /**
   * Tunisia
   * @deprecated
   */
  Tn = "TN",
  /**
   * Tonga
   * @deprecated
   */
  To = "TO",
  /**
   * Turkey
   * @deprecated
   */
  Tr = "TR",
  /**
   * Trinidad & Tobago
   * @deprecated
   */
  Tt = "TT",
  /**
   * Tuvalu
   * @deprecated
   */
  Tv = "TV",
  /**
   * Taiwan
   * @deprecated
   */
  Tw = "TW",
  /**
   * Tanzania
   * @deprecated
   */
  Tz = "TZ",
  /**
   * Ukraine
   * @deprecated
   */
  Ua = "UA",
  /**
   * Uganda
   * @deprecated
   */
  Ug = "UG",
  /**
   * U.S. Outlying Islands
   * @deprecated
   */
  Um = "UM",
  /**
   * United States
   * @deprecated
   */
  Us = "US",
  /**
   * Uruguay
   * @deprecated
   */
  Uy = "UY",
  /**
   * Uzbekistan
   * @deprecated
   */
  Uz = "UZ",
  /**
   * Vatican City
   * @deprecated
   */
  Va = "VA",
  /**
   * St. Vincent & Grenadines
   * @deprecated
   */
  Vc = "VC",
  /**
   * Venezuela
   * @deprecated
   */
  Ve = "VE",
  /**
   * British Virgin Islands
   * @deprecated
   */
  Vg = "VG",
  /**
   * U.S. Virgin Islands
   * @deprecated
   */
  Vi = "VI",
  /**
   * Vietnam
   * @deprecated
   */
  Vn = "VN",
  /**
   * Vanuatu
   * @deprecated
   */
  Vu = "VU",
  /**
   * Wallis & Futuna
   * @deprecated
   */
  Wf = "WF",
  /**
   * Samoa
   * @deprecated
   */
  Ws = "WS",
  /**
   * Yemen
   * @deprecated
   */
  Ye = "YE",
  /**
   * Mayotte
   * @deprecated
   */
  Yt = "YT",
  /**
   * South Africa
   * @deprecated
   */
  Za = "ZA",
  /**
   * Zambia
   * @deprecated
   */
  Zm = "ZM",
  /**
   * Zimbabwe
   * @deprecated
   */
  Zw = "ZW",
}

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type CreateCustomerAndAddressInput = {
  addressInput: CustomerAddressInput;
  customerInput: CustomerCreateInput;
};

export type CreateCustomerInput = {
  /** Customer registration source */
  customer_source?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's email address. Required for customer creation */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's password */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** Customer phone number */
  phone_number: Scalars["String"]["input"];
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateOrderAndVisitInput = {
  customer_id: Scalars["ID"]["input"];
  customer_vehicle_uid: Scalars["ID"]["input"];
  store_locator_id: Scalars["Int"]["input"];
};

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars["String"]["input"];
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product. */
  sku: Scalars["String"]["input"];
  /** The summary (title) of the review. */
  summary: Scalars["String"]["input"];
  /** The review text. */
  text: Scalars["String"]["input"];
};

export type CreateSubstitutionInput = {
  visit_id: Scalars["ID"]["input"];
};

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars["Int"]["input"];
  /** The credit card expiration year. */
  cc_exp_year: Scalars["Int"]["input"];
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars["Int"]["input"];
  /** The credit card type. */
  cc_type: Scalars["String"]["input"];
};

/** The list of available currency codes. */
export enum CurrencyEnum {
  /** @deprecated  */
  Aed = "AED",
  /** @deprecated  */
  Afn = "AFN",
  /** @deprecated  */
  All = "ALL",
  /** @deprecated  */
  Amd = "AMD",
  /** @deprecated  */
  Ang = "ANG",
  /** @deprecated  */
  Aoa = "AOA",
  /** @deprecated  */
  Ars = "ARS",
  /** @deprecated  */
  Aud = "AUD",
  /** @deprecated  */
  Awg = "AWG",
  /** @deprecated  */
  Azm = "AZM",
  /** @deprecated  */
  Azn = "AZN",
  /** @deprecated  */
  Bam = "BAM",
  /** @deprecated  */
  Bbd = "BBD",
  /** @deprecated  */
  Bdt = "BDT",
  /** @deprecated  */
  Bgn = "BGN",
  /** @deprecated  */
  Bhd = "BHD",
  /** @deprecated  */
  Bif = "BIF",
  /** @deprecated  */
  Bmd = "BMD",
  /** @deprecated  */
  Bnd = "BND",
  /** @deprecated  */
  Bob = "BOB",
  /** @deprecated  */
  Brl = "BRL",
  /** @deprecated  */
  Bsd = "BSD",
  /** @deprecated  */
  Btn = "BTN",
  /** @deprecated  */
  Buk = "BUK",
  /** @deprecated  */
  Bwp = "BWP",
  /** @deprecated  */
  Byn = "BYN",
  /** @deprecated  */
  Bzd = "BZD",
  /** @deprecated  */
  Cad = "CAD",
  /** @deprecated  */
  Cdf = "CDF",
  /** @deprecated  */
  Che = "CHE",
  /** @deprecated  */
  Chf = "CHF",
  /** @deprecated  */
  Chw = "CHW",
  /** @deprecated  */
  Clp = "CLP",
  /** @deprecated  */
  Cny = "CNY",
  /** @deprecated  */
  Cop = "COP",
  /** @deprecated  */
  Crc = "CRC",
  /** @deprecated  */
  Cup = "CUP",
  /** @deprecated  */
  Cve = "CVE",
  /** @deprecated  */
  Czk = "CZK",
  /** @deprecated  */
  Djf = "DJF",
  /** @deprecated  */
  Dkk = "DKK",
  /** @deprecated  */
  Dop = "DOP",
  /** @deprecated  */
  Dzd = "DZD",
  /** @deprecated  */
  Eek = "EEK",
  /** @deprecated  */
  Egp = "EGP",
  /** @deprecated  */
  Ern = "ERN",
  /** @deprecated  */
  Etb = "ETB",
  /** @deprecated  */
  Eur = "EUR",
  /** @deprecated  */
  Fjd = "FJD",
  /** @deprecated  */
  Fkp = "FKP",
  /** @deprecated  */
  Gbp = "GBP",
  /** @deprecated  */
  Gek = "GEK",
  /** @deprecated  */
  Gel = "GEL",
  /** @deprecated  */
  Ghs = "GHS",
  /** @deprecated  */
  Gip = "GIP",
  /** @deprecated  */
  Gmd = "GMD",
  /** @deprecated  */
  Gnf = "GNF",
  /** @deprecated  */
  Gqe = "GQE",
  /** @deprecated  */
  Gtq = "GTQ",
  /** @deprecated  */
  Gyd = "GYD",
  /** @deprecated  */
  Hkd = "HKD",
  /** @deprecated  */
  Hnl = "HNL",
  /** @deprecated  */
  Hrk = "HRK",
  /** @deprecated  */
  Htg = "HTG",
  /** @deprecated  */
  Huf = "HUF",
  /** @deprecated  */
  Idr = "IDR",
  /** @deprecated  */
  Ils = "ILS",
  /** @deprecated  */
  Inr = "INR",
  /** @deprecated  */
  Iqd = "IQD",
  /** @deprecated  */
  Irr = "IRR",
  /** @deprecated  */
  Isk = "ISK",
  /** @deprecated  */
  Jmd = "JMD",
  /** @deprecated  */
  Jod = "JOD",
  /** @deprecated  */
  Jpy = "JPY",
  /** @deprecated  */
  Kes = "KES",
  /** @deprecated  */
  Kgs = "KGS",
  /** @deprecated  */
  Khr = "KHR",
  /** @deprecated  */
  Kmf = "KMF",
  /** @deprecated  */
  Kpw = "KPW",
  /** @deprecated  */
  Krw = "KRW",
  /** @deprecated  */
  Kwd = "KWD",
  /** @deprecated  */
  Kyd = "KYD",
  /** @deprecated  */
  Kzt = "KZT",
  /** @deprecated  */
  Lak = "LAK",
  /** @deprecated  */
  Lbp = "LBP",
  /** @deprecated  */
  Lkr = "LKR",
  /** @deprecated  */
  Lrd = "LRD",
  /** @deprecated  */
  Lsl = "LSL",
  /** @deprecated  */
  Lsm = "LSM",
  /** @deprecated  */
  Ltl = "LTL",
  /** @deprecated  */
  Lvl = "LVL",
  /** @deprecated  */
  Lyd = "LYD",
  /** @deprecated  */
  Mad = "MAD",
  /** @deprecated  */
  Mdl = "MDL",
  /** @deprecated  */
  Mga = "MGA",
  /** @deprecated  */
  Mkd = "MKD",
  /** @deprecated  */
  Mmk = "MMK",
  /** @deprecated  */
  Mnt = "MNT",
  /** @deprecated  */
  Mop = "MOP",
  /** @deprecated  */
  Mro = "MRO",
  /** @deprecated  */
  Mur = "MUR",
  /** @deprecated  */
  Mvr = "MVR",
  /** @deprecated  */
  Mwk = "MWK",
  /** @deprecated  */
  Mxn = "MXN",
  /** @deprecated  */
  Myr = "MYR",
  /** @deprecated  */
  Mzn = "MZN",
  /** @deprecated  */
  Nad = "NAD",
  /** @deprecated  */
  Ngn = "NGN",
  /** @deprecated  */
  Nic = "NIC",
  /** @deprecated  */
  Nok = "NOK",
  /** @deprecated  */
  Npr = "NPR",
  /** @deprecated  */
  Nzd = "NZD",
  /** @deprecated  */
  Omr = "OMR",
  /** @deprecated  */
  Pab = "PAB",
  /** @deprecated  */
  Pen = "PEN",
  /** @deprecated  */
  Pgk = "PGK",
  /** @deprecated  */
  Php = "PHP",
  /** @deprecated  */
  Pkr = "PKR",
  /** @deprecated  */
  Pln = "PLN",
  /** @deprecated  */
  Pyg = "PYG",
  /** @deprecated  */
  Qar = "QAR",
  /** @deprecated  */
  Rhd = "RHD",
  /** @deprecated  */
  Rol = "ROL",
  /** @deprecated  */
  Ron = "RON",
  /** @deprecated  */
  Rsd = "RSD",
  /** @deprecated  */
  Rub = "RUB",
  /** @deprecated  */
  Rwf = "RWF",
  /** @deprecated  */
  Sar = "SAR",
  /** @deprecated  */
  Sbd = "SBD",
  /** @deprecated  */
  Scr = "SCR",
  /** @deprecated  */
  Sdg = "SDG",
  /** @deprecated  */
  Sek = "SEK",
  /** @deprecated  */
  Sgd = "SGD",
  /** @deprecated  */
  Shp = "SHP",
  /** @deprecated  */
  Skk = "SKK",
  /** @deprecated  */
  Sll = "SLL",
  /** @deprecated  */
  Sos = "SOS",
  /** @deprecated  */
  Srd = "SRD",
  /** @deprecated  */
  Std = "STD",
  /** @deprecated  */
  Svc = "SVC",
  /** @deprecated  */
  Syp = "SYP",
  /** @deprecated  */
  Szl = "SZL",
  /** @deprecated  */
  Thb = "THB",
  /** @deprecated  */
  Tjs = "TJS",
  /** @deprecated  */
  Tmm = "TMM",
  /** @deprecated  */
  Tnd = "TND",
  /** @deprecated  */
  Top = "TOP",
  /** @deprecated  */
  Trl = "TRL",
  /** @deprecated  */
  Try = "TRY",
  /** @deprecated  */
  Ttd = "TTD",
  /** @deprecated  */
  Twd = "TWD",
  /** @deprecated  */
  Tzs = "TZS",
  /** @deprecated  */
  Uah = "UAH",
  /** @deprecated  */
  Ugx = "UGX",
  /** @deprecated  */
  Usd = "USD",
  /** @deprecated  */
  Uyu = "UYU",
  /** @deprecated  */
  Uzs = "UZS",
  /** @deprecated  */
  Veb = "VEB",
  /** @deprecated  */
  Vef = "VEF",
  /** @deprecated  */
  Vnd = "VND",
  /** @deprecated  */
  Vuv = "VUV",
  /** @deprecated  */
  Wst = "WST",
  /** @deprecated  */
  Xcd = "XCD",
  /** @deprecated  */
  Xof = "XOF",
  /** @deprecated  */
  Xpf = "XPF",
  /** @deprecated  */
  Yer = "YER",
  /** @deprecated  */
  Ytl = "YTL",
  /** @deprecated  */
  Zar = "ZAR",
  /** @deprecated  */
  Zmk = "ZMK",
  /** @deprecated  */
  Zwd = "ZWD",
}

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars["String"]["input"];
  /** The value assigned to the attribute. */
  value: Scalars["String"]["input"];
};

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's company. */
  company?: InputMaybe<Scalars["String"]["input"]>;
  /** The two-letter code representing the customer's country. */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<
    Array<InputMaybe<CustomerAddressAttributeInput>>
  >;
  /** Indicates whether the address is the default billing address. */
  default_billing?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars["String"]["input"]>;
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars["String"]["input"]>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name. */
  street?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's telephone number. */
  telephone?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region?: InputMaybe<Scalars["String"]["input"]>;
  /** The address region code. */
  region_code?: InputMaybe<Scalars["String"]["input"]>;
  /** The unique ID for a pre-defined region. */
  region_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's email address. */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's first name. */
  firstname: Scalars["String"]["input"];
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's family name. */
  lastname: Scalars["String"]["input"];
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's password. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** Customer phone number */
  phone_number: Scalars["String"]["input"];
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerInformationInput = {
  newEmail: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
};

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's email address. Required when creating a customer. */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's password. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars["String"]["input"]>;
};

/** CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type CustomerOrderSortInput = {
  /** This enumeration indicates whether to return results in ascending or descending order */
  sort_direction: SortEnum;
  /** Specifies the field to use for sorting */
  sort_field: CustomerOrderSortableField;
};

/** Specifies the field to use for sorting */
export enum CustomerOrderSortableField {
  /**
   * Sorts customer orders by created_at field
   * @deprecated
   */
  CreatedAt = "CREATED_AT",
  /**
   * Sorts customer orders by number
   * @deprecated
   */
  Number = "NUMBER",
}

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters bookings/orders only. */
  has_booking?: InputMaybe<FilterEqualTypeInput>;
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

export type CustomerUpdateAsAdminInput = {
  /** The customer's updated email */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars["String"]["input"]>;
};

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerVehicleSpecificInput = {
  /** Vehicle Color ID */
  color_id?: InputMaybe<Scalars["ID"]["input"]>;
  /** Make this vehicle default vehicle for the customer */
  is_default?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** License plate number */
  license_number?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle model mileage */
  mileage?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle model year */
  model_year?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle Identification Number */
  vin?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomersFilterInput = {
  email?: InputMaybe<FilterStringTypeInput>;
  id?: InputMaybe<FilterEqualTypeInput>;
  name?: InputMaybe<FilterStringTypeInput>;
  phone_number?: InputMaybe<FilterStringTypeInput>;
};

/** Defines the customizable date type. */
export enum CustomizableDateTypeEnum {
  /** @deprecated  */
  Date = "DATE",
  /** @deprecated  */
  DateTime = "DATE_TIME",
  /** @deprecated  */
  Time = "TIME",
}

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The string value of the option. */
  value_string: Scalars["String"]["input"];
};

export enum DiscountType {
  /** @deprecated  */
  Fixed = "FIXED",
  /** @deprecated  */
  Percentage = "PERCENTAGE",
}

export enum DownloadableFileTypeEnum {
  /** @deprecated `sample_url` serves to get the downloadable sample */
  File = "FILE",
  /** @deprecated `sample_url` serves to get the downloadable sample */
  Url = "URL",
}

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput;
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: InputMaybe<
    Array<InputMaybe<DownloadableProductLinksInput>>
  >;
};

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars["Int"]["input"];
};

export enum DurationEnum {
  /** @deprecated  */
  Last_7Days = "LAST_7_DAYS",
  /** @deprecated  */
  Last_30Days = "LAST_30_DAYS",
  /** @deprecated  */
  Today = "TODAY",
  /** @deprecated  */
  Yesterday = "YESTERDAY",
}

export type EditUpcomingVisitReminderInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  reminder_date?: InputMaybe<Scalars["String"]["input"]>;
  service_sku?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars["ID"]["input"];
  /** Text the customer entered. */
  value: Scalars["String"]["input"];
};

export enum EntityType {
  /** @deprecated  */
  CatalogCategory = "CATALOG_CATEGORY",
  /** @deprecated  */
  CatalogProduct = "CATALOG_PRODUCT",
  /** @deprecated  */
  Creditmemo = "CREDITMEMO",
  /** @deprecated  */
  Customer = "CUSTOMER",
  /** @deprecated  */
  CustomerAddress = "CUSTOMER_ADDRESS",
  /** @deprecated  */
  Inspection = "INSPECTION",
  /** @deprecated  */
  Invoice = "INVOICE",
  /** @deprecated  */
  Order = "ORDER",
  /** @deprecated  */
  Shipment = "SHIPMENT",
  /** @deprecated  */
  UsedVehicleInspection = "USED_VEHICLE_INSPECTION",
}

/** Identifies the filter to use for filtering evouchers. */
export type EvouchersFilterInput = {
  client_informed?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Status>;
};

export enum FcmChannelEnum {
  /** @deprecated  */
  Android = "ANDROID",
  /** @deprecated  */
  Ios = "IOS",
  /** @deprecated  */
  Web = "WEB",
}

export type FilterBookingStatusInput = {
  eq?: InputMaybe<BookingStatus>;
  in?: InputMaybe<Array<InputMaybe<BookingStatus>>>;
  neq?: InputMaybe<BookingStatus>;
  nin?: InputMaybe<Array<InputMaybe<BookingStatus>>>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: InputMaybe<Scalars["String"]["input"]>;
  /** Use this attribute to specify the highest possible value in the range. */
  to?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  finset?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** From. Must be used with the `to` field. */
  from?: InputMaybe<Scalars["String"]["input"]>;
  /** Greater than. */
  gt?: InputMaybe<Scalars["String"]["input"]>;
  /** Greater than or equal to. */
  gteq?: InputMaybe<Scalars["String"]["input"]>;
  /** In. The value can contain a set of comma-separated values. */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: InputMaybe<Scalars["String"]["input"]>;
  /** Less than. */
  lt?: InputMaybe<Scalars["String"]["input"]>;
  /** Less than or equal to. */
  lteq?: InputMaybe<Scalars["String"]["input"]>;
  /** More than or equal to. */
  moreq?: InputMaybe<Scalars["String"]["input"]>;
  /** Not equal to. */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Not null. */
  notnull?: InputMaybe<Scalars["String"]["input"]>;
  /** Is null. */
  null?: InputMaybe<Scalars["String"]["input"]>;
  /** To. Must be used with the `from` field. */
  to?: InputMaybe<Scalars["String"]["input"]>;
};

/** Lists display settings for the Fixed Product Tax. */
export enum FixedProductTaxDisplaySettings {
  /**
   * The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.'
   * @deprecated
   */
  ExcludeFptAndIncludeWithDetails = "EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS",
  /**
   * The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'.
   * @deprecated
   */
  ExcludeFptWithoutDetails = "EXCLUDE_FPT_WITHOUT_DETAILS",
  /**
   * The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query.
   * @deprecated
   */
  FptDisabled = "FPT_DISABLED",
  /**
   * The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'.
   * @deprecated
   */
  IncludeFptWithoutDetails = "INCLUDE_FPT_WITHOUT_DETAILS",
  /**
   * The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'.
   * @deprecated
   */
  IncludeFptWithDetails = "INCLUDE_FPT_WITH_DETAILS",
}

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars["String"]["input"];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars["String"]["input"];
  /** Gift message text */
  message: Scalars["String"]["input"];
  /** Recipient name */
  to: Scalars["String"]["input"];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars["String"]["input"];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars["String"]["input"];
};

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars["String"]["input"];
};

export type InitiateJumpStartInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  full_name: Scalars["String"]["input"];
  landmark?: InputMaybe<Scalars["String"]["input"]>;
  lat: Scalars["Float"]["input"];
  long: Scalars["Float"]["input"];
  phone_number: Scalars["String"]["input"];
  /** Base64 representation of the battery photo */
  photo?: InputMaybe<Scalars["String"]["input"]>;
};

export type InspectionAdditionalDataInput = {
  attribute_code: Scalars["String"]["input"];
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** Base64 representation of image */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** Base64 representation of images */
  images?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type InspectionFieldInput = {
  attribute_code: Scalars["String"]["input"];
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** Base64 representation of image */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** Base64 representation of images */
  images?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  value: Scalars["String"]["input"];
};

export type JsmRequestFilterInput = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  request_id?: InputMaybe<Scalars["ID"]["input"]>;
  to?: InputMaybe<Scalars["String"]["input"]>;
};

export type JsmRequestsStatusHistoryFilterInput = {
  booking_id?: InputMaybe<FilterStringTypeInput>;
  order_number?: InputMaybe<FilterStringTypeInput>;
  request_id?: InputMaybe<FilterStringTypeInput>;
  status?: InputMaybe<FilterStringTypeInput>;
  store_locator_id?: InputMaybe<FilterStringTypeInput>;
  user_id?: InputMaybe<FilterStringTypeInput>;
};

export enum JsmStatus {
  /** @deprecated  */
  Assigned = "ASSIGNED",
  /** @deprecated  */
  Canceled = "CANCELED",
  /** @deprecated  */
  Completed = "COMPLETED",
  /** @deprecated  */
  Invoiced = "INVOICED",
  /** @deprecated  */
  Moving = "MOVING",
  /** @deprecated  */
  PendingCheckout = "PENDING_CHECKOUT",
  /** @deprecated  */
  Rescheduled = "RESCHEDULED",
  /** @deprecated  */
  Unassigned = "UNASSIGNED",
  /** @deprecated  */
  WithClient = "WITH_CLIENT",
}

export enum MediaTypeEnum {
  /** @deprecated  */
  Image = "IMAGE",
  /** @deprecated  */
  Video = "VIDEO",
}

export type MpFilters = {
  /** Filter From Date. */
  from: Scalars["String"]["input"];
  /** Period. */
  period_type?: InputMaybe<Scalars["String"]["input"]>;
  /** Show Empty Rows. */
  show_empty_rows?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filter Store Id. */
  store_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Filter To Date. */
  to: Scalars["String"]["input"];
};

export type OrderSourceOnCartInput = {
  cart_id: Scalars["String"]["input"];
  order_source: Scalars["String"]["input"];
};

export type OrderVehicleInput = {
  /** Vehicle brand/make name */
  brand?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle Color ID */
  color_id?: InputMaybe<Scalars["ID"]["input"]>;
  /** License plate number */
  license_number?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle model mileage */
  mileage?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle model name */
  model?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle model year */
  model_year?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle type */
  type?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle submodel aka model version */
  version?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle Identification Number */
  vin?: InputMaybe<Scalars["String"]["input"]>;
};

/** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars["String"]["input"];
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars["String"]["input"];
};

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars["String"]["input"];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars["String"]["input"];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars["String"]["input"];
};

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  /** @deprecated  */
  Live = "LIVE",
  /** @deprecated  */
  Test = "TEST",
}

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars["String"]["input"];
};

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars["String"]["input"];
  /** The payload returned from PayPal. */
  paypal_payload: Scalars["String"]["input"];
};

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars["String"]["input"];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars["String"]["input"];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars["String"]["input"];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars["String"]["input"];
};

/** Defines the payment method. */
export type PaymentMethodInput = {
  /** The internal name for the payment method. */
  code: Scalars["String"]["input"];
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro?: InputMaybe<HostedProInput>;
  /** Required input for Payflow Express Checkout payments. */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: InputMaybe<Scalars["String"]["input"]>;
};

/** The list of available payment token types. */
export enum PaymentTokenTypeEnum {
  /**
   * phpcs:ignore Magento2.GraphQL.ValidArgumentName
   * @deprecated
   */
  Account = "account",
  /**
   * phpcs:ignore Magento2.GraphQL.ValidArgumentName
   * @deprecated
   */
  Card = "card",
}

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars["String"]["input"];
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars["String"]["input"];
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars["String"]["input"];
  /** The payment method code. */
  code: Scalars["String"]["input"];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars["String"]["input"];
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: InputMaybe<Scalars["String"]["input"]>;
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars["String"]["input"];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Period {
  /** @deprecated  */
  Day = "DAY",
  /** @deprecated  */
  Month = "MONTH",
  /** @deprecated  */
  Year = "YEAR",
}

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
};

export type PlanUpcomingServiceInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  date: Scalars["String"]["input"];
  service_sku?: InputMaybe<Scalars["String"]["input"]>;
};

/** `PriceAdjustment.code` is deprecated. */
export enum PriceAdjustmentCodesEnum {
  /** @deprecated `PriceAdjustmentCodesEnum` is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog. */
  Tax = "TAX",
  /** @deprecated WEEE code is deprecated. Use `fixed_product_taxes.label` instead. */
  Weee = "WEEE",
  /** @deprecated Use `fixed_product_taxes` instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog. */
  WeeeTax = "WEEE_TAX",
}

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  /** @deprecated  */
  Excluded = "EXCLUDED",
  /** @deprecated  */
  Included = "INCLUDED",
}

/** Defines the price type. */
export enum PriceTypeEnum {
  /** @deprecated  */
  Dynamic = "DYNAMIC",
  /** @deprecated  */
  Fixed = "FIXED",
  /** @deprecated  */
  Percent = "PERCENT",
}

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  /** @deprecated  */
  AsLowAs = "AS_LOW_AS",
  /** @deprecated  */
  PriceRange = "PRICE_RANGE",
}

/** ProductAttributeFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Ampere */
  ampere?: InputMaybe<FilterEqualTypeInput>;
  ar_available?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Aspect Ratio */
  aspect_ratio?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Car Batteries Ampere Capacity */
  car_batteries_ampere?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Country of origin  */
  country_of_origin?: InputMaybe<FilterEqualTypeInput>;
  created_at?: InputMaybe<FilterTypeInput>;
  /** Attribute label: Creation Date */
  creation_date?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: diameter */
  diameter?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Has Deal */
  has_deal?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Is Bookable Service */
  is_bookable_service?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Is Bookable Service Add-On */
  is_bookable_service_addon?: InputMaybe<FilterEqualTypeInput>;
  is_coming_soon?: InputMaybe<FilterEqualTypeInput>;
  is_discontinued?: InputMaybe<FilterEqualTypeInput>;
  /** Filter bookable services in store locator. */
  is_enabled_in_store?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Attribute label: Is Featured */
  is_featured?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Show As Featured Offer */
  is_featured_offer?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Is a spare part? */
  is_spare_part?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Warranty */
  mileage_warranty?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter product by news_from_date. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** Filter product by news_to_date. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Brand */
  product_brand_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filters by offer type */
  product_offer_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tire Type */
  type?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: width */
  width?: InputMaybe<FilterEqualTypeInput>;
};

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Creation Date */
  creation_date?: InputMaybe<SortEnum>;
  featured_order?: InputMaybe<SortEnum>;
  is_featured_offer?: InputMaybe<SortEnum>;
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
  /** Attribute label: Tire Type */
  type?: InputMaybe<SortEnum>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image. */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars["String"]["input"];
};

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars["String"]["input"];
  /** An encoded rating value ID. */
  value_id: Scalars["String"]["input"];
};

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** Indicates the criteria to sort swatches. */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  /** @deprecated  */
  InStock = "IN_STOCK",
  /** @deprecated  */
  OutOfStock = "OUT_OF_STOCK",
}

export type RejectAdditionalItemInput = {
  additional_item_id: Scalars["Int"]["input"];
  substitution_id: Scalars["Int"]["input"];
};

export type RejectSubstitutionItemInput = {
  substitution_id: Scalars["Int"]["input"];
  substitution_item_id: Scalars["Int"]["input"];
};

export type RemovableItem = {
  itemId: Scalars["String"]["input"];
  qty: Scalars["Int"]["input"];
};

export type RemoveAdditionalItemInput = {
  additional_item_id: Scalars["Int"]["input"];
  substitution_id: Scalars["Int"]["input"];
};

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
};

export type RemoveFromJumpStartOrderInput = {
  items: Array<InputMaybe<RemovableItem>>;
  orderNumber: Scalars["String"]["input"];
};

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars["ID"]["input"]>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars["ID"]["input"];
};

export type RemoveSubstitutionItemInput = {
  substitution_id: Scalars["Int"]["input"];
  substitution_item_id?: InputMaybe<Scalars["Int"]["input"]>;
  visit_item_uid?: InputMaybe<Scalars["ID"]["input"]>;
};

export type RescheduleRequestInput = {
  /** The day to book at in the format `YYYY-MM-DD`. By default it's today if left empty. */
  newDate?: InputMaybe<Scalars["String"]["input"]>;
  /** The time to book at in the format `HH:MM`. */
  newTime: Scalars["String"]["input"];
  requestId: Scalars["ID"]["input"];
};

export type ResendVerficationCodeInput = {
  phone_number: Scalars["String"]["input"];
};

export enum RiderStatus {
  /** @deprecated  */
  Active = "ACTIVE",
  /** @deprecated  */
  Assigned = "ASSIGNED",
  /** @deprecated  */
  Completed = "COMPLETED",
}

/** This enumeration defines the scope type for customer orders. */
export enum ScopeTypeEnum {
  /** @deprecated  */
  Global = "GLOBAL",
  /** @deprecated  */
  Store = "STORE",
  /** @deprecated  */
  Website = "WEBSITE",
}

export type SellCarInput = {
  area: Scalars["String"]["input"];
  carBrand: Scalars["String"]["input"];
  carMileage: Scalars["Int"]["input"];
  carModel: Scalars["String"]["input"];
  category: Scalars["String"]["input"];
  city: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  expectedPrice: Scalars["Float"]["input"];
  fullName: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
  year: Scalars["Int"]["input"];
};

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars["Int"]["input"];
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput;
};

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars["String"]["input"];
  /** The name of the recipient. */
  name: Scalars["String"]["input"];
};

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars["String"]["input"];
  /** The text of the message to be sent. */
  message: Scalars["String"]["input"];
  /** The name of the sender. */
  name: Scalars["String"]["input"];
};

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput;
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
};

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** The email address of the guest. */
  email: Scalars["String"]["input"];
};

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

export type SetShippingLocationOnCartInput = {
  cart_id: Scalars["String"]["input"];
  store_id: Scalars["Int"]["input"];
};

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** comment order */
  delivery_comment?: InputMaybe<Scalars["String"]["input"]>;
  /** chosen delivery day in UNIX timestamp */
  delivery_day_timestamp?: InputMaybe<Scalars["String"]["input"]>;
  /** chosen time interval ID */
  delivery_interval_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

/** Defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  /** @deprecated  */
  Separately = "SEPARATELY",
  /** @deprecated  */
  Together = "TOGETHER",
}

/** Defines a single shipping address. */
export type ShippingAddressInput = {
  /** Defines a shipping address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Text provided by the shopper. */
  customer_notes?: InputMaybe<Scalars["String"]["input"]>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars["String"]["input"];
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars["String"]["input"];
};

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

export enum SocialProviderEnum {
  /** @deprecated  */
  Apple = "APPLE",
  /** @deprecated  */
  Facebook = "FACEBOOK",
  /** @deprecated  */
  Google = "GOOGLE",
}

export type SocialProviderLogInInput = {
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  token: Scalars["String"]["input"];
};

/** Indicates whether to return results in ascending or descending order. */
export enum SortEnum {
  /** @deprecated  */
  Asc = "ASC",
  /** @deprecated  */
  Desc = "DESC",
}

export type SosStatusFilterInput = {
  eq?: InputMaybe<JsmStatus>;
  in?: InputMaybe<Array<InputMaybe<JsmStatus>>>;
  neq?: InputMaybe<JsmStatus>;
  nin?: InputMaybe<Array<InputMaybe<JsmStatus>>>;
};

export type StartSubstitutionInput = {
  substitution_id: Scalars["Int"]["input"];
};

export enum Status {
  /** @deprecated  */
  Expired = "EXPIRED",
  /** @deprecated  */
  Hidden = "HIDDEN",
  /** @deprecated  */
  NotReady = "NOT_READY",
  /** @deprecated  */
  Ready = "READY",
  /** @deprecated  */
  Redeemed = "REDEEMED",
}

export type StockSourcesFilterInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  source_code?: InputMaybe<Scalars["String"]["input"]>;
};

/** This enumeration contains values for store types. */
export enum StoreTypeEnum {
  /** @deprecated  */
  JumpStartStore = "JUMP_START_STORE",
  /** @deprecated  */
  ServiceCenter = "SERVICE_CENTER",
  /** @deprecated  */
  Store = "STORE",
  /** @deprecated  */
  Van = "VAN",
  /** @deprecated  */
  VanServiceStore = "VAN_SERVICE_STORE",
}

export type StoreTypeFilter = {
  eq?: InputMaybe<StoreTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<StoreTypeEnum>>>;
  neq?: InputMaybe<StoreTypeEnum>;
  nin?: InputMaybe<Array<InputMaybe<StoreTypeEnum>>>;
};

export type StoreVisitsFilterInput = {
  /** Filter by visit id */
  id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by visit number */
  visit_number?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by visit status */
  visit_status?: InputMaybe<VisitStatus>;
};

export type SubmitSubstitutionInput = {
  substitution_id: Scalars["Int"]["input"];
};

/** Indicates the status of the request. */
export enum SubscriptionStatusesEnum {
  /** @deprecated  */
  NotActive = "NOT_ACTIVE",
  /** @deprecated  */
  Subscribed = "SUBSCRIBED",
  /** @deprecated  */
  Unconfirmed = "UNCONFIRMED",
  /** @deprecated  */
  Unsubscribed = "UNSUBSCRIBED",
}

export enum SubstitutionItemStatus {
  /** @deprecated  */
  Approved = "APPROVED",
  /** @deprecated  */
  Complete = "COMPLETE",
  /** @deprecated  */
  Declined = "DECLINED",
  /** @deprecated  */
  InProgress = "IN_PROGRESS",
  /** @deprecated  */
  InQueue = "IN_QUEUE",
  /** @deprecated  */
  Pending = "PENDING",
}

export type UpdateAdminUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  role_id?: InputMaybe<Scalars["Int"]["input"]>;
  store_locator_id?: InputMaybe<Scalars["Int"]["input"]>;
  store_locator_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateBookableServiceInput = {
  bookable_service_uid: Scalars["ID"]["input"];
  /** If this service is enabled in store. */
  is_enabled_in_store?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Number of minutes before the booking time to allow booking. */
  lead_time?: InputMaybe<Scalars["Int"]["input"]>;
  /** Set the service timings the same as store working hours. */
  same_as_store_times?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Number of cars the store can serve for this service at a time. */
  store_capacity?: InputMaybe<Scalars["Int"]["input"]>;
  /** Number of slot durations the store takes. To calculate total duration check the one slot duration from `StoreConfig`. */
  store_duration_slots?: InputMaybe<Scalars["Int"]["input"]>;
  working_times?: InputMaybe<WorkingTimesInput>;
};

export type UpdateBookingStatusInput = {
  /** The ID of booking to update. */
  booking_uid: Scalars["ID"]["input"];
  /** The cancellation reason if booking is to be cancelled. */
  cancellation_reason?: InputMaybe<Scalars["String"]["input"]>;
  /** The comment if booking status is changed. */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** The status to change the booking to. */
  status: BookingStatus;
};

export type UpdateBookingTimeInput = {
  /** The day to book at in the format `YYYY-MM-DD`. By default it's today if left empty. */
  booking_day?: InputMaybe<Scalars["String"]["input"]>;
  /** The time to book at in the format `HH:MM`. */
  booking_time: Scalars["String"]["input"];
  /** The ID of booking to update. */
  booking_uid: Scalars["ID"]["input"];
};

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

export type UpdateClosedPeriodInput = {
  /** The start time of this period formatted as `YYYY-MM-DD HH:MM`. */
  from?: InputMaybe<Scalars["String"]["input"]>;
  /** The reason why the store is closed at this time. */
  reason?: InputMaybe<Scalars["String"]["input"]>;
  /** The end time of this booking formatted as `YYYY-MM-DD HH:MM`. */
  to?: InputMaybe<Scalars["String"]["input"]>;
  /** The unique ID for the closed time */
  uid: Scalars["ID"]["input"];
};

export type UpdateCustomerPhoneNumberInput = {
  phone_number: Scalars["String"]["input"];
};

export type UpdateInspectionAdditionalDataInput = {
  /** Filepaths of images to be deleted/ removed. */
  unsetInput?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  updateInput?: InputMaybe<Array<InputMaybe<InspectionAdditionalDataInput>>>;
};

export type UpdateInspectionInput = {
  fields: Array<InputMaybe<InspectionFieldInput>>;
  visit_id: Scalars["ID"]["input"];
};

export type UpdateSubstitutionItemInput = {
  quantity?: InputMaybe<Scalars["Float"]["input"]>;
  status?: InputMaybe<SubstitutionItemStatus>;
  substitution_id: Scalars["Int"]["input"];
  substitution_item_id?: InputMaybe<Scalars["Int"]["input"]>;
  visit_item_uid?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UpdateVisitItemInput = {
  item_uid: Scalars["ID"]["input"];
  status: VisitItemStatus;
  visit_id: Scalars["ID"]["input"];
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  /** @deprecated  */
  Category = "CATEGORY",
  /** @deprecated  */
  CmsPage = "CMS_PAGE",
  /** @deprecated  */
  Product = "PRODUCT",
}

/** Defines whether the attribute is filterable in layered navigation. */
export enum UseInLayeredNavigationOptions {
  /** @deprecated  */
  FilterableNoResult = "FILTERABLE_NO_RESULT",
  /** @deprecated  */
  FilterableWithResults = "FILTERABLE_WITH_RESULTS",
  /** @deprecated  */
  No = "NO",
}

export type UsedCarAppointmentInput = {
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
  vehicleUid: Scalars["ID"]["input"];
};

export type UsedVehicleFilterInput = {
  brand?: InputMaybe<FilterEqualTypeInput>;
  brand_id?: InputMaybe<FilterEqualTypeInput>;
  mileage?: InputMaybe<FilterRangeTypeInput>;
  model?: InputMaybe<FilterEqualTypeInput>;
  model_id?: InputMaybe<FilterEqualTypeInput>;
  model_year?: InputMaybe<FilterRangeTypeInput>;
  price?: InputMaybe<FilterRangeTypeInput>;
  transmission?: InputMaybe<FilterEqualTypeInput>;
  uid?: InputMaybe<FilterEqualTypeInput>;
};

export type UsedVehicleSortInput = {
  price?: InputMaybe<SortEnum>;
};

export type UsersFilterInput = {
  email?: InputMaybe<FilterStringTypeInput>;
  firstname?: InputMaybe<FilterStringTypeInput>;
  lastname?: InputMaybe<FilterStringTypeInput>;
  role_id?: InputMaybe<FilterEqualTypeInput>;
  store_locator_id?: InputMaybe<FilterEqualTypeInput>;
  username?: InputMaybe<FilterStringTypeInput>;
};

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars["String"]["input"];
};

export type VehicleInput = {
  /** Custom Brand only */
  brand?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle Color ID */
  color_id?: InputMaybe<Scalars["ID"]["input"]>;
  /** Make this vehicle default vehicle for the customer */
  is_default?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** License plate number */
  license_number?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle model mileage */
  mileage?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle Model id, or custom Model */
  model: VehicleModelInput;
  /** Vehicle model year */
  model_year?: InputMaybe<Scalars["String"]["input"]>;
  /** Vehicle Identification Number */
  vin?: InputMaybe<Scalars["String"]["input"]>;
};

export type VehicleModelInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type VerifyCustomerSourceInput = {
  customer_source: Scalars["String"]["input"];
  phone_number: Scalars["String"]["input"];
  verified: Scalars["Boolean"]["input"];
};

export type VerifyingPhoneNumberInput = {
  code: Scalars["String"]["input"];
  phone_number: Scalars["String"]["input"];
};

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

export enum VisitItemStatus {
  /** @deprecated  */
  Complete = "COMPLETE",
  /** @deprecated  */
  InProgress = "IN_PROGRESS",
  /** @deprecated  */
  InQueue = "IN_QUEUE",
  /** @deprecated  */
  Pending = "PENDING",
}

export enum VisitStatus {
  /** @deprecated  */
  Canceled = "CANCELED",
  /** @deprecated  */
  Complete = "COMPLETE",
  /** @deprecated  */
  InGarage = "IN_GARAGE",
  /** @deprecated  */
  InQueue = "IN_QUEUE",
  /** @deprecated  */
  PlanningUpcomingVisit = "PLANNING_UPCOMING_VISIT",
  /** @deprecated  */
  ReadyForPickup = "READY_FOR_PICKUP",
  /** @deprecated  */
  WaitingOnCustomer = "WAITING_ON_CUSTOMER",
}

/** A list of possible error types. */
export enum WishListUserInputErrorType {
  /** @deprecated  */
  ProductNotFound = "PRODUCT_NOT_FOUND",
  /** @deprecated  */
  Undefined = "UNDEFINED",
}

/** A list of possible error types. */
export enum WishlistCartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = "INSUFFICIENT_STOCK",
  /** @deprecated  */
  NotSalable = "NOT_SALABLE",
  /** @deprecated  */
  ProductNotFound = "PRODUCT_NOT_FOUND",
  /** @deprecated  */
  Undefined = "UNDEFINED",
}

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars["String"]["input"]>;
  /** The amount or number of items to add. */
  quantity: Scalars["Float"]["input"];
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars["String"]["input"];
};

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item. */
  quantity?: InputMaybe<Scalars["Float"]["input"]>;
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars["ID"]["input"];
};

export type WorkingTimesInput = {
  working_from: Scalars["Int"]["input"];
  working_to: Scalars["Int"]["input"];
};

/** Assigns a specific `cart_id` to the empty cart. */
export type CreateEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateSosRequestLocationInput = {
  landmark?: InputMaybe<Scalars["String"]["input"]>;
  lat: Scalars["Float"]["input"];
  long: Scalars["Float"]["input"];
  orderNumber: Scalars["String"]["input"];
};

export type ProductsDetailedQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsDetailedQuery = {
  __typename?: "Query";
  products?: {
    __typename?: "Products";
    items?: Array<
      | {
          __typename?: "BundleProduct";
          name?: string | null;
          uid: string;
          url_key?: string | null;
          special_price?: number | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "ConfigurableProduct";
          name?: string | null;
          uid: string;
          url_key?: string | null;
          special_price?: number | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "DownloadableProduct";
          name?: string | null;
          uid: string;
          url_key?: string | null;
          special_price?: number | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "GroupedProduct";
          name?: string | null;
          uid: string;
          url_key?: string | null;
          special_price?: number | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "SimpleProduct";
          name?: string | null;
          uid: string;
          url_key?: string | null;
          special_price?: number | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "VirtualProduct";
          name?: string | null;
          uid: string;
          url_key?: string | null;
          special_price?: number | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | null
    > | null;
  } | null;
};

export type GetProductByKeyQueryVariables = Exact<{
  urlKey: Scalars["String"]["input"];
}>;

export type GetProductByKeyQuery = {
  __typename?: "Query";
  products?: {
    __typename?: "Products";
    items?: Array<
      | {
          __typename?: "BundleProduct";
          name?: string | null;
          special_price?: number | null;
          categories?: Array<{
            __typename?: "CategoryTree";
            description?: string | null;
          } | null> | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "ConfigurableProduct";
          name?: string | null;
          special_price?: number | null;
          categories?: Array<{
            __typename?: "CategoryTree";
            description?: string | null;
          } | null> | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "DownloadableProduct";
          name?: string | null;
          special_price?: number | null;
          categories?: Array<{
            __typename?: "CategoryTree";
            description?: string | null;
          } | null> | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "GroupedProduct";
          name?: string | null;
          special_price?: number | null;
          categories?: Array<{
            __typename?: "CategoryTree";
            description?: string | null;
          } | null> | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "SimpleProduct";
          name?: string | null;
          special_price?: number | null;
          categories?: Array<{
            __typename?: "CategoryTree";
            description?: string | null;
          } | null> | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | {
          __typename?: "VirtualProduct";
          name?: string | null;
          special_price?: number | null;
          categories?: Array<{
            __typename?: "CategoryTree";
            description?: string | null;
          } | null> | null;
          small_image?: {
            __typename?: "ProductImage";
            url?: string | null;
          } | null;
        }
      | null
    > | null;
  } | null;
};

export const ProductsDetailedDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ProductsDetailed" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pageSize" },
                value: { kind: "IntValue", value: "10" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "ObjectValue", fields: [] },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "uid" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "url_key" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "special_price" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "small_image" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ProductsDetailedQuery,
  ProductsDetailedQueryVariables
>;
export const GetProductByKeyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetProductByKey" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "urlKey" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pageSize" },
                value: { kind: "IntValue", value: "30" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "url_key" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "urlKey" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "special_price" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "categories" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "small_image" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProductByKeyQuery,
  GetProductByKeyQueryVariables
>;
