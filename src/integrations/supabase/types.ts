export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      agent_responses: {
        Row: {
          agent_name: string
          agent_status: string | null
          confidence_distribution: Json | null
          created_at: string
          data_collection_success_rate: number | null
          execution_batch_id: string
          execution_time_minutes: number | null
          id: string
          mcp_failover_count: number | null
          raw_response: string | null
          signals_generated: number | null
        }
        Insert: {
          agent_name: string
          agent_status?: string | null
          confidence_distribution?: Json | null
          created_at?: string
          data_collection_success_rate?: number | null
          execution_batch_id: string
          execution_time_minutes?: number | null
          id?: string
          mcp_failover_count?: number | null
          raw_response?: string | null
          signals_generated?: number | null
        }
        Update: {
          agent_name?: string
          agent_status?: string | null
          confidence_distribution?: Json | null
          created_at?: string
          data_collection_success_rate?: number | null
          execution_batch_id?: string
          execution_time_minutes?: number | null
          id?: string
          mcp_failover_count?: number | null
          raw_response?: string | null
          signals_generated?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_responses_execution_batch_id_fkey"
            columns: ["execution_batch_id"]
            isOneToOne: false
            referencedRelation: "execution_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_responses_execution_batch_id_fkey"
            columns: ["execution_batch_id"]
            isOneToOne: false
            referencedRelation: "signal_convergence_analysis"
            referencedColumns: ["batch_id"]
          },
        ]
      }
      api_credentials: {
        Row: {
          api_endpoint: string | null
          api_key: string
          created_at: string | null
          id: string
          is_active: boolean | null
          rate_limit: number | null
          service_name: string
          updated_at: string | null
        }
        Insert: {
          api_endpoint?: string | null
          api_key: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          rate_limit?: number | null
          service_name: string
          updated_at?: string | null
        }
        Update: {
          api_endpoint?: string | null
          api_key?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          rate_limit?: number | null
          service_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      api_logs: {
        Row: {
          created_at: string | null
          endpoint: string
          error_message: string | null
          id: string
          latency_ms: number | null
          method: string
          request_data: Json | null
          response_data: Json | null
          service_name: string
          status_code: number | null
          storage_path: string | null
          success: boolean | null
        }
        Insert: {
          created_at?: string | null
          endpoint: string
          error_message?: string | null
          id?: string
          latency_ms?: number | null
          method: string
          request_data?: Json | null
          response_data?: Json | null
          service_name: string
          status_code?: number | null
          storage_path?: string | null
          success?: boolean | null
        }
        Update: {
          created_at?: string | null
          endpoint?: string
          error_message?: string | null
          id?: string
          latency_ms?: number | null
          method?: string
          request_data?: Json | null
          response_data?: Json | null
          service_name?: string
          status_code?: number | null
          storage_path?: string | null
          success?: boolean | null
        }
        Relationships: []
      }
      bank_aliases: {
        Row: {
          added_by: string | null
          alias: string
          alias_normalized: string
          created_at: string | null
          id: string
          primary_bank_id: string | null
          usage_count: number | null
          verified: boolean | null
        }
        Insert: {
          added_by?: string | null
          alias: string
          alias_normalized: string
          created_at?: string | null
          id?: string
          primary_bank_id?: string | null
          usage_count?: number | null
          verified?: boolean | null
        }
        Update: {
          added_by?: string | null
          alias?: string
          alias_normalized?: string
          created_at?: string | null
          id?: string
          primary_bank_id?: string | null
          usage_count?: number | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_aliases_primary_bank_id_fkey"
            columns: ["primary_bank_id"]
            isOneToOne: false
            referencedRelation: "bank_parsing_configs"
            referencedColumns: ["id"]
          },
        ]
      }
      bank_parsing_audit_log: {
        Row: {
          action_type: string
          bank_id: string | null
          created_at: string | null
          error_message: string | null
          id: string
          input_bank_name: string | null
          match_confidence: number | null
          match_type: string | null
          normalized_input: string | null
          success: boolean | null
        }
        Insert: {
          action_type: string
          bank_id?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          input_bank_name?: string | null
          match_confidence?: number | null
          match_type?: string | null
          normalized_input?: string | null
          success?: boolean | null
        }
        Update: {
          action_type?: string
          bank_id?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          input_bank_name?: string | null
          match_confidence?: number | null
          match_type?: string | null
          normalized_input?: string | null
          success?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_parsing_audit_log_bank_id_fkey"
            columns: ["bank_id"]
            isOneToOne: false
            referencedRelation: "bank_parsing_configs"
            referencedColumns: ["id"]
          },
        ]
      }
      bank_parsing_configs: {
        Row: {
          bank_aliases: string[] | null
          bank_aliases_normalized: string[] | null
          bank_name: string
          bank_name_normalized: string
          created_at: string | null
          embedding: string | null
          id: string
          last_updated: string | null
          llamaparse_template: string | null
          raw_config: Json
          success_rate: number | null
          usage_count: number | null
          verified: boolean | null
          version: number | null
        }
        Insert: {
          bank_aliases?: string[] | null
          bank_aliases_normalized?: string[] | null
          bank_name: string
          bank_name_normalized: string
          created_at?: string | null
          embedding?: string | null
          id?: string
          last_updated?: string | null
          llamaparse_template?: string | null
          raw_config: Json
          success_rate?: number | null
          usage_count?: number | null
          verified?: boolean | null
          version?: number | null
        }
        Update: {
          bank_aliases?: string[] | null
          bank_aliases_normalized?: string[] | null
          bank_name?: string
          bank_name_normalized?: string
          created_at?: string | null
          embedding?: string | null
          id?: string
          last_updated?: string | null
          llamaparse_template?: string | null
          raw_config?: Json
          success_rate?: number | null
          usage_count?: number | null
          verified?: boolean | null
          version?: number | null
        }
        Relationships: []
      }
      catalyst_signals: {
        Row: {
          agent_response_id: string
          catalyst_description: string
          confidence_score: number
          convergence_count: number | null
          created_at: string
          execution_batch_id: string
          id: string
          impact_magnitude_estimate: string | null
          is_convergence_signal: boolean | null
          signal_type: string
          source_urls: string[] | null
          timeline_window: string | null
        }
        Insert: {
          agent_response_id: string
          catalyst_description: string
          confidence_score: number
          convergence_count?: number | null
          created_at?: string
          execution_batch_id: string
          id?: string
          impact_magnitude_estimate?: string | null
          is_convergence_signal?: boolean | null
          signal_type: string
          source_urls?: string[] | null
          timeline_window?: string | null
        }
        Update: {
          agent_response_id?: string
          catalyst_description?: string
          confidence_score?: number
          convergence_count?: number | null
          created_at?: string
          execution_batch_id?: string
          id?: string
          impact_magnitude_estimate?: string | null
          is_convergence_signal?: boolean | null
          signal_type?: string
          source_urls?: string[] | null
          timeline_window?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "catalyst_signals_agent_response_id_fkey"
            columns: ["agent_response_id"]
            isOneToOne: false
            referencedRelation: "agent_responses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "catalyst_signals_execution_batch_id_fkey"
            columns: ["execution_batch_id"]
            isOneToOne: false
            referencedRelation: "execution_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "catalyst_signals_execution_batch_id_fkey"
            columns: ["execution_batch_id"]
            isOneToOne: false
            referencedRelation: "signal_convergence_analysis"
            referencedColumns: ["batch_id"]
          },
        ]
      }
      documents: {
        Row: {
          account_holder: string | null
          account_last4: string | null
          bank_name: string | null
          created_at: string
          id: string
          page_count: number | null
          sha256_hex: string | null
          source_url: string | null
          storage_key: string | null
          updated_at: string
        }
        Insert: {
          account_holder?: string | null
          account_last4?: string | null
          bank_name?: string | null
          created_at?: string
          id?: string
          page_count?: number | null
          sha256_hex?: string | null
          source_url?: string | null
          storage_key?: string | null
          updated_at?: string
        }
        Update: {
          account_holder?: string | null
          account_last4?: string | null
          bank_name?: string | null
          created_at?: string
          id?: string
          page_count?: number | null
          sha256_hex?: string | null
          source_url?: string | null
          storage_key?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      execution_batches: {
        Row: {
          agents_completed: number | null
          agents_failed: number | null
          batch_status: string | null
          created_at: string
          execution_date: string
          execution_duration_minutes: number | null
          execution_timestamp: string
          id: string
          market_regime: string | null
          total_signals_found: number | null
          updated_at: string
          vix_level: number | null
        }
        Insert: {
          agents_completed?: number | null
          agents_failed?: number | null
          batch_status?: string | null
          created_at?: string
          execution_date: string
          execution_duration_minutes?: number | null
          execution_timestamp?: string
          id?: string
          market_regime?: string | null
          total_signals_found?: number | null
          updated_at?: string
          vix_level?: number | null
        }
        Update: {
          agents_completed?: number | null
          agents_failed?: number | null
          batch_status?: string | null
          created_at?: string
          execution_date?: string
          execution_duration_minutes?: number | null
          execution_timestamp?: string
          id?: string
          market_regime?: string | null
          total_signals_found?: number | null
          updated_at?: string
          vix_level?: number | null
        }
        Relationships: []
      }
      fact_citations: {
        Row: {
          char_span_in_pdf: unknown
          created_at: string
          financial_chunk_id: number
          id: number
          pdf_chunk_id: number
          weight: number
        }
        Insert: {
          char_span_in_pdf?: unknown
          created_at?: string
          financial_chunk_id: number
          id?: number
          pdf_chunk_id: number
          weight?: number
        }
        Update: {
          char_span_in_pdf?: unknown
          created_at?: string
          financial_chunk_id?: number
          id?: number
          pdf_chunk_id?: number
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "fact_citations_financial_chunk_id_fkey"
            columns: ["financial_chunk_id"]
            isOneToOne: false
            referencedRelation: "financial_chunks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fact_citations_financial_chunk_id_fkey"
            columns: ["financial_chunk_id"]
            isOneToOne: false
            referencedRelation: "v_fact_with_pdf"
            referencedColumns: ["financial_chunk_id"]
          },
          {
            foreignKeyName: "fact_citations_pdf_chunk_id_fkey"
            columns: ["pdf_chunk_id"]
            isOneToOne: false
            referencedRelation: "pdf_chunks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fact_citations_pdf_chunk_id_fkey"
            columns: ["pdf_chunk_id"]
            isOneToOne: false
            referencedRelation: "v_fact_with_pdf"
            referencedColumns: ["pdf_chunk_id"]
          },
        ]
      }
      financial_chunks: {
        Row: {
          amount: number | null
          confidence: number | null
          created_at: string
          description: string | null
          embedding: string
          fact_date: string | null
          fact_kind: Database["public"]["Enums"]["fact_type"]
          id: number
          payload: Json
          source_pages: number[] | null
          statement_id: string
          tsv: unknown
          txn_kind: Database["public"]["Enums"]["txn_type"] | null
          vendor: string | null
        }
        Insert: {
          amount?: number | null
          confidence?: number | null
          created_at?: string
          description?: string | null
          embedding: string
          fact_date?: string | null
          fact_kind: Database["public"]["Enums"]["fact_type"]
          id?: number
          payload: Json
          source_pages?: number[] | null
          statement_id: string
          tsv?: unknown
          txn_kind?: Database["public"]["Enums"]["txn_type"] | null
          vendor?: string | null
        }
        Update: {
          amount?: number | null
          confidence?: number | null
          created_at?: string
          description?: string | null
          embedding?: string
          fact_date?: string | null
          fact_kind?: Database["public"]["Enums"]["fact_type"]
          id?: number
          payload?: Json
          source_pages?: number[] | null
          statement_id?: string
          tsv?: unknown
          txn_kind?: Database["public"]["Enums"]["txn_type"] | null
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "financial_chunks_statement_id_fkey"
            columns: ["statement_id"]
            isOneToOne: false
            referencedRelation: "statements"
            referencedColumns: ["id"]
          },
        ]
      }
      framework: {
        Row: {
          call_or_put: string | null
          confidence_score: number | null
          created_at: string | null
          framework_id: string
          metrics_id: string
        }
        Insert: {
          call_or_put?: string | null
          confidence_score?: number | null
          created_at?: string | null
          framework_id?: string
          metrics_id: string
        }
        Update: {
          call_or_put?: string | null
          confidence_score?: number | null
          created_at?: string | null
          framework_id?: string
          metrics_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "framework_metrics_id_fkey"
            columns: ["metrics_id"]
            isOneToOne: false
            referencedRelation: "sm-v2"
            referencedColumns: ["metrics_id"]
          },
        ]
      }
      inventory_segments: {
        Row: {
          age_band_key: string
          age_band_label: string
          available_quantity: number
          created_at: string
          id: string
          max_quantity: number
          price_cents: number
          product_key: string
          product_label: string
          square_variation_id: string | null
          updated_at: string
        }
        Insert: {
          age_band_key: string
          age_band_label: string
          available_quantity?: number
          created_at?: string
          id?: string
          max_quantity?: number
          price_cents: number
          product_key: string
          product_label: string
          square_variation_id?: string | null
          updated_at?: string
        }
        Update: {
          age_band_key?: string
          age_band_label?: string
          available_quantity?: number
          created_at?: string
          id?: string
          max_quantity?: number
          price_cents?: number
          product_key?: string
          product_label?: string
          square_variation_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      master_stock: {
        Row: {
          country: string | null
          industry: string | null
          name: string | null
          options: boolean | null
          sector: string | null
          sic_description: string | null
          symbol: string
          weekly_options: boolean | null
        }
        Insert: {
          country?: string | null
          industry?: string | null
          name?: string | null
          options?: boolean | null
          sector?: string | null
          sic_description?: string | null
          symbol: string
          weekly_options?: boolean | null
        }
        Update: {
          country?: string | null
          industry?: string | null
          name?: string | null
          options?: boolean | null
          sector?: string | null
          sic_description?: string | null
          symbol?: string
          weekly_options?: boolean | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          created_at: string
          id: string
          quantity: number
          segment_id: string
          square_checkout_id: string | null
          square_payment_id: string | null
          square_payment_link_id: string | null
          status: string
          total_cents: number
          unit_price_cents: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          quantity: number
          segment_id: string
          square_checkout_id?: string | null
          square_payment_id?: string | null
          square_payment_link_id?: string | null
          status: string
          total_cents: number
          unit_price_cents: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          quantity?: number
          segment_id?: string
          square_checkout_id?: string | null
          square_payment_id?: string | null
          square_payment_link_id?: string | null
          status?: string
          total_cents?: number
          unit_price_cents?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_segment_id_fkey"
            columns: ["segment_id"]
            isOneToOne: false
            referencedRelation: "inventory_segments"
            referencedColumns: ["id"]
          },
        ]
      }
      pdf_chunks: {
        Row: {
          bbox: Json | null
          chunk_index: number
          content: string
          content_hash: string | null
          created_at: string
          document_id: string
          embedding: string
          id: number
          page_num: number
          statement_id: string
          tokens: number | null
          tsv: unknown
        }
        Insert: {
          bbox?: Json | null
          chunk_index: number
          content: string
          content_hash?: string | null
          created_at?: string
          document_id: string
          embedding: string
          id?: number
          page_num: number
          statement_id: string
          tokens?: number | null
          tsv?: unknown
        }
        Update: {
          bbox?: Json | null
          chunk_index?: number
          content?: string
          content_hash?: string | null
          created_at?: string
          document_id?: string
          embedding?: string
          id?: number
          page_num?: number
          statement_id?: string
          tokens?: number | null
          tsv?: unknown
        }
        Relationships: [
          {
            foreignKeyName: "pdf_chunks_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pdf_chunks_statement_id_fkey"
            columns: ["statement_id"]
            isOneToOne: false
            referencedRelation: "statements"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company_name: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      signal_tickers: {
        Row: {
          catalyst_signal_id: string
          confidence_level: string | null
          created_at: string
          exposure_reasoning: string
          id: string
          impact_direction: string | null
          ticker_symbol: string
        }
        Insert: {
          catalyst_signal_id: string
          confidence_level?: string | null
          created_at?: string
          exposure_reasoning: string
          id?: string
          impact_direction?: string | null
          ticker_symbol: string
        }
        Update: {
          catalyst_signal_id?: string
          confidence_level?: string | null
          created_at?: string
          exposure_reasoning?: string
          id?: string
          impact_direction?: string | null
          ticker_symbol?: string
        }
        Relationships: [
          {
            foreignKeyName: "signal_tickers_catalyst_signal_id_fkey"
            columns: ["catalyst_signal_id"]
            isOneToOne: false
            referencedRelation: "catalyst_signals"
            referencedColumns: ["id"]
          },
        ]
      }
      "sm-v2": {
        Row: {
          analyst_rating: number | null
          annual_dividend_yield: number | null
          average_daily_range_percent_14d: number | null
          average_daily_range_percent_9d: number | null
          average_directional_index_14d: number | null
          average_directional_index_9d: number | null
          average_true_range_14d: number | null
          average_true_range_20d: number | null
          average_true_range_50d: number | null
          average_true_range_9d: number | null
          avg_implied_volatility_1m: number | null
          avg_implied_volatility_5d: number | null
          avg_volume_100d: number | null
          avg_volume_10d: number | null
          avg_volume_150d: number | null
          avg_volume_200d: number | null
          avg_volume_20d: number | null
          avg_volume_50d: number | null
          avg_volume_5d: number | null
          bollinger_band_position_percent: number | null
          bollinger_band_rank: string | null
          bollinger_bands_20d: Database["public"]["Enums"]["signal_enum"] | null
          bollinger_bands_direction_20d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          bollinger_bands_strength_20d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          call_open_interest_1m: number | null
          call_open_interest_5d: number | null
          call_volume_1m: number | null
          call_volume_5d: number | null
          cci_strength_40d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          created_at: string
          created_at_short: string | null
          debt_equity_ratio: number | null
          earnings_estimate_1q_ago: number | null
          earnings_estimate_2q_ago: number | null
          ema_slope_percent_change_10d: number | null
          ema_slope_percent_change_20d: number | null
          ema_slope_percent_change_5d: number | null
          exponential_macd_12d_26d_9d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          exponential_macd_strength_12d_26d_9d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          exponential_moving_average_10d: number | null
          exponential_moving_average_5d: number | null
          exponential_moving_average_crossover_9d_18d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          fibonacci_38_2_level: number | null
          fibonacci_50_level: number | null
          fibonacci_61_8_level: number | null
          first_resistance_point: number | null
          first_support_point: number | null
          float_percentage: number | null
          gap_down: number | null
          gap_up: number | null
          high_price_1m: number | null
          high_price_3m: number | null
          high_price_5d: number | null
          high_price_6m: number | null
          high_target_price: number | null
          historic_volatility_100d: number | null
          historic_volatility_14d: number | null
          historic_volatility_20d: number | null
          historic_volatility_50d: number | null
          historic_volatility_9d: number | null
          implied_volatility: number | null
          implied_volatility_change_1d: number | null
          implied_volatility_change_1m: number | null
          implied_volatility_change_5d: number | null
          implied_volatility_rank: number | null
          implied_volatility_rank_5d: number | null
          insider_shareholders_percentage: number | null
          institutional_shareholders_percentage: number | null
          last_price: number | null
          low_price_1m: number | null
          low_price_3m: number | null
          low_price_5d: number | null
          low_price_6m: number | null
          low_target_price: number | null
          macd_oscillator_100d: number | null
          macd_oscillator_14d: number | null
          macd_oscillator_20d: number | null
          macd_oscillator_50d: number | null
          macd_oscillator_9d: number | null
          mean_target_price: number | null
          metrics_id: string
          minus_directional_index_14d: number | null
          minus_directional_index_9d: number | null
          moving_average_100d: number | null
          moving_average_10d: number | null
          moving_average_200d: number | null
          moving_average_20d: number | null
          moving_average_50d: number | null
          moving_average_52w: number | null
          moving_average_5d: number | null
          moving_average_cross_9d_18d: number | null
          moving_average_crossover_20d_100d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_20d_50d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_9d_18d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_direction_20d_100d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_direction_20d_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_100d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_50d_100d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_direction_20d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_20d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          number_of_analysts: number | null
          number_of_highs_52w: number | null
          number_of_lows_52w: number | null
          open_interest_percent_change_1m: number | null
          open_interest_percent_change_5d: number | null
          open_price: number | null
          open_price_2d_ago: number | null
          open_price_3d_ago: number | null
          open_price_4d_ago: number | null
          parabolic_direction_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_strength_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_time_price_50d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          percent_above_below_avg_20d: number | null
          percent_above_below_avg_50d: number | null
          percent_above_below_avg_5d: number | null
          percent_change: number | null
          percent_change_10d: number | null
          percent_change_2d_ago: number | null
          percent_change_3d_ago: number | null
          percent_change_4d_ago: number | null
          percent_change_5d: number | null
          percent_from_moving_average_52w: number | null
          performance_vs_market_5d: number | null
          pivot_point: number | null
          plus_directional_index_14d: number | null
          plus_directional_index_9d: number | null
          previous_open_price: number | null
          previous_percent_change: number | null
          previous_volume: number | null
          price_earnings_ratio_ttm: number | null
          price_one_standard_deviation: number | null
          price_two_standard_deviations: number | null
          price_volume: number | null
          put_call_open_interest_ratio: number | null
          put_call_open_interest_ratio_1m: number | null
          put_call_open_interest_ratio_5d: number | null
          put_call_volume_ratio: number | null
          put_call_volume_ratio_5d: number | null
          put_open_interest_1m: number | null
          put_open_interest_5d: number | null
          put_volume_1m: number | null
          put_volume_5d: number | null
          raw_stochastic_14d: number | null
          raw_stochastic_20d: number | null
          raw_stochastic_9d: number | null
          relative_strength_14d: number | null
          relative_strength_20d: number | null
          relative_strength_5d: number | null
          relative_strength_9d: number | null
          relative_strength_index_2d: number | null
          relative_volume_ratio_20d: number | null
          relative_volume_ratio_5d: number | null
          report_type: Database["public"]["Enums"]["report_type_enum"]
          reported_earnings_1q_ago: number | null
          reported_earnings_2q_ago: number | null
          second_resistance_point: number | null
          second_support_point: number | null
          short_volume_ratio: number | null
          sma_slope_percent_change_20d: number | null
          sma_slope_percent_change_5d: number | null
          standard_deviation_move: number | null
          stochastic_d_14d: number | null
          stochastic_d_20d: number | null
          stochastic_d_9d: number | null
          stochastic_k_14d: number | null
          stochastic_k_20d: number | null
          stochastic_k_9d: number | null
          symbol: string
          third_resistance_point: number | null
          third_support_point: number | null
          total_call_open_interest: number | null
          total_call_volume: number | null
          total_options_open_interest: number | null
          total_put_open_interest: number | null
          total_put_volume: number | null
          total_volume_1m: number | null
          total_volume_5d: number | null
          trading_liquidity_percent: number | null
          ttm_squeeze: Database["public"]["Enums"]["squeeze_status_enum"] | null
          volume: number | null
          volume_2d_ago: number | null
          volume_3d_ago: number | null
          volume_4d_ago: number | null
          volume_open_interest_ratio: number | null
          volume_percent_change: number | null
          weighted_alpha: number | null
        }
        Insert: {
          analyst_rating?: number | null
          annual_dividend_yield?: number | null
          average_daily_range_percent_14d?: number | null
          average_daily_range_percent_9d?: number | null
          average_directional_index_14d?: number | null
          average_directional_index_9d?: number | null
          average_true_range_14d?: number | null
          average_true_range_20d?: number | null
          average_true_range_50d?: number | null
          average_true_range_9d?: number | null
          avg_implied_volatility_1m?: number | null
          avg_implied_volatility_5d?: number | null
          avg_volume_100d?: number | null
          avg_volume_10d?: number | null
          avg_volume_150d?: number | null
          avg_volume_200d?: number | null
          avg_volume_20d?: number | null
          avg_volume_50d?: number | null
          avg_volume_5d?: number | null
          bollinger_band_position_percent?: number | null
          bollinger_band_rank?: string | null
          bollinger_bands_20d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          bollinger_bands_direction_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          bollinger_bands_strength_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          call_open_interest_1m?: number | null
          call_open_interest_5d?: number | null
          call_volume_1m?: number | null
          call_volume_5d?: number | null
          cci_strength_40d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          created_at?: string
          created_at_short?: string | null
          debt_equity_ratio?: number | null
          earnings_estimate_1q_ago?: number | null
          earnings_estimate_2q_ago?: number | null
          ema_slope_percent_change_10d?: number | null
          ema_slope_percent_change_20d?: number | null
          ema_slope_percent_change_5d?: number | null
          exponential_macd_12d_26d_9d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          exponential_macd_strength_12d_26d_9d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          exponential_moving_average_10d?: number | null
          exponential_moving_average_5d?: number | null
          exponential_moving_average_crossover_9d_18d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          fibonacci_38_2_level?: number | null
          fibonacci_50_level?: number | null
          fibonacci_61_8_level?: number | null
          first_resistance_point?: number | null
          first_support_point?: number | null
          float_percentage?: number | null
          gap_down?: number | null
          gap_up?: number | null
          high_price_1m?: number | null
          high_price_3m?: number | null
          high_price_5d?: number | null
          high_price_6m?: number | null
          high_target_price?: number | null
          historic_volatility_100d?: number | null
          historic_volatility_14d?: number | null
          historic_volatility_20d?: number | null
          historic_volatility_50d?: number | null
          historic_volatility_9d?: number | null
          implied_volatility?: number | null
          implied_volatility_change_1d?: number | null
          implied_volatility_change_1m?: number | null
          implied_volatility_change_5d?: number | null
          implied_volatility_rank?: number | null
          implied_volatility_rank_5d?: number | null
          insider_shareholders_percentage?: number | null
          institutional_shareholders_percentage?: number | null
          last_price?: number | null
          low_price_1m?: number | null
          low_price_3m?: number | null
          low_price_5d?: number | null
          low_price_6m?: number | null
          low_target_price?: number | null
          macd_oscillator_100d?: number | null
          macd_oscillator_14d?: number | null
          macd_oscillator_20d?: number | null
          macd_oscillator_50d?: number | null
          macd_oscillator_9d?: number | null
          mean_target_price?: number | null
          metrics_id?: string
          minus_directional_index_14d?: number | null
          minus_directional_index_9d?: number | null
          moving_average_100d?: number | null
          moving_average_10d?: number | null
          moving_average_200d?: number | null
          moving_average_20d?: number | null
          moving_average_50d?: number | null
          moving_average_52w?: number | null
          moving_average_5d?: number | null
          moving_average_cross_9d_18d?: number | null
          moving_average_crossover_20d_100d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_20d_50d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_9d_18d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_direction_20d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_direction_20d_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_50d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_direction_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          number_of_analysts?: number | null
          number_of_highs_52w?: number | null
          number_of_lows_52w?: number | null
          open_interest_percent_change_1m?: number | null
          open_interest_percent_change_5d?: number | null
          open_price?: number | null
          open_price_2d_ago?: number | null
          open_price_3d_ago?: number | null
          open_price_4d_ago?: number | null
          parabolic_direction_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_strength_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_time_price_50d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          percent_above_below_avg_20d?: number | null
          percent_above_below_avg_50d?: number | null
          percent_above_below_avg_5d?: number | null
          percent_change?: number | null
          percent_change_10d?: number | null
          percent_change_2d_ago?: number | null
          percent_change_3d_ago?: number | null
          percent_change_4d_ago?: number | null
          percent_change_5d?: number | null
          percent_from_moving_average_52w?: number | null
          performance_vs_market_5d?: number | null
          pivot_point?: number | null
          plus_directional_index_14d?: number | null
          plus_directional_index_9d?: number | null
          previous_open_price?: number | null
          previous_percent_change?: number | null
          previous_volume?: number | null
          price_earnings_ratio_ttm?: number | null
          price_one_standard_deviation?: number | null
          price_two_standard_deviations?: number | null
          price_volume?: number | null
          put_call_open_interest_ratio?: number | null
          put_call_open_interest_ratio_1m?: number | null
          put_call_open_interest_ratio_5d?: number | null
          put_call_volume_ratio?: number | null
          put_call_volume_ratio_5d?: number | null
          put_open_interest_1m?: number | null
          put_open_interest_5d?: number | null
          put_volume_1m?: number | null
          put_volume_5d?: number | null
          raw_stochastic_14d?: number | null
          raw_stochastic_20d?: number | null
          raw_stochastic_9d?: number | null
          relative_strength_14d?: number | null
          relative_strength_20d?: number | null
          relative_strength_5d?: number | null
          relative_strength_9d?: number | null
          relative_strength_index_2d?: number | null
          relative_volume_ratio_20d?: number | null
          relative_volume_ratio_5d?: number | null
          report_type: Database["public"]["Enums"]["report_type_enum"]
          reported_earnings_1q_ago?: number | null
          reported_earnings_2q_ago?: number | null
          second_resistance_point?: number | null
          second_support_point?: number | null
          short_volume_ratio?: number | null
          sma_slope_percent_change_20d?: number | null
          sma_slope_percent_change_5d?: number | null
          standard_deviation_move?: number | null
          stochastic_d_14d?: number | null
          stochastic_d_20d?: number | null
          stochastic_d_9d?: number | null
          stochastic_k_14d?: number | null
          stochastic_k_20d?: number | null
          stochastic_k_9d?: number | null
          symbol: string
          third_resistance_point?: number | null
          third_support_point?: number | null
          total_call_open_interest?: number | null
          total_call_volume?: number | null
          total_options_open_interest?: number | null
          total_put_open_interest?: number | null
          total_put_volume?: number | null
          total_volume_1m?: number | null
          total_volume_5d?: number | null
          trading_liquidity_percent?: number | null
          ttm_squeeze?:
            | Database["public"]["Enums"]["squeeze_status_enum"]
            | null
          volume?: number | null
          volume_2d_ago?: number | null
          volume_3d_ago?: number | null
          volume_4d_ago?: number | null
          volume_open_interest_ratio?: number | null
          volume_percent_change?: number | null
          weighted_alpha?: number | null
        }
        Update: {
          analyst_rating?: number | null
          annual_dividend_yield?: number | null
          average_daily_range_percent_14d?: number | null
          average_daily_range_percent_9d?: number | null
          average_directional_index_14d?: number | null
          average_directional_index_9d?: number | null
          average_true_range_14d?: number | null
          average_true_range_20d?: number | null
          average_true_range_50d?: number | null
          average_true_range_9d?: number | null
          avg_implied_volatility_1m?: number | null
          avg_implied_volatility_5d?: number | null
          avg_volume_100d?: number | null
          avg_volume_10d?: number | null
          avg_volume_150d?: number | null
          avg_volume_200d?: number | null
          avg_volume_20d?: number | null
          avg_volume_50d?: number | null
          avg_volume_5d?: number | null
          bollinger_band_position_percent?: number | null
          bollinger_band_rank?: string | null
          bollinger_bands_20d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          bollinger_bands_direction_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          bollinger_bands_strength_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          call_open_interest_1m?: number | null
          call_open_interest_5d?: number | null
          call_volume_1m?: number | null
          call_volume_5d?: number | null
          cci_strength_40d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          created_at?: string
          created_at_short?: string | null
          debt_equity_ratio?: number | null
          earnings_estimate_1q_ago?: number | null
          earnings_estimate_2q_ago?: number | null
          ema_slope_percent_change_10d?: number | null
          ema_slope_percent_change_20d?: number | null
          ema_slope_percent_change_5d?: number | null
          exponential_macd_12d_26d_9d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          exponential_macd_strength_12d_26d_9d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          exponential_moving_average_10d?: number | null
          exponential_moving_average_5d?: number | null
          exponential_moving_average_crossover_9d_18d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          fibonacci_38_2_level?: number | null
          fibonacci_50_level?: number | null
          fibonacci_61_8_level?: number | null
          first_resistance_point?: number | null
          first_support_point?: number | null
          float_percentage?: number | null
          gap_down?: number | null
          gap_up?: number | null
          high_price_1m?: number | null
          high_price_3m?: number | null
          high_price_5d?: number | null
          high_price_6m?: number | null
          high_target_price?: number | null
          historic_volatility_100d?: number | null
          historic_volatility_14d?: number | null
          historic_volatility_20d?: number | null
          historic_volatility_50d?: number | null
          historic_volatility_9d?: number | null
          implied_volatility?: number | null
          implied_volatility_change_1d?: number | null
          implied_volatility_change_1m?: number | null
          implied_volatility_change_5d?: number | null
          implied_volatility_rank?: number | null
          implied_volatility_rank_5d?: number | null
          insider_shareholders_percentage?: number | null
          institutional_shareholders_percentage?: number | null
          last_price?: number | null
          low_price_1m?: number | null
          low_price_3m?: number | null
          low_price_5d?: number | null
          low_price_6m?: number | null
          low_target_price?: number | null
          macd_oscillator_100d?: number | null
          macd_oscillator_14d?: number | null
          macd_oscillator_20d?: number | null
          macd_oscillator_50d?: number | null
          macd_oscillator_9d?: number | null
          mean_target_price?: number | null
          metrics_id?: string
          minus_directional_index_14d?: number | null
          minus_directional_index_9d?: number | null
          moving_average_100d?: number | null
          moving_average_10d?: number | null
          moving_average_200d?: number | null
          moving_average_20d?: number | null
          moving_average_50d?: number | null
          moving_average_52w?: number | null
          moving_average_5d?: number | null
          moving_average_cross_9d_18d?: number | null
          moving_average_crossover_20d_100d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_20d_50d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_9d_18d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_direction_20d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_direction_20d_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_50d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_direction_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          number_of_analysts?: number | null
          number_of_highs_52w?: number | null
          number_of_lows_52w?: number | null
          open_interest_percent_change_1m?: number | null
          open_interest_percent_change_5d?: number | null
          open_price?: number | null
          open_price_2d_ago?: number | null
          open_price_3d_ago?: number | null
          open_price_4d_ago?: number | null
          parabolic_direction_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_strength_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_time_price_50d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          percent_above_below_avg_20d?: number | null
          percent_above_below_avg_50d?: number | null
          percent_above_below_avg_5d?: number | null
          percent_change?: number | null
          percent_change_10d?: number | null
          percent_change_2d_ago?: number | null
          percent_change_3d_ago?: number | null
          percent_change_4d_ago?: number | null
          percent_change_5d?: number | null
          percent_from_moving_average_52w?: number | null
          performance_vs_market_5d?: number | null
          pivot_point?: number | null
          plus_directional_index_14d?: number | null
          plus_directional_index_9d?: number | null
          previous_open_price?: number | null
          previous_percent_change?: number | null
          previous_volume?: number | null
          price_earnings_ratio_ttm?: number | null
          price_one_standard_deviation?: number | null
          price_two_standard_deviations?: number | null
          price_volume?: number | null
          put_call_open_interest_ratio?: number | null
          put_call_open_interest_ratio_1m?: number | null
          put_call_open_interest_ratio_5d?: number | null
          put_call_volume_ratio?: number | null
          put_call_volume_ratio_5d?: number | null
          put_open_interest_1m?: number | null
          put_open_interest_5d?: number | null
          put_volume_1m?: number | null
          put_volume_5d?: number | null
          raw_stochastic_14d?: number | null
          raw_stochastic_20d?: number | null
          raw_stochastic_9d?: number | null
          relative_strength_14d?: number | null
          relative_strength_20d?: number | null
          relative_strength_5d?: number | null
          relative_strength_9d?: number | null
          relative_strength_index_2d?: number | null
          relative_volume_ratio_20d?: number | null
          relative_volume_ratio_5d?: number | null
          report_type?: Database["public"]["Enums"]["report_type_enum"]
          reported_earnings_1q_ago?: number | null
          reported_earnings_2q_ago?: number | null
          second_resistance_point?: number | null
          second_support_point?: number | null
          short_volume_ratio?: number | null
          sma_slope_percent_change_20d?: number | null
          sma_slope_percent_change_5d?: number | null
          standard_deviation_move?: number | null
          stochastic_d_14d?: number | null
          stochastic_d_20d?: number | null
          stochastic_d_9d?: number | null
          stochastic_k_14d?: number | null
          stochastic_k_20d?: number | null
          stochastic_k_9d?: number | null
          symbol?: string
          third_resistance_point?: number | null
          third_support_point?: number | null
          total_call_open_interest?: number | null
          total_call_volume?: number | null
          total_options_open_interest?: number | null
          total_put_open_interest?: number | null
          total_put_volume?: number | null
          total_volume_1m?: number | null
          total_volume_5d?: number | null
          trading_liquidity_percent?: number | null
          ttm_squeeze?:
            | Database["public"]["Enums"]["squeeze_status_enum"]
            | null
          volume?: number | null
          volume_2d_ago?: number | null
          volume_3d_ago?: number | null
          volume_4d_ago?: number | null
          volume_open_interest_ratio?: number | null
          volume_percent_change?: number | null
          weighted_alpha?: number | null
        }
        Relationships: []
      }
      "ss-v2": {
        Row: {
          created_at: string
          metrics_id: string | null
          model: string | null
          score: number | null
          score_id: string
          symbol: string | null
        }
        Insert: {
          created_at?: string
          metrics_id?: string | null
          model?: string | null
          score?: number | null
          score_id?: string
          symbol?: string | null
        }
        Update: {
          created_at?: string
          metrics_id?: string | null
          model?: string | null
          score?: number | null
          score_id?: string
          symbol?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ss-v2_metrics_id_fkey"
            columns: ["metrics_id"]
            isOneToOne: false
            referencedRelation: "sm-v2"
            referencedColumns: ["metrics_id"]
          },
        ]
      }
      statements: {
        Row: {
          adb_status: Database["public"]["Enums"]["adb_status"]
          adb_value: number | null
          beginning_balance: number | null
          created_at: string
          document_id: string
          ending_balance: number | null
          id: string
          is_complete: boolean
          is_most_recent: boolean
          meta: Json
          page_end: number
          page_start: number
          period_end: string
          period_start: string
          raw_markdown: string | null
          total_deposits: number | null
          total_withdrawals: number | null
          updated_at: string
        }
        Insert: {
          adb_status?: Database["public"]["Enums"]["adb_status"]
          adb_value?: number | null
          beginning_balance?: number | null
          created_at?: string
          document_id: string
          ending_balance?: number | null
          id?: string
          is_complete?: boolean
          is_most_recent?: boolean
          meta?: Json
          page_end: number
          page_start: number
          period_end: string
          period_start: string
          raw_markdown?: string | null
          total_deposits?: number | null
          total_withdrawals?: number | null
          updated_at?: string
        }
        Update: {
          adb_status?: Database["public"]["Enums"]["adb_status"]
          adb_value?: number | null
          beginning_balance?: number | null
          created_at?: string
          document_id?: string
          ending_balance?: number | null
          id?: string
          is_complete?: boolean
          is_most_recent?: boolean
          meta?: Json
          page_end?: number
          page_start?: number
          period_end?: string
          period_start?: string
          raw_markdown?: string | null
          total_deposits?: number | null
          total_withdrawals?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "statements_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_metrics: {
        Row: {
          analyst_rating: number | null
          annual_dividend_yield: number | null
          average_true_range_14d: number | null
          average_true_range_20d: number | null
          average_true_range_50d: number | null
          avg_implied_volatility_1m: number | null
          avg_implied_volatility_5d: number | null
          avg_volume_100d: number | null
          avg_volume_10d: number | null
          avg_volume_150d: number | null
          avg_volume_200d: number | null
          avg_volume_20d: number | null
          avg_volume_50d: number | null
          avg_volume_5d: number | null
          bollinger_band_position: number | null
          bollinger_band_rank: string | null
          bollinger_bands_20d: Database["public"]["Enums"]["signal_enum"] | null
          bollinger_bands_direction_20d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          bollinger_bands_strength_20d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          call_open_interest_1m: number | null
          call_open_interest_5d: number | null
          call_volume_1m: number | null
          call_volume_5d: number | null
          cci_strength_40d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          created_at: string
          created_at_short: string | null
          debt_equity_ratio: number | null
          earnings_estimate_1q_ago: number | null
          earnings_estimate_2q_ago: number | null
          exponential_macd_12d_26d_9d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          exponential_macd_strength_12d_26d_9d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          exponential_moving_average_crossover_9d_18d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          fibonacci_38_2_level: number | null
          fibonacci_50_level: number | null
          fibonacci_61_8_level: number | null
          first_resistance_point: number | null
          first_support_point: number | null
          float_percentage: number | null
          gap_down: number | null
          gap_up: number | null
          high_price_1m: number | null
          high_price_3m: number | null
          high_price_5d: number | null
          high_price_6m: number | null
          high_target_price: number | null
          historic_volatility_100d: number | null
          historic_volatility_14d: number | null
          historic_volatility_20d: number | null
          historic_volatility_50d: number | null
          historic_volatility_9d: number | null
          implied_volatility: number | null
          implied_volatility_change_1d: number | null
          implied_volatility_change_1m: number | null
          implied_volatility_change_5d: number | null
          implied_volatility_rank: number | null
          implied_volatility_rank_5d: number | null
          insider_shareholders_percentage: number | null
          institutional_shareholders_percentage: number | null
          last_price: number | null
          low_price_1m: number | null
          low_price_3m: number | null
          low_price_5d: number | null
          low_price_6m: number | null
          low_target_price: number | null
          macd_oscillator_100d: number | null
          macd_oscillator_14d: number | null
          macd_oscillator_20d: number | null
          macd_oscillator_50d: number | null
          macd_oscillator_9d: number | null
          mean_target_price: number | null
          metrics_id: string
          minus_directional_index_14d: number | null
          minus_directional_index_9d: number | null
          moving_average_100d: number | null
          moving_average_10d: number | null
          moving_average_200d: number | null
          moving_average_20d: number | null
          moving_average_50d: number | null
          moving_average_52w: number | null
          moving_average_5d: number | null
          moving_average_cross_9d_18d: number | null
          moving_average_crossover_20d_100d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_20d_50d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_9d_18d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_direction_20d_100d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_direction_20d_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_100d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_50d_100d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_direction_20d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_20d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          number_of_analysts: number | null
          number_of_highs_52w: number | null
          number_of_lows_52w: number | null
          open_interest_percent_change_1m: number | null
          open_interest_percent_change_5d: number | null
          open_price: number | null
          open_price_2d_ago: number | null
          open_price_3d_ago: number | null
          open_price_4d_ago: number | null
          parabolic_direction_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_strength_50d:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_time_price_50d:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          percent_change: number | null
          percent_change_10d: number | null
          percent_change_2d_ago: number | null
          percent_change_3d_ago: number | null
          percent_change_4d_ago: number | null
          percent_change_5d: number | null
          percent_from_moving_average_52w: number | null
          pivot_point: number | null
          plus_directional_index_14d: number | null
          plus_directional_index_9d: number | null
          previous_open_price: number | null
          previous_percent_change: number | null
          previous_volume: number | null
          price_earnings_ratio_ttm: number | null
          price_one_standard_deviation: number | null
          price_two_standard_deviations: number | null
          price_volume: number | null
          put_call_open_interest_ratio: number | null
          put_call_open_interest_ratio_1m: number | null
          put_call_open_interest_ratio_5d: number | null
          put_call_volume_ratio: number | null
          put_call_volume_ratio_5d: number | null
          put_open_interest_1m: number | null
          put_open_interest_5d: number | null
          put_volume_1m: number | null
          put_volume_5d: number | null
          raw_stochastic_14d: number | null
          raw_stochastic_20d: number | null
          raw_stochastic_9d: number | null
          relative_strength_14d: number | null
          relative_strength_20d: number | null
          relative_strength_5d: number | null
          relative_strength_9d: number | null
          report_type: Database["public"]["Enums"]["report_type_enum"]
          reported_earnings_1q_ago: number | null
          reported_earnings_2q_ago: number | null
          second_resistance_point: number | null
          second_support_point: number | null
          short_volume_ratio: number | null
          standard_deviation_move: number | null
          stochastic_d_14d: number | null
          stochastic_d_20d: number | null
          stochastic_d_9d: number | null
          stochastic_k_14d: number | null
          stochastic_k_20d: number | null
          stochastic_k_9d: number | null
          symbol: string
          third_resistance_point: number | null
          third_support_point: number | null
          total_call_open_interest: number | null
          total_call_volume: number | null
          total_options_open_interest: number | null
          total_put_open_interest: number | null
          total_put_volume: number | null
          total_volume_1m: number | null
          total_volume_5d: number | null
          trading_liquidity_percent: number | null
          ttm_squeeze: Database["public"]["Enums"]["squeeze_status_enum"] | null
          volume: number | null
          volume_2d_ago: number | null
          volume_3d_ago: number | null
          volume_4d_ago: number | null
          volume_open_interest_ratio: number | null
          volume_percent_change: number | null
          weighted_alpha: number | null
        }
        Insert: {
          analyst_rating?: number | null
          annual_dividend_yield?: number | null
          average_true_range_14d?: number | null
          average_true_range_20d?: number | null
          average_true_range_50d?: number | null
          avg_implied_volatility_1m?: number | null
          avg_implied_volatility_5d?: number | null
          avg_volume_100d?: number | null
          avg_volume_10d?: number | null
          avg_volume_150d?: number | null
          avg_volume_200d?: number | null
          avg_volume_20d?: number | null
          avg_volume_50d?: number | null
          avg_volume_5d?: number | null
          bollinger_band_position?: number | null
          bollinger_band_rank?: string | null
          bollinger_bands_20d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          bollinger_bands_direction_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          bollinger_bands_strength_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          call_open_interest_1m?: number | null
          call_open_interest_5d?: number | null
          call_volume_1m?: number | null
          call_volume_5d?: number | null
          cci_strength_40d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          created_at?: string
          created_at_short?: string | null
          debt_equity_ratio?: number | null
          earnings_estimate_1q_ago?: number | null
          earnings_estimate_2q_ago?: number | null
          exponential_macd_12d_26d_9d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          exponential_macd_strength_12d_26d_9d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          exponential_moving_average_crossover_9d_18d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          fibonacci_38_2_level?: number | null
          fibonacci_50_level?: number | null
          fibonacci_61_8_level?: number | null
          first_resistance_point?: number | null
          first_support_point?: number | null
          float_percentage?: number | null
          gap_down?: number | null
          gap_up?: number | null
          high_price_1m?: number | null
          high_price_3m?: number | null
          high_price_5d?: number | null
          high_price_6m?: number | null
          high_target_price?: number | null
          historic_volatility_100d?: number | null
          historic_volatility_14d?: number | null
          historic_volatility_20d?: number | null
          historic_volatility_50d?: number | null
          historic_volatility_9d?: number | null
          implied_volatility?: number | null
          implied_volatility_change_1d?: number | null
          implied_volatility_change_1m?: number | null
          implied_volatility_change_5d?: number | null
          implied_volatility_rank?: number | null
          implied_volatility_rank_5d?: number | null
          insider_shareholders_percentage?: number | null
          institutional_shareholders_percentage?: number | null
          last_price?: number | null
          low_price_1m?: number | null
          low_price_3m?: number | null
          low_price_5d?: number | null
          low_price_6m?: number | null
          low_target_price?: number | null
          macd_oscillator_100d?: number | null
          macd_oscillator_14d?: number | null
          macd_oscillator_20d?: number | null
          macd_oscillator_50d?: number | null
          macd_oscillator_9d?: number | null
          mean_target_price?: number | null
          metrics_id?: string
          minus_directional_index_14d?: number | null
          minus_directional_index_9d?: number | null
          moving_average_100d?: number | null
          moving_average_10d?: number | null
          moving_average_200d?: number | null
          moving_average_20d?: number | null
          moving_average_50d?: number | null
          moving_average_52w?: number | null
          moving_average_5d?: number | null
          moving_average_cross_9d_18d?: number | null
          moving_average_crossover_20d_100d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_20d_50d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_9d_18d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_direction_20d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_direction_20d_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_50d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_direction_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          number_of_analysts?: number | null
          number_of_highs_52w?: number | null
          number_of_lows_52w?: number | null
          open_interest_percent_change_1m?: number | null
          open_interest_percent_change_5d?: number | null
          open_price?: number | null
          open_price_2d_ago?: number | null
          open_price_3d_ago?: number | null
          open_price_4d_ago?: number | null
          parabolic_direction_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_strength_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_time_price_50d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          percent_change?: number | null
          percent_change_10d?: number | null
          percent_change_2d_ago?: number | null
          percent_change_3d_ago?: number | null
          percent_change_4d_ago?: number | null
          percent_change_5d?: number | null
          percent_from_moving_average_52w?: number | null
          pivot_point?: number | null
          plus_directional_index_14d?: number | null
          plus_directional_index_9d?: number | null
          previous_open_price?: number | null
          previous_percent_change?: number | null
          previous_volume?: number | null
          price_earnings_ratio_ttm?: number | null
          price_one_standard_deviation?: number | null
          price_two_standard_deviations?: number | null
          price_volume?: number | null
          put_call_open_interest_ratio?: number | null
          put_call_open_interest_ratio_1m?: number | null
          put_call_open_interest_ratio_5d?: number | null
          put_call_volume_ratio?: number | null
          put_call_volume_ratio_5d?: number | null
          put_open_interest_1m?: number | null
          put_open_interest_5d?: number | null
          put_volume_1m?: number | null
          put_volume_5d?: number | null
          raw_stochastic_14d?: number | null
          raw_stochastic_20d?: number | null
          raw_stochastic_9d?: number | null
          relative_strength_14d?: number | null
          relative_strength_20d?: number | null
          relative_strength_5d?: number | null
          relative_strength_9d?: number | null
          report_type: Database["public"]["Enums"]["report_type_enum"]
          reported_earnings_1q_ago?: number | null
          reported_earnings_2q_ago?: number | null
          second_resistance_point?: number | null
          second_support_point?: number | null
          short_volume_ratio?: number | null
          standard_deviation_move?: number | null
          stochastic_d_14d?: number | null
          stochastic_d_20d?: number | null
          stochastic_d_9d?: number | null
          stochastic_k_14d?: number | null
          stochastic_k_20d?: number | null
          stochastic_k_9d?: number | null
          symbol: string
          third_resistance_point?: number | null
          third_support_point?: number | null
          total_call_open_interest?: number | null
          total_call_volume?: number | null
          total_options_open_interest?: number | null
          total_put_open_interest?: number | null
          total_put_volume?: number | null
          total_volume_1m?: number | null
          total_volume_5d?: number | null
          trading_liquidity_percent?: number | null
          ttm_squeeze?:
            | Database["public"]["Enums"]["squeeze_status_enum"]
            | null
          volume?: number | null
          volume_2d_ago?: number | null
          volume_3d_ago?: number | null
          volume_4d_ago?: number | null
          volume_open_interest_ratio?: number | null
          volume_percent_change?: number | null
          weighted_alpha?: number | null
        }
        Update: {
          analyst_rating?: number | null
          annual_dividend_yield?: number | null
          average_true_range_14d?: number | null
          average_true_range_20d?: number | null
          average_true_range_50d?: number | null
          avg_implied_volatility_1m?: number | null
          avg_implied_volatility_5d?: number | null
          avg_volume_100d?: number | null
          avg_volume_10d?: number | null
          avg_volume_150d?: number | null
          avg_volume_200d?: number | null
          avg_volume_20d?: number | null
          avg_volume_50d?: number | null
          avg_volume_5d?: number | null
          bollinger_band_position?: number | null
          bollinger_band_rank?: string | null
          bollinger_bands_20d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          bollinger_bands_direction_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          bollinger_bands_strength_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          call_open_interest_1m?: number | null
          call_open_interest_5d?: number | null
          call_volume_1m?: number | null
          call_volume_5d?: number | null
          cci_strength_40d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          created_at?: string
          created_at_short?: string | null
          debt_equity_ratio?: number | null
          earnings_estimate_1q_ago?: number | null
          earnings_estimate_2q_ago?: number | null
          exponential_macd_12d_26d_9d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          exponential_macd_strength_12d_26d_9d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          exponential_moving_average_crossover_9d_18d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          fibonacci_38_2_level?: number | null
          fibonacci_50_level?: number | null
          fibonacci_61_8_level?: number | null
          first_resistance_point?: number | null
          first_support_point?: number | null
          float_percentage?: number | null
          gap_down?: number | null
          gap_up?: number | null
          high_price_1m?: number | null
          high_price_3m?: number | null
          high_price_5d?: number | null
          high_price_6m?: number | null
          high_target_price?: number | null
          historic_volatility_100d?: number | null
          historic_volatility_14d?: number | null
          historic_volatility_20d?: number | null
          historic_volatility_50d?: number | null
          historic_volatility_9d?: number | null
          implied_volatility?: number | null
          implied_volatility_change_1d?: number | null
          implied_volatility_change_1m?: number | null
          implied_volatility_change_5d?: number | null
          implied_volatility_rank?: number | null
          implied_volatility_rank_5d?: number | null
          insider_shareholders_percentage?: number | null
          institutional_shareholders_percentage?: number | null
          last_price?: number | null
          low_price_1m?: number | null
          low_price_3m?: number | null
          low_price_5d?: number | null
          low_price_6m?: number | null
          low_target_price?: number | null
          macd_oscillator_100d?: number | null
          macd_oscillator_14d?: number | null
          macd_oscillator_20d?: number | null
          macd_oscillator_50d?: number | null
          macd_oscillator_9d?: number | null
          mean_target_price?: number | null
          metrics_id?: string
          minus_directional_index_14d?: number | null
          minus_directional_index_9d?: number | null
          moving_average_100d?: number | null
          moving_average_10d?: number | null
          moving_average_200d?: number | null
          moving_average_20d?: number | null
          moving_average_50d?: number | null
          moving_average_52w?: number | null
          moving_average_5d?: number | null
          moving_average_cross_9d_18d?: number | null
          moving_average_crossover_20d_100d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_20d_50d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_9d_18d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          moving_average_crossover_direction_20d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_direction_20d_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_20d_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_crossover_strength_50d_100d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_direction_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_20d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          moving_average_strength_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          number_of_analysts?: number | null
          number_of_highs_52w?: number | null
          number_of_lows_52w?: number | null
          open_interest_percent_change_1m?: number | null
          open_interest_percent_change_5d?: number | null
          open_price?: number | null
          open_price_2d_ago?: number | null
          open_price_3d_ago?: number | null
          open_price_4d_ago?: number | null
          parabolic_direction_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_strength_50d?:
            | Database["public"]["Enums"]["strength_direction_enum"]
            | null
          parabolic_time_price_50d?:
            | Database["public"]["Enums"]["signal_enum"]
            | null
          percent_change?: number | null
          percent_change_10d?: number | null
          percent_change_2d_ago?: number | null
          percent_change_3d_ago?: number | null
          percent_change_4d_ago?: number | null
          percent_change_5d?: number | null
          percent_from_moving_average_52w?: number | null
          pivot_point?: number | null
          plus_directional_index_14d?: number | null
          plus_directional_index_9d?: number | null
          previous_open_price?: number | null
          previous_percent_change?: number | null
          previous_volume?: number | null
          price_earnings_ratio_ttm?: number | null
          price_one_standard_deviation?: number | null
          price_two_standard_deviations?: number | null
          price_volume?: number | null
          put_call_open_interest_ratio?: number | null
          put_call_open_interest_ratio_1m?: number | null
          put_call_open_interest_ratio_5d?: number | null
          put_call_volume_ratio?: number | null
          put_call_volume_ratio_5d?: number | null
          put_open_interest_1m?: number | null
          put_open_interest_5d?: number | null
          put_volume_1m?: number | null
          put_volume_5d?: number | null
          raw_stochastic_14d?: number | null
          raw_stochastic_20d?: number | null
          raw_stochastic_9d?: number | null
          relative_strength_14d?: number | null
          relative_strength_20d?: number | null
          relative_strength_5d?: number | null
          relative_strength_9d?: number | null
          report_type?: Database["public"]["Enums"]["report_type_enum"]
          reported_earnings_1q_ago?: number | null
          reported_earnings_2q_ago?: number | null
          second_resistance_point?: number | null
          second_support_point?: number | null
          short_volume_ratio?: number | null
          standard_deviation_move?: number | null
          stochastic_d_14d?: number | null
          stochastic_d_20d?: number | null
          stochastic_d_9d?: number | null
          stochastic_k_14d?: number | null
          stochastic_k_20d?: number | null
          stochastic_k_9d?: number | null
          symbol?: string
          third_resistance_point?: number | null
          third_support_point?: number | null
          total_call_open_interest?: number | null
          total_call_volume?: number | null
          total_options_open_interest?: number | null
          total_put_open_interest?: number | null
          total_put_volume?: number | null
          total_volume_1m?: number | null
          total_volume_5d?: number | null
          trading_liquidity_percent?: number | null
          ttm_squeeze?:
            | Database["public"]["Enums"]["squeeze_status_enum"]
            | null
          volume?: number | null
          volume_2d_ago?: number | null
          volume_3d_ago?: number | null
          volume_4d_ago?: number | null
          volume_open_interest_ratio?: number | null
          volume_percent_change?: number | null
          weighted_alpha?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_metrics_symbol_fkey"
            columns: ["symbol"]
            isOneToOne: false
            referencedRelation: "master_stock"
            referencedColumns: ["symbol"]
          },
        ]
      }
      stock_scores: {
        Row: {
          anthv1: number | null
          created_at: string | null
          created_at_short: string | null
          geminiv1: number | null
          grok4: number | null
          manus: number | null
          metrics_id: string
          myBro: number | null
          o3pro_new: number | null
          qwen_adapted: number | null
          v1oai: number | null
        }
        Insert: {
          anthv1?: number | null
          created_at?: string | null
          created_at_short?: string | null
          geminiv1?: number | null
          grok4?: number | null
          manus?: number | null
          metrics_id: string
          myBro?: number | null
          o3pro_new?: number | null
          qwen_adapted?: number | null
          v1oai?: number | null
        }
        Update: {
          anthv1?: number | null
          created_at?: string | null
          created_at_short?: string | null
          geminiv1?: number | null
          grok4?: number | null
          manus?: number | null
          metrics_id?: string
          myBro?: number | null
          o3pro_new?: number | null
          qwen_adapted?: number | null
          v1oai?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_scores_metrics_id_fkey"
            columns: ["metrics_id"]
            isOneToOne: true
            referencedRelation: "stock_metrics"
            referencedColumns: ["metrics_id"]
          },
        ]
      }
      temp_stock_updates: {
        Row: {
          options: boolean | null
          symbol: string | null
          weekly_options: boolean | null
        }
        Insert: {
          options?: boolean | null
          symbol?: string | null
          weekly_options?: boolean | null
        }
        Update: {
          options?: boolean | null
          symbol?: string | null
          weekly_options?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      signal_convergence_analysis: {
        Row: {
          agent_count: number | null
          agents: string | null
          avg_confidence: number | null
          batch_id: string | null
          execution_date: string | null
          impact_directions: string | null
          signal_types: string | null
          ticker_symbol: string | null
        }
        Relationships: []
      }
      sm_v2_report_counts: {
        Row: {
          report_date: string | null
          report_type: Database["public"]["Enums"]["report_type_enum"] | null
          row_count: number | null
        }
        Relationships: []
      }
      v_fact_with_pdf: {
        Row: {
          amount: number | null
          chunk_index: number | null
          confidence: number | null
          description: string | null
          fact_date: string | null
          fact_kind: Database["public"]["Enums"]["fact_type"] | null
          financial_chunk_id: number | null
          page_num: number | null
          payload: Json | null
          pdf_chunk_id: number | null
          pdf_content: string | null
          source_pages: number[] | null
          statement_id: string | null
          txn_kind: Database["public"]["Enums"]["txn_type"] | null
          vendor: string | null
        }
        Relationships: [
          {
            foreignKeyName: "financial_chunks_statement_id_fkey"
            columns: ["statement_id"]
            isOneToOne: false
            referencedRelation: "statements"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      add_bank_config: {
        Args: {
          p_aliases: string[]
          p_bank_name: string
          p_config: Json
          p_template?: string
        }
        Returns: string
      }
      decrement_inventory: {
        Args: { qty: number; segment_uuid: string }
        Returns: boolean
      }
      find_bank_config: {
        Args: { input_bank_name: string }
        Returns: {
          bank_id: string
          bank_name: string
          confidence: number
          config: Json
          instructions: string
          match_type: string
          status: string
          suggestions: Json
          verified: boolean
        }[]
      }
      normalize_bank_name: { Args: { input_name: string }; Returns: string }
      search_facts_with_evidence: {
        Args: { in_statement?: string; k?: number; q: string }
        Returns: {
          amount: number
          description: string
          fact_date: string
          fact_distance: number
          fact_kind: Database["public"]["Enums"]["fact_type"]
          financial_chunk_id: number
          page_num: number
          pdf_chunk_id: number
          pdf_excerpt: string
          statement_id: string
          txn_kind: Database["public"]["Enums"]["txn_type"]
          vendor: string
        }[]
      }
      search_financial_chunks: {
        Args: { in_statement?: string; k?: number; q: string }
        Returns: {
          amount: number
          description: string
          distance: number
          fact_date: string
          fact_kind: Database["public"]["Enums"]["fact_type"]
          financial_chunk_id: number
          statement_id: string
          txn_kind: Database["public"]["Enums"]["txn_type"]
          vendor: string
        }[]
      }
      search_financial_chunks_fts: {
        Args: { in_statement?: string; k?: number; q: string }
        Returns: {
          amount: number
          description: string
          fact_date: string
          fact_kind: Database["public"]["Enums"]["fact_type"]
          financial_chunk_id: number
          txn_kind: Database["public"]["Enums"]["txn_type"]
          vendor: string
        }[]
      }
      search_pdf_chunks: {
        Args: {
          in_document?: string
          in_statement?: string
          k?: number
          q: string
        }
        Returns: {
          chunk_index: number
          content: string
          distance: number
          document_id: string
          page_num: number
          pdf_chunk_id: number
          statement_id: string
        }[]
      }
      search_pdf_chunks_fts: {
        Args: { in_statement?: string; k?: number; q: string }
        Returns: {
          chunk_index: number
          content: string
          page_num: number
          pdf_chunk_id: number
        }[]
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
      trigger_manual_scoring: {
        Args: { target_metrics_id?: string }
        Returns: {
          message: string
          result_metrics_id: string
          status: string
        }[]
      }
      update_batch_completion: {
        Args: { batch_uuid: string }
        Returns: undefined
      }
    }
    Enums: {
      adb_status: "EXTRACTED" | "CALCULATED" | "NOT_AVAILABLE"
      fact_type:
        | "summary"
        | "transaction"
        | "daily_balance"
        | "metadata"
        | "derived"
      report_type_enum: "overnight" | "morning" | "midday" | "closing"
      signal_enum: "Buy" | "Sell" | "Hold"
      squeeze_status_enum: "On" | "Long" | "Short"
      strength_direction_enum:
        | "Maximum"
        | "Strongest"
        | "Strong"
        | "Strengthening"
        | "Average"
        | "Steady"
        | "Soft"
        | "Weak"
        | "Weakening"
        | "Weakest"
        | "Minimum"
        | "Bullish"
        | "Bearish"
        | "Rising"
        | "Falling"
        | "unch"
      txn_type: "deposit" | "withdrawal"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      adb_status: ["EXTRACTED", "CALCULATED", "NOT_AVAILABLE"],
      fact_type: [
        "summary",
        "transaction",
        "daily_balance",
        "metadata",
        "derived",
      ],
      report_type_enum: ["overnight", "morning", "midday", "closing"],
      signal_enum: ["Buy", "Sell", "Hold"],
      squeeze_status_enum: ["On", "Long", "Short"],
      strength_direction_enum: [
        "Maximum",
        "Strongest",
        "Strong",
        "Strengthening",
        "Average",
        "Steady",
        "Soft",
        "Weak",
        "Weakening",
        "Weakest",
        "Minimum",
        "Bullish",
        "Bearish",
        "Rising",
        "Falling",
        "unch",
      ],
      txn_type: ["deposit", "withdrawal"],
    },
  },
} as const
