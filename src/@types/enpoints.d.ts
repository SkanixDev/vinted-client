interface UserInformationsInterface {
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
  carrier_ids: number[] | null;
  carriers_without_custom_ids: number[] | null;
  international_trading_enabled: any | null;
  locale: string | null;
  updated_on: number | null;
  is_hated: boolean;
  hates_you: boolean;
  is_favourite: boolean;
  profile_url: string;
  share_profile_url: string;
  facebook_user_id: any | null;
  is_online: boolean;
  can_view_profile: boolean;
  can_bundle: boolean;
  country_title_local: string | null;
  last_loged_on: string | null;
  has_item_alerts: boolean;
  has_replica_proof_items: boolean;
  external_id: string | null;
  generated_login: boolean;
  infoboard_seen: boolean;
  soft_restricted_by_terms: boolean;
  terms_update_available: boolean;
  restricted_by_unconfirmed_real_name: boolean;
  restricted_by_balance_activation: boolean;
  location_description: any | null;
}

interface BalanceInterface {
  user_balance: {
    available_amount: string;
    escrow_amount: string;
    currency: string;
  };
  code: number;
}

interface NotificationsInterface {
  notifications:
    | {
        id: string;
        user_id: number;
        subject_id: number;
        is_read: boolean;
        updated_at: string;
        entry_type: number;
        body: string;
        link: string;
        photo: {
          id: number;
          width: number;
          height: number;
          temp_uuid: any | null;
          url: string | null;
          dominant_color: string;
          dominant_color_opaque: string;
          thumbnails: [
            {
              type:
                | "thumb70x100"
                | "thumb150x210"
                | "thumb310x430"
                | "thumb428x624"
                | "thumb624x428"
                | "thumb364x428";
              url: string;
              width: number;
              height: number;
              original_size: any | null;
            }[]
          ];
          is_suspicious: boolean;
          orientation: any | null;
          high_resolution: {
            id: string;
            timestamp: number;
            orientation: any | null;
          } | null;
          full_size_url: string | null;
          is_hidden: boolean;
        };
        photo_type: string;
        small_photo_url: string | null;
      }[]
    | null;
  pagination: {
    current_page: number;
    total_pages: number;
    total_entries: number;
    per_page: number;
  };
  code: number;
}

interface OrdersInterface {
  my_orders: {
    conversation_id: number;
    title: string;
    price: {
      amount: string;
      currency_code: string;
    };
    status: string | null;
    date: string;
    photo: {
      id: number;
      image_no: number;
      width: number;
      height: number;
      dominant_color: string | null;
      dominant_color_opaque: string | null;
      url: string | null;
      is_main: boolean;
      thumbnails: {
        type:
          | "thumb70x100"
          | "thumb150x210"
          | "thumb310x430"
          | "thumb428x624"
          | "thumb624x428"
          | "thumb364x428";
        url: string | null;
        width: number;
        height: number;
        original_size: boolean | null;
      }[];
      high_resolution: {
        id: string;
        timestamp: number;
        orientation: any | null;
      };
      is_suspicious: boolean;
      full_size_url: string | null;
      is_hidden: boolean;
    };
    transaction_user_status:
      | "completed"
      | "in_progress"
      | "canceled"
      | "needs_action"
      | "waiting";
  }[];
  pagination: {
    page: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    total_entries: number;
    time: number;
  };
}
