declare module "vinted-client" {
  interface UserInformationsInterface {
    user: {
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
    };
    code: number;
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
    pagination: PaginationInterface;
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

  interface UserStatsInterface {
    stats: {
      unread_msg_count: number;
      unread_private_msg_count: number;
      unread_notification_count: number;
      item_count: number;
      wallet_balance: string;
      free_push_ups_count: number;
      promoted_closet: boolean;
      promoted_closet_ends_in_days: number;
      can_make_offers: boolean;
      wallet_balance_currency: string;
    };
    code: number;
  }
  // for conversation
  interface UserConversationInterface {
    conversation: {
      id: number;
      read_by_current_user: boolean;
      read_by_opposite_user: boolean;
      localization: string;
      translated: boolean;
      allow_reply: boolean;
      is_suspicious: boolean;
      is_deletion_restricted: boolean;
      subtitle: string;
      messages: [
        {
          // This is not finished
          entity_type: "status_message" | "message" | "action_message" | string;
          entity: {
            template?: {
              style: "clear_box" | string;
            };
            body?: string; // type: message
            photo?: []; // type: message
            user_id?: number; // type: message
            sent_via_mobile: boolean; // type: message
            id: number; // type: message
            reaction: any | null; // type: message
            is_hidden: boolean; // type: message

            title: string | null; // type: status_message
            subtitle: string | null; // type: status_message
            notification: string | null; // type: status_message
            email: boolean | string | null; // type: status_message
            push: boolean; // type: status_message

            actions?: [
              | {
                  action: string;
                  title: string;
                  primary: boolean;
                }
              | any
            ]; // type: action_message
          };
          created_at_ts: string;
          created_time_ago: string;
          display_group?: number;
        }
      ];
      suggested_messages: [];
      transaction: {
        id: number;
        status: number;
        offline_verification: boolean;
        offer_id: number;
        buyer_id: number;
        seller_id: number;
        is_completed: boolean;
        available_actions: [
          "use_payments" | "feedback" | "delete_thread" | string
        ];
        current_user_side: string;
        is_bundle: boolean;
        is_reserved: boolean;
        is_package_size_selected: boolean;
        is_business_seller: boolean;
        item_count: number;
        item_id: number;
        item_ids: number[];
        item_title: string;
        item_photo: ThumbnailVintedInterface;
        item_url: string;
        item_is_closed: boolean;
        offer_price: {
          amount: string;
          currency_code: string;
        };
        service_fee: {
          amount: string;
          currency_code: string;
        };
        shipment_price: {
          amount: string;
          currency_code: string;
        };
        total_without_shipment: {
          amount: string;
          currency_code: string;
        };
        total_amount_without_tax: string;
        closet_countdown_end_date: any | null;
        seller_bundle_discount: any | null;
        seller_item_count: number | null;
        seller_city: string;
        show_ship_fast_badge_education: boolean;
        shipment_id: number;
        shipment_status: number;
        package_size_code: string;
      };
      opposite_user: {
        id: number;
        login: string;
        photo: ThumbnailVintedInterface;
        last_logged_in_at: string;
        is_system: boolean;
        review_count: number;
        feedback_reputation: number | null;
        is_on_holiday: boolean;
        is_moderator: boolean;
        is_user_unblockable: boolean;
        is_hated: boolean;
        profile_url: string;
        location_description: string | null;
      };
      education: any | null;
      moderated_items: any | null;
      user_has_support_role: any | false;
      safety_education: boolean;
      conversation_url: string;
    };
    code: number;
  }

  interface InboxInterface {
    conversations: [
      {
        id: number;
        item_count: number;
        is_deletion_restricted: boolean;
        description: string;
        unread: boolean;
        updated_at: string;
        opposite_user: {
          id: number;
          login: string;
          photo: ThumbnailVintedInterface;
          badge: any | null;
        };
        item_photos: ThumbnailVintedInterface[];
      }
    ];
    pagination: PaginationInterface;
    websocket_user_id: string;
    code: number;
  }

  // ------------- Component for other Interface -------------

  interface PaginationInterface {
    page: number;
    per_page: number;
    total_entries: number;
    total_pages: number;
    current_page: number;
  }

  interface ThumbnailVintedInterface {
    id: number;
    image_no: number;
    width: number;
    height: number;
    dominant_color: string;
    dominant_color_opaque: string;
    url: string;
    is_main: boolean;
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
    high_resolution: {
      id: string;
      timestamp: number;
      orientation: number;
    };
    is_suspicious: boolean;
    full_size_url: string;
    is_hidden: boolean;
  }

  interface User {
    access_token: string;
    refresh_token: string;
    xcsrf_token: string;
    user_id: number;
    user_informations: UserInformationsInterface;
    balance: BalanceInterface;
    notifications: NotificationsInterface;
    orders: OrdersInterface;
    initialized: boolean;
    constructor(
      access_token: string,
      refresh_token: string,
      xcsrf_token: string
    );
    getNotifications(
      page?: number,
      per_page?: number
    ): Promise<NotificationsInterface>;
    getOrders(
      type: "sold" | "purchased" | "all",
      status: "all" | "in_progress" | "completed" | "canceled",
      page?: number,
      per_page?: number
    ): Promise<OrdersInterface>;
  }
}
