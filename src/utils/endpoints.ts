// Get the user id
export async function getIdUser(
  cookiesHeader: string,
  access_token: string,
  xcsrf_token: string
) {
  try {
    const user = await fetch(
      "https://www.vinted.fr/api/v2/user_addresses/default_shipping_address",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
          "Content-Type": "application/json",
          Cookie: cookiesHeader,
          Authorization: `Bearer ${access_token}`,
          "x-csrf-token": xcsrf_token,
        },
      }
    );
    const userJson = await user.json();
    return userJson.user_address.user_id;
  } catch (error) {
    return "error getting user id";
  }
}

interface userInformations {
  id: number;
  anon_id: string;
  login: string;
  real_name: string | null;
  email: string;
  real_name_permission: number;
  birthday_permission: number;
  birthday: string | null;
  gender: string | null;
  currency: string;
  item_count: number;
  given_item_count: number;
  taken_item_count: number;
  favourite_topic_count: number;
  forum_message_count: number;
  forum_topic_count: number;
  followers_count: number;
  following_count: number;
  following_brands_count: number;
  positive_feedback_count: number;
  neutral_feedback_count: number;
  negative_feedback_count: number;
  meeting_transaction_count: number;
  account_status: number;
  email_bounces: null | any;
  feedback_reputation: number;
  feedback_count: number;
  account_ban_date: null | any;
  is_account_ban_permanent: boolean | null;
  is_forum_ban_permanent: boolean | null;
  is_on_holiday: boolean | null;
  is_publish_photos_agreed: boolean | null;
  is_login_via_external_system_only: boolean | null;
  allow_my_favourite_notifications: boolean | null;
  allow_personalization: boolean | null;
  show_recently_viewed_items: boolean | null;
  undiscoverable: boolean | null;
  accepts_payments: boolean | null;
  is_location_public: boolean | null;
  expose_location: boolean | null;
  third_party_tracking: boolean | null;
  default_address: {
    id: number;
    user_id: number;
    country_id: number;
    entry_type: number;
    name: string | null;
    postal_code: string | null;
    city: string | null;
    state: string | null;
    line1: string | null;
    line2: string | null;
    phone_number: null | null;
  } | null;
  created_at: string;
  last_loged_on_ts: string | null;
  city_id: number;
  city: string | null;
  country_id: number;
  country_code: string | null;
  country_iso_code: string | null;
  country_title: string | null;
  contacts_permission: any | null;
  contacts: any | null;
  photo: {
    id: number;
    width: number;
    height: number;
    temp_uuid: any | null;
    url: string | null;
    dominant_color: string | null;
    dominant_color_opaque: string | null;
    thumbnails: {
      type: string | null;
      url: string | null;
      width: number | null;
      height: number | null;
      original_size: any | null;
    }[];
    is_suspicious: boolean;
    orientation: any | null;
    full_size_url: string | null;
    is_hidden: boolean | null;
  } | null;
  path: string | null;
  is_god: boolean;
  is_tester: boolean;
  moderator: boolean;
  is_catalog_moderator: boolean;
  is_catalog_role_marketing_photos: boolean;
  hide_feedback: boolean;
  can_post_big_forum_photos: boolean;
  allow_direct_messaging: boolean;
  bundle_discount: {
    id: number;
    user_id: number;
    enabled: boolean;
    minimal_item_count: number;
    fraction: string;
    discounts:
      | {
          minimal_item_count: number;
          fraction: string;
        }[]
      | null;
  } | null;
  donation_configuration: any | null;
  fundraiser: any | null;
  business: boolean;
  business_account: any | null;
  has_confirmed_payments_account: boolean;
  has_ship_fast_badge: boolean;
  total_items_count: number;
  about: string | null;
  verification: {
    email: {
      valid: boolean;
      available: boolean;
    } | null;
    facebook: {
      valid: boolean;
      verified_at: string | null;
      available: boolean;
    } | null;
    google: {
      valid: boolean;
      verified_at: string | null;
      available: boolean;
    } | null;
    phone: {
      valid: boolean;
      verified_at: string | null;
      available: boolean;
    } | null;
  } | null;
  avg_response_time: any | null;
  /////////////////////// NEW FIELDS ///////////////////////
  carrier_ids: [27, 50, 59, 97, 117, 135, 143, 4, 9, 10];
  carriers_without_custom_ids: [27, 50, 59, 97, 117, 135, 143, 4];
  international_trading_enabled: null;
  locale: "fr";
  updated_on: 1716724633;
  is_hated: false;
  hates_you: false;
  is_favourite: false;
  profile_url: "https://www.vinted.fr/member/198212220-deuxb";
  share_profile_url: "https://www.vinted.fr/member/198212220-deuxb";
  facebook_user_id: null;
  is_online: false;
  can_view_profile: true;
  can_bundle: true;
  country_title_local: "France";
  last_loged_on: "aujourd'hui 18:07";
  has_item_alerts: false;
  has_replica_proof_items: false;
  external_id: "d2932f0e-b95c-4404-8a98-7dc31f64951e";
  generated_login: false;
  infoboard_seen: true;
  soft_restricted_by_terms: false;
  terms_update_available: false;
  restricted_by_unconfirmed_real_name: false;
  restricted_by_balance_activation: false;
  location_description: null;
}

class User {
  user: undefined | userInformations;

  constructor(
    public access_token: string,
    public refresh_token: string,
    public xcsrf_token: string
  ) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.xcsrf_token = xcsrf_token;

    this.user = undefined;
  }

  async init() {}
}
