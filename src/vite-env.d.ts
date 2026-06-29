/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Client ID de PayPal (de tu panel de desarrollador). Si no se define, la web
   *  funciona en modo demo. */
  readonly VITE_PAYPAL_CLIENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
